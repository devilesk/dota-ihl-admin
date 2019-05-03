<h1 align="center">
    <img width="75" src="https://github.com/devilesk/dota-ihl-bot/blob/master/assets/img/logo.png?raw=true">
    <br>
    dota-ihl-admin
</h1>
<h4 align="center">Admin dashboard for <a href="https://github.com/devilesk/dota-ihl-dota">dota-ihl-bot</a>.</h4>

## About

This project is built on top of [react-admin](https://github.com/marmelab/react-admin) and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It requires a running [PostgREST](https://github.com/PostgREST/postgrest) server to provide the REST api and [dota-ihl-auth-server](https://github.com/devilesk/dota-ihl-auth-server) to provide the Steam sign on and generate JWT tokens used to authenticate api requests.

## Requirements

* [Node.js](https://nodejs.org/en/download/) 10+ (Tested with 10.9.0)
* [PostgreSQL](https://www.postgresql.org/download/) 9.5+ (Tested with 9.5.14)
* [PostgREST](https://github.com/PostgREST/postgrest) 5.2+ (Tested with 5.2)

## Getting Started

Create a `.env` file in the project root directory.

```bash
REACT_APP_DB_URI=
REACT_APP_AUTH_PROVIDER=
PORT=
```

```bash
# Install dependencies
$ npm install

# Start the app
$ npm start
```

## License
* [ISC License](https://opensource.org/licenses/ISC)
* Copyright 2019 © [devilesk](https://github.com/devilesk/)