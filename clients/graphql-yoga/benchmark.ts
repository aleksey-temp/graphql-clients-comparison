import { runBenchmark } from '../../common/benchmark'
import { main } from './server'

const run = async () => {
  const url = 'http://localhost:3008/'

  const { app } = await main()

  await runBenchmark(url)

  app.close()

  process.exit(0)
}

run()
