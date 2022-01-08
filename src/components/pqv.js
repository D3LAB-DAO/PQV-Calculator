import styled from "styled-components";
import { useEffect, useState } from "react";
import { createContext } from "react";

import VoterList from "./voterlist";
import VotingResult from "./votingresult";

export const voterListContext = createContext();

const PQV = () => {
  const [voterList, setVoterList] = useState([
    { index: 0, projList: ["", "", "", ""] },
  ]);

  useEffect(() => {
    console.log(voterList);
    console.log(voterList.length);
  });

  const addList = () => {
    const tmp = [
      ...voterList,
      { index: voterList.length, projList: ["", "", "", ""] },
    ];
    setVoterList(tmp);
  };

  const removeList = () => {
    const tmp = [...voterList];
    tmp.pop();
    setVoterList(tmp);
  };

  const popupAlert = () => {
    return alert("No More Voters!");
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <div className="mb-4">
            <h3>NUMBER OF VOTERS</h3>
            <h1 className="fw-bold">{voterList.length}</h1>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h3>VOTINGS</h3>
      </div>
      <div className="table-responsive mt-3">
        <table className="table align-middle">
          <thead className="fw-bold">
            <td>VOTERS</td>
            <td>PROJECT 1</td>
            <td>PROJECT 2</td>
            <td>PROJECT 3</td>
            <td>PROJECT 4</td>
          </thead>
          <tbody>
            <voterListContext.Provider value={{ voterList, setVoterList }}>
              {voterList.map((e) => (
                <VoterList index={e.index} />
              ))}
            </voterListContext.Provider>
          </tbody>
        </table>
      </div>
      <div className="row mt-3">
        <h3>VOTING RESULTS</h3>
      </div>
      <div className="table-responsive mt-3">
        <table className="table">
          <thead className="fw-bold">
            <td>TYPE</td>
            <td>PROJECT 1</td>
            <td>PROJECT 2</td>
            <td>PROJECT 3</td>
            <td>PROJECT 4</td>
          </thead>
          <tbody>
            <VotingResult />
          </tbody>
        </table>
      </div>
      <voterListContext.Provider value={{ voterList, setVoterList }}>
        <div className="row mb-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={voterList.length < 10 ? addList : popupAlert}
            >
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
      </voterListContext.Provider>
    </div>
  );
};

export default PQV;
