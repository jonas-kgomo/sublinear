const {Octokit} = require("octokit")
const dotenv = require("dotenv")
const {Client} = require("@notionhq/client");
dotenv.config();

const octokit = new Octokit({auth: process.env.GITHUB_KEY})
const notion = new Client({auth:process.env.NOTION_KEY}); 

const database_id = process.env.NOTION_DATABASE_ID;


//Get a paginated list of Tasks currently in a the database. 

async function getIssuesFromDatabse() {
  
    const issues = {}; 
    
    async function getPageOfIssues(cursor){
        let request_payload = "";
        //Create the request payload based on the presense of a start_cursor
        if(cursor == undefined){
            request_payload = {
                path:'databases/' + database_id + '/query', 
                method:'POST',
            }
        } else {
            request_payload= {
                path:'databases/' + database_id + '/query', 
                method:'POST',
                body:{
                    "start_cursor": cursor
                }
            }
        }
        //While there are more pages left in the query, get pages from the database. 
        const current_pages = await notion.request(request_payload)
        // fetching state and issue name
        for(const page of current_pages.results){
            if(page.properties.State){ 
                issues[page.id] = {
                    "State": page.properties.State.select.name,
                    "Name": page.properties.Name.title[0].text.content
                }
            } else {
                issues[page.id] = {
                    "State": "No Status",
                    "Name": page.properties.Name.title[0].text.content
                }
            }
        }
        if(current_pages.has_more){
            await getPageOfIssues(current_pages.next_cursor)
        } 
        
    }
    await getPageOfIssues();

    console.log(issues); 
    return issues; 
}; 

//Get a paginated list of Tasks currently in a the database. 
// async function getIssuesFromDatabse() {

//     const tasks = {} 

//     async function getPageOfTasks(cursor){
//         let request_payload = "";
//         //Create the request payload based on the presense of a start_cursor
//         if(cursor == undefined){
//             request_payload = {
//                 path:'databases/' + database_id + '/query', 
//                 method:'POST',
//             }
//         } else {
//             request_payload= {
//                 path:'databases/' + database_id + '/query', 
//                 method:'POST',
//                 body:{
//                     "start_cursor": cursor
//                 }
//             }
//         }
//         //While there are more pages left in the query, get pages from the database. 
//         const current_pages = await notion.request(request_payload)
        
//         for(const page of current_pages.results){
//             if(page.properties.Status){ 
//                 tasks[page.id] = {
//                     "Status": page.properties.Status.select.name,
//                     "Name": page.properties.Name.title[0].text.content
//                 }
//             } else {
//                 tasks[page.id] = {
//                     "Status": "No Status",
//                     "Name": page.properties.Name.title[0].text.content
//                 }
//             }
//         }
//         if(current_pages.has_more){
//             await getPageOfTasks(current_pages.next_cursor)
//         } 
        
//     }
   
//     await getPageOfTasks();
//     console.log(tasks); 
//     return tasks; 
// }; 



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


console.log(getIssuesFromDatabse())
