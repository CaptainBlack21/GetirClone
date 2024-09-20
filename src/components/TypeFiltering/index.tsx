import React, { useState } from 'react'
import {  Text, ScrollView, Dimensions, TouchableOpacity } from "react-native"

const { height } = Dimensions.get("window")

const TypeBox = ({ setCat,item, active }: { setCat:any,item: string, active: string }) => {
    return (
        <TouchableOpacity onPress={()=>setCat(item)} style={[{ flexDirection: "row", alignItems: "center", borderRadius: 6, paddingHorizontal: 12, height: height * 0.044, marginRight: 12 }, item == active ? { backgroundColor: "#5c3ecb" } : {borderColor:"#f0eff7",borderWidth:1.3}]}>
            <Text style={[{ fontSize: 12, color: "#7849f7", fontWeight: "600" },item==active && {color:"white"}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {
    const [category, setCategory] = useState<String>("Birlikte İyi Gider")
    return (
        <ScrollView style={{ width: "100%", backgroundColor: "white", height: height * 0.072, flexDirection: "row",paddingVertical:height*0.014,paddingHorizontal:12,borderBottomColor:"lightgray",borderBottomWidth:1}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
                <TypeBox setCat={setCategory} item={item} active={category} />
            ))}
           
        </ScrollView>
    )
}

export default index