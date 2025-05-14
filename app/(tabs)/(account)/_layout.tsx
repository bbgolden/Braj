import { Stack } from "expo-router";

export default function AccountLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#545454",
                },
                headerShadowVisible: false,
                headerTintColor: "#ca4d0b",
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Account",
                }}
            />
            <Stack.Screen
                name="info-change"
                options={{
                    title: "Change Account Info",
                }}
            />
        </Stack>
    );
}