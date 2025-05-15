import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View, useWindowDimensions } from "react-native";
import { setItem } from "../../../utils/Storage.js";

export default function InfoChangeScreen() {

    const [name, setName] = useState("");
    const router = useRouter();
    const styles = useStyles();

    return (
        <View style={styles.container}>

            <View style ={styles.textInput}>
                <TextInput
                    onChangeText={(val) => setName(val)}
                    value={name}
                />
            </View>

            <View style ={styles.button}>
            <TouchableHighlight 
                onPress={() => {
                    setItem("username", name);
                    router.back();
                }}
            >
                <Text>
                    Submit
                </Text>
            </TouchableHighlight>
                </View>
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
    textInput: {
        height: height / 15,
        width: 8 * width / 10,
        borderWidth: 3,
        marginTop: 10
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
  });

  return styles;
};