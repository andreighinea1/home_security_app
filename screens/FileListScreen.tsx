import React, { useEffect, useState } from 'react';
import {RecordingFile, GluestackUIProvider, VStack} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";
import { GraphQLQuery } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { listVideos } from '../graphql/queries'; // import your query

export interface IVideo {
    url: string;
    timestamp: string;
}

const FileListScreen = ({route, navigation}) => {
    const [videoList, setVideoList] = useState<IVideo[]>([]);

    // const urlTest = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
    // const urlAwsTest = 'https://face-recognized-videos.s3.amazonaws.com/recorded_video_2023_05_24_18_15_30.mp4?AWSAccessKeyId=ASIAXSJYVGNH6GBBOUGT&Signature=TaLFD7TMufKmGu35WxPaAo7O56s%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQCZWiyFaFkP87YXLIWQTDqyDnho1jJqhMvvdWsbFXMBMgIhALT7ivWjUriYTEiTs%2FFxJNRPQTCpYBT2DTLRwI%2FMqs39KoMDCO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTIwMzQ2NzQzNjMxIgy5KnPMfAu%2FNjF5gWQq1wIM6XAhMbBMjz1shFtVKzPSfN20jimW9jXtypMpemdTVs4lZ5z9HxcSxYNFiFwLyofkLfFZ0wIAjLUBbeoKHbWmpK9swtyRUkyUvlP2YKb86%2FC%2FdY%2FTLVygSmaWEGmfyImXMTx%2Bls4syQk0VOA0k2HfTABSJyyXttW%2Fw1CwwhX682LiZL0y5PLaBOhS%2FIk9UQno8G0OvOFTlBh%2FfUAK3UXGA6WuDn9MNX1Dlf%2F6atoE9pWgjU8hViP4JoBY6Zk40IhuG3jTbpgOJTpfg5vVgBYAUWiF%2Bhx%2B1U2F%2F5SiwRJ5OMrIQ9EmDKCXRBrrVEN9zuSL3qRqYjS2dNfMS6OKw5mxIdd9nwPRl%2BdJd8GTH2G3m2jxkmj91760DL5EcI306JTTxp3CstOTTNcqEGmQAayFdDYCod2w2NFTbRJ0Fq3J45giHOJTurK3CVn5%2BlEMyDbBPSYu1iNsMKe%2BoaQGOp0BqRnnKEGznTVBe3t0AfftlhgCAyZZdGZn9Tm%2BCdzMnAoo96pzvEcefm1e7f2ev%2BgiPjIDeBQT%2BwdWgimx1mQgHhXJoAjMjP3uPecf1HA1pgex%2BbwQkqxSq7Bwz4PtfaXJV1eQluUPTZ4hMFE%2F1Kx1k%2BP9T3w890t2ylQ7JIoLTBDlJIXspdHgG4AJUagUcx89T9X%2FzaZAA9NGXAR18Q%3D%3D&Expires=1686662458';

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const videoData = await API.graphql<GraphQLQuery<any>>(graphqlOperation(listVideos));
                setVideoList(videoData.data.listVideos);
                console.log(videoData.data.listVideos.length);
            } catch (error) {
                console.error("Error fetching videos", error);
            }
        };

        fetchVideos();
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