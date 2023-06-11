import {Box, Text, Button, GluestackUIProvider} from "./components";
import {config} from "./gluestack-ui.config";
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
    return (
        <GluestackUIProvider config={config.theme}>
            <Box bg="$primary500" w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
                <Box bg="$primary500" p="$5">
                    <Text color="white">This is the Box</Text>
                    <Button onPress={() => alert("Clicked!")}>
                        <Button.Text>Click me!</Button.Text>
                    </Button>
                </Box>
            </Box>
        </GluestackUIProvider>
    );
}
