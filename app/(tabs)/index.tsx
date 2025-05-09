import { Href, Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function AccountScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "https://blog.logrocket.com/wp-content/uploads/2023/01/set-border-radius-inner-view-1.png" }}
        style={styles.profilePicture}
      />

      <Text style={styles.header}>
        account name
      </Text>

      <Link href={"/list" as Href}>
        <View style={styles.previewBox}>
          <Text>
            last run box
          </Text>
        </View>
      </Link>

      <Text style={styles.header}>
        Overall Stats
      </Text>

      <View style={styles.statsBox}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#545454",
    alignItems: "center",
  },
  profilePicture: {
    height: deviceHeight / 10,
    width: deviceHeight / 10,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ca4d0b",
  },
  header: {
    fontSize: deviceHeight / 40,
    color: "#ca4d0b",
    fontWeight: "bold",
  },
  previewBox: {
    height: deviceHeight / 4,
    width: deviceWidth * 4 / 5,
    borderWidth: 2,
    borderColor: "#ec690d",
  },
  statsBox: {
    height: deviceHeight / 3,
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  }
});
