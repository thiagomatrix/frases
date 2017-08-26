/*
* Plataforma Acadêmica Integrada 
* @autor: Thiago Braga
* @email: thiagomatrix@gmail.com
*/

import React from 'react';

import { Text, View, Button, AppRegistry, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

//import FontAwesome, { Icons } from 'react-native-fontawesome';

const gerar = () => {

  var numeroAleatorio = Math.random();

  numeroAleatorio = Math.floor(numeroAleatorio*10);

  var frase = [];

  frase[0] = 'Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.';
  frase[1] = 'Ser feliz não é viver apenas momentos de alegria. É ter coragem de enfrentar os momentos de tristeza e sabedoria para transformar os problemas em aprendizado.';
  frase[2] = 'Se a caminhada está difícil, é porque você está no caminho certo.';
  frase[3] = 'Ame seus pais, sua vida e seus amigos. Seus pais, porque são únicos. Sua vida, porque é curta demais. Seus amigos, porque são raros';
  frase[4] = 'Chique é ser feliz. Elegante é ser honesto. Bonito é ser caridoso. Sábio é saber ser grato. O resto é inversão de valores.';
  frase[5] = 'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.';
  frase[6] = 'Prefira o sorriso, faz bem a você e aos que estão ao seu redor. Dê risada de tudo, de si mesmo. Não adie alegrias. Seja feliz hoje!';
  frase[7] = 'Quando algo ruim acontece você tem três escolhas: deixar isso definir você, deixar isso destruir você ou fazer isso te deixar mais forte.';
  frase[8] = 'Se eu não mudar o que faço hoje, todos os amanhãs serão iguais a ontem.';
  frase[9] = 'Que o vento leve o necessário e me traga o suficiente.';
  

  frases = frase[numeroAleatorio];

  Alert.alert(frases);
}

const MeuApp = () => {

  return(

  <View style={styles.container} >

 <Text   style={styles.topo} > </Text>

 <Text   style={styles.navbar} > Menu </Text>

 <View style={styles.row} >

    
 
    <Image style={{width: 200, height: 110, margin: 40}} source={require('./img/logo.png')} />
 
    <TouchableHighlight  style={styles.botao}  onPress={ gerar } >

    <Text   style={styles.header} >Nova Frase </Text>
    
    </TouchableHighlight>

 </View>

 <Text   style={styles.footer} > Todos os direitos reservados a PAI - 2018 </Text>


  </View>


  

/*   

<View>
      <TouchableHighlight>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          <FontAwesome>{Icons.chevronLeft}</FontAwesome>
          Text
        </Text>
      </TouchableHighlight>

</View> 

*/


     );
  };



  const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  topo: {

    //flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#7DC529', 
    //alignItems: 'stretch',
    width: 400,

  },

  titulo:{

    fontSize: 40,

  },


  row: {

    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },

  navbar:{

    fontSize: 20,
    //fontStyle:'italic',
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'stretch',
    margin: 0,
    marginBottom: 10,
    backgroundColor: '#57891C', 
    color: '#fff',
    padding: 10,
    width: 400,
    shadowColor: '#000',
    shadowOffset:{ width:0, height: 3 },
    shadowOpacity: 0.4,
    //textDecorationLine: 'underline line-through'

  },

  header: {

    fontSize: 20,
    color: '#fff',
    //fontStyle:'italic',
    fontWeight: '300',
    textAlign: 'center',
  
    //textDecorationLine: 'underline line-through'
  },

  botao:{

    backgroundColor: '#0d5F13', 
    paddingHorizontal: 40,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset:{ width:0, height: 3 },
    shadowOpacity: 0.4,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,

  },

  

  footer: {

    fontSize: 15,
    //fontStyle:'italic',
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'stretch',
    margin: 0,
    //marginBottom: 15,
    backgroundColor: '#57891C', 
    color: '#fff',
    padding: 15,
    width: 400,
    shadowColor: '#000',
    shadowOffset:{ width:0, height: 3 },
    shadowOpacity: 0.4,
    alignItems: 'flex-end',

    //textDecorationLine: 'underline line-through'

  }

});

  


AppRegistry.registerComponent('frases', () => MeuApp );