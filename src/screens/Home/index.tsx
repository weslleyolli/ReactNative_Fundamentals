import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

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

            <FlatList
                data={participant}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={handleParticipantRemove}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        No one arrived at the event
                    </Text>
                )}
            />
        </View>
    )
}