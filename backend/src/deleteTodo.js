const AWS=require('aws-sdk');

const deleteTodo = async (event) => {
  
  const dynamodb=new AWS.DynamoDB.DocumentClient();
  const {id} =event.pathParameters
  var msg;

  await dynamodb.delete({
    TableName: "TodoTable",
    Key: {
      id: id, 
    },
  })
  .promise()
  .then(data => console.log(data))
  .catch(console.error)

  return {
    statusCode: 200,
    body: JSON.stringify('Record deleted successfully!'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  };


};

module.exports={
  handler: deleteTodo
}