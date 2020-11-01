const got = require('got')
const baseURL = 'https://youglish.com/api/v1'

module.exports = class YouglishClient {
  constructor (opts = {}) {
    if (!opts.key) throw new Error('`key` is required to create a new Youglish client')
    this.key = opts.key
    return this
  }

  async searchVideos (opts = {}) {
    const url = `${baseURL}/videos/search`
    opts = {
      key: this.key,
      query: '',
      lg: 'english',
      accent: null,
      restricted: null, // 'no' or 'yes'
      gender: null, // 'm', 'f', or null
      page: null, // positive integer
      ...opts
    }
    let res
    try {
      res = await got(url, { query: opts }).json()
      return res
    } catch (error) {
      console.error(error, opts, url)
      return { error, opts, url }
    }
  }
}
