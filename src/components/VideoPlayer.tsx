import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

interface VideoPlayerProps {
  title: string;
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <WebView
        source={{ uri: videoUrl }}
        allowsFullscreenVideo={true}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  webview: {
    width: Dimensions.get('window').width - 32,
    height: 200,
  },
});

export default VideoPlayer;
