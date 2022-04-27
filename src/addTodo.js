const { v4 }=require('uuid');
const AWS=require('aws-sdk');

const addTodo = async (event) => {
  
  const dynamodb=new AWS.DynamoDB.DocumentClient();

  const todoname = (JSON.parse(event.body)).todoname;
  const tododesc = (JSON.parse(event.body)).tododesc;
  const todocategory = (JSON.parse(event.body)).todocategory;
  const createdAt=new Date().toISOString();

  const id=v4();
  const newTodo={
    id,
    todoname,
    tododesc,
    todocategory,
    createdAt,
    completed:'pending'
  }  

  await dynamodb.put({
    TableName:"TodoTable",
    Item:newTodo
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };


};

module.exports={
  handler: addTodo
}