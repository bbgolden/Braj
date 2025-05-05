import { Href, Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Image/>
      <Text>
        username
      </Text>
      <Link href={"/log" as Href }>
        go to log
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
