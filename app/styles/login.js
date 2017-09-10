import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    marginTop: 82,
    width: '100%',
    minHeight: 320,
  },
  loginButtonList: {
    marginTop: 40,
  },
  loginButton: {
    width: 290,
    height: 50,
    margin: 4,
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#c7c7c8",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  loginButtonImage: {
    marginRight: 12,
  },
  loginButtonText: {
    fontWeight: 'bold',
  }
})
