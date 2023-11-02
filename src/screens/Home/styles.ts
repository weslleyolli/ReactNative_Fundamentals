import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
    },
    input:{
        height: 56,
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 16,
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
    }
  })