import {View, StyleSheet, Text, Modal, Pressable, Image } from 'react-native';

function DetailItemModal(props){
    return (
        <Modal visible={props.visible} animationType={'fade'}>
            <View style={styles.container}>

                <Image style={styles.image} source={require('../assets/images/goal.png')}/>

                <Text style={styles.text}>{`Goal: ${props.item.item.text}`}</Text>

                <Pressable style={styles.button} onPress={props.onClose}>
                    <Text style={styles.textButton}>CLOSE</Text>
                </Pressable>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d78117',
    },
    text:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#cd2222',
        width: 100,
        marginTop: 30,
        padding: 10,
        borderRadius: 15,
    },
    textButton:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
    }
});

export default DetailItemModal;