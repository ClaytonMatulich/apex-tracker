# Apex Tracker

Apex Tracker is a simple web app that lets users who play Apex Legends check a few of their profile statistics from the Xbox Live, Playstation Network, or Origin Platforms. The front end was built with Vue JS and Vuetify. The backend was created with Node/express to serve the API that reached out to a 3rd party API called 'tracker.gg'. Inspiration for this website came from Traversy Media.

Check it out : https://my-apex-stats.herokuapp.com/

(note: in order to view platform avatar pictures you may need to disable certain browser extensions eg: privacy badger )

![Screenshot](https://github.com/ClaytonMatulich/apex-tracker/blob/master/public/img/apex-tracker-home.png)

![Screenshot](https://github.com/ClaytonMatulich/apex-tracker/blob/master/public/img/apex-tracker-search.png)

## Project setup

Use the package manager [npm](https://nodejs.org/en/) to build/run Apex Tracker.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
cd client
npm run build
```

### IMPORTANT BEFORE YOU BUILD:

I have removed my own environment configuration file in order to protect my API keys and information. If you would like to build this application for your self, obtain an api key and api endpoint from [tracker.gg](https://tracker.gg/developers) . Then within the root folder create a file called 'config.env' and set up your environment variables like so:

```
PORT=5000
NODE_ENV = development
TRACKER_API_URL = https://public-api.tracker.gg/v2/apex/standard
TRACKER_API_KEY = putYourOwnKeyHere
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
