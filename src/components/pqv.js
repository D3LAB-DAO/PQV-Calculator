import styled from "styled-components";
import { useEffect, useState } from "react";
import { createContext } from "react";

import VoterList from "./voterlist";
import VotingResult from "./votingresult";
import { calCivil, calLinear, calPQV, calQV } from "../utils/voting";

export const voterListContext = createContext();

const PQV = () => {
  const [voterList, setVoterList] = useState([
    { index: 0, projList: ["", "", "", ""] },
  ]);
  const [linearResult, setLinearResult] = useState([]);
  const [QVResult, setQVResult] = useState([]);
  const [civilResult, setCivilResult] = useState([]);
  const [PQVResult, setPQVResult] = useState([]);

  useEffect(() => {});

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

  const calList = () => {
    let resultLinear = [0, 0, 0, 0];
    let resultQV = [0, 0, 0, 0];
    let resultCivil = [0, 0, 0, 0];
    let resultPQV = [0, 0, 0, 0];

    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        resultLinear[index] += calLinear(proj);
      });
    });

    let sumVoting = resultLinear;

    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        resultQV[index] += calQV(proj);
      });
    });

    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        resultCivil[index] += calCivil(proj);
      });
    });

    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        resultPQV[index] += calPQV(proj);
      });
    });

    resultPQV.forEach((data, index) => {
      resultPQV[index] /= sumVoting[index];
    });

    setLinearResult(resultLinear);
    setQVResult(resultQV);
    setCivilResult(resultCivil);
    setPQVResult(resultPQV);
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
            <VotingResult
              linearResult={linearResult}
              QVResult={QVResult}
              civilResult={civilResult}
              PQVResult={PQVResult}
            />
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
            <button
              type="button"
              className="btn-lg btn-success"
              onClick={calList}
            >
              GO
            </button>
          </div>
        </div>
      </voterListContext.Provider>
    </div>
  );
};

export default PQV;
