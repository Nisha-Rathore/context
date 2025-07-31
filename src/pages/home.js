import React, { useState } from 'react'

const home = () => {
    const [data,setData] = useState();

    const students = [
  { 
     id: 1,
     name: "Pooja Nair", 
     age: 21, 
     city: "Bangalore"
     },
  { 
    id: 2,
    name: "Rohit Malik",
    age: 20,
    city: "Delhi" 
    },
  { 
    id: 3,
    name: "Nikita Roy", 
    age: 21, 
    city: "Kolkata"
     },
  { 
    id: 4,
    name: "Tanvi Rawat",
    age: 21,
    city: "Delhi" 
    },
  { 
     
    id: 5,
    name: "Shreya Mehta", 
    age: 18, 
    city: "Jaipur" 
    },
  { 
    id: 6,
    name: "Kunal Mehta",
    age: 21,
    city: "Delhi" 
    },
  { 
    id: 7,
    name: "Sandeep Desai",
    age: 20,
    city: "Mumbai" 
},
  { 
    id: 8,
    name: "Simran Kaur",
    age: 20,
    city: "Delhi" 
    },
  { 
    id: 9,
    name: "Meera Iyer", 
    age: 19, 
    city: "Hyderabad"
 },
  { 
    id: 10,
    name: "Ankit Yadav",
    age: 21,
    city: "Delhi"
 },
  { 
    id: 11,
    name: "Ramesh Patel",
    age: 20,
    city: "Ahmedabad"
 },
  { 
    id: 12,
    name: "Rahul Jain",
    age: 22,
    city: "Delhi" 
    },
  { 
    id: 13,
    name: "Aditya Saxena",
    age: 22,
    city: "Bhopal"
 },
  { 
    id: 14,
    name: "Kavita Joshi",
    age: 22,
    city: "Delhi"
 },
  { 
    id: 15,
    name: "Alok Gupta",
    age: 22,
    city: "Chennai"
 },
  { 
    id: 16,
    name: "Manish Kumar",
    age: 20,
    city: "Delhi"
 },
  { 
    id: 17,
    name: "Farhan Ali",
    age: 20,
    city: "Lucknow" 
},
  { 
    id: 18,
    name: "Neha Bhatia",
    age: 20,
    city: "Delhi"
 },
  { 
    id: 19
    , name: "Amit Sharma"
    , age: 20
    , city: "Delhi"
 },
  { 
    id: 20,
    name: "Ishita Ghosh",
    age: 21,
    city: "Pune"
 },
  { 
    id: 21,
    name: "Divya Raj", 
    age: 20, 
    city: "Delhi"
  },
  { 
    id: 22,
    name: "Deepak Chauhan",
    age:19,
    city: "Delhi"
   },
  { 
    id: 23,
    name: "Ritika Verma",
    age: 19,
    city: "Delhi"
   },
  { 
    id: 24,
    name: "Priya Singh",
    age: 18,
    city: "Delhi"
 },
  { 
    id: 25,
    name: "Vikas Chauhan",
    age: 22,
    city: "Delh
    i" },
  { 
    id: 26
    , name: "Jyoti Sharma
    ", age: 2
    1, city: "Delhi
    " },
  { 
    id: 27
    , name: "Sneha Kapoor
    ", age: 2
    0, city: "Delhi
    " },
  { 
    id: 28
    , name: "Mohit Rathi"
    , age: 23
    , city: "Delhi"
 },
  { 
    id: 29
    , name: "Ayesha Khan"
    , age: 19
    , city: "Delhi"
 },
  { 
    id: 30
    , name: "Harshit Shar
    ma", age:
     19, city: "Del
     hi" }
];


  return (
   <BodyContext.Provider value = {data}>
    <datalist />
   </BodyContext.Provider>
    
  )
}

export default home