import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

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

      <View style={{ height: "60%" }}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.button} onPress={clearResult}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("/")}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => calcValue(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, width: "45%" }}
            onPress={generateResult}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    width: "20%",
    height: 50,
    backgroundColor: "#233541",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  textResult: {
    fontSize: 32,
    color: "#FFF",
  },
});
