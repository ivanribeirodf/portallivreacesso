import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#000'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff'
  },

  title: {
    fontSize: 20,
    marginBottom: 16,
    marginTop: 48,
    color: '#fff',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff'
  },

  biblia: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  bibliatrecho: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  buttonback: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
