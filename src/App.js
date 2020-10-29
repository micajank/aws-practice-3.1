/* src/App.js */
import './scss/main.scss'
import React, { useEffect, useState } from 'react'
// <<<<<<< HEAD
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import { BrowserRouter as Router } from 'react-router-dom'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Authenticator } from "aws-amplify-react";
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import Content from './content/Content'
import AuthWrapper from "./AuthWrapper";
Amplify.configure(awsconfig);
// =======
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import { listUsers } from './graphql/queries'
// import { withAuthenticator } from '@aws-amplify/ui-react'
// >>>>>>> ccc2ff12715dd73fa756b50853ec10510d1790c2

// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      //const users = await API.graphql(graphqlOperation(listUsers))
      //console.log(users)
      
      setTodos(todos)
    } catch (err) { console.log('error fetching todos:', err) }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
// <<<<<<< HEAD
  }
    
    return (
        <Router>
            <div className="App">
            {/* <AmplifySignOut /> */}
                {/* <Content user={user} /> */}
                <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
                    <AuthWrapper />
                </Authenticator>
            </div>
        </Router>
    )
}

export default App;
// =======
//   }

//   return (
//     <div style={styles.container}>
//       <h2>Amplify Todos</h2>
//       <input
//         onChange={event => setInput('name', event.target.value)}
//         style={styles.input}
//         value={formState.name} 
//         placeholder="Name"
//       />
//       <input
//         onChange={event => setInput('description', event.target.value)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Description"
//       />
//       <button style={styles.button} onClick={addTodo}>Create Todo</button>
//       {
//         todos.map((todo, index) => (
//           <div key={todo.id ? todo.id : index} style={styles.todo}>
//             <p style={styles.todoName}>{todo.name}</p>
//             <p style={styles.todoDescription}>{todo.description}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// const styles = {
//   container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
//   todo: {  marginBottom: 15 },
//   input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
// }

// export default withAuthenticator(App)
// >>>>>>> ccc2ff12715dd73fa756b50853ec10510d1790c2
