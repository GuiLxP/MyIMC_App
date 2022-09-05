import { ScrollView, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";

export default function Cats() {
  const [resultado, mudarResultado] = useState([]);

  // Endpoint: https://api.thecatapi.com/v1/images/search?limit=10
  // GET
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(async (response) => {
        const data = await response.json();
        mudarResultado(data);
      })
      .catch(() => {
        console.log("deu ruim");
      });
  }, []);

  return (
    <ScrollView style={styles.catsList}>
      {resultado.map((item) => (
        <Image source={{ uri: item.url }} style={{ width: 250, height: 250 }} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  catsList: {
    flex: 1,
    alignSelf: "center",
  },
});
