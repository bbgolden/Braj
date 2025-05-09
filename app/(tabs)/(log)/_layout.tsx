import { Stack } from "expo-router";

export default function LogLayout() {
    return (
        <Stack>
            <Stack.Screen 
                name="list" 
                options={{
                    title: "Previous Runs",
                }}
            />
            <Stack.Screen 
                name="detail"
                options={{
                    title: "Run Detail",
                }}
            />
        </Stack>
    )
}