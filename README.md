union type means a value that can be several types. like a value can be can be string or number or can be boolean. we use vertical bar (|) to define union. It is just like a or functionality of typescript.

function displayType(mango: (string | number)) { 
	if(typeof(mango) === "number") 
		console.log('mango is number.') 
	else if(typeof(mango) === "string") 
		console.log('mango is string.') 
} 


displayType(49); 
displayType("GFG"); 
displayType(true); 

Intersection:
Intersection type is a type that merges several types into one type. We use & operator to represent the intersection type. This allows us to combine many types to create a single type with all of the properties that we require.

Example of Intersection: Creating an intersected type: In this example, two interfaces named student and teacher are created. Intersected type is created by using ‘&’ between student and teacher. Intersected type contains all the properties of the two interfaces. An obj of intersection type is created and values are retrieved from it. We can not use a property without assigning it to the intersection type object.
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
  
console.log(obj1.Teacher_Id); 
console.log(obj1.name);