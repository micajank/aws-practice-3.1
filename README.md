# AWS Practice v3.1

## Steps to complete

### Deployment

1. Have David and Mac create profiles
2. Pull user ID into props from Cognito
3. Login Form
    1. Create custom amplify login form and integrate
4. Re-integrate old code
    1. Code to move
        1. CHECK - static
        2. CHECK - scss
        3. CHECK - content
            1. images
            2. nav
            3. Pages
            4. Reusable_Components
    2. Schema: Models, Queries and Mutations
        1. CHECK - I should have all this code built out and ready to move over
    3. Update Query and Mutation references in Content
        1. Admin
            1. CHECK - ChangeActiveYear
        2. Dashboard
        3. IndividualRecord
        4. Reports
        5. StudentDatabase
        6. TaskDatabase
        7. UserSettings
5. Finish updating App.js, Content.js, and Nav.js
6. Create Signup Form
    1. Needs to create a User in the Database upon creation
    2. Make it only accessable by Admin

### Functionality

1. Pieces to complete
    1. Content/Admin/ChangeActiveYear.js requires mutation request to send the changes through

## How to filter requests
```
    API.graphql(graphqlOperation(queries.listTodos, {
        filter: {
            status: {
                eq: "completed"
            }
        }
    })));
```

## How to make requests
```
    import Amplify, { API, graphqlOperation } from 'aws-amplify'
    import { createTodo } from './graphql/mutations'
    import { listTodos } from './graphql/queries'

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { 
            console.log('error fetching todos') 
        }
    }

    async function addTodo() {
        try {
            // If the formstate is empty or if it has no description, exit
            if (!formState.name || !formState.description) return
            // Save 'todo' as an object with fields equal to those inside the formState
            const todo = { ...formState }
            // Set the list of all todos equel to itself plus the newly saved 'todo' oject
            setTodos([...todos, todo])
            // Reset the formState
            setFormState(initialState)
            // Make a mutation so the db knows what's up
            await API.graphql(graphqlOperation(createTodo, {input: todo}))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    // Templates
    async function QUERY() {
        try {
            const BLANK = await API.graphql(graphqloperation(QUERY))
        } catch (err) { console.log("Error fetching ") }
    }

```
