import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { setItem } from "../../../utils/Storage.js";

export default function InfoChangeScreen() {

    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <View>

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