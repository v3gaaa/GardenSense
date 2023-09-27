import { StatusBar } from 'expo-status-bar'; // import StatusBar. To display top bar with time, battery, etc.
import React from 'react'; // import React
import { StyleSheet, Text, View, TextInput } from 'react-native'; // import StyleSheet, Text, View from react-native

export default function App() { // Main app function
  return (
    <View style={styles.container}>
      <Text stule={styles.text}>Bienvenidos a la Revolucion en la Selección de Talento</Text>
      <Text style={styles.title}>CVIA</Text> 
      <TextInput style={styles.input} placeholder='Haz tu pregunta' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ // Stylesheet. Used to style components
  container: {
    flex: 1,
    backgroundColor: '#5BB7A9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    //Iphone FontFamily
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  text: {
    fontFamily: 'Sans-serif',
    fontSize: 28,
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#92C4BC',
    borderRadius: 10, // Add this line to make the corners round
  },
});
