// let city = "chennai";
// function printCity()
// { 
//     console.log("Value of the city =", city);
// }
// printCity()
// console.log(city);

// let userName = "Ravi";
// function displayUser()
// {
//     let Role = "Tester";
//     console.log(userName);
//     console.log(Role); 
// }
// displayUser()


/**************Question 3 ************/

// var age = 12;
// function checkAge()
// {
//    if(age >= 18)
//    {
//     let status = "Adult";
//     console.log(status);  
//     }
// else
// {
//     let status= "Minor";
//     console.log(status);    
// }
// }
// checkAge()
// console.log(age);

/*************** question 4 *************/

// var color = "blue";
// function checkColor()
// {
//  let color = "green";
//  if(true) 
//  {
// let color = "red";
// console.log(color);
//  }
//  console.log(color);
//  }
//  checkColor()
//  console.log(color);

/***** Question 5 **************/
// function testScope()
// {
//     var count = 10;
//     if(true)
//     {
//         var count = 20;
//         console.log(count);        
//     }
//     console.log(count);
// }
// testScope()


/***8888888 Question 7***********/
 
let userType = "admin";
function checkAccess()
{
    let message = "Access Denied";
if (userType === "admin")
{
var accessLevel = "fullAccess";
console.log("Admin logged in");
}
else {
    var accessLevel = "Limited Access";
    console.log("Regular User Loggedin");    
}
console.log(accessLevel);
}
checkAccess()
console.log(userType);


