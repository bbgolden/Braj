import { Href, Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { getItem, renderTime } from "../../../utils/Storage.js";

export default function AccountScreen() {

  const [totalDistance, setTotalDistance] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const styles = useStyles();

  useFocusEffect(
    useCallback(() => {
      const firstLoad = async () => {
          try {
              const savedTotalDistance = await getItem("total_distance");
              setTotalDistance(savedTotalDistance === null ? 0 : savedTotalDistance);
  
              const savedTotalTime = await getItem("total_time");
              setTotalTime(savedTotalTime === null ? 0 : savedTotalTime);
          } catch(error) {
              console.log(error);
          }
      };
  
      firstLoad();
    }, [])
  );

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: Image.resolveAssetSource(require("../../../assets/images/react-logo.png")).uri }}
        style={styles.profilePicture}
      />

      <Link href={"/info-change" as Href}>
        <Text style={styles.header}>
          { getItem("username") }
        </Text>
      </Link>

      <View style={styles.preview}>


      </View>

      
      <View style={styles.preview}>


      </View>

      <Text style={styles.header}>
        Overall Stats
      </Text>

      <View style={styles.statsBox}>
        <Text style={styles.text}>
          Total Distance: {totalDistance} miles
          </Text>
          <Text style={styles.text}>
          Total Time: {renderTime(totalTime)}
          </Text>
          <Text style={styles.text}>
          Average Speed: { totalDistance / (totalTime / 3600) } miles per hour
          </Text>
          <Text style={styles.text}>
          Average Pace: { renderTime(Math.round(totalTime / totalDistance)) }
        </Text>
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
      marginBottom: 20,
    },
    previewBox: {
      marginHorizontal: 20,
      marginVertical: 20,
      height: height / 4,
      width: width * 4 / 5,
      borderWidth: 2,
      borderColor: "#ec690d",
    },
    preview: {
      marginHorizontal: 20,
      marginVertical: 20,
      height: height / 20,
      width: width * 4 / 5,

    },
    statsBox: {
      height: height / 3,
      width: width,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: height / 50,
        textAlign: 'center',
        color: 'white'
    }
  });

  return styles;
};