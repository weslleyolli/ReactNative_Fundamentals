import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
      paddingTop: 100,
    },
    eventName:{
      color: "#ffffff",
      fontSize: 24,
      fontWeight: "bold"
    },
    subtitle:{
        color: "#808080"
    },
    input:{
        flex: 1,
        height: 56,
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonText:{
        color: "#FFF",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center",
    },
    form:{
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42,
    },
    listEmptyText:{
        color: "#FFF",
        fontSize: 14,
        textAlign: "center",
    }
  })