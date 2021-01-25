# Dexburguer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run json-server to serve as backend

1. Run `npm i -g json-server`

2. Create a file db/db.json

3. Add the content:
`{ "burguers": [] }`

4. Run `json-server --watch db/db.json`

5. The endpoint to access burguers (GET, POST, PUT, DELETE, etc) is `http://localhost:3000/burguers`
