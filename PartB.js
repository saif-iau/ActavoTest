function cat(name  , age, color , bodydetails , weight , height) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.bodydetails = bodydetails;
    this.weight = weight;
    this.height = height;
}


 let catList = [
   
    {
        name:'tommy',
        age:2.5,
        color:'white',
        bodydetails:["green eyes" , "black feets"],
        weight:3,
        height:4,
    },

    {
        name:'momo',
        age:2.5,
        color:'dark blue',
        bodydetails:["green eyes" , "black feets"],
        weight:3,
        height:4,
    },

    {
        name:'jerry',
        age:1,
        color:'dark blue',
        bodydetails:["green eyes" , "black feets"],
        weight:3,
        height:4,
    },

    {
        name:'caty',
        age:1.5,
        color:'white',
        bodydetails:["yellow eyes" , "black feets"],
        weight:3,
        height:4,
    },

    {
        name:'lulu',
        age:2.5,
        color:'white',
        bodydetails:["blue eyes" , "black feets"],
        weight:3,
        height:4,
    }

 ]

// print dark blue
console.log('Q6');
 catList.forEach((obj) => {
   if(obj.color == 'dark blue') {
   
    console.log(obj)
   }
 })


 console.log('Q7');

 catList.forEach((obj) => {
    if(obj.age >= 1 && obj.age <= 2) {
    
     console.log(obj)
    }
  })



  console.log('Q8');

 catList.forEach((obj) => {
    obj.bodydetails.forEach((inner) => {
       if(inner == 'green eyes'){
        console.log(obj)
       }
    })
  })


