import ChartScreen from "../ChartScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FileListStackScreen from "./FileListStackScreen";
import {config} from "../../gluestack-ui.config";

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="FileListStack"
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;
                //
                //     if (route.name === 'Home') {
                //         iconName = focused
                //             ? 'ios-information-circle'
                //             : 'ios-information-circle-outline';
                //     } else if (route.name === 'Settings') {
                //         iconName = focused ? 'ios-list' : 'ios-list-outline';
                //     }
                //
                //     // You can return any component that you like here!
                //     return <Ionicons name={iconName} size={size} color={color} />;
                // },
                tabBarActiveTintColor: config.theme.tokens.colors.primary400,
                tabBarInactiveTintColor: config.theme.tokens.colors.warmGray500,
                headerTintColor: 'white',
                headerStyle: {backgroundColor: config.theme.tokens.colors.primary400},
            })}
        >
            <Tab.Screen
                name="FileListStack"
                options={{
                    headerShown: false,
                    title: 'File List'
                }}
                component={FileListStackScreen}
            />
            <Tab.Screen
                name="Chart"
                component={ChartScreen}
            />
        </Tab.Navigator>
    );
};

export default MainTabScreen;