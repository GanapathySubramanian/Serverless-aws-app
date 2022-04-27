const { v4 }=require('uuid');
const AWS=require('aws-sdk');

const addTodo = async (event) => {
  
  const dynamodb=new AWS.DynamoDB.DocumentClient();

  const taskName = (JSON.parse(event.body)).taskName;
  const taskDescription = (JSON.parse(event.body)).taskDescription;
  const taskCategory = (JSON.parse(event.body)).taskCategory;
  const createdAt=new Date().toISOString();

  const id=v4();
  const newTodo={
    id,
    taskName,
    taskDescription,
    taskCategory,
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
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  };


};

module.exports={
  handler: addTodo
}