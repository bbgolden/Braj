import { useEffect, useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { getItem, renderTime } from "../../utils/Storage.js";

export default function RunLogScreen() {
  
  const [lastDistance, setLastDistance] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [lastDate, setLastDate] = useState("");
  const styles = useStyles();

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const savedLastDistance = await getItem("last_distance");
        setLastDistance(savedLastDistance === null ? 0 : savedLastDistance);
    
        const savedLastTime = await getItem("last_time");
        setLastTime(savedLastTime === null ? 0 : savedLastTime);

        const savedLastDate = await getItem("last_date");
        setLastDate(savedLastDate === null ? "" : savedLastDate);
        console.log(lastDate);
      } catch(error) {
        console.log(error);
      }
    };
    
    firstLoad();
  }, []);

  return (
      <View style={styles.container}>
        
   
        <View style={styles.previewBox}>
          <Text style={styles.text}>
            Date - { lastDate }
            </Text>
            <Text style={styles.text}>
            Distance - { lastDistance } miles
            </Text>
             <Text style={styles.text}>
            Time - { renderTime(lastTime) }
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
    previewBox: {
      marginHorizontal: 20,
      marginVertical: 20,
      height: height / 4,
      width: width * 4 / 5,
      borderWidth: 2,
      borderColor: "#ec690d",
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