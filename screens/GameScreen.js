import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/games/NumbersContainer";
import PrimaryButton from "../components/Ui/PrimaryButton";
import Card from "../components/Ui/Card";
import { Ionicons } from "@expo/vector-icons";
import InstructionText from "../components/Ui/InstructionText";
import GuessLogItem from "../components/games/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie🙂", "You chose wrong direction", [
        {
          text: "Sorry‼",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => {
      return [newRndNumber, ...prevRounds];
    });
  }
  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <View>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              >
                {itemData.item}
              </GuessLogItem>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
