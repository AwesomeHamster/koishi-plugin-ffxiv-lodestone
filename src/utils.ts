import { Context } from 'koishi'

export const getWebpage = async (ctx: Context, url: string): Promise<string> => {
  return (await ctx.http.get(url)).data as string
}
