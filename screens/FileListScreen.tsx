import React, {useEffect, useState} from 'react';
import {RecordingFile, GluestackUIProvider, VStack} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";
import {API, graphqlOperation, Hub} from 'aws-amplify';
import {listVideos} from '../graphql/queries';
import {GraphQLQuery, GraphQLSubscription} from '@aws-amplify/api';
import {ConnectionState, CONNECTION_STATE_CHANGE} from '@aws-amplify/pubsub';
import {ListVideosQuery, ChangedVideoSubscription} from '../graphql/API';
import {changedVideo} from "../graphql/subscriptions";

export interface IVideo {
    id: string;
    url: string;
    timestamp: string;
}

const FileListScreen = ({route, navigation}) => {
    const [videoList, setVideoList] = useState<IVideo[]>([]);
    let priorConnectionState: ConnectionState;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoData = await API.graphql<GraphQLQuery<ListVideosQuery>>(graphqlOperation(listVideos));
                setVideoList(videoData.data.listVideos);
                console.log(videoData.data);
                if(videoData.data.listVideos !== null) {
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

    return (
        <GluestackUIProvider config={config.theme}>
            <VStack pt="$3" space="md" alignItems="center">
                {
                    videoList?.map(({url, timestamp}) => (
                        <RecordingFile
                            url={url}
                            timestamp={timestamp}
                            navigation={navigation}
                            key={timestamp}
                        />
                    ))
                }
            </VStack>
        </GluestackUIProvider>
    );
};

export default FileListScreen;
