import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

export function Home() {
    const participant = ["Weslley Oliveira", "Gael Oliveira", "Camile Melo", "Renally Kallen", "Karol", "Andre", "Goretti", "Wendell", "Riquelmi", "Milenna", "Henrique"]

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
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participant.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={handleParticipantRemove}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}