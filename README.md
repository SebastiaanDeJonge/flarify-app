# flarify-app
This project contains the frontend application for Flarify. The API is maintained in a separate project. Feel free to 
play around with the code or modify/redistribute it in any way you please.

For the API, see: https://github.com/SebastiaanDeJonge/flarify-api

### Requirements
* npm
* yarn

### Configuration
Currently no configuration options are available. However if you wish to change the host and or port of the API you can 
simply edit these in `src/App.js:31`.

### Run
Run this application is fairly straightforward. First you must install all the npm modules. You can do so by running the 
following command in your project root.

```yarn install```

After that you are ready to. Simply run this command to start the local server:

```yarn start```

You can reach the application through the following URL: 
http://localhost:3000/

### Roadmap & ToDos
* Add more React components
    * Overview of the most powerful flares
    * Overview of the most active regions
    * Graphs and charts
* Add URL paths to make it possible to copy/paste/preload the application with a given date range
* Add tests
* Add an appropriate browser icon
* Add some more error handling and data verification
* Add handling for region "0" (possibly "unknown")
* Optimize background image (size)
* Correct background scroll reset
* Add styling to date picker
* Allow configuration of API URL and token
* Fix error message and date picker overlap
* Clean up styles
* Implement SASS
* Fix responsive layout
