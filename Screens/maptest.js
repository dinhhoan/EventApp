import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('screen');
const parkings =[
 {
    id:1,
    title: 'Event 1',
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10
 },
 {
    id:2,
    title: 'Event 2',
    price: 7,
    rating: 4.2,
    spots: 20,
    free: 10
 },
 {
    id:3,
    title: 'Event 3',
    price: 9,
    rating: 4.2,
    spots: 20,
    free: 10
 },
];

export default class Map extends Component {
    renderHeader(){
        return(
            <View style = {style.header}>
                <Text>Header</Text>
            </View>
        )
    }
    renderparking(item){
        return(
            <View key = {'parking-${item.id}'} style ={style.paking}>
                <Text>{item.title}</Text>
            </View>
        )
    }
    renderparkings(){
        return (
            <ScrollView horizontal contentContainerStyle= {style.pakings}>
                {parkings.map(parking => this.renderparking (parking))}
            </ScrollView>
        )
    }
    render()    {
        return (
            <View style ={style.container}>
                {this.renderHeader()}
                <MapView
                 initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  style ={style.map}
                />
                {this.renderparkings()}
            </View>
        )
    }
}
const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flex : 0.5,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    map:{
        flex : 4,
    },
    parkings:{
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
    },
    parking:{
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
        width: width -(24*2)
    }

})