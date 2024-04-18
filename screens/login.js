import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Platform, Image } from 'react-native';
import { images, COLORS, SIZES, FONTS } from '../constants';
import { useFonts } from 'expo-font';

const Login = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('App');
    };
    const [loaded] = useFonts({
        "CarmenSans-SemiBold" : require('../assets/fonts/CarmenSans-SemiBold.otf'),
        "CarmenSans-Thin" : require('../assets/fonts/CarmenSans-Thin.otf'),
        "CocoGothic-Bold" : require('../assets/fonts/CocoGothic-Bold.ttf'),
        "CocoGothic": require('../assets/fonts/CocoGothic.ttf'),
    })

    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.login}
                style={styles.backgroundImage}
                blurRadius={Platform.OS === 'ios' ? 0.10 : 0.5} // Adjust blurRadius according to your preference
            >
                <View style={styles.overlay}>
                    <View style={styles.card}>
                        <Image source={images.logo} style={styles.logoImage} />
                        <Text style={[styles.logo, {fontWeight: 'bold'}]}>Valueshop.io</Text>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                            placeholderTextColor={COLORS.black}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor={COLORS.black}
                        />
                        <TouchableOpacity style={[styles.loginButton, { height: 50 }]} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,1)', // White background color
        borderRadius: SIZES.radius * 2,
        padding: SIZES.padding * 2,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',  // Add shadow for glass effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,  // Optional elevation for a more prominent 3D effect
    },
    logo: {
        fontSize: 36,
        color: COLORS.black, // Black color for text
        textAlign: 'center',
        marginBottom: SIZES.padding * 2,
    },
    logoImage: {
        width: 100,
        height: 100,
        marginBottom: SIZES.padding, // Add some margin below the image
    },
    input: {
        backgroundColor: 'rgba(90,132,255,0.2)', // Dark background color with transparency
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginBottom: SIZES.base,
        color: COLORS.black,
        width: '100%',
    },
    loginButton: {
        backgroundColor: '#5359D1',
        borderRadius: SIZES.radius,
        padding: 10, // Reduced padding for smaller button height
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        fontSize: 20,  // Reduced font size for smaller button
        color: COLORS.white,
        fontWeight: 'bold', // Bold font weight
    },
});

export default Login;
