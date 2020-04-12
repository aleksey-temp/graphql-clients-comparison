import autocannon, { Options } from 'autocannon'

export const runBenchmark = async (url: string) => {
  const options: Options = {
    url,
    connections: 5,
    pipelining: 1,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          users {
            firstName
            lastName
            posts {
              content
            }
          }
        }
      `
    })
  }

  const results = await autocannon(options)

  console.log(results)

  return results
}
