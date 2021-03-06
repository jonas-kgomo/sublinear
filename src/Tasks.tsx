import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient } from "@linear/sdk";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Tasks() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      const me = await linear.viewer;
      setUser( me?.name + " @" + me?.displayName); // @profile display
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
 
 
 
  
  return (
    <div className="card">
       {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
   
     
      <h3 className="taskNumber">
        Tasks {" "} <span >{tasks.length} </span>
      </h3> 
      <div className="titles"> <p><b>{user}</b></p> <button className="btn"> Linear | Notion </button></div>
    
      <div className="titles">
      {tasks?.map((item, index) => (
          <p key={index}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-label="Set issue status…"><rect x="1" y="1" width="12" height="12" rx="6" stroke="#f2c94c" stroke-width="2" fill="none"></rect><path fill="#f2c94c" stroke="none" d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z" transform="translate(3.5,3.5)"></path></svg>
      
            <b style={{marginLeft: '8px'}}>{item[0].title} </b>
            <span className="capsule" > {item[0].priorityLabel} </span> <a className="capsule" href={item[0].url}>Link</a>
         
             <div style={{ borderLeft:'1px solid gray' , marginLeft:'2px', padding:'2px'}}>
             <ReactMarkdown remarkPlugins={[remarkGfm]} 
             children={item[0].description}  
             components={{ 
               img: ({node, ...props})=> <img  alt="text" style={{ width: '100%'}} {...props}/> , 
               li: ({node, ...props})=> <em style={{ color: 'lightGray'}} {...props}/> ,
               a: ({node, ...props}) => <em style={{color: 'gray'}} {...props} />  }}></ReactMarkdown>  
          
             </div>
             
           
            <span className="date">{item[0].identifier} </span>
          </p>
        ))}
   
      </div>
    </div>
  );
}

export default Tasks;
