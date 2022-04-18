import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './components/Movies';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
     <Home />
     <Movies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
