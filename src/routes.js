import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Agenda from './pages/Agenda'
import Casais from './pages/Casais'
import Familia from './pages/Familia'
import Homens from './pages/Homens'
import Igreja from './pages/Igreja'
import Jibla from './pages/Jibla'
import Juntase from './pages/Juntese'
import Logon from './pages/Logon'
import Louvor from './pages/Louvor'
import Mulheres from './pages/Mulheres'
import Ofertas from './pages/Ofertas'
import Oracao from './pages/Oracao'
import Pastoral from './pages/Pastoral'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Logon" component={Logon} />
        <AppStack.Screen name="Agenda" component={Agenda} />
        <AppStack.Screen name="Casais" component={Casais} />
        <AppStack.Screen name="Familia" component={Familia} />
        <AppStack.Screen name="Homens" component={Homens} />
        <AppStack.Screen name="Igreja" component={Igreja} />
        <AppStack.Screen name="Jibla" component={Jibla} />
        <AppStack.Screen name="Juntase" component={Juntase} />
        <AppStack.Screen name="Louvor" component={Louvor} />
        <AppStack.Screen name="Mulheres" component={Mulheres} />
        <AppStack.Screen name="Ofertas" component={Ofertas} />
        <AppStack.Screen name="Oracao" component={Oracao} />
        <AppStack.Screen name="Pastoral" component={Pastoral} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
