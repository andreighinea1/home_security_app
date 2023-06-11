import {Box, Button, GluestackUIProvider, Text} from "../core";
import {config} from "../../gluestack-ui.config";
import {styles} from "../../my-styles";

const RecordingFile = (props) => {
    const {datetime, navigation} = props

    return (
        <GluestackUIProvider config={config.theme}>
            <Box display="flex" flexDirection="row" px="$5">
                <Button style={styles.recordingFileButton}  onPress={() => navigation.navigate('VideoPlayer')}>
                    <Button.Text> Intrusion - {datetime} </Button.Text>
                </Button>
            </Box>
        </GluestackUIProvider>
    );
};

export default RecordingFile;