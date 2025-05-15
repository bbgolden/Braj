import { Href, Link, Stack } from "expo-router";
import { StyleSheet, View, useWindowDimensions } from "react-native";

export default function NotFoundScreen() {

    const styles = useStyles();

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

const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#545454",
      alignItems: "center",
    },
  });

  return styles;
};