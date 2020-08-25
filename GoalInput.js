import React, { useState } from 'react';


import { View, StyleSheet, TextInput, Button } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

      //funcion para actualizar el setEnteredGoal textS
  const goalInputHandler = (enteredText) => {
    console.log(enteredGoal + "antes");
    setEnteredGoal(enteredText); //Se actualiza lo que contiene la variable con el texto ingresado
    console.log(enteredGoal + "despues");
  };

  
    return (

        <View style={styles.screen}>
            {/*Se pone el texto default, se le da el style, y con la funcion de onChangeText se llama la funcion para actualizar el texto*/}
            <TextInput
                placeholder="Course Goal"
                style={styles.inputContainer}
                onChangeText={goalInputHandler}
            //Value={enteredGoal}
            >
            </TextInput>

            <Button
                title="Incidentes"
                onPress={ props.onAddGoal.bind(this, enteredGoal)}>
            </Button>

        </View>

    );
};



const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row', //Por default las acomoda en columnas, con esto se logra acomodar en row
        justifyContent: 'space-between',
        alignItems: 'center',
        //flex:1
        //padding: 50
    },
    inputContainer: {
        borderColor: 'black', //Color del borde
        borderWidth: 5, //Grosor del borde
        padding: 10,
        //width: '100%', //Se le da el ancho a la caja de texto
        //flex: 1 //Se puede utilizar para distribuir el espacio que se da entre los objectos
    }
});


export default GoalInput;
