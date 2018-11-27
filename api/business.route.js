// const express = require('express');
// const app = express();
// const AWS = require('aws-sdk');
// const businessRoutes = express.Router();



// var table = "business";
// var person_name;
// var business_name;
// var business_gst_number;

// var params = {
//     TableName:table,
//     Item:{
//         "person_name": person_name,
//         "business_name": business_name,
//         "business_gst_number":business_gst_number
//     }
// };

// // console.log("Adding a new item...");
// // docClient.put(params, function(err, data) {
// //     if (err) {
// //         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
// //     } else {
// //         console.log("Added item:", JSON.stringify(data, null, 2));
// //     }
// // });



// app.get('/check', (req, res) => {
//   res.send('checking work')
// });


// app.post('/business', (req, res) => {
//     const { person_name, business_name = false} = req.body;
//     //const todoId = uuid.v4();
//     const params = {
//       TableName: business,
//       Item: {
//         person_name,
//         business_name,
//         business_gst_number,
//       },
//     };
//     dynamoDb.put(params, (error) => {
//       if (error) {
//         console.log('Error creating Table: ', error);
//         res.status(400).json({ error: 'Could not create Table' });
//       }
//       res.json({ person_name, business_name, business_gst_number });
//     });
//   });






