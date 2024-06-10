# snAPI

## Description

This project is a social network API that allows users to share thoughts, react to friends' thoughts, and manage their friend list. It uses Express.js for the server, MongoDB for the database, and Mongoose for object data modeling (ODM).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
- [Testing with Insomnia](#testing-with-insomnia)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd myhandlebarsproject
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up your MongoDB connection string in a `.env` file:
    ```plaintext
    MONGODB_URI=mongodb://localhost/socialNetworkDB
    ```

## Usage

1. Start the application server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3001`.

## API Routes

### User Routes

- **GET** `/api/users`
  - Description: Get all users.
  
- **GET** `/api/users/:userId`
  - Description: Get a single user by ID.
  
- **POST** `/api/users`
  - Description: Create a new user.
  - Body:
    ```json
    {
      "username": "newuser",
      "email": "newuser@example.com"
    }
    ```
  
- **PUT** `/api/users/:userId`
  - Description: Update a user by ID.
  - Body:
    ```json
    {
      "email": "updateduser@example.com"
    }
    ```
  
- **DELETE** `/api/users/:userId`
  - Description: Delete a user by ID.
  
- **POST** `/api/users/:userId/friends/:friendId`
  - Description: Add a friend to the user's friend list.
  
- **DELETE** `/api/users/:userId/friends/:friendId`
  - Description: Remove a friend from the user's friend list.
  
- **GET** `/api/users/:userId/friends`
  - Description: Get all friends of a specific user.

### Thought Routes

- **GET** `/api/thoughts`
  - Description: Get all thoughts.
  
- **GET** `/api/thoughts/:thoughtId`
  - Description: Get a single thought by ID.
  
- **POST** `/api/thoughts`
  - Description: Create a new thought.
  - Body:
    ```json
    {
      "thoughtText": "This is a new thought",
      "username": "newuser"
    }
    ```
  
- **PUT** `/api/thoughts/:thoughtId`
  - Description: Update a thought by ID.
  - Body:
    ```json
    {
      "thoughtText": "Updated thought text"
    }
    ```
  
- **DELETE** `/api/thoughts/:thoughtId`
  - Description: Delete a thought by ID.
  
- **POST** `/api/thoughts/:thoughtId/reactions`
  - Description: Add a reaction to a thought.
  - Body:
    ```json
    {
      "reactionBody": "This is a reaction",
      "username": "newuser"
    }
    ```
  
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId`
  - Description: Remove a reaction from a thought.
  
- **GET** `/api/thoughts/:thoughtId/reactions`
  - Description: Get all reactions for a specific thought.

## Testing with Insomnia

### Start the Server

1. Start the server:
    ```sh
    npm start
    ```

### Create Requests

1. **GET All Users**:
   - Method: GET
   - URL: `http://localhost:3001/api/users`
   
2. **GET All Thoughts**:
   - Method: GET
   - URL: `http://localhost:3001/api/thoughts`
   
3. **GET Single User**:
   - Method: GET
   - URL: `http://localhost:3001/api/users/:userId`
   
4. **GET Single Thought**:
   - Method: GET
   - URL: `http://localhost:3001/api/thoughts/:thoughtId`
   
5. **POST Create a New User**:
   - Method: POST
   - URL: `http://localhost:3001/api/users`
   - Body:
     ```json
     {
       "username": "newuser",
       "email": "newuser@example.com"
     }
     ```
   
6. **PUT Update a User**:
   - Method: PUT
   - URL: `http://localhost:3001/api/users/:userId`
   - Body:
     ```json
     {
       "email": "updateduser@example.com"
     }
     ```
   
7. **DELETE Remove a User**:
   - Method: DELETE
   - URL: `http://localhost:3001/api/users/:userId`
   
8. **POST Create a New Thought**:
   - Method: POST
   - URL: `http://localhost:3001/api/thoughts`
   - Body:
     ```json
     {
       "thoughtText": "This is a new thought",
       "username": "newuser"
     }
     ```
   
9. **PUT Update a Thought**:
   - Method: PUT
   - URL: `http://localhost:3001/api/thoughts/:thoughtId`
   - Body:
     ```json
     {
       "thoughtText": "Updated thought text"
     }
     ```
   
10. **DELETE Remove a Thought**:
    - Method: DELETE
    - URL: `http://localhost:3001/api/thoughts/:thoughtId`
    
11. **POST Add a Friend**:
    - Method: POST
    - URL: `http://localhost:3001/api/users/:userId/friends/:friendId`
    
12. **DELETE Remove a Friend**:
    - Method: DELETE
    - URL: `http://localhost:3001/api/users/:userId/friends/:friendId`
    
13. **POST Add a Reaction**:
    - Method: POST
    - URL: `http://localhost:3001/api/thoughts/:thoughtId/reactions`
    - Body:
      ```json
      {
        "reactionBody": "This is a reaction",
        "username": "newuser"
      }
      ```
    
14. **DELETE Remove a Reaction**:
    - Method: DELETE
    - URL: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`
    
15. **GET All Reactions**:
    - Method: GET
    - URL: `http://localhost:3001/api/thoughts/:thoughtId/reactions`

## License

This project is licensed under the ISC License.
