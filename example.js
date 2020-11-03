require('dotenv').config()
require('assert')(process.env.YOUGLISH_API_KEY)
const YouglishClient = require('.')

main()

async function main () {
  const youglish = new YouglishClient({ key: process.env.YOUGLISH_API_KEY })
  const query = 'electromagnetic'
  console.log('Searching for', query)
  const results = await youglish.searchVideos({ query })
  console.log(results)
}
