import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#6F4E37',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  coffeeBean: {
    width: 30,
    height: 30,
    marginLeft: 10,
    tintColor: '#6F4E37',
  },
  or: {
    marginVertical: 16,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  error: {
    color: 'red',
    marginTop: 10,
  }
});