import { Context } from 'koishi'

import * as i18n from './i18n'
import { getNews } from './utils'

const categories = [
  'topics',
  'notices',
  'maintenance',
  'updates',
  'status',
  'developers',
]

const ragions = ['jp', 'eu', 'na', 'fr', 'de']

export const name = 'lodestone'

export function apply(ctx: Context, config?: {}): void {
  Object.entries(i18n).forEach(([key, value]) => ctx.i18n.define(key, value))

  ctx
    .command('lodestone.news')
    .alias('lsnews')
    .option('category', '-c <category:string>', {
      fallback: 'topics',
    })
    .option('ragion', '-r <ragion:string>', {
      fallback: 'jp',
    })
    .action(async ({ options, session }) => {
      if (!options) {
        return getNews(5)
      }
      const { category, ragion } = options

      return getNews(5, category, ragion)
    })
}
