# Scrapper Project
A simple web application that allows user to scrape data from a website and store it in a database. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and uses JWT for user authentication.The app uses Cheerio to scrape data from a website and stores it in a MongoDB database. The user can view the scraped data and delete it if needed. The data can de deleted user wise without deleting it from main database.

# Screenshots
![image](https://github.com/furiousluck/Scrapper-Project/assets/79402080/ff9a35b8-bcdf-4e79-94a0-020e7b62d82c)
![image](https://github.com/furiousluck/Scrapper-Project/assets/79402080/94d44c00-3a97-4460-9752-b895803ed431)
![image](https://github.com/furiousluck/Scrapper-Project/assets/79402080/18d34707-91d2-4b1a-a23e-750248e0a3c7)
![image](https://github.com/furiousluck/Scrapper-Project/assets/79402080/aeef3648-69f6-4d41-b838-f48d14cbc3f1)


![image](https://github.com/furiousluck/Scrapper-Project/assets/79402080/5b72df66-d55b-4e18-b211-ccd43211d22a)


# Features
- User Registration: Allows new users to create an account.
- User Login: Enables users to log in with their credentials.
- JWT Authentication: Secures user sessions using JSON Web Tokens.
- Responsive Design: Ensures a great user experience across various devices.
- Error Handling: Provides clear and concise error messages for users.
- Data Scraping: Allows users to scrape data from a website and store it in a database.
- Data Viewing: Enables users to view the scraped data.
- Data Deletion: Allows users to delete the scraped data.
- Data Read: Marks the data which has been already read.

# Technologies Used
Frontend:
- React.js: For building the user interface.
- Toastify: To display notifications and alerts.
- React Router DOM: For managing navigation in the application.
- Axios: For making HTTP requests.
Backend:
- Node.js: As the runtime environment.
- Express: Web application framework for Node.js.
- MongoDB: Database to store user credentials and session data.
- Cheerio: For web scraping.
- JWT: For user authentication.
- Bcrypt: For password hashing.


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
