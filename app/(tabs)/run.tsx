import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View, useWindowDimensions } from "react-native";

export default function StartRunScreen() {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [run, toggleRun] = useState(false);
    const [distance, setDistance] = useState(0);
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
            
            <TextInput
                onChangeText={(val) => setDistance(Number(val))}
                keyboardType="numeric"
            />

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
    }
  });

  return styles;
};