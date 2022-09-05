import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button/Button";

const buttons = [
  { label: "AC", type: "AC" },
  { label: "X", type: "" },
  { label: "%", type: "" },
  { label: "/", type: "" },
  { label: "7", type: "" },
  { label: "8", type: "" },
  { label: "9", type: "" },
  { label: "*", type: "" },
  { label: "4", type: "" },
  { label: "5", type: "" },
  { label: "6", type: "" },
  { label: "-", type: "" },
  { label: "1", type: "" },
  { label: "2", type: "" },
  { label: "2", type: "" },
  { label: "3", type: "" },
  { label: "+", type: "" },
  { label: "0", type: "" },
  { label: ".", type: "" },
  { label: "=", type: "" },
];

export default function Calculator() {
  const [result, setResult] = useState("");

  function calcValue(digit) {
    setResult(result + digit);
  }

  function clearResult() {
    setResult("");
  }

  function generateResult() {
    const value = eval(result);
    setResult(value);
  }

  return (
    <View style={styles.container}>
      <View style={{ height: "30%" }}>
        <Text style={styles.textResult}>{result}</Text>
      </View>

      <View style={styles.containerButtons}>
        {buttons.map((button) => (
          <>
            {button.type === "AC" ? (
              <Button label={button.label} onPress={clearResult} />
            ) : (
              <Button
                label={button.label}
                onPress={() => calcValue(button.label)}
              />
            )}
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#233541",
    flex: 1,
    justifyContent: "space-between",
  },

  containerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  button: {
    width: "20%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    margin: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
  },
  textResult: {
    fontSize: 32,
    color: "#FFF",
  },
});
