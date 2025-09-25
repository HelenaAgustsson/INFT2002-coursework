import express from 'express';
import tasks from './data';
import lists from './lists';

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});

app.get('/api/v1/tasks', (request, response) => {
    response.json(tasks);
});

app.get('/api/v1/lists', (request, response) => {
    response.json(lists);
});

app.get('/api/v1/task/:id', (request, response)=>{
    const id = request.params.id;
    const task = tasks.find(t => t.id == id);
    if (task) {
        response.json(task);
    } else {
        response.status(404).send(`Task with id '${id}' not found.`);
    }
});

app.get('/api/v1/list/:listid', (request, response)=>{
    const listid = request.params.listid;
    const list = lists.find(l => l.listid == listid);
    if (list) {
        response.json(list);
    } else {
        response.status(404).send(`list with id '${id}' not found.`);
    }
});

app.post('/api/v1/tasks', (request, response) => {
    const task = request.body;

    if(!task.hasOwnProperty('id') || task.hasOwnProperty('title') || task.hasOwnProperty('done') || task.hasOwnProperty('list')) {
            response.status(400).send('A task needs the following properties: id, title and done');
        }
    if(tasks.find(t=>t.id ==task.id)){
        response.status(400).send(`A task with id '${task.id}' already exists.`);
    }
    else {
        tasks.push(task);
        response.status(201);
        response.location('tasks/'+task.id);
        response.send();
    }
})

app.post('/api/v1/lists', (request, response) => {
    const list = request.body;

    if(!list.hasOwnProperty('listid') || list.hasOwnProperty('title')) {
            response.status(400).send('A list needs the following properties: id, title');
        }
    if(lists.find(l=>l.listid ==list.listid)){
        response.status(400).send(`A list with id '${list.listid}' already exists.`);
    }
    else {
        lists.push(list);
        response.status(201);
        response.location('lists/'+list.listid);
        response.send();
    }
})

app.delete('/api/v1/tasks/:id', (request, response) => {
    const id = request.params.id;
    const index = tasks.findIndex(t => t.id == id); 
    if (index != -1) {
        tasks.splice(index, 1);
        response.json(tasks);
    } else {
        response.status(404).send(`Failed to delete task with id '${id}'. Task not found.`);
    }
});

app.delete('/api/v1/lists/:listid', (request, response) => {
    const listid = request.params.listid;
    const index = lists.findIndex(l => l.listid == listid); 
    if (index != -1) {
        lists.splice(index, 1);
        //remove all tasks with id = list id
        response.json(lists);
    } else {
        response.status(404).send(`Failed to delete list with id '${listid}'. Task not found.`);
    }
});

app.get('/api/v1/list/:listid/tasks', (request, response)=>{
    const listid = request.params.listid;
    const listTasks = tasks.filter(t => t.list == listid);
    if (listTasks) {
        response.json(listTasks);
    } else {
        response.status(404).send(`list with id '${listid}' not found.`);
    }
});

app.get('/api/v1/list/:listid/tasks/:taskid', (request, response)=>{
    const listid = request.params.listid;
    const taskid = request.params.taskid;
    const listTasks = tasks.filter(t => t.id == taskid);
    if (listTasks) {
        response.json(listTasks);
    } else {
        response.status(404).send(`list with id '${listid}' not found.`);
    }
});

app.post('/api/v1/lists/:listid/tasks', (request, response) => {
    const task = request.body;

    if(!task.hasOwnProperty('id') || task.hasOwnProperty('title') || task.hasOwnProperty('done')) {
        response.status(400).send('A task needs the following properties: id, title and done');
    }
    if(tasks.find(t=>t.id ==task.id)){
    response.status(400).send(`A task with id '${task.id}' already exists.`);
    }
    else {
    task.list = request.params.listid;
    tasks.push(task);
    response.status(201);
    response.location('tasks/'+task.id);
    response.send();
    }
})

app.delete('/api/v1/lists/:listid/tasks/:taskid', (request, response) => {
    const listid = request.params.listid;
    const taskid = request.params.taskid;
    const index = tasks.findIndex(t => t.list == listid && t.id == taskid); 
    if (index != -1) {
        tasks.splice(index, 1);
        response.json(tasks);
    } else {
        response.status(404).send(`Failed to delete task with id '${taskid}'. Task not found.`);
    }
});

/*





*/