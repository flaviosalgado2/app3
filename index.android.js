import React, { Component } from 'react';

import {
  AppRegistry,
  Button,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {

    //gera numero aleatorio (0,1,2)
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch (numAleatorio) {

      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';

    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou!';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou!';
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Você Ganhou!';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario == 'Papel') {
        resultado = 'Computador Ganhou!';
      }
      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {

    return (
      <View>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="Pedra" onPress={() => { this.jokenpo('Pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Papel" onPress={() => { this.jokenpo('Papel') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura') }} />
          </View>
        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResulado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  palco: {
    marginTop: 10,
    alignItems: 'center'
  },
  txtResulado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  txtJogador: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('app3', () => app3);
