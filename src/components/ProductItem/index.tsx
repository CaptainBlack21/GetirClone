import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import { Product } from "@/src/models";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux';
import * as actions from "../../redux/actions/cartActions"
const { width, height } = Dimensions.get("window")

type productItemProps = {
    item: Product
    addItemToCart:  (a:Product)=>void;
}
function index({ item,addItemToCart }: productItemProps) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("ProductDetails",{product:item})}
            style={{
                width: width * 0.28,
                height: height * 0.25,
                marginTop: 12,
                marginLeft: 12,
                marginBottom: 10
            }}>
            <Image style={{ width: width * 0.28, height: width * 0.28, borderRadius: 12, borderWidth: 0.1, borderColor: "gray" }} source={{ uri: item.image }} />
            <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
                <Text style={{ fontSize: 11.4, color: "#747990", textDecorationLine: "line-through" }}>
                    <Text>{"\u20BA"}</Text>{item.fiyat}
                </Text>
                <Text style={{
                    color: "#5d3ebd",
                    fontWeight: "bold",
                    fontSize: 12,
                    marginLeft: 4
                }}>
                    <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
                </Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
                {item.name}
            </Text>
            <Text style={{ color: "#747990", fontSize: 12, marginTop: 4, fontWeight: "600" }}>{item.miktar}</Text>
            <TouchableOpacity onPress={()=>{addItemToCart(item)}} style={{ width: 30, height: 30, borderWidth: 0.3, borderColor: "lightgrey", backgroundColor: "white", position: "absolute", right: -6, top: -6, borderRadius: 6, alignItems: "center", justifyContent: "center", shadowRadius: 3.8, shadowOpacity: 0.07 }}>
                <Entypo name='plus' size={22} color={"#5d3ebd"}></Entypo>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addItemToCart:(product:Product)=>
            dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(index)