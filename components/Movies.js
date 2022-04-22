import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL, getImagePath } from "../api";
import MovieDetails from "./MovieDetails";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState();
  useEffect(() => {
    fetch(API_URL)
      .then((x) => x.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(movieSelected);
  const MovieCard = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        onPress={() => setMovieSelected(item)}
      >
        <Image
          resizeMode="cover"
          source={{ uri: getImagePath(item.poster_path) }}
          style={styles.image}
        />

        <Text style={styles.title}>{item.original_title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={MovieCard}
      />
    {movieSelected && (
      <>
      <Text style={styles.selectedMovieTitle}>Details</Text>
      <MovieDetails movie={movieSelected} />
      </>
    )}
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 200,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "#000",
    width: 180,
  },
  selectedMovieTitle:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:10,

  }
});
