const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

var AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-south-1',
  endpoint:"http://localhost:8000"
});

//Code for deleting table 
// var dynamodb = new AWS.DynamoDB();
// var params = {
//     TableName : "companies"
// };

// dynamodb.deleteTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });

//Creating table here
// var doClient = new AWS.DynamoDB.DocumentClient();
// var DynamoDB = new AWS.DynamoDB();

// var params = {
//     TableName : "thread",
//     KeySchema: [       
//         { AttributeName: "threadId", KeyType: "HASH"},  //Partition key
//     ],
//     AttributeDefinitions: [       
//         { AttributeName: "threadId", AttributeType: "S" },
//     ],
//     ProvisionedThroughput: {       
//         ReadCapacityUnits: 10, 
//         WriteCapacityUnits: 10,
//     },
// };

// DynamoDB.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });




//Post req to insert data 
// app.post('/business/add', (req, res) => {
// var doClient = new AWS.DynamoDB.DocumentClient();
//   var DynamoDB = new AWS.DynamoDB({});

//   var table = "thread";

//   var threadId = "7";
//   var threadType = "livechat";
//   var createDate = "08:00";
//   var updateDate = "10:14";
//   var channelName = "one";
  
//   var params = {
//       TableName : table,
//       Item: 
//       {
//         "threadId" : threadId,
//         "threadType" : { 'S' : threadType },
//         "createDate" : { 'S' : createDate },
//         "updateDate" : { 'S' : updateDate },
//         "channelName" : {'S' : channelName }
//       }      
//   };

    
//   console.log("Adding a new item...");
//   doClient.put(params, function(err, data) {
//       if (err) {
//           console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//       } else {
//           console.log("Added item:", JSON.stringify(data, null, 2));
//       }
//   });
  
//     console.log(req.body);
//     res.json({});
// });

// Defined get data(index or listing) route



//get req to read data 
app.get('/data', (req, res) => {
var doClient = new AWS.DynamoDB.DocumentClient();
  var DynamoDB = new AWS.DynamoDB({});

  var table = "thread";
  var threadId = threadId;
  var params = {
      TableName:table,
      Key: 
      {
        threadId: threadId,
        
      }
    
  };

    
  doClient.scan(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        res.json(data);
    }
  });
  
});

// app.get('/business', (req, res) => {
// console.log('hi its testing');
// });

const server = app.listen(port, function(){
console.log('Listening on port ' + port);
});



