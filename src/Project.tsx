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
    <div className="projects">
      {/* <p>{team?.[0].name}</p>}*/}

      <div>
        {team?.map((e, el) => (
          <div>
            {/* ij <b>{team?.[el].name}</b>  */}
            <p className="titles"> <svg width="16" height="16" viewBox="0 0 24 24" stroke="none" fill="#8A8F98" ><path stroke="none" fill-rule="evenodd" clip-rule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18V6C24 2.68629 21.3137 0 18 0H6ZM7.54545 7H10.4545C10.7558 7 11 7.24421 11 7.54545V10.4545C11 10.7558 10.7558 11 10.4545 11H7.54545C7.24421 11 7 10.7558 7 10.4545V7.54545C7 7.24421 7.24421 7 7.54545 7ZM13.5455 7H16.4545C16.7558 7 17 7.24421 17 7.54545V10.4545C17 10.7558 16.7558 11 16.4545 11H13.5455C13.2442 11 13 10.7558 13 10.4545V7.54545C13 7.24421 13.2442 7 13.5455 7ZM10.4545 13H7.54545C7.24421 13 7 13.2442 7 13.5455V16.4545C7 16.7558 7.24421 17 7.54545 17H10.4545C10.7558 17 11 16.7558 11 16.4545V13.5455C11 13.2442 10.7558 13 10.4545 13ZM13.5455 13H16.4545C16.7558 13 17 13.2442 17 13.5455V16.4545C17 16.7558 16.7558 17 16.4545 17H13.5455C13.2442 17 13 16.7558 13 16.4545V13.5455C13 13.2442 13.2442 13 13.5455 13Z"></path></svg>
            <b style={{ margin:'5px'}}>{e?.[0].name}</b><p>{e?.[0].description}</p>
            </p>
            
          </div>
        ))}
      </div>

      {/* <pre>{JSON.stringify(team, null, 2)}</pre> */}

      {/* {team?.[0].description} */}
    </div>
  );
}

export default Project;
