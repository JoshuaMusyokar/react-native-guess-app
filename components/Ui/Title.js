import { Text, StyleSheet, Dimensions } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;

}
const deviceWidth=Dimensions.get('window').width;
const deviceHieght=Dimensions.get('window').height;
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "teal",
    padding: 12,
    borderRadius: 50,
  },
});
