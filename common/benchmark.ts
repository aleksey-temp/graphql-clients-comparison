import autocannon, { Options } from 'autocannon'

export const runBenchmark = async (url: string) => {
  const options: Options = {
    url,
    connections: 10,
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
  const {
    requests: { average: reqAvg, sent: totalRequests },
    latency: { average: latAvg },
    throughput: { average: throughputAvg }
  } = results

  console.log(`
    Requests sent: ${totalRequests};
    Avg req/s: ${reqAvg};
    Avg latency (ms): ${latAvg};
    Avg throughput (mb/s): ${throughputAvg / 1000000};
  `)

  return results
}
