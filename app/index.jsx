import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Input } from '../assets/components/input/Input';

export default function Index() {
  return (
    <>
      {/* 1. Logo + Imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/LogoFindCEP.png')}
          style={styles.logo}>
        </Image>
      </ImageBackground>

      {/* 2. Campo de consulta */}
      <View style={styles.container} >

        {/* 2.1. Título */}
        <Text style={styles.titulo}> Consulte seu CEP </Text>

        {/* 2.2. Input */}
        <Input />
        {/* 2.3. Botão */}
        {/* 2.4. Card de informações */}
      </View>
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
    flex: 1.5,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo: {
    fontSize: 25,
  }
})