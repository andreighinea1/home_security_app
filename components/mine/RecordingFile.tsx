import {Box, Button, GluestackUIProvider, Text} from "../core";
import {config} from "../../gluestack-ui.config";
import {styles} from "../../my-styles";

const RecordingFile = (props) => {
    const {url, timestamp, navigation} = props

    return (
        <GluestackUIProvider config={config.theme}>
            <Box display="flex" flexDirection="row" px="$5">
                <Button
                    style={styles.recordingFileButton}
                    // bg="$grayInactiveButton"
                    // sx={{
                    //     ":hover": {
                    //         bg: "$grayContainer",
                    //     },
                    //     ":active": {
                    //         bg: "$grayContainer",
                    //     },
                    // }}

                    onPress={
                    () => {
                        navigation.navigate('VideoPlayer', {url});
                    }
                }>
                    <Button.Text> Intrusion - {timestamp} </Button.Text>
                </Button>
            </Box>
        </GluestackUIProvider>
    );
};

export default RecordingFile;