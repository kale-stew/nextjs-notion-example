import { Client, LogLevel } from '@notionhq/client'

/**
 * Initialize Notion client & configure a default db query
 */
const notion = new Client({
  auth: process.env.REACT_APP_NOTION_ACCESS_TOKEN,
  logLevel: LogLevel.DEBUG,
})
const getDatabaseQueryConfig = () => {
  // @TODO - make it one week ago? "user sign-ups within the last week"
  let today = new Date().toISOString()

  const config = {
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID,
    // @TODO - uncomment this when we get the ISO string for "one week before today"
    // filter: {
    //   and: [{ property: "created_on", date: { on_or_before: aWeekAgo } }],
    // },
  }

  return config
}

/**
 * Massage data returned from the Notion API
 * into a Table-friendly object
 */
const fmt = (field) => {
  switch (field.type) {
    case 'date':
      return field?.date?.start
    case 'rich_text':
      return field?.rich_text[0]?.plain_text
    case 'title':
      return field?.title[0]?.plain_text
  }
}

/**
 * Fetch list of users from Notion db
 */
export const fetchAllUsers = async () => {
  const config = getDatabaseQueryConfig()
  config.sorts = [{ property: 'created_on', direction: 'descending' }]
  let response = await notion.databases.query(config)

  return response.results.map((result) => {
    const {
      id,
      properties: { created_on, email_address, name },
    } = result

    return {
      id,
      date: fmt(created_on),
      name: fmt(name),
      email: fmt(email_address),
    }
  }, [])
}

/**
 * Add a new user to the Notion db
 */

export const postNewUser = () => {}
