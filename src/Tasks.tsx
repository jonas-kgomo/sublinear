import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient, LinearFetch, User } from "@linear/sdk";

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
          setTask((tasks) => [...tasks, [task?.title]])
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
      <div className="user">
        <p className="titles">User {user}</p>
      </div>
      <p className="taskNumber">
        Tasks| <span>{tasks.length} </span>
      </p>
      <div className="titles">
        {tasks?.map((item) => (
          <p key={item}>
            {item} <i>{item.url}</i>
          </p>
        ))}
        {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
      </div>
    </div>
  );
}

export default Tasks;
