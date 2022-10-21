import React, {useState} from 'react';
import CalcKeys from './CalculatorKeys';
import {StyleSheet, View, Text, Modal} from 'react-native';
import CustomButton from './CustomButton';
import Cross from '../assets/cross.svg';
import ClearCross from '../assets/clearCross.svg';
import CurrencyIcon from '../assets/currency.svg';
import {SearchBar} from 'react-native-screens';

const Calculator = ({showCalculatorHandler, showCalculator}) => {
  const [display, setDisplay] = useState('');
  const addNumber = input => {
    setDisplay(prev => prev + input);
  };

  const clear = () => {
    setDisplay('');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showCalculator}>
      <Cross
        style={{top: 56, alignSelf: 'center'}}
        onPress={() => showCalculatorHandler(false)}
      />
      <View style={styles.container}>
        <View style={styles.display}>
          {display.length != 0 && <CurrencyIcon />}
          <Text style={styles.title} numberOfLines={1}>
            {display}
          </Text>
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="1" onClick={() => addNumber('1')} />
          <CalcKeys displayKey="2" onClick={() => addNumber('2')} />
          <CalcKeys displayKey="3" onClick={() => addNumber('3')} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="4" onClick={() => addNumber('4')} />
          <CalcKeys displayKey="5" onClick={() => addNumber('5')} />
          <CalcKeys displayKey="6" onClick={() => addNumber('6')} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey="7" onClick={() => addNumber('7')} />
          <CalcKeys displayKey="8" onClick={() => addNumber('8')} />
          <CalcKeys displayKey="9" onClick={() => addNumber('9')} />
        </View>
        <View style={styles.calcKeyRow}>
          <CalcKeys displayKey=" ." onClick={() => addNumber('.')} />
          <CalcKeys displayKey="  0" onClick={() => addNumber('0')} />
          <CalcKeys onClick={() => clear()} displayKey={<ClearCross />} />
        </View>
        <CustomButton
          text={'Continue'}
          backgroundColor={'#FF2E63'}
          marginTop={0}
          width={173}
          height={60}
          onPress={() => {
            showCalculatorHandler(false);
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10194E',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 700,
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
  },

  display: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 72,
    flexDirection: 'row',
  },

  title: {
    color: '#EEEEEE',
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 72,
  },
  calcKeyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
export default Calculator;
