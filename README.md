# BA-React-Project  
**Bachelor Thesis React Project - Web Performance Testing**

## Project Description  
This project demonstrates web performance testing and consists of four main components:

1. **Database Component**  
   This component allows users to load datasets, add 100 datasets, delete 100 datasets, delete all datasets, and restore datasets using a CSV file. The datasets are displayed in a table.

2. **API Component**  
   This component integrates the open-source API "Deck of Cards," enabling users to create a deck of cards and draw a specific number of cards, which are then visually displayed.

3. **Chart Component**  
   This component integrates the Chart.js library to generate a pie chart that displays the age distribution of the datasets in the database.

4. **Mock Data Component**  
   This component loads mock data in JSON format, which is displayed in a table.

## Getting Started with Create React App  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`  
Installs all necessary dependencies for the project.

#### `npm start`  
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits. You will also see any lint errors in the console.

### Backend Setup  
In addition to running the React app, the backend server needs to be started.  
Navigate to the backend folder using the following command:
`cd .\src\myBackend\`

Then, start the server with:
`node server.js`
