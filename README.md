# **@tdqs/koa-static**

The MIT License (MIT)

@tdqs/koa-static koa middleware.

### Table of Contents

**[Installation](#installation)**  
**[API documentation](#api-documentation)**  
**[Example](#example)**

## **Installation**

```
    $ npm install @tdqs/koa-static
```

## **API documentation**

#### Getting Started

```ts
import * as Koa from 'koa';
import { koaStatic } from '@tdqs/koa-static';

const app = new Koa();

//different to koa-static with prefixUrl and redirectUrl
//also can use angular
app.use(koaStatic(__dirname)).listen(8080);
```

## **Example**

Following example could be found inside `/tests` directory.
