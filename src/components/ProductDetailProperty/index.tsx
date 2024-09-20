import React,{useState} from 'react'
import {View,Text} from "react-native"
import Feather from '@expo/vector-icons/Feather';

function index() {
    const [details,setDetails]=useState<String[]>(
        ["Sütlü Kıtır Çikolata ve Badem Parçacıklarıyla Kaplı Vanilya Lezzeti",
            "İçindekiler","Besin Değerleri","Kullanım","Ek Bilgiler"
        ]
    )

    const TextComponent=({detail,index}:{detail:string,index:number})=>{
        return(
        <View style={{
            paddingVertical:12,
            borderBottomWidth:index==details.length-1 ? 0:0.4,
            borderBottomColor:"lightgray",
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
            <Text style={{
                color:index==0 ? "#4e4e4e":"#687482",
                fontSize:index==0 ? 10.5:13,
                fontWeight:index==0 ? "400":"500"}}>{detail}</Text>
                {index !=0 && <Feather name="chevron-down" size={24} color="#9f9f9f" />}
        </View>
        )
    }
  return (
    <View style={{paddingHorizontal:16,paddingVertical:12,backgroundColor:"white"}}>
        {details.map((item,index)=>(
          <TextComponent key={index} index={index} detail={item}/>
        ))}
    </View>
  )
}

export default index