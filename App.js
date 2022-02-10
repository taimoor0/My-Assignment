import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
        <Text style={styles.uniName}>Arid Agricultural University</Text>
        <View style={styles.imageBox}>
        <Image 
        source={require('./assets/IMG_20210630_183334.jpg')}
        style={{height:250, width:200,borderRadius:5,}}
        />
        </View>
        <Text style={styles.uniName}>Taimoor Mumtaz</Text>
        <Text style={styles.info}>Reg No:                       19-Arid-1187</Text>
        <Text style={styles.info}>Father Name:             Rana Mumtaz</Text>
        <Text style={styles.info}>CNIC:                    38302-0527738-5</Text>
        <Text style={styles.info}>Adress:          Mianwali Sherman khel Mohla</Text>
        </View>
        
            )
}

            const styles = StyleSheet.create({
         container: {
            backgroundColor: 'white',
            borderWidth:1,
            width:361,
            borderRadius:4,
            marginTop:20,
            marginHorizontal:'auto'
    },
    imageBox:{
        marginHorizontal:'auto',
  
    },
    uniName:{
        fontSize:22,
        marginHorizontal:'auto',
        marginBottom:9,
        marginTop:9,
    },
    info:{
        marginHorizontal:'auto',
        fontSize:15,
        marginBottom:10,
    }
   

})