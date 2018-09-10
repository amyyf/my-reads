# MyReads Project

This is the sixth project for my Front-End Nanodegree through [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001), for which I was awarded a merit scholarship by [Grow with Google](https://grow.google/).

Udacity says, "In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application."

It's my first project using React! I began with [static starter code](https://github.com/udacity/reactnd-project-myreads-starter) and refactored to add interactivity. I did change the styling a bit for my version and also improved the site accessibility. I didn't fork this project since I won't be merging my changes back in to the starter files.

## Getting Started

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Udacity's Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend.

__Important__
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
