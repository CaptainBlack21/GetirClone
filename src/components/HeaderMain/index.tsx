import React from 'react'
import { View, Text, Image } from "react-native";
import styles from './styles';
import Entypo from '@expo/vector-icons/Entypo';
function index() {
    return (
        <View testID='header-main' style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
                <View style={styles.headerOneView}>
                    <Text testID='place-text' style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
                    <Text style={{ fontWeight: "500", fontSize: 12, color: "gray", marginLeft: 6, marginRight: 1 }}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                    <Entypo name="chevron-right" size={22} color="#5D3EBD" />
                </View>
                <View style={styles.headerTwo}>
                    <Text style={{fontSize:10,fontWeight:"bold",color:"#5D3EBD"}}>TVS</Text>
                    <Text style={{fontSize:20,color:"#5D3EBD",fontWeight:"bold"}}>
                        13<Text style={{fontSize:16,color:"#5D3EBD"}}>dk</Text>

                    </Text>
                </View>


            </View>
        </View>
    )
}

export default index