import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useAuth from '../../hooks/queries/useAuth';

interface MapHomeScreenProps {}

function MapHomeScreen({}: MapHomeScreenProps) {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView>
      <Text>맵 스크린</Text>
      <Button title='로그아웃' onPress={()=>{logoutMutation.mutate(null)}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MapHomeScreen;
