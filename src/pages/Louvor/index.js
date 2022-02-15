import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Louvor() {
  const navigation = useNavigation()
  function navigateToIgreja() {
    navigation.navigate('Igreja')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem-vindo Ivan Ribeiro</Text>
      <Text style={styles.description}>Ministério de Louvor</Text>
    </View>
  )
}
