import { runBenchmark } from '../../common/benchmark'
import { main } from './server'

const run = async () => {
  const url = 'http://localhost:3004/graphql'

  const server = await main()

  await runBenchmark(url)

  server.stop()

  process.exit(0)
}

run()
