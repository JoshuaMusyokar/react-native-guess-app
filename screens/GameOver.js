import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/Ui/PrimaryButton";
function GameOver({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Is Over🥳🎊🎉</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.sammaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to Guess the number
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game🎲</PrimaryButton>
    </View>
  );
}
export default GameOver;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  sammaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
