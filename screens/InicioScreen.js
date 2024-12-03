import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importação da biblioteca de ícones

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>
      <Image
        source={require('../assets/splash_image.png')} // Caminho da imagem local
        style={styles.image} // Adicione uma propriedade de estilo se necessário
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sobre')}
        >
          <View style={styles.buttonContent}>
            <Icon name="info-circle" size={20} color="#fff" />
            <Text style={styles.buttonText}>Sobre</Text>
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
    justifyContent: 'flex-start', // Centraliza o conteúdo no topo
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20, // Espaço abaixo do título
    color: '#068BFF',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Posiciona na parte inferior
    flexDirection: 'row', // Alinha os botões lado a lado
    justifyContent: 'space-between',
    width: '80%', // Define a largura da área para os botões
    marginBottom: 40,
  },
  button: {
    flex: 1, // Ocupa o mesmo espaço para cada botão
    marginHorizontal: 10, // Espaço entre os botões
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 5, // Sombra no Android
    alignItems: 'center', // Centraliza o conteúdo dos botões
  },
  buttonContent: {
    flexDirection: 'row', // Alinha o ícone e o texto lado a lado
    alignItems: 'center', // Centraliza verticalmente o ícone e o texto
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10, // Espaço entre o ícone e o texto
  },
});
