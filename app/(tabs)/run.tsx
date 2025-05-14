import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function StartRunScreen() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [run, toggleRun] = useState(false);

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
                { minutes < 10 ? "0" + minutes : minutes }:{ seconds < 10 ? "0" + seconds : seconds} {run}
            </Text>

            <TouchableHighlight onPress={() => toggleRun(!run)}>
                <Text>
                    { run ? "stop" : "start" }
                </Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#545454",
    }
  });