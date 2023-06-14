import {Box, GluestackUIProvider, Text} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {Dimensions} from "react-native";
import {useEffect, useState} from "react";
import {IVideo} from "./FileListScreen";
import {CONNECTION_STATE_CHANGE, ConnectionState} from "@aws-amplify/pubsub";
import {API, graphqlOperation, Hub} from "aws-amplify";
import {GraphQLQuery, GraphQLSubscription} from "@aws-amplify/api";
import {ChangedVideoSubscription, ListVideosQuery} from "../graphql/API";
import {listVideos} from "../graphql/queries";
import {changedVideo} from "../graphql/subscriptions";

const ChartScreen = () => {
    const [videoList, setVideoList] = useState<IVideo[]>([]);
    const [data, setData] = useState({
        labels: ["None"],
        datasets: [
            {
                data: [1],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                // strokeWidth: 2 // optional
            }
        ],
        legend: [""]
    });
    let priorConnectionState: ConnectionState;

    useEffect(() => {
        const modifyData = (newVideoList) => {
            const modifiedData = {
                labels: [],
                datasets: [
                    {
                        data: [],
                        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                        strokeWidth: 2,
                    },
                ],
                legend: ["Video Count"],
            };

            const videoCountByHour = {};

            for (const video of newVideoList) {
                const timestamp = video.timestamp;
                const date = timestamp.slice(0, 10); // Extract date "yyyy mm dd"
                const hour = timestamp.slice(11, 13); // Extract hour "hh"

                const uniqueHour = `${date} ${hour}`;

                if (videoCountByHour[uniqueHour]) {
                    videoCountByHour[uniqueHour] += 1;
                } else {
                    videoCountByHour[uniqueHour] = 1;
                }
            }

            for (const uniqueHour in videoCountByHour) {
                modifiedData.labels.push(uniqueHour);
                modifiedData.datasets[0].data.push(videoCountByHour[uniqueHour]);
            }

            setData(modifiedData);
        };






        const fetchVideos = async () => {
            try {
                const videoData = await API.graphql<GraphQLQuery<ListVideosQuery>>(graphqlOperation(listVideos));
                setVideoList(videoData.data.listVideos);
                modifyData(videoData.data.listVideos);
                console.log(videoData.data);
                if (videoData.data.listVideos !== null) {
                    console.log("Fetched " + videoData.data.listVideos.length + " videos");
                }
            } catch (error) {
                console.error("Error fetching videos", error);
            }
        };

        // fetchVideos();

        Hub.listen('api', (data: any) => {
            const {payload} = data;
            if (payload.event === CONNECTION_STATE_CHANGE) {
                const connectionState = payload.data.connectionState as ConnectionState;
                if (priorConnectionState === ConnectionState.Connecting && connectionState === ConnectionState.Connected) {
                    fetchVideos();
                }
                priorConnectionState = connectionState;
            }
        });

        const videoChangedSubscription = API.graphql<GraphQLSubscription<ChangedVideoSubscription>>(
            graphqlOperation(changedVideo)
        ).subscribe({
            next: (payload) => {
                console.log("This was updated: " + payload);
                const {id} = payload.value.data;
                fetchVideos();
            }
        });

        return () => {
            videoChangedSubscription.unsubscribe();
        }
    }, []);

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2d
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }

    return (
        <GluestackUIProvider config={config.theme}>
            <Box flexGrow={1} alignItems="center">
                <BarChart
                    style={{}}
                    data={data}
                    width={screenWidth}
                    height={screenHeight * 0.75}
                    yAxisLabel=""
                    fromZero={true}
                    chartConfig={chartConfig}
                    verticalLabelRotation={45}
                />
            </Box>
        </GluestackUIProvider>
    );
};

export default ChartScreen;