import React, { useState, useContext } from "react";

import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

import { sendRegisterForm } from "../helpers/todo-service";
import { EMAIL_REGEXP, ON_REGISTER_FORM } from "../helpers/constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useContext(AppContext);

  const onHandlePressRegister = () => {
    setError(null);

    if (EMAIL_REGEXP.test(email)) {
      if (password.length >= 6 && password === confirmPassword) {
        sendRegisterForm({ email, password }).then(({ status }) =>
          status === 201
            ? dispatch({ type: ON_REGISTER_FORM })
            : setError("Incorrect data. Check the data entered.")
        );
      } else {
        return setError("Passwords must match and be longer than 6 characters.");
      }
    } else {
      return setError("Incorrect email.");
    }
  };

  return (
    <View style={{ width: "75%", alignItems: "center" }}>
      <Text style={{ color: "red", fontSize: 18 }}>{error}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        type="email"
        onChange={({ nativeEvent: { text } }) => setEmail(text.trim())}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="password"
        onChange={({ nativeEvent: { text } }) => setPassword(text.trim())}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Password again"
        type="password"
        onChange={({ nativeEvent: { text } }) => setConfirmPassword(text.trim())}
        value={confirmPassword}
      />

      <TouchableOpacity
        onPress={() => onHandlePressRegister()}
        disabled={!email || !password || !confirmPassword}
      >
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "85%",
    borderWidth: 1,
    fontSize: 24,
    padding: "1.2%",
    paddingLeft: 10,
    borderRadius: 20,
    margin: "3%",
  },
  button: {
    marginTop: "6%",
    fontSize: 24,
    backgroundColor: "#799999",
    padding: "2%",
    paddingLeft: "6%",
    paddingRight: "6%",
    borderRadius: 20,
  },
});

export default Register;
