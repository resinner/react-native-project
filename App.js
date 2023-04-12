import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
// const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// import PostsScreen from "./Screens/PostsScreen";
// import CreatePostsScreen from "./Screens/CreatePostsScreen";
// import ProfileScreen from "./Screens/ProfileScreen";


// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           options={{
//             headerShown: false,
//           }}
//           name="Login"
//           component={LoginScreen}
//         />
//         <AuthStack.Screen
//           options={{
//             headerShown: false,
//           }}
//           name="Register"
//           component={RegistrationScreen}
//         />
//       </AuthStack.Navigator>
//     )
//   }
//     return (
//       <MainTab.Navigator>
//         <MainTab.Screen name="Posts" component={PostsScreen} />
//         <MainTab.Screen name="Create" component={CreatePostsScreen} />
//         <MainTab.Screen name="Profile" component={ProfileScreen} />
//       </MainTab.Navigator>
//     );
//   }


// import { useRoute } from './router';



export default function App() {
// const routing = useRoute(true)

  return (
    <NavigationContainer>


      {/* {routing} */}

      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>

    //   console.log(Platform.OS),
  );
}