const addTodo=require('./addTodo')

test('_200 works', async () => {
    const res = await addTodo.handler({
    body:{
        "taskName": "Serverless aws todo app",
        "taskDescription": "Aws Training",
        "taskCategory": "Studies"
        }
    })
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
});
