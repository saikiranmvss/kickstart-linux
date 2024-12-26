# Kickstarter - ReactJS, NodeJS, MySQL

This project is a **Kickstarter** built using **ReactJS** for the frontend, **Node.js** for the backend, and **MySQL** as the database. The goal is to provide a platform for launching projects, accepting pledges, and supporting creators, just like Kickstarter.

## Tech Stach Version
- node - 18.16.0
- npm - 9.5.1

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Database Setup](#database-setup)
- [License](#license)

## Project Overview

This is a full-stack web application designed to simulate a crowdfunding platform. It allows users to:
- Browse and search active campaigns.
- Create new projects with defined funding goals and timeframes.
- Pledge money to support projects.
- View user profiles and project statuses.

## Tech Stack

- **Frontend**: 
  - ReactJS (for building the UI)
  - Axios (for API requests)
  - React Router (for handling page navigation)
  
- **Backend**:
  - Node.js (JavaScript runtime)
  - Express.js (web framework for Node.js)
  - JWT (for user authentication)

- **Database**:
  - MySQL (Relational Database Management System)
  
- **Tools**:
  - Git (Version Control)
  - Postman (API Testing)

## Features

- **User Authentication**: Sign up, login, and JWT-based authentication.
- **Project Listings**: Browse projects, view details, and support campaigns.
- **Pledge System**: Users can make pledges to support projects.
- **Admin Panel**: Admins can manage projects and user information.
- **Search and Filters**: Search for projects based on categories and funding status.
- **Responsive Design**: Mobile-friendly design using CSS Flexbox and Grid.

## Installation

### Frontend

1. Clone the repository:

    ```bash
    git clone https://github.com/24projectsideas/kickstart.git
    cd kickstarter-clone/frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

    The frontend will run at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a `.env` file in the backend directory and configure the database connection:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=kickstarter_clone
   JWT_SECRET=your_jwt_secret

4. start the backend server

   ```bash
    npm start
    ```
   
## Database Setup

1. Install MySQL and set up a new database:

   ```sql
   CREATE DATABASE kickstarter;


2. Import the required database schema (e.g., db_schema.sql) into MySQL:

   ```bash
    mysql -u root -p kickstarter < db_schema.sql
    ```

3.  Ensure the .env file in the backend directory is configured correctly for your database.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
