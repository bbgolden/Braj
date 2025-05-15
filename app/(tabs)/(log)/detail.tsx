import { StyleSheet, View, useWindowDimensions } from "react-native";

export default function RunDetailScreen() {

    const styles = useStyles();

    return (
        <View style={styles.container}>

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