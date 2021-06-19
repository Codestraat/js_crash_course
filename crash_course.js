// var, let, const
let age = 30

console.log(age)


let score
score = 10

console.log(score)

const score = 20
score = 21
// You can not reassigned const

// String, Numbers, Boolean, null, undefined

const name = 'John' //typeof String
const age = 30  // typeof number
const rating = 4.5  // type of number
const isCool = True  //
const x = null
const y = undefined
let z



//Concatenation

console.log('My name is '+ name +' and I am ' + age)
//Template String
const hello = `My name is ${name} and I am 4{age}`
console.log(hello)

// Length of
const s = 'Hello World'
const m ='technology, computers, it, code'

console.log(s.length)
console.log(s.toString)
console.log(s.toUpperCase)
console.log(m.substring)
console.log(m.split(''))

// Arrays - variable that hold muliple values

const numbers = new Array(1,2,3,4,5)

console.log(numbers)

const fruits  = ['apples','oranges','pears',10,true]

fruits[3] = 'grapes'

fruits.push('mangoes')

fruits.unshift('strawberries')

fruits.pop()

console.log(Array.isArray('hello'))

console.log(fruits.indexOf('oranges'))


console.log(fruits[1])

// Object literals

const person = {
    firstname: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
    } 

}

console.log(person.firstname, person.lastname)

console.log(person.hobbies[1])

const { firstname, lastname, address:{city}} = person

console.log(firstName)

person.email = 'john@gmail.com'

console.log(person)

const todos = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Take out trash',
        isCompleted: true
    },
    
    {
        id: 3,
        text: 'Dentist appoint',
        isCompleted: false
    }
]

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos)

console.log(todoJSON)


// For Loops
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

let i = 0;
while (i < 10) {
    console.log(`While Loop Number: $[i}`)
    i++
}

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}

for(let todo of todos){
    console.log(todo.id)
}

// High order array method
// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text) 
        
})

const todoText = todos.map(function(todo){
    return todo.text
})

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todoCompleted)

// Conditionals


const x  = 10

if(x > 10){
    console.log(' x is greater 10')
} else if(x > 10 ) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than 10')
}

const x = 10

const color = x > 10 ? 'Red' : 'blue'

console.log(color)

switch(color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is NOT red or blue')
        break;

}

// functions

function addNums(num1, num2){
    return num1 + num2 
}

console.log(addNums(1,1))

//Arrow functions
const addNum = (num1, num2) => {
 
console.log(addNum(1))

//Constructor function 
function Person(firstname, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob =  new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Class
class Person {
    constructor(firstName,lastName,dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob =newDate(dob)
    }
getBirthYear() {
    return this.dob.getFullYear()
}
getFullName() {
    return `${this.firstName} ${this.lastName}`
 }

}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith','3-6-1970')

console.log(person2.getBirthName());
console.log(person1)

console.log(person1.dob.getFullYear())

// DOM






