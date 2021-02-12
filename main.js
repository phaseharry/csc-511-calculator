const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

class Calculator {
  initalVal = 0;
  _firstVal = "";
  _secondVal = "";
  _operator = null;

  constructor(){
    this._value = this.initalVal;
  }

  loadValue(digit){
    if(this.operator === null){
      this._firstVal += digit;
    } else {
      this._secondVal += digit;
    }
  }

  get value(){
    return this._value;
  }

  get firstVal(){
    return this._firstVal;
  }

  get secondVal(){
    return this._secondVal;
  }

  get operator(){
    return this._operator;
  }

  set operation(op){
    if(this._firstVal === ""){
      this._operator = null;
      return;
    }
    switch(op){
      case ADD:
        this._operator = ADD;
        break;
      case SUBTRACT:
        this._operator = SUBTRACT;
        break;
      case MULTIPLY:
        this._operator = MULTIPLY;
        break;
      case DIVIDE:
        this._operator = DIVIDE;
        break;
      default:
        this._operator = null;
    }
  }

  compute(){
    const { operator, firstVal, secondVal } = this;
    if(secondVal === "" || operator === null) return this.value;
    console.log(operator);
    console.log(firstVal);
    console.log(secondVal);
    switch(operator){
      case ADD:
        this._value = Number(firstVal) + Number(secondVal);
        break;
      case SUBTRACT:
        this._operator = SUBTRACT;
        break;
      case MULTIPLY:
        this._operator = MULTIPLY;
        break;
      case DIVIDE:
        this._operator = DIVIDE;
        break;
      default:
        this._operator = null;
    }
    this.operation = null;
    this._secondVal = "";
    this._firstVal = this.value.toString();
    console.log(this._firstVal);
    return this.value;
  }

  clear(){
    this._value = this.initalVal;
    this._firstVal = "";
    this._secondVal = "";
  }
}

const calc = new Calculator();

// Loads all number buttons' values into tempVal
const btnCollection = document.getElementsByClassName("btn-num");
for(const btn of btnCollection){
  btn.addEventListener("click", () => {
    calc.loadValue(btn.value);
    if(calc.operator){
      document.getElementById("display").value = calc.secondVal;
    } else {
      document.getElementById("display").value = calc.firstVal;
    }
  })
}

// Add button
document.getElementById('add').addEventListener('click', () => {
  /* 
  if there was already a "secondVal" when add is clicked, then we just automatically 
  call compute. Else, we just end the function call there.
  */
  calc.operation = ADD;
  if(calc.secondVal === "") return;
  const newVal = calc.compute();
  document.getElementById('display').value = newVal;
})

// Subtract button
document.getElementById('subtract').addEventListener('click', () => {

})

// Multiply button
document.getElementById('multiply').addEventListener('click', () => {
  if(calc.operator !== MULTIPLY){
    calc.operation = MULTIPLY;
    return;
  }
})

// Divide button
document.getElementById('divide').addEventListener('click', () => {
  if(calc.operator !== DIVIDE){
    calc.operation = DIVIDE;
    return;
  }
})

// Equal button
document.getElementById('equal').addEventListener('click', () => {
  const newVal = calc.compute();
  document.getElementById('display').value = newVal;
})

// Reset button
document.getElementById('reset').addEventListener('click', () => {
  calc.clear();
  document.getElementById('display').value = 0;
})