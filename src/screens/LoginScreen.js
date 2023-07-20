import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/actions/authActions";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "../components/styles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    if (!user) {
      Alert.alert("User not found", "Please sign up before logging in.");
      return;
    }
    if (username === user.username && password === user.password) {
      dispatch(loginSuccess(user));
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Invalid credentials",
        "Please enter valid username and password."
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
