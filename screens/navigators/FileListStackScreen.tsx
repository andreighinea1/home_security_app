import {createStackNavigator} from '@react-navigation/stack';
import FileListScreen from "../FileListScreen";
import VideoPlayerScreen from "../VideoPlayerScreen";
import {config} from "../../gluestack-ui.config";

const Stack = createStackNavigator();

const FileListStackScreen = () => {

    return (
            <Stack.Navigator
                initialRouteName="FileList"
                screenOptions={{
                    headerMode: 'float',
                    headerTintColor: '#848695',
                    headerStyle: {
                        backgroundColor: config.theme.tokens.colors.blueGrayStandard
                    }
                }}
            >
                <Stack.Screen name="FileList" options={{title: 'File List'}} component={FileListScreen}/>
                <Stack.Screen name="VideoPlayer" options={{title: 'Video'}} component={VideoPlayerScreen}/>
            </Stack.Navigator>
    );
};

export default FileListStackScreen;