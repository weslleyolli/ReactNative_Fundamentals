import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import Toast from "react-native-toast-message";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [name, setName] = useState("")

    function handleParticipantAdd() {
        if (participants.includes(name)) {
            return Toast.show({
                position: "bottom",
                type: 'success',
                text1: 'This participant is already 👋'
            });
        }

        setParticipants(prevState => [...prevState, name])
        setName("")
    }

    function handleParticipantRemove(name: string) {
        setParticipants(prevState => prevState.filter(participant => participant !== name))

        Toast.show({
            position: "bottom",
            type: "error",
            text1: `This participant ${name} is deleted 👋`
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Weslley Party
            </Text>
            <Text style={styles.subtitle}>
                Wednesday, 1th november, 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant name's"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setName}
                    value={name}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
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