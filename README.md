# Scrapper Project
A simple web application that allows user to scrape data from a website and store it in a database. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and uses JWT for user authentication.

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

# Issues
- The application runs on free tier of Render, so it may take some time to load initially.

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

8. In a new termainal, start the scrapper:
```
cd scrapper-backend
npm start
```
