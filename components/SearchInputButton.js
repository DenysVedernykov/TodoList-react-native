import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function SearchInputButton(props) {
    const [text, setText] = useState('');

    function handlerChangeText(text){
        setText(text);
    }

    function handlerButton() {
        setText('');
    }

    useEffect(() => {
        props.onTextChanged(text);
    }, [text]);

    return (
        <View style={{...styles.container, ...props.style}}>

          <TextInput
            value={text}
            onChangeText={handlerChangeText}
            style={styles.input}/>
          
          <Text
            onPress={handlerButton}
            style={styles.button}>{text ? 'X' : props.textButton}</Text>

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

export default SearchInputButton;