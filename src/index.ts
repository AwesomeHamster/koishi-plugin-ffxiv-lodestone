import { Context } from 'koishi'

import * as i18n from './i18n'
import { getNews, Region } from 'lodestone-news'

export const name = 'lodestone'

export function apply(ctx: Context, config?: {}): void {
  Object.entries(i18n).forEach(([key, value]) => ctx.i18n.define(key, value))

  ctx
    .command('lodestone.news')
    .alias('lsnews')
    .option('category', '-c <category:string>', {
      fallback: 'topics',
    })
    .option('region', '-r <region:string>', {
      fallback: 'jp',
    })
    .action(async ({ options, session }) => {
      try {
        const newsList = await getNews({
          count: 3,
          category: options?.category,
          region: options?.region as Region,
        })
        const news = newsList.map((item) => `${item.title}\n${item.url}`).join('\n\n')
        return news
      } catch (e) {
        return session?.text('')
      }
    })
}
