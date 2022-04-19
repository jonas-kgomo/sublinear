import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient } from "@linear/sdk";
import ReactMarkdown from "react-markdown";

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Tasks() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      const me = await linear.viewer;
      setUser("  | " + me?.name + " @" + me?.displayName); // @profile display
    }
    getUser();
  }, []);

  const [tasks, setTask] = useState<any[]>([]);
 

  useEffect(() => {
    async function getTasks() {
      const tasks = await linear.issues();
      console.log(tasks?.nodes);

      if (tasks?.nodes?.length) {
        tasks?.nodes?.map((task) =>
          setTask((tasks) => [...tasks, [task]])
        );
      } else {
        console.log(` has no issues`);
      }
    }

    // console.log("length " + tasks.length, tasks);

    getTasks();
  }, []);
 
 
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `
  
  return (
    <div className="card">
       {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
      <div className="user">
        
        <p className="titles">User {user}  </p>
      </div>
     
      <h3 className="taskNumber">
        Tasks {" "} <span >{tasks.length} </span>
      </h3>
      <div className="titles">
      {tasks?.map((item, index) => (
          <p key={index}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-label="Set issue status…"><rect x="1" y="1" width="12" height="12" rx="6" stroke="#f2c94c" stroke-width="2" fill="none"></rect><path fill="#f2c94c" stroke="none" d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z" transform="translate(3.5,3.5)"></path></svg>
      
            <b style={{marginLeft: '8px'}}>{item[0].title} </b>
            <span className="capsule" > {item[0].priorityLabel} </span> <a className="capsule" href={item[0].url}>Link</a>
            <ReactMarkdown children={markdown}></ReactMarkdown>
             <div style={{ borderLeft:'1px solid gray' , marginLeft:'2px', padding:'2px'}}>
             <ReactMarkdown children={item[0].description}  components={{h1:'p',  a: ({node, ...props}) => <em style={{color: 'gray'}} {...props} />  }}></ReactMarkdown>  
          
             </div>
             
            <p></p>
            <span className="date">{item[0].identifier} </span>
          </p>
        ))}
   
      </div>
    </div>
  );
}

export default Tasks;
