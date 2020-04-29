import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import KeyboardShift from '../components/KeyboardShift'


class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: '',
            translation: '',
            letter: '',
            isVisible: false,
        }
    }

    setMessage(message) {
        var messageCripted = '';
        var output = message.split('');

        output.forEach(letter => {
            messageCripted += this.zenitPolar(letter);
        });

        return messageCripted;
    }

    zenitPolar(letter) {
        letter = letter.toLowerCase();
        switch (letter) {
            case 'z':
                return 'p';
            case 'p':
                return 'z';
            case 'e':
                return 'o';
            case 'o':
                return 'e';
            case 'n':
                return 'l';
            case 'l':
                return 'n';
            case 'i':
                return 'a';
            case 'a':
                return 'i';
            case 't':
                return 'r';
            case 'r':
                return 't';
            default:
                return letter;

        }
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#eee" barStyle='dark-content'/>
                <KeyboardShift>
                <View style={styles.container}>
                    <Modal isVisible={this.state.isVisible} style={styles.modal}
                        useNativeDriver={true} >
                        <StatusBar translucent backgroundColor="transparent" />
                        <View style={{ flex: 1, alignItems: 'center', width: wp('90%'), paddingHorizontal: 10 }}>
                            <View style={{ alignItems: 'flex-end', width: wp('90%') }}>
                                <TouchableOpacity onPress={() => { this.setState({ isVisible: !this.state.isVisible }) }} 
                                    style={{ position: 'absolute', right: wp('1.5%') }}>
                                    <Text style={{ fontSize: 30}}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textMain}>TRADUÇÃO</Text>
                            <ScrollView>
                                <Text style={styles.textRes}>{this.state.translation}</Text>
                            </ScrollView>

                        </View>
                    </Modal>
                    <Text style={styles.textMain}>Tradutor</Text>
                    <Text style={styles.textMain}>Zenit Polar</Text>
                    <TextInput style={styles.textInput} placeholder="Insira o texto a ser criptografado"
                        value={this.state.translate} placeholderTextColor={'black'}
                        onChangeText={translate => { this.setState({ translate }) }} multiline={true} />
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.setState({
                                isVisible: !this.state.isVisible,
                                translation: this.setMessage(this.state.translate), translate: ''
                            })
                        }}>
                        <Text style={styles.buttonText}>Traduzir</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardShift>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: hp('4%'),
        backgroundColor: '#eee',
    },
    textMain: {
        fontSize: wp('15%'),
        //color: '#004D40',
        color: '#bb3b0e',
        fontWeight: "bold",
        textAlign: 'center'
    },
    textInput: {
        width: wp('95%'),
        height: hp('35%'),
        backgroundColor: '#dbd9d9',
        marginTop: hp('5%'),
        padding: wp('2%'),
        borderRadius: wp('3%'),
        textAlignVertical: 'top',
        fontSize: 18,
    },
    button: {
        paddingVertical: hp('2%'),
        width: wp('95%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('3%'),
        // backgroundColor: '#004D40',
        backgroundColor: '#dd7631',
        marginTop: 10,
    },
    buttonText: {
        //fontFamily: Platform.OS === 'ios' ? 'Calistoga Regular' : 'Calistoga-Regular',
        fontSize: hp('4.5%'),
        color: 'white',
    },
    modal: {
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    textRes: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'justify',
        paddingHorizontal: 5,
    }
})

export default main