import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const GoalItem = props => {

    return (
        <View style={styles.listItem}>
            <Text >{props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    listItem: {
        padding: 10,
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 5,
        marginVertical:10  //Margen con los elementos alrededor
    }
});


export default GoalItem;