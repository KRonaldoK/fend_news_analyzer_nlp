# News Analyzer with Natural Language Processing

This repository contains the "News Sentiment Analyzer" app.

## Meaning Cloud API configuration

1. Sign-up at  [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)
2. Create a `.env` file in the project root directory
3. Edit the `.env` file with your API key:
   API_KEY=**************************

## Installing

At the "evaluate-news-nlp" folder, run:

`npm install` to resolve dependencies

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Build and run (production mode)

Run `npm run build-prod` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `npm run start` to start the production server

## Build and run (development mode)

Run `npm run build-dev` to build the project and start automatically the webpack dev server
On another terminal run `npm run build-prod` and `npm run start` for the back-end server

## Try the api 

Dev mode at `http://localhost:8080/`

Production mode at `http://localhost:8081/`


