# AWS Practice v3.1

## Steps
1. Have David and Mac create profiles
2. Pull user ID into props from Cognito
3. Login Form
    1. Create custom amplify login form and integrate
4. Re-integrate old code
    1. Code to move
        1. static
        2. scss
        3. content
            1. images
            2. nav
            3. Pages
            4. Reusable_Components
    2. Schema
        1. I should have all this code built out and ready to move over
    3. Queries and Mutations: Re-create and change references in code
        1. Admin
        2. Dashboard
        3. IndividualRecord
        4. Reports
        5. StudentDatabase
        6. TaskDatabase
        7. UserSettings
5. Create Signup Form
    1. Needs to create a User in the Database upon creation
    2. Make it only accessable by Admin

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
