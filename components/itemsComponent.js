import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Task = (props) => {
return(
<View style = {styles.itemFrame}>
  <View style = {styles.insideFrame}>
     <View style = {styles.squareTag}></View>
     <Text style = {styles.textTask}>{props.text}</Text>  
     
  </View>
</View>)
}

const styles = StyleSheet.create({
    itemFrame:{
        backgroundColor: '#FFF',
        padding: 6,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,

    },
    insideFrame:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    textTask:{
        maxWidth: '80%',
        fontSize: 16
    },
    squareTag:{
        backgroundColor: 'black',
        width: 18,
        height:18,
        borderRadius:6,
        opacity: 0.5,
        marginRight: 16
    }
})

export default Task