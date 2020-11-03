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

## Example result object

```js
{
  total_results: '2841',
  set_size: '10',
  results: [
    {
      display: 'which plays the electromagnetic waves of a body,',
      seg: null,
      vid: '7yqfTap_cF4',
      start: '651',
      id: '50687345'
    },
    {
      display: 'powerful than the biggest electromagnetic rail gun projectile.',
      seg: null,
      vid: 'vncYqSZMrgM',
      start: '95',
      id: '48459898'
    },
    {
      display: 'other modalities within the electromagnetic spectrum.',
      seg: null,
      vid: 'NzZJQrPPv0M',
      start: '28',
      id: '56000310'
    },
    {
      display: "You're not stretching because you're bound by electromagnetic forces.",
      seg: null,
      vid: 'gniDHWq0R_Q',
      start: '238',
      id: '52197453'
    },
    {
      display: 'of the electromagnetic spectrum as your home wifi.',
      seg: null,
      vid: '9j8G_4FocrA',
      start: '450',
      id: '68935211'
    },
    {
      display: 'wavelength of electromagnetic radiation,',
      seg: null,
      vid: 'laqTml7s_a0',
      start: '2860',
      id: '17832015'
    },
    {
      display: "There's a whole electromagnetic spectrum.",
      seg: null,
      vid: 'laqTml7s_a0',
      start: '2871',
      id: '17832019'
    },
    {
      display: "But that's the electromagnetic wave spectrum.",
      seg: null,
      vid: 'laqTml7s_a0',
      start: '3000',
      id: '17832066'
    },
    {
      display: 'and electromagnetic fields in the universe,',
      seg: null,
      vid: 'laqTml7s_a0',
      start: '44',
      id: '17831016'
    },
    {
      display: 'What is an electromagnetic halo?',
      seg: null,
      vid: 'VaMjhwFE1Zw',
      start: '1749',
      id: '5448533'
    }
  ]
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

