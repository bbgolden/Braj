import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View, useWindowDimensions } from "react-native";

export default function StartRunScreen() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [run, toggleRun] = useState(false);
    const styles = useStyles();

    useEffect(() => {
        if(!run) return;

        const updateElapsedTime = () => {
            setMinutes(seconds >= 59 ? minutes + 1 : minutes);
            setSeconds(seconds >= 59 ? 0 : seconds + 1);
        };

        const interval = setInterval(updateElapsedTime, 1000);

        return () => clearInterval(interval);
    }, [run, seconds]);

    return (
        <View style={styles.container}>
            
            <Text>
                { minutes < 10 ? "0" + minutes : minutes }:{ seconds < 10 ? "0" + seconds : seconds}
            </Text>

            <TouchableHighlight onPress={() => toggleRun(!run)}>
                <Text>
                    { run ? "Stop" : "Start" }
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
  });

  return styles;
};