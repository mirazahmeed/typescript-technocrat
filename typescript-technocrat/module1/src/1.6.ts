// learning function
// normal function
// arrow function
{
function add(x: number, y:number) : number {
  return x + y;
}
add(1, 2); // 3

// arrow function
const addArrow = (x: number, y: number = 10): number => x+ y;

const poorUser = {
  name: 'John',
  age: 30,
  isAdmin: false,
  balance: 1000,
  addBalance(balance: number): string {
    this.balance += balance;
    return `My new balance is ${this.balance}`;
  }
}  


const arr:number[] = [1, 2, 3, 4, 5];

const newArr:number[] = arr.map((element:number) : number=> {
  return element * element;
})
// or using arrow function

const newArray : number[] = arr.map((Element :number): number => Element * Element);


console.log(newArr); // [1, 4, 9, 16, 25]



}