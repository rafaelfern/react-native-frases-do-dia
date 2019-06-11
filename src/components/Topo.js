import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const imgLogo = require('../../img/logo.png');

const props = () => {
    return(
        <View style={styles.areaImg}>
            <Image source={imgLogo} />
        </View>
    );
}

const styles = StyleSheet.create({
    areaImg: {
        marginTop: 20,
        alignItems: 'center'
        
    }
});

export default props;
