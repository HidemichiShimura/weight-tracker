# Weight Tracker

![weight-tracker](readme/weight-tracker.gif)

## Overview

This is a weight-tracking application built on the web platform. You can register, modify, delete, and get your weight data with date.

## ⚠️ Note

You can access the main page where you manipulate weight data at the path "/" and "/Home". The login/signup pages are accessible at the path "/Login" and "/SignUp" respectively, but the user auth feature is not implemented yet.
The login/signup feature is coming to take effect soon!

## Getting Started in the Local Environment

### 1. Frontend

- Environment Variable Setting in `.env`
  - `REACT_APP_URL=<Backend URL>`
- Start the frontend server
  - `npm run start`

### 2. Backend

- MongoDB setting
  - Network access: allow the access from the backend to the Database
- Environment Variable Setting in `.env`
  - `PORT=<PORT>`
  - `URL=<MongoDB connect URL>`
  - `FRONT=<The frontend URL>`
- Start the backend server
  - `npm run dev`

### 3. You are ready to go

- Enjoy the app by adding, modifying, deleting data and reading the latest weight and the history

## Tech Stack

### Framework

<p align="left">
  <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
  <img alt="express" src="https://img.icons8.com/ios/48/f5f5f5/express-js.png"/>
  <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
  <img alt="node" src="https://img.icons8.com/fluency/48/null/node-js.png"/>
  <span> with </span>
  <img alt="typescript" src="https://img.icons8.com/fluency/48/null/typescript--v2.png"/>
</p>

### Others

<p align="left">
  <img width="48" height="48" src="https://img.icons8.com/color/48/styled-components.png" alt="styled-components"/>
  <img width="48" height="48" src="https://img.icons8.com/color/48/mongoose.png" alt="mongoose"/>
</p>

## Challenges

- Dynamically changed styles based on props in `styled-components`
  - Avoiding to creation of duplicate components with similar styles
- Component architecture/state management
  - Reduced the number of redundant API calls by passing fetched DB data from a parent component to child components as props instead of each child component calling API on its own, resulting in optimization
- CORS implementation
  - Understood the basics such as the purpose of CORS and how to solve CORS errors
