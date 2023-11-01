import { Text, View, StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventName}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#131016",
    padding: 24
  },
  eventName:{
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold"
  }
})