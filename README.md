## ✅ How TypeScript Helps Improve Code Quality and Project Maintainability

TypeScript helps improve code quality and project maintainability in various ways. By using Ts, we can easily maintain our large projects and find errors. TypeScript gives us errors when we assign the wrong types. In JavaScript, we face problems because we don't assign any type. In some cases, we are doing numerical functionality while the type of the value is string. But when we use TypeScript, we don't have to face this problem. Also, we can detect the bugs early. We get the IDE support while we use TypeScript. For all these reasons, our project will be more maintainable, and the code quality looks good.


### 💥 JavaScript Example (Prone to Runtime Errors):

```js
function greet(user) {
  return "Hello, " + user.name.toUpperCase();
}

greet(null); 
// Runtime Error: Cannot read properties of null
```

### ✅ TypeScript Example (Catches Error at Compile Time):

```ts
function greet(user: { name: string }): string {
  return "Hello, " + user.name.toUpperCase();
}

greet(null); 
// Compile-time Error: Argument of type 'null' is not assignable
```


## ✅ Union and Intersection Types in TypeScript

---

## 🔷 Union Type

**Union type** means a value can be of **several types**. For example, a value can be a `string`, `number`, or `boolean`. We use the **vertical bar (`|`)** to define a union type.

It's similar to the logical **"OR"** in TypeScript.

### ✅ Example:

```ts
function displayType(mango: string | number) { 
  if (typeof mango === "number") {
    console.log('mango is number.'); 
  } else if (typeof mango === "string") {
    console.log('mango is string.'); 
  }
}

displayType(49);        // Output: mango is number.
displayType("GFG");     // Output: mango is string.
displayType(true);      // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

---

## 🔶 Intersection Type

**Intersection type** is a type that merges **several types into one**. We use the **ampersand (`&`)** operator to represent the intersection type. This allows us to combine many types to create a **single type with all of the properties**.

### ✅ Example:

Creating an intersected type with `Student` and `Teacher` interfaces.

```ts
interface Student { 
  student_id: number; 
  name: string; 
} 

interface Teacher { 
  Teacher_Id: number; 
  teacher_name: string; 
} 

type intersected_type = Student & Teacher; 

let obj1: intersected_type = { 
  student_id: 3232, 
  name: "rita", 
  Teacher_Id: 7873, 
  teacher_name: "seema", 
}; 

console.log(obj1.Teacher_Id);  // Output: 7873
console.log(obj1.name);        // Output: rita
```


