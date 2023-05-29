import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: Colors.primary800,
  },
});
