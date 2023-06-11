import {Box, GluestackUIProvider, Text} from "../components";
import {config} from "../gluestack-ui.config";
import {styles} from "../my-styles";

const ChartScreen = () => {
    return (
        <GluestackUIProvider config={config.theme}>
            <Box>
                <Text color='$amber50'>This is the Chart Screen.</Text>
            </Box>
        </GluestackUIProvider>
    );
};

export default ChartScreen;