import {Box, GluestackUIProvider, Text} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";
import {Video, ResizeMode} from 'expo-av';
import {useRef} from "react";

const VideoPlayerScreen = ({route, navigation}) => {
    const {url} = route.params;
    const videoRef = useRef(null);

    const loadingImageURI = 'img/loading.gif';

    return (
        <GluestackUIProvider config={config.theme}>
            <Box flexGrow={1}>
                <Video
                    ref={videoRef}
                    style={styles.video}
                    source={{uri: url}}
                    posterSource={{uri: loadingImageURI}}
                    useNativeControls={true}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping={false}
                    usePoster={true}
                />
                <Box flexGrow={1}>
                </Box>
            </Box>
        </GluestackUIProvider>
    );
};

export default VideoPlayerScreen;