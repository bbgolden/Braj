import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ca4d0b",
                headerStyle: {
                    backgroundColor: "#545454",
                },
                headerShadowVisible: false,
                headerTintColor: "#ca4d0b",
                tabBarStyle: {
                    backgroundColor: "#545454",
                },
            }}
        >
            <Tabs.Screen 
                name="(account)" 
                options={{ 
                    title: "Account",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name={focused ? "account-circle" : "account-circle-outline"} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen 
                name="(log)" 
                options={{
                    title: "Run Log",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "list-circle-sharp" : "list-circle-outline"} color={color} size={24}/>
                    ), 
                }}
            />
            <Tabs.Screen 
                name="run" 
                options={{ 
                    title: "Start Run",
                    tabBarIcon: ({ color, focused })  => (
                        <Ionicons name={focused ? "timer-sharp" : "timer-outline"} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}