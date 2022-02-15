import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'

export default function Igreja() {
  const navigation = useNavigation()
  function navigateToLogon() {
    navigation.navigate('Logon')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem-vindo Ivan Ribeiro</Text>
      <Text style={styles.description}>
        Batista Livre Acesso iniciou com um sonho dos pastores Lindon Johnson e
        Márcia Ribeiro e hoje é uma realidade. No ano de 2000 com um pequeno
        grupo de pessoas iniciaram um grande projeto que Deus havia mostrado
        para nossos pastores. Reunindo-se nos lares adoravam ao senhor nosso
        Deus. Hoje você pode encontrar um templo da Batista Livre Acesso em
        vários lugares, no Brasil e no Mundo, para Honra e Glória de Nosso
        Senhor e Salvador Jesus Cristo. Em Cristo Jesus, Temos Livre Acesso ao
        Pai...
      </Text>
      <TouchableOpacity style={styles.buttonback} onPress={navigateToLogon}>
        <Ionicons name="arrow-back-circle-sharp" size={60} color="#E02041" />
      </TouchableOpacity>
    </View>
  )
}
