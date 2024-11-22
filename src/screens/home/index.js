import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState, } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View,TextInput, StyleSheet,Image } from 'react-native';
import BookItem from '../../components/BookItem';
import data from '../../data/data.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <BookItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
   <ScrollView>

      <StatusBar barStyle="light-content" />
 
      <View style={styles.headerContainer}>  
          <MaterialCommunityIcons name="yin-yang" size={24} color="#969696" />
          Logo
      </View>

      <View style={styles.bodyContainer}>
        <ScrollView>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row' ,marginTop: 20}}>
              <View style={{color: 'black', fontSize: 18, width:100}}> <Image style={{width:50, height: 50}} source={require ('../../../assets/read.png')}/> Sách thiếu nhi</View>
              <View style={{color: 'black',  fontSize: 18, width:100}}> <Image style={{width:50, height: 50}} source={require ('../../../assets/book.png')}/> Sách giáo khoa</View>
              <View style={{color: 'black', fontSize: 18, width:100}}> <Image style={{width:50, height: 50}} source={require ('../../../assets/pencil.png')}/> Văn phòng phẩm</View>
              <View style={{color: 'black',  fontSize: 18, width:100}}> <Image style={{width:50, height: 50}} source={require ('../../../assets/burning.png')}/> Sách Hot</View>
              <View style={{color: 'black',  fontSize: 18, width:100}}> <Image style={{width:50, height: 50}} source={require ('../../../assets/manga.png')}/> Truyện tranh</View>
            </View>
          </ScrollView>
      
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1, flexDirection: 'row' ,marginTop: 20}}>
            <Image style={{width: 340, height: 180, marginLeft: 10}} source={require ('../../../assets/tin58.jpg')}/>
            <Image style={{width: 340, height: 180, marginLeft: 10}} source={require ('../../../assets/can_bang_cam_xuc_ca_luc_bao_giong_sach_den_roi_2.jpg')}/>
            <Image style={{width: 340, height: 180, marginLeft: 10}} source={require ('../../../assets/sach-hay-nen-doc.jpg')}/>
            <Image style={{width: 340, height: 180, marginLeft: 10}} source={require ('../../../assets/son_280121_PNG_WEB_tamlyhoc.png-1.png')}/>
            <Image style={{width: 340, height: 180, marginLeft: 10,marginRight: 11}} source={require ('../../../assets/69.jpg')}/>
            </View>
          </ScrollView>
          
        </ScrollView>
      </View>

      <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Hot</Text>
        <Text style={styles.seeMoreText}>Xem thêm </Text>
      </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Thiếu nhi</Text>
        <Text style={styles.seeMoreText}>Xem thêm </Text>
      </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Tiểu thuyết</Text>
        <Text style={styles.seeMoreText}>Xem thêm </Text>
      </View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },
  inputText: {
    marginLeft:12,
    flex: 1,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
 
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  seeMoreText: {
    color: '#0e45b4',
    fontWeight: "bold",
    fontSize: 12,  
  },

});
