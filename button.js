import React from "react" 
import { View , Text} from "react-native"

export const  parent = ()=> {
const  [message, setMessage] = React.useState('Hello')

const myName = (fn) => {
    // chooseMessage call
    fn()
}
  
return(
    <View>
        <Child myName={myName} setMessage={setMessage} />
        <Text>{message}</Text>
    </View>
)
} 

export const  Child = ({myName, setMessage})=> {
    let myMessage = 'Biplov'
    const chooseMessage= () => {
        setMessage(myMessage)
    }

    return(
        <View>
             <Text onPress={()=> myName(chooseMessage)}>{'change message'}</Text>
        </View>
    )
}