import { useState } from 'react';
import Auxpad from './Auxpad';
import Numpad from './Numpad';
import Oppad from './Oppad';

import './Calculator.css';

function Calculator() {
  const MAX = 9999999999;
  const MIN = -999999999;
  let [value, setValue] = useState('0');
  let [prevVal, setPrevVal] = useState(0);
  let [operator, setOperator] = useState(null);
  let [opPressed, setOpPressed] = useState(false);
  let [error, setError] = useState(false);

  const handleClick = (e) => {
    let targetVal = e.target.value

    if (isNaN(value) && targetVal !== 'AC') {
      alert(error);
      return;
    }

    switch (targetVal) {
      case 'AC':
        setValue('0');
        setPrevVal(0);
        setOperator(null);
        setOpPressed(false);
        break;
      
      case '+/-':
        setValue((parseFloat(value) * -1).toString());
        break;
      
      case '%':
        setValue(parseFloat(value) / 100);
        break;
      
      case '+':
      case '-':
      case '÷':
      case '×':
        if (operator != null) doMath();
        else setPrevVal(parseFloat(value));
        setOperator(targetVal);
        setOpPressed(true);
        break;

      case '=':
        if (operator != null) {
          doMath();
          setOperator(null);
        } else {
          setPrevVal(parseFloat(value))
        };
        break;
      
      case '.':
        if (value === '0' || opPressed) {
          setValue('0.');
          setOpPressed(false);
        } else {
          if (value.indexOf(targetVal) !== -1)
            break;

          setValue(value + targetVal);
        }
        break;

      default:
        if (value === '0' || opPressed) {
          setValue(targetVal);
          setOpPressed(false);
        }
        else if (value.length < 10)
          setValue(value + targetVal);
    }
    
  }

  const doMath = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = prevVal + parseFloat(value);
        break;
      
      case '-':
        result = prevVal - parseFloat(value);
        break;

      case '×':
        result = prevVal * parseFloat(value);
        break;

      case '÷':
        result = prevVal / parseFloat(value);
        break;
      
      default:
        break;
    }
    result = handleErrors(result);
    result = handleDecimal(result);
    setPrevVal(result);
    setValue(result);
  }

  const handleErrors = (result) => {
    if (result === Infinity) {
      setError('Math Error');
      alert('Math Error');
      return 'Error';
    }
        
    if (result > MAX || result < MIN) {
      setError('Number Out of bound');
      alert('Number Out of bound');
      return 'Error';
    }
    
    return result;
  }

  const handleDecimal = (num) => {
    num = num.toString();
    if (num.length > 10 && num.indexOf('.') !== -1 ) {
      num = roundOff(num);
    }

    return parseFloat(num);
  }

  const roundOff = (num) => {
    console.log(num);
    num = num.split('');
    if (num[10] >= 5)
      num[9] = parseInt(num[9]) + 1;
    
    num = num.splice(0, 10);
    
    return num.join('');
  }


  return (
    <div className='calculator'>
      <div className="row">
        <div className='screen'>{value}</div>
      </div>
      <div className='row'>
        <div>
          <Auxpad handleClick={handleClick} />
          <Numpad handleClick={handleClick} />
        </div>
        <div>
          <Oppad handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
