import { Context } from 'koishi'
import get, { Region } from 'lodestone-news'

export const getNews = async (
  count: number,
  category: string = 'topics',
  region: Region = 'jp',
): Promise<string> => {
  let json = await get({ region, category, count: 1 })
  if (json.length > count) json = json.slice(0, count)
  return json.map((item) => `${item.title}\n${item.url}`).join('\n\n')
}

export const getWebpage = async (
  ctx: Context,
  url: string,
): Promise<string> => {
  return (await ctx.http.get(url)).data as string
}
