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
          <div className="mb-4">
            <h3>NUMBER OF VOTERS</h3>
            <h1>{projList.length}</h1>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h3>PQV VOTINGS</h3>
        <table>
          <tr className="table-bordered">
            <td rowspan="2">VOTERS</td>
            <td colspan="4">(Ex | 10, 20, 30, ...)</td>
            <td rowspan="2">VOTED AMOUNT</td>
            <td rowspan="2">PROJECT'S VOTED AMOUNT</td>
          </tr>
          <tr>
            <td>PROJECT 1</td>
            <td>PROJECT 2</td>
            <td>PROJECT 3</td>
            <td>PROJECT 4</td>
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
