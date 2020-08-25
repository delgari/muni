import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'; //Son core functions de ReacNative que se utilizan para desarrollar

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';



const App = () => { //Se crea la funcion principal App
  const [courseGoals, setCourseGoals] = useState([]); //aca se define el array





  //funcion que se llama por el boton para imprimir el output
  const addGoalHandler = goalTitle => {
    //console.log(enteredGoal);
    //Lo que se va a hacer es agregar cada vez que se le da al boton agregar la entrada al array:
    //setCourseGoals([...courseGoals, enteredGoal]); //Con los ...courseGoals se carga lo que esta ahorita en el array y se le agrega el nuevo valor
    setCourseGoals(currentGoals => [...currentGoals,
    {
      id: Math.random().toString(), //Se crea un key value a cada objeto para luego utilizarlo en el .map o loops
      value: goalTitle
    }]); //por medio de esta funcion que se llama current goals se actualiza de una 
    //mejor forma el array
  }


  return (
    <View style={{ padding: 50, borderColor: 'green', borderRightWidth: 10, borderLeftWidth: 10, width: '100%', height: '50%' }}>

      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value}/>} />

    </View >

  );
}


//En React Native no se usa CSS
//Se utiliza Inline Styles y StyleSheet Objects (Written in Javascript) based on CSS syntax but only some properties are supported
const styles = StyleSheet.create({ //Se crean styles objects que pueden ser utilizados para reutilizar codigo

  inputContainer: {
    borderColor: 'black', //Color del borde
    borderWidth: 5, //Grosor del borde
    padding: 10,
    //width: '100%', //Se le da el ancho a la caja de texto
    //flex: 1 //Se puede utilizar para distribuir el espacio que se da entre los objectos
  }

});



//Se exporta la funcion que se creo
export default App;