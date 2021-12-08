import { Client, LogLevel } from '@notionhq/client'

/**
 * Initialize Notion client & configure a default db query
 */
const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
  logLevel: LogLevel.DEBUG,
})
const getDatabaseQueryConfig = () => {
  const config = {
    database_id: process.env.NOTION_DATABASE_ID,
  }

  return config
}

/**
 * Massage data returned from the Notion API
 * into a Table-friendly object
 */
const fmt = (field) => {
  switch (field.type) {
    case 'created_time':
      return field?.created_time
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
      date_created: fmt(created_on),
      name: fmt(name),
      email: fmt(email_address),
    }
  }, [])
}

/**
 * Add a new user to the Notion db
 */
export const postNewUser = () => {}
