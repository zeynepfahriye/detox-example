import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Detox Test Örneği</Text>
            <View style={styles.innerContainer}>
                <View style={{ marginTop: '30%' }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='email bilgisi gir'
                        testID='email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='password bilgisi gir'
                    testID='password'
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginButton} testID='login-button'>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899'
    },
    title: {
        paddingTop: '20%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    innerContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height, marginTop: '40%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    loginButton: {
        alignSelf: 'center',
        marginTop: '5%',
        borderWidth: 1,
        height: 45,
        width: 200,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        borderRadius: 8
    },
    loginText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textInput: {
        marginTop: '5%',
        borderWidth: 2,
        height: 45,
        width: 300,
        borderRadius: 6,
        fontSize: 12,
        fontWeight: '600',
        padding: 10
    }

})