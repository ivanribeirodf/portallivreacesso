import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'
import logoJibla from '../../assets/jilba.png'
import logoMan from '../../assets/man.png'
import logoWoman from '../../assets/woman.png'
import logoDizimo from '../../assets/dizimos.png'
import logoAgenda from '../../assets/agenda.png'
import logoIgreja from '../../assets/igreja.png'
import logoFamily from '../../assets/family.png'
import logoCasais from '../../assets/casais.png'
import logoLouvor from '../../assets/louvor.png'
import logoJuntar from '../../assets/juntar.png'
import logoOracao from '../../assets/oracao.png'
import logoMSG from '../../assets/msg.png'

import styles from './styles'

export default function Logon() {
  const navigation = useNavigation()
  function navigateToIgreja() {
    navigation.navigate('Igreja')
  }
  function navigateToAgenda() {
    navigation.navigate('Agenda')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem-vindo Ivan Ribeiro</Text>
      <Text style={styles.description}>
        Em Cristo Jesus Temos Livre Acesso ao Pai.
      </Text>

      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menu} onPress={navigateToIgreja}>
          <View>
            <Image source={logoIgreja} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={navigateToAgenda}>
          <View>
            <Image source={logoAgenda} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoDizimo} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoFamily} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoCasais} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoLouvor} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoWoman} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoMan} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoJibla} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoJuntar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoOracao} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <View>
            <Image source={logoMSG} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
