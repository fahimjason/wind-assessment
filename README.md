# wind-assessment

## Attached Questions and Answer

-   How you'll scale the solution to thousands of users?

    > In the broader aspect, we can decouple the frontend and backend applications so that it can be scaled on demand. If our backend service is facing a slowness issue due to a large number of concurrent requests, we can put a Reverse proxy such as Nginx in front of the Backend to load-balance the requests among the backend nodes.

-   How you'd approach logging & monitoring at scale so that you can actually debug the system as it increases in complexity?

    > For logging can use Morgan logger here and printing data in the console log, but in the production environment it will be total mess if we don't persist our logs in a storage like files or database. But in file it's really hard to find the root cause, it that case storing logs into a database could be a great solution. It can be done by many different ways but using ELK (Elasticsearch, Logstash, Kibana) stack is very popular and easy to integrate.

    > We will run the Logstash with our Backend Application in Sidecar pattern and the Logstash will read the log outputs from STDOUT and push it to the Elasticsearch database. To visualize the data Kibana works great with Elasticsearch. With the help of Kibana, we can easily do complex queries on the Logs stored in Elasticsearch and do root-cause analysis in a more convenient way.

    > Since we are using Elastic stack, we can easily use Elastic APM for monitoring. Nodejs Elastic-apm client will send the Application matrices to the APM server which will push the data in real-time into Elasticsearch and we can visualize the data into Kibana Dashboard.

-   Deploy application

    > For easy deployment, I think containerization is the best industry practice nowadays. we can build our own Zenkins pipeline or Github CI/CD pipeline using Github Action to automate this process.
    > Our CI/CD pipeline will do these 3 things specifically,
    >
    > 1.  Running the Test Cases
    > 2.  Re-build the Docker Image and push to Dockerhub with a tag
    > 3.  Trigger the VM to take Pull latest Image from the Dockerhub and Run the container.

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

    Install it from [XAMPP v7.4.29 ](https://www.apachefriends.org/download.html)

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

### 6. Check Designation Organogram

-   Run http://localhost:3000/
-   Select an designation from the selector
