import styled from "styled-components";
import { useEffect, useState } from "react";
import { createContext } from "react";

import ProjList from "./projlist";

export const projListContext = createContext();

const PQV = () => {
  const [totalVote, setTotalVote] = useState();
  const [projList, setProjList] = useState([{ index: 1, voting: "" }]);

  useEffect(() => {
    console.log(projList);
    console.log(totalVote);
  });

  const addList = () => {
    const tmp = [...projList, { index: projList.length + 1, voting: "" }];
    setProjList(tmp);
  };

  const removeList = () => {
    const tmp = [...projList];
    tmp.pop();
    setProjList(tmp);
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <div class="mb-4">
            <label for="totalVote" class="form-label">
              <h3>TOTAL VOTE AMOUNT</h3>
            </label>
            <input
              type="text"
              class="form-control"
              id="totalVote"
              value={totalVote}
              onChange={(e) => setTotalVote(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div class="mb-4">
            <h3>NUMBER OF PROJECTS</h3>
            <h1>{projList.length}</h1>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h3>PQV VOTINGS</h3>
        <table>
          <tr>
            <td>PROJECTS</td>
            <td>VOTING (Ex | 10, 20, 30 ...)</td>
            <td>VOTED AMOUNT</td>
            <td>PROJECT'S VOTED AMOUNT</td>
          </tr>
          <projListContext.Provider value={{ projList, setProjList }}>
            {projList.map((e) => (
              <ProjList index={e.index} voting={e.voting} />
            ))}
          </projListContext.Provider>
        </table>
      </div>
      <projListContext.Provider value={{ projList, setProjList }}>
        <div className="row mb-3">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={addList}>
              ADD
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeList}
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn-lg btn-success">
              GO
            </button>
          </div>
        </div>
      </projListContext.Provider>
    </div>
  );
};

export default PQV;
