import {Box, RecordingFile, GluestackUIProvider, Text, VStack} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";

const FileListScreen = (props) => {
    const {navigation} = props;

    const datetimeList = [
        '2023/05/01 5:00PM',
        '2023/06/10 5:21PM',
        '2023/06/10 7:21PM',
        '2023/06/11 9:21PM',
    ]

    return (
        <GluestackUIProvider config={config.theme}>
            <VStack pt="$3" space="md" alignItems="center">
                {
                    datetimeList.map((datetime) => (
                        <RecordingFile
                            datetime={datetime}
                            navigation={navigation}
                            key={datetime}
                        />
                    ))
                }
            </VStack>
        </GluestackUIProvider>
    );
};

export default FileListScreen;