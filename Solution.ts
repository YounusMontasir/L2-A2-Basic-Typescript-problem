{
    function formatString(input: string, toUpper?: boolean): string {
        if(toUpper === false){
            return input.toLowerCase()
        }
        else{
            return input.toUpperCase()
        }
    }
   


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        const selectedItems = items.filter(item=> item.rating >= 4) 
        return selectedItems
    }
    

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.flat();
    }
    



    class Vehicle {
        constructor(private make:string, private year: number ){

        }
        getInfo(){
            console.log(`Make: ${this.make}, Year: ${this.year}`);
            
        }
    }
    class Car extends Vehicle{
        constructor(make: string,year: number,private model: string){
            super(make,year)
        }

        getModel(){
            console.log(`Model: ${this.model}`);
        }
    }
    



    function processValue(value: string | number): number{
        if(typeof(value)=== 'string'){
            return value.length
        }
        if(typeof(value)==='number'){
            return value*2
        }
    }



interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length===0){
        return null;
    }
    let maxPrice = 0;
    let maxArray = products[0];
    for(let i=0;i<products.length;i++){
        if(products[i].price>maxPrice){
            maxPrice=products[i].price;
            maxArray = products[i]
        }
    }
    return maxArray;
  }




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day=== Day.Sunday){
        return "Weekend"
    }
    else{
        return "Weekday"
    }
  }




async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         if(n>=0){
             resolve(n*n)
         }
         else{
             reject("Error: Negative number not allowed ")
         }
        }, 1000)
     })
}


    
}