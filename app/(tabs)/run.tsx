import { StyleSheet, Text, View } from "react-native";

export default function StartRunScreen() {
    return (
        <View style={styles.container}>
            <Text>
                this is text
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#545454",
    }
  });