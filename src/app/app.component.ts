import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-time';
  number = '1'
  selectedFunction : string = 'isPrime';

  change(event) {
    let number = event.target.value

    if (number < 0) {
      this.number = '1'
    } else {
      this.number = Math.round(number).toString()
    }
  }

  selectFunction(event) {
    this.selectedFunction = event.target.value
  }

  isPrime() {
    const number = +this.number
    for(let i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }

  isFibonacci() {
    return this.fibonacci(+this.number)
  }

  // REF: https://www.tutorialspoint.com/check-whether-a-number-is-a-fibonacci-number-or-not-javascript
  fibonacci(query, count = 1, last = 0) {
    if(count < query){
       return this.fibonacci(query, count+last, count);
    }
    if(count === query){
       return true;
    }
    return false;
  }
}
