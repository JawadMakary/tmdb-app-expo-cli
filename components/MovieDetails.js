import { View, Text } from "react-native";
import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <View>
      <Text>{movie?.overview}</Text>
      <View style={{ 
       flexDirection: "row",
       alignItems: "center" 
       
       }}>
        <Text style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingRight: 10

        }}>Release Date :</Text>
        <Text>{movie?.release_date}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
