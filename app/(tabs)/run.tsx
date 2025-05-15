import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View, useWindowDimensions } from "react-native";
import { getItem, setItem } from "../../utils/Storage.js";

export default function StartRunScreen() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [run, toggleRun] = useState(false);
    const [distance, setDistance] = useState(0);
    const [totalDistance, setTotalDistance] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const styles = useStyles();
    const router = useRouter();

    const saveTotalDistance = async (newDistance: number) => {
        await setItem("total_distance", totalDistance + newDistance);
    };

    const saveTotalTime = async (newTime: number) => {
        await setItem("total_time", totalTime + newTime);
    };

    const saveLastDistance = async (lastDistance: number) => {
        await setItem("last_distance", lastDistance);
    };

    const saveLastTime = async (lastTime: number) => {
        await setItem("last_time", lastTime);
    };

    const saveLastDate = async (lastDate: String) => {
        await setItem("last_date", lastDate);
    }

    useEffect(() => {
        if(!run) return;

        const updateElapsedTime = () => {
            setMinutes(seconds >= 59 ? minutes + 1 : minutes);
            setSeconds(seconds >= 59 ? 0 : seconds + 1);
        };

        const interval = setInterval(updateElapsedTime, 1000);

        return () => clearInterval(interval);
    }, [run, seconds]);

    useEffect(() => {
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
    }, []);

    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>
                    Distance in Miles:
                </Text>
            <View style={styles.textInput}>
            <TextInput
                onChangeText={(val) => setDistance(Number(val))}
                keyboardType="numeric"
            />
            </View>

            <Text style={styles.text}>
                { minutes < 10 ? "0" + minutes : minutes }:{ seconds < 10 ? "0" + seconds : seconds}
            </Text>

            <TouchableHighlight onPress={() => toggleRun(!run)}>
                <View style={styles.button}>
                    <Text>
                        { run ? "Stop" : "Start" }
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight 
                onPress={() => {
                    saveLastDistance(distance);
                    saveLastTime(minutes * 60 + seconds);
                    saveLastDate("" + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear());
                    saveTotalDistance(distance);
                    saveTotalTime(minutes * 60 + seconds);
                    setSeconds(0);
                    setMinutes(0);
                    router.push("/");
                }}
            >  
                <Text style={styles.text}>
                    Submit
                </Text>
            </TouchableHighlight>

        </View>
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
    button: {
        backgroundColor: "#ec690d",
        height: height / 15,
        width: 2 * width / 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17,
        borderWidth: 3,
        borderColor: 'blue',
        marginTop: height/50
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: height / 50,
        textAlign: 'center',
        color: 'white'
    },
    textInput: {
        height: height / 15,
        width: 8 * width / 10,
        borderWidth: 3,
        marginTop: 10
    },
  });

  return styles;
};