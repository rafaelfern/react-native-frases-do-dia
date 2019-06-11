import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Topo from './src/components/Topo';
import AreaFrase from './src/components/AreaFrase';
import Botao from './src/components/Botao';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = { frase: '', autor: '' };
    this.geraNovaFrase = this.geraNovaFrase.bind(this);
  }

  geraNovaFrase(){
    let numRandom = Math.random();
    numRandom = Math.floor(numRandom * 5);

    var frases = Array();
    frases[0] = '"Cada átomo é o silêncio do oportuno"';
    frases[1] = '"Somos o que pensamos. Tudo o que somos surge com nossos pensamentos. Com nossos pensamentos, fazemos o nosso mundo."';
    frases[2] = '"Sua tarefa é descobrir o seu trabalho e, então, com todo o coração, dedicar-se a ele."';
    frases[3] = '"É capaz quem pensa que é capaz."';
    frases[4] = '"Você, o seu ser, tanto quanto qualquer pessoa em todo o universo, merece o seu amor e sua afeição."';

    let fraseEscolhida = frases[numRandom];
    
    this.setState({ frase: fraseEscolhida, autor: 'Sidarta Gautama Buddha' });

    //return fraseEscolhida;
  }

  render(){
    return(
      <View style={styles.main}>
        <Topo />
        <AreaFrase frase={this.state.frase} autor={this.state.autor} />
        <Botao geraNovaFrase={this.geraNovaFrase} style={styles.area1}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1
    
  }
   
});
