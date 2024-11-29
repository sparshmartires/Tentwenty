// File: src/components/MovieCard.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { palette } from '../theme/palette';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  onPress?: () => void;
}

const UpcomingMovieCard: React.FC<MovieCardProps> = ({ title, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  overlay: {
    position: 'absolute', 
    top: 137, 
    left: 20,
    width: '100%', 
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: palette.white,
  },
});

export default UpcomingMovieCard;
