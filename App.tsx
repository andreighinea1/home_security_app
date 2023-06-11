import {Box, GluestackUIProvider} from "./components";
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import {config} from "./gluestack-ui.config";
import {styles} from "./my-styles";
import {NavigationContainer} from "@react-navigation/native";
import {MainTabScreen} from "./screens";

Amplify.configure(awsExports);

const App = () => {
    return (
        <GluestackUIProvider config={config.theme}>
            <Box style={styles.container}>
                <Box style={styles.contentContainer}>
                    <Box style={styles.screenWrapper}>
                        <NavigationContainer>
                            <MainTabScreen/>
                        </NavigationContainer>
                    </Box>
                </Box>
            </Box>
        </GluestackUIProvider>
    );
}

export default App;