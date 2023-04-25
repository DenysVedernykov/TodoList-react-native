import { Pressable, StyleSheet, Text, View } from 'react-native';

function TextItem(props){
    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => pressed ? styles.pressedItem : styles.item} onPress={props.onPress}>
                <Text style={styles.text}>{props.item.text}</Text>
                <Text style={styles.deleteButton} onPress={props.onDelete}>X</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f56c23',
    },
    pressedItem: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },
    container:{
        margin: 8,
        borderRadius: 6,
        overflow: 'hidden',
    },
    text:{
        textAlignVertical: 'center',
        color: '#ffffff',
    },
    deleteButton:{
        color: '#ffffff',
        fontWeight: 'bold',
    }
});

export default TextItem;