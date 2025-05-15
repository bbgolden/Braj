import { Href, Link } from "expo-router";
import { StyleSheet, View, useWindowDimensions } from "react-native";

export default function RunLogScreen() {
  
  const styles = useStyles();

  return (
      <View style={styles.container}>
        <Link href={"/detail" as Href}>
          go to detail
        </Link>
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
  });

  return styles;
};