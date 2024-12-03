import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      
      <Text style={styles.text}>Parabéns!!!</Text>
      <Text style={styles.text}>
        Você acabou de desenvolver o seu primeiro conjunto de telas utilizando navegação no React Native
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Inicio')}
        >
          <View style={styles.buttonContent}>
            <Icon name="home" size={20} color="#fff" />
            <Text style={styles.buttonText}>Inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cliente')}
        >
          <View style={styles.buttonContent}>
            <Icon name="user" size={20} color="#fff" />
            <Text style={styles.buttonText}>Cliente</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#068BFF',
    marginBottom: 250,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 5,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
});
