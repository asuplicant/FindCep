import axios from 'axios';
import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from '../assets/components/botao/Botao';
import { Card } from '../assets/components/card/Card';
import { Input } from '../assets/components/input/Input';

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);

      } else {
        alert("O cep está incorreto. Digite com 8 números.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Retornar.
  return (
    <>
      {/* 1. Logo + Imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')}
          style={styles.logo}>
        </Image>
      </ImageBackground>

      {/* Campo de consulta. */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>

          {/* Título. */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>

          {/* 2.2. Input */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}>
          </Input>

          {/* 2.3. Botão */}
          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {/* Card de informações */}
          <Card
            cep={jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.estado}
            regiao={jsonCep.regiao}
          />

        </View>
      </ScrollView>

    </>

  );
}

// Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    gap: 40,
    width: '100%',
    minHeight: '100%',
    alignItems: 'center'
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 200,
    height: '100%'
  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  }
})