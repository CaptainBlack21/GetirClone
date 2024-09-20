import React from 'react'
import { View, Text } from 'react-native'

type DetailBoxProps = {
    price: number
    name: string
    quantity: string
}


function index({ price, name, quantity }: DetailBoxProps) {
    return (
        <View style={{ width: "100%", backgroundColor: "white", alignItems: "center" }}>

            <Text  style={{ color:"#5d3ebd",fontWeight:"600",marginTop:12,fontSize:20}}>
                <Text>{"\u20BA "}</Text><Text />{price}
            </Text>

            <Text style={{fontWeight:"600",marginTop:12,fontSize:16}}>
                {name}
            </Text>
            <Text style={{ color:"#848897",fontWeight:"600",marginTop:8,marginBottom:18}}>
                {quantity}
            </Text>


        </View>
    )
}

export default index