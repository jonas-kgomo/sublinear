import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient } from "@linear/sdk";

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Project() {
  const [team, setUser] = useState<any[]>([]);

  useEffect(() => {
    async function getUser() {
      const teams = await linear.projects();

      if (teams?.nodes?.length) {
        teams?.nodes?.map((task) => setUser((team) => [...team, [task]]));
      } else {
        console.log(` has no issues`);
      }
    }
    getUser();
  }, []);

  return (
    <div>
      {/* <p>{team?.[0].name}</p>}*/}

      <div>
        {team?.map((e, el) => (
          <div>
            {/* ij <b>{team?.[el].name}</b>  */}
            {e?.[0].name}
            <p>{e?.[0].description}</p>
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(team, null, 2)}</pre> */}

      {/* {team?.[0].description} */}
    </div>
  );
}

export default Project;
