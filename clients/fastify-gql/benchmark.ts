import { runBenchmark } from '../../common/benchmark'
import { main } from './server'

const run = async () => {
  const url = 'http://localhost:3003/graphql'

  const server = await main()

  await runBenchmark(url)

  server.close()

  process.exit(0)
}

run()
