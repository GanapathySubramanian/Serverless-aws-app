const { v4 }=require('uuid');
const AWS=require('aws-sdk');

const updateTodo = async (event) => {
  
  const TABLE_NAME = process.env.ITEMS_DYNAMODB_TABLE;

  const dynamodb=new AWS.DynamoDB.DocumentClient();

  const { completed} = JSON.parse(event.body);  
  const {id} =event.pathParameters


  await dynamodb.update({
    TableName:TABLE_NAME,
    Key:{id},
    UpdateExpression: 'set completed = :completed',
    ExpressionAttributeValues:{
        ':completed':completed
    },
    ReturnValues: "ALL_NEW"
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
        msg: "Todo Updated successfully"
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  };


};

module.exports={
  handler: updateTodo
}
