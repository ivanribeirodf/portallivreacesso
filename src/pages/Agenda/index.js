import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import logoQRCod from '../../assets/qrcod.png'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Agenda() {
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
        Utilize o CNPJ e faça um PIX. Ou aponte a câmera do seu celular para o
        QR-COD baixo.
      </Text>
      <Image source={logoQRCod} style={{ justifyContent: 'center' }} />

      <Text style={styles.biblia}>
        Cada um dê conforme determinou em seu coração, não com pesar ou por
        obrigação, pois Deus ama quem dá com alegria.
      </Text>
      <Text style={styles.bibliatrecho}>2Coríntios 9:7</Text>

      <TouchableOpacity style={styles.buttonback} onPress={navigateToLogon}>
        <Ionicons name="arrow-back-circle-sharp" size={60} color="#E02041" />
      </TouchableOpacity>
    </View>
  )
}
