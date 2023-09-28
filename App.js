import React, { } from 'react';
import Navigation from './src/Navigation';
import TrackPlayer from 'react-native-track-player';

async function setupPlayer() {
  await TrackPlayer.setupPlayer({});
}

export default function App() {
  setupPlayer();
  return (
    <Navigation />
  )
}
