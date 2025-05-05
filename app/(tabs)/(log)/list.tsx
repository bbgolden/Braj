import { Href, Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RunLogScreen() {
    return (
        <View style={styles.container}>
          <Link href={"/detail" as Href}>
            go to detail
          </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#545454",
    }
  });