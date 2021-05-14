const {Octokit} = require("octokit")
const dotenv = require("dotenv")
const {Client} = require("@notionhq/client");
dotenv.config();

const octokit = new Octokit({auth: process.env.GITHUB_KEY})
const notion = new Client({auth:process.env.NOTION_KEY}); 

const database_id = process.env.NOTION_DATABASE_ID;

(async () => {
  const databaseId = database_id;
  const response = await notion.databases.retrieve({
    database_id: databaseId,

  });
  console.log(response.properties);
})();


// query  the

(async () => {
  const databaseId = database_id;
  const response = await notion.databases.retrieve({
    database_id: databaseId,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ]
  });
  console.log(response);
})();

