import { App } from 'koishi'
import mock from '@koishijs/plugin-mock'

import * as lodestone from '../src'

describe('lodestone', async () => {
  const app = new App()
  app.plugin(mock)
  app.plugin(lodestone)

  before(() => app.start())
  after(() => app.stop())

  const client = app.mock.client('123')

  it('should get news', async () => {
    await client.shouldReply('lodestone.news')
  }).timeout(0)
})
