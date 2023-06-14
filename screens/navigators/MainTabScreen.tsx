import ChartScreen from "../ChartScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FileListStackScreen from "./FileListStackScreen";
import {config} from "../../gluestack-ui.config";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="FileListStack"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'FileListStack') {
                        // iconName = focused ? 'ios-list-box' : 'ios-list';
                        // iconName = focused ? 'ios-analytics' : 'ios-stats';

                        // iconName = focused ? 'ios-list' : 'ios-analytics';
                        iconName = 'ios-list';
                    } else if (route.name === 'Chart') {
                        // iconName = focused ? 'ios-analytics' : 'ios-list';
                        iconName = 'ios-analytics';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: config.theme.tokens.colors.yellow_icon,
                tabBarInactiveTintColor: config.theme.tokens.colors.grayInactiveButton,
                headerTintColor: '#848695',
                headerStyle: {
                    backgroundColor: config.theme.tokens.colors.white,
                },
            })}
        >
            <Tab.Screen
                name="FileListStack"
                options={{
                    headerShown: false,
                    title: 'File List',
                }}
                component={FileListStackScreen}
            />
            <Tab.Screen name="Chart" component={ChartScreen} />
        </Tab.Navigator>
    );
};

export default MainTabScreen;