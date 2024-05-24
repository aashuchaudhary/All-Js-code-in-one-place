// Q1. CREATE A NAVBAR AND CHANGE THE COLOR OF ITS FIRST ELEMENT TO RED.

// let navbar = document.getElementById("navbar");

// let firstItem = navbar.querySelector("li");
// firstItem.style.color = "red";


// Q2.CREATE A TABLE WITHOUT TBODY .NOW USE "VIEW  PAGE SOURCE " BUTTON TO CHECK WHETHER IT HAS A TBODY OR NOT.

// we can create a table without tbody element.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Table Without TBODY</title>
// </head>
// <body>
//     <table id="myTable">
//         <tr>
//             <th>Header 1</th>
//             <th>Header 2</th>
//             <th>Header 3</th>
//         </tr>
//         <tr>
//             <td>Data 1</td>
//             <td>Data 2</td>
//             <td>Data 3</td>
//         </tr>
//         <tr>
//             <td>Data 4</td>
//             <td>Data 5</td>
//             <td>Data 6</td>
//         </tr>
//     </table>
// </body>
// </html>


// When you view the page source, you'll see that the <tbody> element is automatically added by the browser:



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Table Without TBODY</title>
// </head>
// <body>
//     <table id="myTable">
//         <tbody> <!-- Automatically added by the browser -->
//             <tr>
//                 <th>Header 1</th>
//                 <th>Header 2</th>
//                 <th>Header 3</th>
//             </tr>
//             <tr>
//                 <td>Data 1</td>
//                 <td>Data 2</td>
//                 <td>Data 3</td>
//             </tr>
//             <tr>
//                 <td>Data 4</td>
//                 <td>Data 5</td>
//                 <td>Data 6</td>
//             </tr>
//         </tbody> <!-- Automatically added by the browser -->
//     </table>
// </body>
// </html>


// Q3.CREATE AN ELEMENT WITH 3 CHILDREN .NOW CHANGE THE COLOR OF FIRST AND LAST ELEMENT TO GREEN.

// let parentElement = document.getElementById('parentElement');

// let children = parentElement.children;
// children[0].style.color = 'green';
// children[children.length - 1].style.color = 'green';



// Q4.WRITE A JS CODE TO CHANGE BG OF ALL<LI> TAGS TO CYAN.

// let listItem = document.querySelectorAll('li');

// listItem.forEach(item => {
    
//     item.style.baxkgroundColor = 'cyan';
// });

// Q5.WHICH OF THE FOLLLOWING IS USED TO LOOK FOE THE FASTEST ANCESTOR THAT MATCHES A GIVEN CSS SELECTOR

// (A)matches (B)CLOSEST (C)CONTAINS (D)NONE OF THESE

// (B) closest()  becoz ,
// The closest() method is used to look for the nearest ancestor element in the DOM tree that matches a specified CSS selector.