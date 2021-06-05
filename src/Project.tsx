import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearClient } from "@linear/sdk";

const linear = new LinearClient({ apiKey: process.env.REACT_APP_LINEAR_KEY });

function Project() {
  const [team, setUser] = useState<any[]>([]);
  //useState([] as any);

  useEffect(() => {
    async function getUser() {
      const teams = await linear.projects();
      // const k = 0;
      //      const team = teams?.nodes;
      //  console.log(team);
      if (teams?.nodes?.length) {
        teams?.nodes?.map((task) => setUser((team) => [...team, [task?.name]]));
      } else {
        console.log(` has no issues`);
      }

      // setUser(team); // status team?.state
    }
    getUser();
  }, []);

  return (
    <div>
      {/* <p>{team?.[0].name}</p>}*/}

      <div>
        {team?.map((e, el) => (
          <p>
            {/* ij <b>{team?.[el].name}</b>  */}
            {e}
          </p>
        ))}
      </div>

      {/* <pre>{JSON.stringify(team, null, 2)}</pre> */}

      {/* {team?.[0].description} */}
    </div>
  );
}

export default Project;
