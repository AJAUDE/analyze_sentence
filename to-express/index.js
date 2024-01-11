const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;


// database
const todoList = [
    {
        id: 1,
        title: "Complete Project Proposal",
        desc: "Draft and submit the project proposal by Friday.",
        completed: false
    },
    {
        id: 2,
        title: "Prepare for Meeting",
        desc: "Gather necessary documents and notes for the team meeting.",
        completed: true
    },
    {
        id: 3,
        title: "Exercise",
        desc: "Go for a 30-minute jog in the park.",
        completed: false
    },
    {
        id: 4,
        title: "Read a Chapter",
        desc: "Read a chapter from the new book before bedtime.",
        completed: false
    },
    {
        id: 5,
        title: "Grocery Shopping",
        desc: "Buy fruits, vegetables, and other essentials from the grocery store.",
        completed: true
    },
    {
        id: 6,
        title: "Learn JavaScript",
        desc: "Complete the introductory JavaScript course online.",
        completed: false
    },
    {
        id: 7,
        title: "Write Blog Post",
        desc: "Start drafting a blog post on the latest industry trends.",
        completed: true
    },
    {
        id: 8,
        title: "Call Mom",
        desc: "Give mom a call and catch up on family news.",
        completed: false
    },
    {
        id: 9,
        title: "Organize Desk",
        desc: "Clean and organize the desk for a more productive work environment.",
        completed: false
    },
    {
        id: 10,
        title: "Plan Weekend Activities",
        desc: "Plan fun activities for the upcoming weekend with friends.",
        completed: true
    }
];

// middleware
app.use(express.json());
app.use(cors());


// Routte to get all todos

app.get('/todoList',(request, response) => {

    response.json(todoList);
});

// TO GET A SINGLE TODDO USING ID
app.get('/todoList/:id', (request, response) =>{
// get todo id from request params
const todoListId = Number(request.params.id);

// fine todo form todoList array
const todo = todoList.find((todo)=> todo.id === todoListId);

// handle todo not found error
if (!todo) {
    response.status(404).send('todo not fonud.');
} else{
    // send to client if no error
    response.json(todo);
}
});
// route to create a new todo
app.post('/todoList', (request, response) =>  {
    // get new todo from request today
const newTodo = {
    id: todoList.length + 1,
    title: request.body.title,
    desc: request.body.desc,
    completed: false,
};
todoList.push(newTodo);
// handle error
if (!newTodo) {
    response.status(404).json({msg: 'please include a title and discription'});
}
response.status(201).json({msg:'todo created successfully'});
});

// route to update a todo
app.put("/todosList/:id", (request, response) => {
// get todo id from request params
const todoListId = Number(request.params.id); 

// find todo from todos array
const todo = todoList.find((todo) => todo.id === todoListId);

// handle todo not found error
if (!todo) {
    response.status(404).send("Todo not found.");
} else {
    // update todo object with new data from request body
    todoList.title = request.body.title;
    todoList.desc = request.body.desc;
    response.status(200).json({ msg: "Todo updated successfully" });
}
});

// delete todo using id
app.delete("/todoList/:id", (request, response) => {
    // get todo id from request params
    const todoListId = Number(request.params.id); // 3
    
    // find todo from todos array
    const todo = todoList.find((todo) => todo.id === todoListId);
    
    // handle todo not found error
    if (!todo) {
    response.status(404).send("Todo not found.");
} else {
    // find index of todo in todos array
    const index = todoList.findIndex((todo) => todo.id === todoListId);
    // delete todo
    todoList.splice(index, 1);
    
    response.status(200).json({ msg: "Todo deleted successfully" });
}
});

// C=Create-POST
// R=Read -GET
// U=Update -PUT/PATCH
// D=Delete -DELETE


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});