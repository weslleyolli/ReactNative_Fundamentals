import { styles } from "./styles";
import { Text, View } from "react-native";

export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventName}>Hello World</Text>
    </View>
  )
}