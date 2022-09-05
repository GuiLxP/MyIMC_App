import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function GitHub() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // forma 1

    fetch("https://api.github.com/users/guilxp/repos")
      .then(async (response) => {
        const data = await response.json();
        setRepositories(data);
      })
      .catch((error) => {
        alert("Desculpe, houve um erro. tente novamente");
        console.log(error); // erro técnico
      });
  }, []);

  return (
    <ScrollView>
      {repositories.map((repository, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.information}>{repository.name}</Text>
          <Text style={styles.information}>{repository.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    width: "90%",
    height: 100,
    margin: 20,
  },
  information: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
