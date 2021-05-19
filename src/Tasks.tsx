import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient, LinearFetch, User } from "@linear/sdk";
//import { Client } from "@notionhq/client";

// const linearClient = new LinearClient({ apiKey: process.env.LINEAR_KEY });
//const notion = new Client({ auth: process.env.NOTION_KEY });

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Tasks() {
  const [fact, setFact] = useState("");
  useEffect(() => {
    async function getFact() {
      const me = await linear.viewer;
      //setFact(me);
      setFact("User: " + me?.name);
      return me;
    }
    getFact();
  }, []);

  return (
    <div>
      <p>Current-{fact}</p>
    </div>
  );
}

export default Tasks;
