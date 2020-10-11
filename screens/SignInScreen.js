import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import Form from "../components/Form";
import * as Yup from "yup";
import { firebase } from "../utils/firebase";

const SignInScreen = ({ navigation }) => {
  const [signInError, setSignInError] = useState("");

  //const handleOnSubmit = (values) => {
  async function handleOnSubmit(values) {
    if (values.confirm) {
      console.log("making new user");
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(function (user) {
          navigation.navigate("ScheduleScreen");
        })
        .catch((error) => {
          setSignInError(error.message);
        });
    } else {
      console.log("signing user in");
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(function (user) {
          navigation.navigate("ScheduleScreen");
        })
        .catch((error) => {
          setSignInError(error.message);
        });
    }
    //console.log("sign in error = ", signInError);
    //if (signInError == "") navigation.navigate("ScheduleScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{ email: "", password: "", confirm: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirm" //was confirmPassword
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button
            title={(values) => (values.confirm == "" ? "Log In" : "Sign Up")}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Confirmation password must match password"
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccccb3",
  },
});

export default SignInScreen;