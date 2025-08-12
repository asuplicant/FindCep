import { StyleSheet, Text, TextInput, View } from "react-native"

export const Input = () => {
    return (
        <View style={StyleSheet.campoInput}>
            <Text style={styles.label}> CEP </Text>
            <TextInput
                placeholder="00000-000"
                style={styles.input}
                maxLength={8}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    campoInput: {
        width: '70%'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        color: '#939393',
        padding: 5,
        outlineStyle: 'none'
    }
})