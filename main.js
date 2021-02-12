class Calculator {
  initalVal = 0;
  _tempVal = "";
  ADD = "ADD";
  SUBTRACT = "SUBTRACT";
  MULTIPLY = "MULTIPLY";
  DIVIDE = "DIVIDE";
  lastOperation = null;

  constructor(){
    this._value = this.initalVal;
  }

  // concats the digit in string value
  loadValue(digit){
    this._tempVal += digit; 

  }

  _resetTempVal(){
    this._tempVal = "";
  }

  get value(){
    return this._value;
  }

  get tempVal(){
    return this._tempVal;
  }

  add(){
    this._value += Number(this.tempVal);
    this._resetTempVal();
    return this.value;
  }

  subtract(){
    this._value -= Number(this.tempVal);
    this._resetTempVal();
    return this.value;
  }

  multiply(){
    this._value *= Number(this.tempVal);
    this._resetTempVal();
    return this.value;
  }

  divide(){
    this._value /= Number(this.tempVal);
    this._resetTempVal();
    return this.value;
  }

  powerOfTwo(){
    this._tempVal **= 2;
    this.value = this.tempVal;
    this._resetTempVal();
    return this.value;
  }

  equal(){
    const { ADD, SUBTRACT, DIVIDE, MULTIPLY, lastOperation, add, subtract, multiply, divide } = this;
    if(lastOperation === null) return; 

    switch(lastOperation){
      case ADD:
        add();
      case SUBTRACT:
        subtract();
      case MULTIPLY:
        multiply();
      case DIVIDE:
        divide();
      default:
        return;
    }
  }
  
  clear(){
    this._value = this.initalVal;
  }
}

const calc = new Calculator();

const btnCollection = document.getElementsByClassName('btn-num');
for(const btn of btnCollection){
  btn.addEventListener("click", () => {
    calc.loadValue(btn.value);
    document.getElementById('display').value = calc.tempVal;
  })
}

document.getElementById('add').addEventListener('click', () => {
  const newVal = calc.add();
  document.getElementById('display').value = newVal;
})

// Equal button
document.getElementById('equal').addEventListener('click', () => {
  
})

// Reset button
document.getElementById('reset').addEventListener('click', () => {
  calc.clear();
  document.getElementById('display').value = 0;
})