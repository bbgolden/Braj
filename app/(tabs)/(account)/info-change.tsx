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

            <TextInput
                onChangeText={(val) => setName(val)}
                placeholder={"Enter a new name..."}
            />

            <TouchableHighlight 
                onPress={() => {
                    setItem("username", name);
                    router.back();
                }}
            >
                <Text>
                    submit
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