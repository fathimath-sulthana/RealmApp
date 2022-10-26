import { View, Text, SafeAreaView, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import { getAllContacts,addContact,deleteContact} from './Database'

export default function App() {
  const [contact,setcontact] =useState(getAllContacts);
  return(
    <SafeAreaView style={{padding:1}}>
      <View style={{margin:20,width:250}}>
        <Button
        title={"add"}
        onPress={() =>{
          addContact("1","Sulthana","Hassainar","12345678");
          setcontact(getAllContacts)
        }}
        />
       </View>
       <View style={{margin:20,width:250}}>
        <Text>{getAllContacts}</Text>
        <Button
        title={"get"}
        />
       </View>
       <View style={{margin:20,width:250}}>
        <Button
        title={"delete"}
        onPress={() =>{
         deleteContact()
         setcontact(getAllContacts)
        }}
        />
       </View>
    <Text style={{marginTop:10,fontWeight:"bold"}}>Contacts</Text>
    <FlatList
    data={contact}
    keyExtractor={(item,index) => index.toString()}
    renderItem={({item,index}) =>{
      return(
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text>{item.recordID}</Text>
        <Text>{item.givenName}</Text>
        <Text>{item.familyName}</Text>
        <Text>{item.phoneNumber}</Text>
        </View>
      )
    }}
    />
     

    </SafeAreaView>
  )
}
