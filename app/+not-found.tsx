import { Href, Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Page Not Found" }}/>
            <View>
                <Link href={"/" as Href}>
                    Go Home
                </Link>
            </View>
        </>
    )
}