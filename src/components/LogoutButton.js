import React from "react";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default LogoutButton;
