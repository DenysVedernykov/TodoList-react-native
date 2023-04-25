import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainPage from './pages/MainPage';

export default function App() {

  return (
    <>
      <SafeAreaView style={styles.safeArea} hidden={false}>
        <Text></Text>
      </SafeAreaView>
      
      <StatusBar hidden={true}></StatusBar>

      <View style={styles.container}>
        <MainPage/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: '#009fee',
  },
  container: {
    flex: 1,
  },
});
