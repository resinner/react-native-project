import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";


const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [state, setState] = useState(initialState);
  // console.log("isShowKeyboard", isShowKeyboard);

    // console.log("navigation", navigation);

  const onHidePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  const registration = () => {
    Alert.alert(
      "Credentials",`${state.name} + ${state.email} + ${state.password}`
    );
    setIsShowKeyboard(false);
    Keyboard.dismiss;
    console.log(state);
    // console.log(isShowKeyboard);
    setState(initialState);
  };

    const [dimensions, setDimensions] = useState(
      Dimensions.get("window").width - 20 * 2
    );
  
    useEffect(() => {
      const onChangeScreen = () => {
        const width = Dimensions.get("window").width - 20 * 2;
        console.log("width", width);
        setDimensions(width);
      };
      Dimensions.addEventListener("change", onChangeScreen);
      return () => {
        Dimensions.removeEventListener("change", onChangeScreen);
      };
    }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/background.jpg")}
          resizeMode="cover"
        >
          <View style={styles.form}>
            {/* <View>
        <Image
          source={require('../assets/images/123.jpg')}
          resizeMode="cover"
          style={{ width: 40, height: 40 }}
        />
      </View> */}
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.header}>Регистрация</Text>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  inputMode="text"
                  value={state.name}
                  onChangeText={(value) =>
                    setState((prevSatate) => ({ ...prevSatate, name: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  autoComplete="username"
                  maxLength={25}
                  cursorColor={"#FF6C00"}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  inputMode="email"
                  keyboardType="email-address"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevSatate) => ({ ...prevSatate, email: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  autoComplete="email"
                  maxLength={25}
                  cursorColor={"#FF6C00"}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  inputMode="text"
                  secureTextEntry={isHidePassword}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevSatate) => ({
                      ...prevSatate,
                      password: value,
                    }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                  autoComplete="current-password"
                  maxLength={16}
                  cursorColor={"#FF6C00"}
                />
                <TouchableOpacity onPress={onHidePassword}>
                  <Text style={styles.passwordBtnView}>
                    {!isHidePassword ? "Скрыть" : "Показать"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity activeOpacity={0.8} onPress={registration}>
                <View style={styles.registrationBtn}>
                  <Text style={styles.registrationBtnText}>
                    Зарегистрироваться
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginBtnText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>

            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48d1cc",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    justifyContent: "flex-end",
  },
  header: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    marginTop: 32,
    marginBottom: 32,

    color: "#212121",
  },
  input: {
    height: 50,
    borderRadius: 8,
    width: 343,
    padding: 10,
    marginBottom: 16,
    marginHorizontal: 16,

    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  registrationBtn: {
    alignItems: "center",

    marginTop: 43,
    marginBottom: 16,
    marginHorizontal: 16,

    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registrationBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    textAlign: "center",
    padding: 16,
    color: "#FFFFFF",
  },
  loginBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",

    marginBottom: 78,
  },
  passwordBtnView: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    // textAlign: "right",
    // marginRight: 20,
    // position: "absolute",
    // left: 270,
    // top: -50,
    // zIndex: 100,

    color: "#1B4371",
  },
});
