import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function TextInputWithButton(props) {
    const [text, setText] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [textInputStyle, setTextInputStyle] = useState(styles.input);

    function handlerChangeText(text){
        setTextInputStyle(styles.input);
        setText(text);
    }

    function handlerOnBlur(){
        setTextInputStyle(styles.input);
    }

    function handlerButton() {
        setIsPressed(true);

        if(props.onTextChanged) {
            if(text) {
                props.onTextChanged(text);

                if(props.isClear) {
                    setText('');
                }
            }else if(isPressed) {
                setTextInputStyle(styles.inputError);
            }
        }
    }

    return (
        <View style={{...styles.container, ...props.style}}>

          <TextInput
            value={text}
            onBlur={handlerOnBlur}
            onChangeText={handlerChangeText}
            style={textInputStyle}/>
          
          <Text
            onPress={handlerButton}
            style={styles.button}>{props.textButton}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input:{
        borderColor: 'silver',
        borderWidth: 1,
        flex: 5,
        padding: 10,
        backgroundColor: 'silver',
    },
    inputError:{
        borderColor: 'red',
        borderWidth: 1,
        flex: 5,
        padding: 10,
        backgroundColor: 'silver',
    },
    button:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#159d2c',
        backgroundColor: '#159d2c',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
});

export default TextInputWithButton;