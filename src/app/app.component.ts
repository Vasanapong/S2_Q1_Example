import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calculateMode = 'isPrime'
  checkValidNumber = false
  numberInput = 0

  handleNumberChange(e: any) {
    if(e.target.value > -1){
      this.numberInput = e.target.value
    }else{
      this.numberInput = 1
    }
    this.checkValid(this.numberInput, this.calculateMode)
  }

  handleModeChange(e: any) {
    this.calculateMode = e.target.value
    this.checkValid(this.numberInput, this.calculateMode)
  }

  // Calculate Prime
  isPrime = (num: number): any => {
    if (Number(num) && num > 0) {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num > 1;
    }
  }

  // Calculate Fibonacci
  isPerfectSquare(x: number) {
    let s = parseInt(Math.sqrt(x).toString());
    return (s * s === x);
  }

  isFibonacci(n: number) {
    return this.isPerfectSquare(5 * n * n + 4) ||
      this.isPerfectSquare(5 * n * n - 4);
  }

  checkValid = (numberInput: number, calculateMode: String) => {
    if (calculateMode === 'isPrime') {
      let checked = this.isPrime(numberInput)
      console.log(checked)
      this.checkValidNumber = checked
    }
    if(calculateMode === 'isFibonacci'){
      let checked = this.isFibonacci(numberInput)
      this.checkValidNumber = checked
    }
  }

}
