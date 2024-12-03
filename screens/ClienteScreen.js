import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ClienteScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clientes</Text>
            <Text style={styles.text}>CPF</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe o CPF"
            />
            <Text style={styles.text}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe o nome"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe o email"
            />
            <Text style={styles.text}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe a senha"
            />
            <Text style={styles.text}>Confirme a sua senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirme a sua senha"
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <View style={styles.buttonContent}>
                        <Icon name="home" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Início</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Sobre')}
                >
                    <View style={styles.buttonContent}>
                        <Icon name="info-circle" size={20} color="#fff" />
                        <Text style={styles.buttonText}>Sobre</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#068BFF',
        marginBottom: 20,
    },
    text: {
        marginBottom: 5,
        fontSize: 15,
        textAlign: 'left', // Alinha o texto à esquerda
        width: '100%', // Faz o texto ocupar toda a largura disponível
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 20,
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
