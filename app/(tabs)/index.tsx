import { Href, Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <View>
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
