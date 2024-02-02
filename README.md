# Scrapper Project

# A Deep Dive into MERN App with Authentication
Building upon the foundational principles of MongoDB, Express, React, and Node.js, my project offers a detailed implementation of MERN login register functionality. 
By integrating JWT authentication MERN stack techniques, I ensure a secure and seamless user experience.

# MERN Login Signup Flow
My application simplifies the complexity of the MERN login signup process. The auth flow is intuitive, providing clear navigation from signing up to signing into the application. This makes my project an excellent login app example for developers seeking to 
understand the intricacies of authentication flows.

# Authentication for React App
The authentication for react app mechanism is implemented with security and efficiency in mind. I utilize JWTs (JSON Web Tokens) to manage sessions and secure user data, providing a reliable and robust auth MERN structure.

# MERN Authentication JWT
Incorporating mern authentication JWT within this MERN stack application example ensures that the tokens used for user sessions are managed according to the latest security standards. It's a critical feature that underscores the entire authentication process in my MERN application example.

# Features
- User Registration: Allows new users to create an account.
- User Login: Enables users to log in with their credentials.
- JWT Authentication: Secures user sessions using JSON Web Tokens.
- Responsive Design: Ensures a great user experience across various devices.
- Error Handling: Provides clear and concise error messages for users.

# Technologies Used
Frontend:
- React.js: For building the user interface.
- Toastify: To display notifications and alerts.
- React Router DOM: For managing navigation in the application.
Backend:
- Node.js: As the runtime environment.
- Express: Web application framework for Node.js.
- MongoDB: Database to store user credentials and session data.

# Installation
1. Clone the repository:

```
git clone https://github.com/furiousluck/Scrapper-Project.git
```

2. Install dependencies:
Navigate to the project directory:
```
cd folder-name
```

3. Install backend dependencies:
```
npm install
```

4. Install frontend dependencies:

```
cd client
npm install
```

5. Configure MongoDB and JWT:
Visit MongoDB website, create account, database and take connection string.
After that generate 256 bits random key and add it to .env file.
Create the .env file in the root directory with the following contents:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

6. Run the application:
Start the backend server:
```
node app.js
```

7. In a new terminal, start the frontend:
```
cd client
npm run dev
```
