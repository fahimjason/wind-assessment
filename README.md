# wind-assessment

## Technologies

-   HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
-   React: Components, Props, Events, Hooks, Router, Axios
-   Context API: Store, Reducers, Actions
-   Node & Express: Web API, Body Parser, JWT
-   MySQL: Sequelize
-   Development: Git, GitHub

## Run Locally

## Local Environment Setup

-   [Git](https://git-scm.com/)
-   [Node.js v16.15.0](https://nodejs.org/en/)
-   [Yarn v1.22.5](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
-   [PostgreSQL v12](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
-   [pgAdmin](https://www.pgadmin.org/)
-   [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone repo

```
$ git clone https://github.com/fahimjason/wind-assessment.git
$ cd wind-assessment
```

### 2. Setup MySQL

-   Local MySQL

    -   Install it from [XAMPP v7.4.29 ](https://www.apachefriends.org/download.html)
        > Create a .env file and adjust the following environment variables. DONOT include the file in the source control.

    ```bash
    DB_NAME=<value>
    DB_USER=<value>
    DB_PASSWORD=<value>
    JWT_SECRET=<value>
    PORT=<value>
    ```

    > Create a database in mysql of XAMPP, put the name on DB_NAME

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

-   Run this on chrome: http://localhost:{port}/api/seed
-   It returns admin email and password and 6 sample products

### 6. Check Designation Organogram

-   Run http://localhost:3000/
-   Select an designation from the selector
