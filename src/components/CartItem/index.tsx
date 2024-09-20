import { Product } from '@/src/models'
import { removeFromCart } from '@/src/redux/actions/cartActions'
import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import ProductItem from '../ProductItem'


const { width, height } = Dimensions.get("window")

type CartItemProps = {
    product: Product
    quantity:number
    removeFromCart:(product:Product)=>void
}
function index({ product,quantity,removeFromCart }: CartItemProps) {
    return (
        <View style={{ width: "100%", backgroundColor: "white" }}>
            <View style={{ marginHorizontal: width * 0.04, width: width * 0.92, borderBottomWidth: 0.4, borderBottomColor: "lightgray", height: height * 0.13, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ borderWidth: 0.45, borderColor: "lightgray", borderRadius: 8, padding: 4 }}>
                        <Image style={{ width: height * 0.09, height: height * 0.09 }} source={{ uri: product.image }} />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 13, fontWeight: "600", maxWidth: width * 0.46 }}>{product.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 3, color: "#848897", fontWeight: "600" }}>{product.miktar}</Text>
                        <Text style={{ fontSize: 15, marginTop: 6, color: "#5D3EBD", fontWeight: "bold" }}><Text>{"\u20BA"}</Text>{product.fiyat}</Text>
                    </View>
                </View>
                <View style={{ shadowOpacity: 0.4, shadowColor: "gray", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: width * 0.21, height: height * 0.037, borderColor: "lightgray", borderWidth: 0.5, borderRadius: 10 }}>
                    <TouchableOpacity onPress={()=>removeFromCart(product)} style={{ flex: 1, alignItems: "center" }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#5d3ebd", height: height * 0.037 }}>
                        <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>{quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{ 
        removeFromCart:(product:Product)=>
            dispatch (actions.removeFromCart(product))
    }
}

export default connect(null,mapDispatchToProps)(index)