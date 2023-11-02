import { styles } from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Te amo </Text>
      <Text style={styles.eventName}></Text>
      <TextInput 
        style={styles.input}
        placeholder="Participant name's"
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
    </View>
  )
}