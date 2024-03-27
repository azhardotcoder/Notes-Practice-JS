/* //todo ------------Objects---------------
*Objects are used to store multiple values in a single variable.
*Objects are reference data types.
!----Declaration of an object----
let student = {
    name: "Azhar",
    age: 22
  "full name": "Azhar Khan" //*Important: If the property name contains spaces, then it should be enclosed in quotes.
}
!----Symbols in object----
let id = Symbol("id")

let user = {
    name: "Azhar",
    age: 22,
    [id]: 123 //*Important: Symbol is a unique identifier
}

!----Access the object properties----
student.name //* Output: Azhar
student["full name"] //* Output: Azhar Khan
student[id] //* Output: 123

!----Overwrite the object properties----
student.name = "Fardeen" //* Output: Fardeen

!----If you want no one can change the object properties----
Object.freeze(student) //* freeze method is used to prevent the object properties from being changed.


*/
/* //todo ------------singleton---------------
*Singleton is a design pattern that restricts the instantiation of a class to one object.
const tinderUser = new object() //*Singleton object

!----Non singleton object----
*Non singleton objects are those objects that can be instantiated multiple times.
const tinderUser = {} //*Non singleton object



*/

/* //todo ------------Object Assign and combine---------------
let obj1 = {
    name_1: "Azhar",
    age_1: 22,
    city_1: "Mumbai"
}
let obj2 = {
    name_2: "arbaz",
    age_2: 26,
    city_2: "delhi"
}
let obj3 = {
    name_3: "anas",
    age_3: 18,
    city_3: "bijnor"
}

const obj4 = { ...obj1, ...obj2, ...obj3 } 
console.log(obj4) //* Output: { name: "anas", age: 18, city: "bijnor" } 
* We cannot overrite the object properties using object assign method.

*/

/* //todo ------------Object Methods---------------
There are few methods of objects
!----Object.keys()----
* It returns an array of a given object's own enumerable property names.
let obj = {
    name: "Azhar",
    age: 22,
    city: "Mumbai"
}
console.log(Object.keys(obj)) //* Output: ["name", "age", "city"]
!----Object.values()----    
* It returns an array of a given object's own enumerable property values.
let obj = {
    name: "Azhar",
    age: 22,
    city: "Mumbai"
}
console.log(Object.values(obj)) //* Output: ["Azhar", 22, "Mumbai"]
!----Object.entries()---- 
* It returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let obj = {
    name: "Azhar",
    age: 22,
    city: "Mumbai"
}
console.log(Object.entries(obj)) //* Output: [["name", "Azhar"], ["age", 22], ["city", "Mumbai"]]
!----Object.assign()----
* It is used to copy the values of all enumerable own properties from one or more source objects to a target object.
let obj1 = {
    age: 22
    
}
let obj2 = {
    name: "Arbaz",
 
}
let obj3 = {
  
    city: "Bijnor"
}
let obj4 = Object.assign(obj1, obj2, obj3)
console.log(obj4) //* output : { age: 22, name: "Arbaz", city: "Bijnor" }
!----Object.hasOwnProperty()----
* It returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
let obj = {
    name: "Azhar",
    age: 22,
    city: "Mumbai"
}
console.log(obj.hasOwnProperty("name")) //* Output: true
console.log(obj.hasOwnProperty("last")) //* Output: false


*/