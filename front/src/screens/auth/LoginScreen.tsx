import React,{useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../component/InputField';
import CustomButton from '../../component/CustomButton';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils';


function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus // 페이지 진입시 자동 포커스
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          {...login.getTextInputProps('email')}
          blurOnSubmit = {false}
          returnKeyType = 'next'
          onSubmitEditing={()=>{passwordRef.current?.focus()}}
        />
        <InputField
        ref={passwordRef}
          placeholder="비밀번호"
          secureTextEntry          
          error={login.errors.password}
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
          blurOnSubmit = {false}
          returnKeyType='join'
          onSubmitEditing={handleSubmit}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
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

export default LoginScreen;
