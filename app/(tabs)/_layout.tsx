import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ca4d0b",
                tabBarStyle: {
                    backgroundColor: "#545454",
                }
            }}
        >
            <Tabs.Screen 
                name="index" 
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
                    headerShown: false,
                    tabBarIcon: ({ color, focused })  => (
                        <Ionicons name={focused ? "timer-sharp" : "timer-outline"} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen 
                name="network" 
                options={{ 
                    title: "Social Media",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "people-sharp" : "people-outline"} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}