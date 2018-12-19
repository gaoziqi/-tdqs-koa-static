/*
 * @Author: gzq
 * @Date: 2018-12-19 14:05:35
 * @Last Modified by: gzq
 * @Last Modified time: 2018-12-19 14:07:45
 */

import * as Koa from 'koa';
import { koaStatic } from '../src/index';

const app = new Koa();

app.use(koaStatic(__dirname)).listen(8080);
