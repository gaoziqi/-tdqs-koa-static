/*
 * @Author: gzq
 * @Date: 2018-12-19 14:05:37
 * @Last Modified by: gzq
 * @Last Modified time: 2018-12-19 14:11:55
 * different to koa-static with prefixUrl and redirectUrl
 */

import { Middleware } from 'koa';
import * as send from 'koa-send';

export interface IOption extends send.SendOptions {
  /** url前缀 */
  prefixUrl?: string;
  /** 重定向的url，默认值'/index.html' */
  redirectUrl?: string;
}

export function koaStatic(staticPath, option?: IOption): Middleware {
  require('assert')(staticPath, 'staticPath directory is required');
  const opt = Object.assign(
    {
      prefixUrl: '',
      redirectUrl: '/index.html',
    },
    option,
  );
  opt.root = staticPath;
  return async (ctx, next) => {
    await next();
    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') {
      return;
    }
    if (ctx.body !== null || ctx.status !== 404) {
      return;
    }
    const redirect = `${opt.prefixUrl}${opt.redirectUrl}`;
    const url = ctx.path.slice(opt.prefixUrl.length);
    if (!url || url[0] !== '/' || url === '/') {
      ctx.redirect(redirect);
    } else {
      try {
        await send(ctx, url, opt);
      } catch (err) {
        if (err.status !== 404) {
          throw err;
        } else if (ctx.path === redirect) {
          throw err;
        } else {
          ctx.redirect(redirect);
        }
      }
    }
  };
}
