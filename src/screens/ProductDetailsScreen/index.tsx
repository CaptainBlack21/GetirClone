import { Product } from '@/src/models'
import React,{useEffect, useState} from 'react'
import {View,Text, ActivityIndicator,ScrollView} from "react-native"
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import ProductDetailProperty from "../../components/ProductDetailProperty"
import CardButton from "../../components/CardButton"


function index(props) {
  const [product,setProduct]=useState<Product>()
  useEffect(()=>{
    setProduct(props.route.params.product)
  },[])
  if(!product){
    return <ActivityIndicator
    color={"#5d3ebd"}/>
  }
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <ImageCarousel images={product?.images}/>
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}/>
      <Text style={{color:"#808b99",paddingVertical:12,paddingHorizontal:14,fontWeight:"600"}}>Detaylar</Text>
      <ProductDetailProperty/>
    </ScrollView>
    <CardButton item={product}/>
    </View>
  )
}

export default index