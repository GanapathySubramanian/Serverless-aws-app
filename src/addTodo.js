const { v4 }=require('uuid');
const AWS=require('aws-sdk');

const addTodo = async (event) => {

  const TABLE_NAME = process.env.ITEMS_DYNAMODB_TABLE;

  const dynamodb=new AWS.DynamoDB.DocumentClient();

  // const taskName = JSON.parse(event.body).taskName;
  // const taskDescription = JSON.parse(event.body).taskDescription;
  // const taskCategory = JSON.parse(event.body).taskCategory;
  const createdAt=new Date().toISOString();


  const taskName = event.body.taskName;
  const taskDescription = event.body.taskDescription;
  const taskCategory = event.body.taskCategory;

  const id=v4();
  console.log(id)
  const newTodo={
    id,
    taskName,
    taskDescription,
    taskCategory,
    createdAt,
    completed:'pending'
  }  

  // await dynamodb.put({ 
  //   TableName:TABLE_NAME,
  //   Item:newTodo
  // }).promise()

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