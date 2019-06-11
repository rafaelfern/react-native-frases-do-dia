import React, { Component } from 'react';
import { Alert, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Botao = props => {
    return(
        <View style={styles.areaImg}>
            <TouchableOpacity onPress={props.geraNovaFrase} style={styles.botao}>
                <Text style={styles.textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    areaImg: {
        alignItems: 'center',
        
    },

    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 20,
        borderRadius: 5
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default Botao;