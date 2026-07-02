
# 🚌 DTC Bus Schedule Management System

## About the Project

The DTC Bus Schedule Management System is a full-stack web application developed to make it easier for users to check DTC bus routes and timings. Instead of searching for bus information from different sources, users can view all the available bus schedules in one place.

This project was built to improve my understanding of full-stack web development by connecting a React frontend with a Node.js and Express backend.

---

## Features

* View DTC bus routes
* Check bus timings
* Responsive user interface
* REST API for fetching bus data
* Add new bus details through the backend
* Easy to use and simple design

---

## Tech Stack

### Frontend

* React.js
* Vite
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Tools Used

* VS Code
* Postman
* Git & GitHub

---

## Project Structure

```text
DTC-Bus-Schedule/
│
├── client/
├── server/
├── README.md
└── package.json
```

---

## How to Run the Project

### Clone the repository

```bash
git clone https://github.com/your-username/DTC-Bus-Schedule.git
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Start the backend

```bash
npm start
```

### Start the frontend

```bash
cd client
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## API Endpoints

### Get all buses

```
GET /api/buses
```

### Add a new bus

```
POST /api/buses
```

---

## Why I Built This Project

I wanted to build a simple full-stack application that could solve a real-world problem. Many people use DTC buses every day, and finding route and timing information can sometimes be inconvenient. This project provides a simple platform where users can easily access bus schedule information.

---

## What I Learned

While building this project, I learned how to:

* Build REST APIs using Express.js
* Connect React with a backend server
* Manage state using React Hooks
* Handle API requests using Fetch/Axios
* Test APIs using Postman
* Organize a full-stack project

---

## Challenges I Faced

Some of the challenges I faced during development were:

* Connecting the frontend with the backend
* Fixing CORS issues
* Managing React state efficiently
* Debugging API responses
* Organizing the project structure

These challenges helped me improve my debugging and problem-solving skills.

---

## Future Improvements

In the future, I plan to add:

* User login and authentication
* Admin dashboard
* Search and filter functionality
* Real-time bus tracking
* Database integration
* Live bus arrival updates
* Better UI and animations

---

## Screenshots

Add screenshots of the application here.

---

## Author

**Raj**

Thank you for visiting my project. If you like it, feel free to give it a ⭐ on GitHub.
