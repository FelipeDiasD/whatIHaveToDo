import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/itemsComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.containerTasks}>

        <Text style = {styles.titleTop}>What I Have to do?</Text>

        <View style = {styles.itensHolder}>

          <Task text = {'Tarefa 1'}/>
          <Task text = {'Olá'}/>
          <Task/>

        </View>

      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  titleTop: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  containerTasks:{
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  itensHolder:{},
  



});
