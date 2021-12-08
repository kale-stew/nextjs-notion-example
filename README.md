# React x Notion

This website is a sample newsletter sign-up page that incorporates a backend hosted in a [Notion](https://notion.so) database with a simple [React](https://reactjs.org) frontend. It has a page to view all existing users, and a page for new users to sign-up on. The database itself is hosted in Notion, and you can view it in realtime [here](https://www.notion.so/notiondenver/2b41ff18697742c094696d0dda317a23?v=0ed93d3d67eb4de0a4410466fd5ef9eb).

This sample site is deployed using [Github Pages](https://pages.github.com) but you can substitute this step for a variety of other deployment hosts, including [Vercel](https://vercel.com/dashboard) or [Netlify](https://www.netlify.com) -- see the [Deployment](#deployment) section below for more information on how to set those alternatives up.

## Development

First, you'll need to remove the `.example` extension from the `.env.example` file at the root of this repository. Once this is done, substitute the placeholder text in that file with your unique `NOTION_ACCESS_TOKEN` and `NOTION_DATABASE_ID`. If you need help finding these values within your own workspace, follow [these instructions in the Notion API setup docs](https://developers.notion.com/docs/getting-started).

### Adding new Notion queries

In the `utils/notion.js` file, you'll see the existing Notion queries. Following the conventions outlined by the [`@notionhq/client` Javascript SDK](https://www.npmjs.com/package/@notionhq/client), you can implement additional fetches, pull additional fields from the existing queries, or even post data to your database from inputs on your website's frontend.

## Deployment

### via Github Pages

This is the solution I've chosen for this repository. Using [this well-documented](https://github.com/peaceiris/actions-gh-pages) Github Action, you can configure Github Pages to deploy your website with every merge to or pull request against the primary branch. See the `.github/workflows/build-and-deploy.yml` file to modify your deployment pipeline.

For steps to set up your deploy and runner access tokens, check out the ["Getting Started" steps](https://github.com/peaceiris/actions-gh-pages#getting-started) for this Action.

### via Vercel

Vercel makes continuous integration of a Next.js website via [their platform](https://vercel.com/dashboard) very straightforward. You only need to auth the dashboard into your preferred source management account (I choose to auth through Github, but Bitbucket and Gitlab are also options), select the repository you'd like to deploy, and Vercel will take care of the rest. They also make it easy to apply changes to your deployment pipeline via a user-friendly dashboard, including configuring custom domains. It's magical.

### via Netlify

Similar to Vercel, Netlify also offers an integrated deployment setup via their user-friendly dashboard. Just like Vercel, you can [log into their dashboard](https://app.netlify.com), authorize a source management account, select the repo you'd like to integrate, and 🌈 just like that ✨ you've got a continually deployed website.
