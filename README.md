# React x Notion

This sample repo incorporates a backend hosted in a [Notion](https://notion.so) database with a simple [React](https://reactjs.org) frontend.

This sample site is deployed using [Github Pages](https://pages.github.com) but you can substitute this step for a variety of other deployment hosts, including [Vercel](https://vercel.com/dashboard) or [Netlify](https://www.netlify.com) -- see the [Deployment](#deployment) section below for more information on how to set those alternatives up.

## Development

First, you'll need to remove the `.example` extension from the `.env.example` file at the root of this repository. Once this is done, substitute the placeholder text in that file with your unique `NOTION_ACCESS_TOKEN` and `NOTION_DATABASE_ID`. If you need help finding these values within your own workspace, follow [these instructions in the Notion API setup docs](https://developers.notion.com/docs/getting-started).

### Adding new Notion queries

In the `utils/notion.js` file, you'll see the existing Notion queries. Following the conventions outlined by the [`@notionhq/client` Javascript SDK](https://www.npmjs.com/package/@notionhq/client), you can implement additional fetches, pull additional fields from the existing queries, or even post data to your database from inputs on your website's frontend.

## Deployment

### via Github Pages

### via Vercel

### via Netlify
