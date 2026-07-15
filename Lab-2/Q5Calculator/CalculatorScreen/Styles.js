import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#FF9501',
  },
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 30,
  },
  displayText: {
    fontSize: 36,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: '#1c1c1c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: 36,
    color: '#000',
    fontWeight: '400',
  },
  numberButton: {
    backgroundColor: '#FFFFFF',
  },
  operatorButton: {
    backgroundColor: '#F0F0F0',
  },
  equalButton: {
    backgroundColor: '#FF9501',
  },
  clearButton: {
    backgroundColor: '#F0F0F0',
  },
  backspaceButton: {
    backgroundColor: '#FFF',
  },
  operatorButtonText: {
    color: '#FF9501',
  },
  equalButtonText: {
    color: '#FFFFFF',
  },
});

export default styles;
