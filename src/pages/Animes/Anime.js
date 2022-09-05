import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

// https://animechan.vercel.app/api/quotes

export default function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/quotes")
      .then(async (response) => {
        const data = await response.json();
        setAnimes(data);
      })
      .catch(() => {
        alert("Desculpe, tente novamente mais tarde");
      });
  }, []);

  return (
    <ScrollView>
      {animes.map((anime, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.information}>{anime.anime}</Text>
          <Text style={styles.information}>{anime.character}</Text>
          <Text style={styles.information}>{anime.quote}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#13BC92",
    width: "90%",
    minHeight: 100,
    margin: 20,
  },
  information: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
