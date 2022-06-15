// Created by Andrew
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        
        <Text style={{ color: '#fff', fontSize: 30 }}>Hello World!</Text>
      </View>
      <View style={styles.container2}>
        
        <Text>我的第一個React Native程式！！</Text>
        <Text>This is my first React Native！！</Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container1: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  container2: {
    flex: 3,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
