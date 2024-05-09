import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../component/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../component/CustomButton';
import { validateSignup } from '../../utils';

interface SignUpScreenProps {}

function SignUpScreen({}: SignUpScreenProps) {
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode="email"
          {...signup.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          error={signup.errors.password}
          touched={signup.touched.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          secureTextEntry
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignUpScreen;
