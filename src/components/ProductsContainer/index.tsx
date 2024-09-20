import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";

const { width } = Dimensions.get('window');

function Index() {
    const [product, setProduct] = useState(productsGetir);

    return (
        <View >
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
                {product.slice(0, 2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}

            </View>
            <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>Çubuk</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", backgroundColor: "white", paddingVertical: 10, flex: 1 }}>
                {product.slice(2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </View>
        </View>
    );
}



export default Index;
