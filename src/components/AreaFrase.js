import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AreaFrase = props => {
    return(
        <View style={styles.areaFrase}>
            <Text style={styles.textoEstilo}>{props.frase}</Text>
            <View style={styles.areaAutor}>
                <Text style={styles.autorTexto}>{props.autor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    areaFrase: {
        flex: 1,
        alignItems: 'center'
        //justifyContent: 'center'
        
    },

    textoEstilo: {
        marginTop: 130,
        marginLeft:20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    autorTexto: {
        
    },

    areaAutor: {
        flex:1,
        alignItems: 'flex-end',
        width:250
        
    }
});

export default AreaFrase;
