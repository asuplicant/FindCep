import { ScrollView, StyleSheet, Text, View } from "react-native";

export const Card = () => {
    return (
        <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.tituloValor}> CEP: </Text>
                <Text style={styles.valor}> Dado 1 </Text>
            </View>
            <View>
                <Text style={styles.tituloValor}> Logradouro: </Text>
                <Text style={styles.valor}> Dado 2 </Text>
            </View>
            <View>
                <Text style={styles.tituloValor}> UF: </Text>
                <Text style={styles.valor}> Dado 3</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}> Estado: </Text>
                <Text style={styles.valor}> Dado 4 </Text>
            </View>
            <View>
                <Text style={styles.tituloValor}> Região: </Text>
                <Text style={styles.valor}> Dado 5 </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        padding: 20,
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: 7,
        gap: 20
        // shadowColor: '#b2b2b2ff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2, // Somente o elevation não funciona em WEB e IOS.
    },
    tituloValor: {
        fontWeight: 600
    }
})