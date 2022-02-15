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

  menuList: {
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  menu: {
    padding: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 4,
    flexGrow: 1,
    alignItems: 'center',
    width: 80
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
  }
})
