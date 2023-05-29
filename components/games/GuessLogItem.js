import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <FontAwesome5 name="dice" size={24} color="green" />
      <Text style={styles.itemText}>Opponent's Guess:{guess}</Text>
    </View>
  );
}
export default GuessLogItem;
const styles = StyleSheet.create({
  listItems: {
    borderColor: Colors.primary800,
    width: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent600,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
