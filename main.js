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

    function updateDisplayVal(val){
      document.getElementById("calculator_display").innerHTML = val;
    }
  
    // Loads all number buttons' values into tempVal
    const btnCollection = document.getElementsByClassName("btn-num");
    for(const btn of btnCollection){
      btn.addEventListener("click", () => {
        this.loadValue(btn.value);
        if(this.operator){
          updateDisplayVal(this.secondVal);
        } else {
          updateDisplayVal(this.firstVal);
        }
      })
    }

    // Add button
    document.getElementById("add").addEventListener("click", () => {
      /* 
      if there was already a "secondVal" when add is clicked, then we just automatically 
      call compute. Else, we just end the function call there.
      */
      this.operation = ADD;
      if(this.secondVal === "") return;
      const newVal = this.compute();
      updateDisplayVal(newVal);
    })

    // Subtract button
    document.getElementById("subtract").addEventListener("click", () => {
      this.operation = SUBTRACT;
      if(this.secondVal === "") return;
      const newVal = this.compute();
      updateDisplayVal(newVal);
    })

    // Multiply button
    document.getElementById("multiply").addEventListener("click", () => {
      if(this.firstVal === "") return; 
      this.operation = MULTIPLY;
      if(this.secondVal === "") return;
      const newVal = this.compute();
      updateDisplayVal(newVal);
    })

    // Divide button
    document.getElementById("divide").addEventListener("click", () => {
      if(this.firstVal === "") return;
      this.operation = DIVIDE;
      if(this.secondVal === "") return;
      const newVal = this.compute();
      updateDisplayVal(newVal);
    })

    // Equal button
    document.getElementById("equal").addEventListener("click", () => {
      const newVal = this.compute();
      this.operation = null;
      updateDisplayVal(newVal);
    })

    // Power of Zwai
    document.getElementById("powerOfZwai").addEventListener("click", () => {
      if(this.firstVal === "") return;
      const newVal = this.powerOfTwo();
      updateDisplayVal(newVal);
    })

    // Reset button
    document.getElementById("reset").addEventListener("click", () => {
      this.clear();
      updateDisplayVal(0);
    })
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

  powerOfTwo(){
    const { firstVal } = this;
    this._value = Number(firstVal) ** 2;
    this._firstVal = this._value;
    return this.value;
  }

  compute(){
    const { operator, firstVal, secondVal } = this;
    if(firstVal === "" || secondVal === "" || operator === null) return this.value;
    console.log(operator);
    console.log(firstVal);
    console.log(secondVal);
    const firstNum = Number(firstVal), secondNum = Number(secondVal);
    switch(operator){
      case ADD:
        this._value = firstNum + secondNum;
        break;
      case SUBTRACT:
        this._value = firstNum - secondNum;
        break;
      case MULTIPLY:
        this._value = firstNum * secondNum;
        break;
      case DIVIDE:
        if(secondNum === 0){
          this.clear();
          return "DIVIDE BY ZERO ERROR";
        }
        this._value = firstNum / secondNum;
        break;
      default:
        this._operator = null;
    }
    this._secondVal = "";
    this._firstVal = this.value.toString();
    console.log(this._firstVal);
    return this.value;
  }

  clear(){
    this._value = this.initalVal;
    this._firstVal = "";
    this._secondVal = "";
    this._operator = null;
  }
}

const calc = new Calculator();