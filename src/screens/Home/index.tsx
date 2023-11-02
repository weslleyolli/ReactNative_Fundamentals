import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export function Home() {
    function handleParticipantAdd() {
        console.log("You click in button")
    }

    function handleParticipantRemove() {
        console.log("You click in button to remove")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Event name
            </Text>
            <Text style={styles.subtitle}>
                Wednesday, 1th november, 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant name's"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>
            <Participant name="Weslley Oliveira" onRemove={handleParticipantRemove} />
            <Participant name="Gael Oliveira"/>
        </View>
    )
}