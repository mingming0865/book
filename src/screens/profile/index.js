import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image,StyleSheet,TouchableOpacity } from "react-native";
import MainButton from "../../components/MainButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileItem = ({icon, name}) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);

export default function ProfileScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  return (
    <View>
  
          
  <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.bodyContainer}>
          <View style={styles.userContainer}>
            <View style={styles.avatarContainer}>
              <MaterialCommunityIcons name="yin-yang" size={26} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Chào {user && user.name} !!!</Text>
              <TouchableOpacity onPress={logOut}>Đăng xuất</TouchableOpacity>
              
            </View>
            <FontAwesome name="angle-right" size={26} color="#1e88e5" />
          </View>
  
          <View style={styles.divider} />
          <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />

          <View style={styles.divider} />
          <ProfileItem icon="headphones" name="Hỗ trợ" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: 'black',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    //fontWeight: 500,
  },
  
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  
  divider: {
    height: 10,
  },
});
