const AWS=require('aws-sdk');

const fetchTodos = async (event) => {
  
  const TABLE_NAME = process.env.ITEMS_DYNAMODB_TABLE;

  const dynamodb=new AWS.DynamoDB.DocumentClient();

  let todos;
  
  try{
    const results=await dynamodb.scan({TableName:TABLE_NAME}).promise()
    todos=results.Items;
  }catch(error){
    console.log(error);
  }


  return {
    statusCode: 200,
    body: JSON.stringify(todos),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  };


};

module.exports={
  handler: fetchTodos
}