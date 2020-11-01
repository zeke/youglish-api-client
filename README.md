# youglish-api-client

A Node.js client for the Youglish REST API

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install youglish-api-client
```

## Usage

```js
require('dotenv').config()
require('assert')(process.env.YOUGLISH_API_KEY)
const YouglishClient = require('.')

main()

async function main () {
  const youglish = new YouglishClient({ key: process.env.YOUGLISH_API_KEY })
  const query = 'electromagnetic'
  console.log('Searching for', query)
  const results = await youglish.videos({ query })
  console.log(results)
}

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [got](https://ghub.io/got): Human-friendly and powerful HTTP request library for Node.js

## Dev Dependencies

- [jest](https://ghub.io/jest): Delightful JavaScript Testing.
- [nock](https://ghub.io/nock): HTTP server mocking and expectations library for Node.js
- [nodenv](https://ghub.io/nodenv): Adds project level node_modules/.bin to your PATH
- [standard](https://ghub.io/standard): JavaScript Standard Style

