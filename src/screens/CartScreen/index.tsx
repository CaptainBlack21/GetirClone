import React,{useState,useEffect} from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import productsGetir from '@/assets/productsGetir'
import CartItem from "../../components/CartItem"
import ProductItem from "../../components/ProductItem"
const { width, height } = Dimensions.get("window")
import { connect } from 'react-redux'
import { Product } from '@/src/models'

function index({cartItems,route}:{route:any,cartItems: {product:Product,quantity:number}[]}) {
  console.log("Hey benim route parametrelerim",route.params)
  const [totalPrice, setTotalPrice] = useState<number>(0) 
  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
         total += item.product.fiyat;
        setTotalPrice(total)
    })
}
useEffect(() => {
    getProductsPrice()
}, [cartItems ])
  return (
    <View style={{flex:1}}>
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        style={{  }}
        data={cartItems}
        renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity} />}
      />
      <Text style={{padding:15,fontWeight:"bold",color:"#5d3ebd"}}>Önerilen Ürünler</Text>
      <ScrollView style={{backgroundColor:"white"}} horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} >
        {productsGetir.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>

    </ScrollView>
    <View style={{ height: height * 0.12, flexDirection: "row", alignItems: "center", paddingHorizontal: "4%" ,position:"absolute",bottom:0,width:"100%",backgroundColor:"#f8f8f8"}}>
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebd",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
          }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Devam Et</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", marginTop: -10, height: height * 0.06, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
          <Text style={{
            color: "#5d3ebd",
            fontWeight: "bold",
            fontSize: 16
          }}>
            <Text >{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  )
}
const mapStateToProps=(state)=>{

  const {cartItems}=state;
  return{
    cartItems:cartItems
  }
}

export default connect(mapStateToProps,null)(index)