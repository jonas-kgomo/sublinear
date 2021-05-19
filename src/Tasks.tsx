import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient, LinearFetch, User } from "@linear/sdk";
//import { Client } from "@notionhq/client";

// const linearClient = new LinearClient({ apiKey: process.env.LINEAR_KEY });
//const notion = new Client({ auth: process.env.NOTION_KEY });

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Tasks() {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getUser() {
      const me = await linear.viewer;
      setUser("  :" + me?.name + " @" + me?.displayName); // @jonas me?.displayName
    }
    getUser();
  }, []);

  const [tasks, setTasks] = useState("");

  useEffect(() => {
    async function getTasks() {
      const tasks = await linear.issues();
      //setTasks(" :" + tasks?.nodes?.[0].title);
      if (tasks?.nodes?.length) {
        tasks?.nodes?.map(
          (e, i) =>
            //        console.log(`${me.displayName} has issue: ${issue.title}`)
            //   setUser([issue])
            setTasks(" " + tasks?.nodes?.[i].title)
          // e.url
        );
      } else {
        console.log(` has no issues`);
      }
    }
    getTasks();
  }, []);

  return (
    <div className="card">
      <div className="user">
        <p className="h">User</p>
        <p>{user}</p>
      </div>
      <p>Tasks {tasks} </p>
    </div>
  );
}

export default Tasks;
