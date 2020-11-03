const nock = require('nock')
const YouglishClient = require('.')

describe('YouglishClient', () => {
  test('searchVideos', async () => {
    const client = new YouglishClient({ key: 'secretz' })
    const mock = nock('https://youglish.com')
      .get('/api/v1/videos/search?key=secretz&query=humanitarian&lg=english')
      .reply(200, { status: 'success' })

    const results = await client.searchVideos({ query: 'humanitarian' })
    expect(mock.isDone()).toBe(true)
    expect(results.status).toBe('success')
  })
})
