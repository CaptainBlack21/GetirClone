import React from 'react'
import { View, TouchableOpacity, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import { Product } from '@/src/models'

const { width, height } = Dimensions.get("window")

type CardButtonType={
    item:Product;
    addItemToCart:(a:Product)=>void;
    
}

function index({item,addItemToCart}:CardButtonType) {
    return (
        <TouchableOpacity onPress={()=>addItemToCart(item)} style={{ justifyContent: "center", width: "100%", height: height * 0.11, backgroundColor: "white", position: "absolute", bottom: 0 }}>
            <View style={{ width: "90%", height: height * 0.06, marginTop: -2, backgroundColor: '#5D39C1', flexDirection: "row", alignItems: "center", justifyContent: "center", marginHorizontal: "5%", borderRadius: 8 }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Sepete Ekle</Text>
            </View>
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