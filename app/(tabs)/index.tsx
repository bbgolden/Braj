import { Href, Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { getItem } from "../../utils/Storage.js";

export default function AccountScreen() {

  const styles = useStyles();
  const [username] = useState(getItem("username"));

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: Image.resolveAssetSource(require("../../assets/images/react-logo.png")).uri }}
        style={styles.profilePicture}
      />

      <Text style={styles.header}>
        { username }
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

const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#545454",
      alignItems: "center",
    },
    profilePicture: {
      height: height / 10,
      width: height / 10,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: "#ca4d0b",
    },
    header: {
      fontSize: height / 40,
      color: "#ca4d0b",
      fontWeight: "bold",
    },
    previewBox: {
      height: height / 4,
      width: width * 4 / 5,
      borderWidth: 2,
      borderColor: "#ec690d",
    },
    statsBox: {
      height: height / 3,
      width: width,
      alignItems: "center",
      justifyContent: "center",
    }
  });

  return styles;
};