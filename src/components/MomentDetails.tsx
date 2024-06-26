// MomentDetails.tsx
import React, { ReactNode } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import VideoPlayer from './VideoPlayer';
import { RouteProp } from '@react-navigation/native';
import WebView from 'react-native-webview';

interface Moment {
  description: ReactNode;
  id: string;
  title: string;
  details: string;
  image: any;
  video: any;
}

type RootStackParamList = {
  MomentDetails: { moment: Moment };
};

type MomentDetailsRouteProp = RouteProp<RootStackParamList, 'MomentDetails'>;

type Props = {
  route: MomentDetailsRouteProp;
};

class MomentDetails extends React.Component<Props> {
  render() {
    const { moment } = this.props.route.params;

    return (
      <View style={styles.container}>
      <Image source={{ uri: moment.image }} style={styles.image} />
      <Text style={styles.title}>{moment.title}</Text>
      <Text style={styles.description}>{moment.description}</Text>
      <WebView
        source={{ uri: moment.video }}
        style={{ width: '100%', height: 300 }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
  },
});

export default MomentDetails;
