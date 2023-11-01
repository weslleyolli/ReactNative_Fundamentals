import { styles } from "./styles";
import { Text, View, TextInput } from "react-native";

export function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventName}>Hello World</Text>
      <TextInput 
        style={styles.input}
        placeholder="Participant name's"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  )
}