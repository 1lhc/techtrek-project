# TechTrek Project
This project is a full-stack application developed for the TechTrek hackathon. It uses Express.js for the backend and React for the frontend.

## Project Structure
techtrek-project/
│
├── server.js
├── package.json
├── README.md
│
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── index.js
        └── ...other React files

## Prerequisites
- Node.js (v14 or later recommended)
- npm (usually comes with Node.js)

## Setup
1. Clone the repository:
   git clone https://github.com/1lhc/techtrek-project.git
   cd techtrek-project

2. Install backend dependencies:
   npm install

3. Install frontend dependencies:
   cd client
   npm install

## Running the Application
1. Start the backend server:
   # From the root directory
   node server.js
   The server will start on http://localhost:3001

2. In a new terminal, start the frontend development server:
   cd client
   npm start
   The React app will start on http://localhost:3000

## API Endpoints
- GET `/api/data`: Returns a sample message

## Technologies Used
- Backend: Node.js, Express.js
- Frontend: React
- API Communication: Axios

## Links
- Project homepage: https://github.com/1lhc/techtrek-project
- Issue tracker: https://github.com/1lhc/techtrek-project/issues
