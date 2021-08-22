import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, FlatList } from "react-native";



const Home = ({navigation}) => {

    const [userName, setUserName] = useState('');
    const [balance, setBalance] = useState(0);

    const [moneyOptions, setMoneyOptions] = useState([
        {
            id: 12,
            label: 'Send',
            ic_url: require('../../assets/icons/profit.png')
        },
        {
            id: 13,
            label: 'Request',
            ic_url: require('../../assets/icons/payment.png')
        },
        {
            id: 14,
            label: 'Cards',
            ic_url: require('../../assets/icons/card-payment.png')
       
        },
        {
            id: 15,
            label: 'ATM',
            ic_url: require('../../assets/icons/atm.png')
        },
        {
            id: 16,
            label: 'Loan',
            ic_url: require('../../assets/icons/loan.png')
        },
    ]);

    const [recentTx, setRecentTx] = useState([
        {
            id: 3784783,
            message: 'Uber ride to CST',
            time: '20/34/2021 18:12:38',
            amount: -349
        },
        {
            id: 347878,
            message: 'Salary credited',
            time: '20/34/2021 18:12:38',
            amount: 45465
        },
        {
            id: 347347,
            message: 'T-Shirt bought on Manish Market',
            time: '20/34/2021 18:12:38',
            amount: -349
        },
    ]);

    useEffect(() => {
        setUserName('Praful');
        setTimeout(() => {
            setBalance('23,458.00');
        }, 2000);
    })


    const renderOptions = ({ item }) => {

        return (
            <View style={{
                marginRight: 15,
                alignItems: 'center',
            }}>
                <View style={{
                    backgroundColor:  '#06547a',
                    padding: 15,
                    borderRadius: 10
                }} >
                    <Image source={item.ic_url} resizeMode="contain" style={{
                        tintColor: '#ffffff',
                        width: 30,
                        height: 30
                    }} />
                </View>
                <Text style={{marginVertical: 10, color:'#ffffff', fontSize: 10}}>{item.label}</Text>
            </View>
        )
    };

    const renderTxn = ({ item }) => {
        return (

            <View style={{ flexDirection: 'row', padding: 10, margiHorizontal: 20,  borderWidth: 1, borderColor: 'white', borderBottomColor: '#eeeeee', }} >
                <View style={{ flex: 1 }}>
                   <Image source={{uri: 'https://static.thenounproject.com/png/3628653-200.png'}} resizeMode="contain" style={{width:30, height: 40}} />
                </View>
                <View style={{ flex: 5 }}>
                    <Text style={{color: '#000', fontSize: 14, marginBottom: 5}}>
                        {item.message} 
                    </Text>
                    <Text style={{color: '#666', fontSize: 10}}>
                        {item.time} 
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{color: item.amount < 0 ? 'red' : 'green', textAlign: 'right', fontWeight: 'bold', marginTop: 10}}>
                        ₹ {item.amount}
                    </Text>
                </View>
            </View>
        )
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="#0e6996" barStyle="light-content" />
            
            <View style={styles.topPane}>
                <View style={{flexDirection: 'row-reverse', marginVertical: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{
                           
                        }} >
                        <Image source={require('../../assets/icons/user.png')} resizeMode="contain" style={{
                            tintColor: '#ffffff',
                            height: 30, width: 30,
                        }} />
                    </TouchableOpacity>
                    <View style={{flex: 5}}>
                        <Text style={{ fontSize: 12, color: 'white', marginBottom: 0}}>Your Balance</Text>
                        <Text style={{ fontSize: 28, color: 'white', }}>₹ {balance}</Text>
                    </View>
                </View>


                <FlatList 
                    data={moneyOptions}
                    renderItem={renderOptions}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsVerticalScrollIndicator ={false}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginVertical: 10
                    }}
                />

            </View>
            

            {/* MAIN CONTAINER  */}
            <View style={{
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                backgroundColor: '#ffffff',
                minHeight: '100%'
            }} >
                
                <View style={{flexDirection: 'column'}}>    
                    <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 20 }}>
                        <TouchableOpacity style={{ flex: 10}} onPress={() => navigation.navigate('Recents')}>
                            <Text style={{fontSize: 16, lineHeight: 30, fontWeight: 'bold',}}>Recent Transactions</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.headerIconButton} onPress={() => console.log('filter pressed')} >
                            <Image source={require('../../assets/icons/filter.png')} resizeMode="contain" style={styles.headerIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerIconButton} onPress={() => console.log('search pressed')} >
                            <Image source={require('../../assets/icons/search.png')} resizeMode="contain" style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* RECENTS */}
                <FlatList
                    data={recentTx}
                    renderItem={renderTxn}
                    keyExtractor={item => item.id} 
                    style={{
                        marginHorizontal: 10
                    }}
                />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0e6996',
    },
    topPane : {
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        paddingBottom: 10,
        paddingHorizontal: 20
    },


    headerIconButton: {
        height: 38,
        backgroundColor: '#ffffff',
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15
    },
    headerIcon: {
        tintColor: '#0e6996', width: 16, height: 16
    }
})

export default Home;