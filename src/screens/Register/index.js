import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (name.trim() == "" || !name) {
      alert("Không được để trống họ và tên !");
    } else if (email.trim() == "" || !email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    } else {
      createAccount();
    }
  };
  const createAccount = async () => {
    let userData = await AsyncStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) => value.email.toLocaleLowerCase() == email.toLocaleLowerCase()
      );
      if (arr.length > 0) {
        alert("Email already registered!");
        return;
      } else {
        userData.push({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        });
      }
    } else {
      userData = [];
      userData.push({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });
    }
    AsyncStorage.setItem("userData", JSON.stringify(userData));
    alert("Đăng ký thành công!");
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 12 }}>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#f4f4f4",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={22}/>
        </TouchableOpacity>
        <Text
          style={{
            color: "#000000",
            fontSize: 25,
            paddingLeft: 20,
            fontWeight: "bold",
          }}
        >
          Đăng Ký
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <MainInput
          title={"Họ và tên"}
          placeholder={"Nhập họ và tên"}
          value={name}
          onChangeText={setName}
        />
        <MainInput
          title={"Email"}
          placeholder={"Nhập email"}
          value={email}
          onChangeText={setemail}
        />
        <MainInput
          placeholder={"Nhập mật khẩu"}
          title={"Mật khẩu"}
          secureTextEntry={true}
          value={password}
          onChangeText={setpassword}
        />

<MainButton
            style={{ marginTop: 12 }}
            title={'Đăng Ký'}
            isSubButton={true}
            onPress={onSignUp}
          />
      </View>
    </View>
  );
}
