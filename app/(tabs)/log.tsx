import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default function RunLogScreen() {
  
  const styles = useStyles();

  return (
      <View style={styles.container}>
        
   
                  <View style={styles.previewBox}>
                    <Text style={styles.text}>
                      last run box
                    </Text>
                  </View>
              
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
    previewBox: {
      marginHorizontal: 20,
      marginVertical: 20,
      height: height / 4,
      width: width * 4 / 5,
      borderWidth: 2,
      borderColor: "#ec690d",
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