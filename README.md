# NAB Weather

![screenshot](https://github.com/duongdev/nab-weather/blob/master/screenshot.png)

**_Note_**: _This project is for demo purpose, which means it's not yet ready for production._

Weather forecast website using [create-react-app](https://create-react-app.dev/) and [material-ui](https://material-ui.com/). API powered by [metaweather.com](https://www.metaweather.com/api).

## Features

- [x] Search for locations with autocomplete.

- [x] View weather forecast by 5 days.

- [x] API query caching by using [react-query](https://react-query.tanstack.com/).

## Demo

See the [public demo](https://nab-weather.netlify.app/) of the NAB Weather!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

- Node.js 8.0+

### Installing

Clone the repository:

```bash
git clone https://github.com/duongdev/nab-weather.git
```

Enter the project directory:

```bash
cd nab-weather
```

Install NPM dependencies:

```bash
yarn install
```

Run the development servers:

```bash
yarn start
```

Run unit tests

```bash
yarn test
```

Go to http://localhost:3000 to access the website.

### Production

Build the web:

```bash
yarn build
```

Start the production servers:

```bash
yarn global add serve
serve -s build
```
