import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function Button({ label,onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '20%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    margin: 5
  },
  buttonText: {
    color: '#000',
    fontSize: 18
  },
})
