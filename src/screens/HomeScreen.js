// src/screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import styles from "../components/styles";
import { TouchableOpacity } from "react-native";
const HomeScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.nText}>Welcome, {user.username}!</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.nText}>Please log in or sign up.</Text>
      )}
    </View>
  );
};

export default HomeScreen;
