# AlgoCraft Problem Setting service

This microservice handles addition of problems and testcases along with solutions
for algocraft platform.

To set up the project on your local machine do the following steps:

1. Clone the project
```
git clone https://github.com/girivardhan1919/AlgoCraft-Proglem-service.git
```

2. Go inside the downloaded folder and install node modules

```
cd AlgoCraft-Proglem-service && npm install
```

3. Create a new .env file in the root directory and set the following env variables
```
PORT=3000
```

4. Start the backend server
```
npm run dev
```




----------------------------


## How routing is working in the project

 - /api/v1/problems/ping
    - because the route starts with /api
        /api      -> /v1      -> /problems     -> /ping
        apiRouter -> v1Router -> problemRouter -> problemController -> service layer