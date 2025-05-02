import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Account" }}/>
            <Tabs.Screen name="log" options={{ title: "Run Log" }}/>
            <Tabs.Screen name="run" options={{ title: "Start Run" }}/>
            <Tabs.Screen name="network" options={{ title: "Social Media "}}/>
        </Tabs>
    );
}