import { useEffect, useState } from "react";
import { createContext } from "react";

import VoterList from "./voterlist";
import VotingResult from "./votingresult";
import {
  calLinear,
  calQV,
  calSybil,
  calPQV,
  calEQV,
  calSumVoting,
} from "../utils/voting";

export const voterListContext = createContext();

let isLoading = false;

const PQV = () => {
  const [voterList, setVoterList] = useState([
    { index: 0, projList: ["", "", "", ""] },
  ]);
  const [linearResult, setLinearResult] = useState([]);
  const [QVResult, setQVResult] = useState([]);
  const [sybilResult, setSybilResult] = useState([]);
  const [PQVResult, setPQVResult] = useState([]);
  const [EQVResult, setEQVResult] = useState([]);

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
    isLoading = true;

    let resultLinear = [0, 0, 0, 0];
    let resultQV = [0, 0, 0, 0];
    let resultSybil = [0, 0, 0, 0];
    let resultPQV = [0, 0, 0, 0];
    let resultEQV = [0, 0, 0, 0];
    
    let sumVoting = 0;
    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        sumVoting += calSumVoting(proj);
      });
    });

    voterList.forEach((voter) => {
      voter.projList.forEach((proj, index) => {
        resultLinear[index] += calLinear(proj);
        resultQV[index] += calQV(proj);
        resultSybil[index] += calSybil(proj);
        resultPQV[index] += calPQV(proj, sumVoting);
        resultEQV[index] += calEQV(proj, sumVoting);
      });
    });

    let sumPQV = resultPQV.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);;
    const maxcount = 100;
    let count = 0;
    while (sumPQV === 0 && count < maxcount) {
      voterList.forEach((voter) => {
        voter.projList.forEach((proj, index) => {
          resultPQV[index] += calPQV(proj, sumVoting);
        });
      });

      sumPQV = resultPQV.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      count += 1;
    }

    setLinearResult(resultLinear.map((num) => num.toFixed(2)));
    setQVResult(resultQV.map((num) => num.toFixed(2)));
    setSybilResult(resultSybil.map((num) => num.toFixed(2)));
    setPQVResult(resultPQV.map((num) => num.toFixed(2)));
    setEQVResult(resultEQV.map((num) => num.toFixed(2)));
  };

  // const popupAlert = () => {
  //   return alert("No More Voters!");
  // };

  return (
    <div id="simulator" className="container mb-3 sect">
      <div className="row">
        <h1 className="row__title">SIMULATOR</h1>
      </div>
      <div className="container mb-5">
        <voterListContext.Provider value={{ voterList, setVoterList }}>
          <div className="row">
            <div className="col-lg-1 col-xl-2"></div>
            <div className="col col-lg-5 col-xl-4">
              <div className="card bg-darkgray">
                <h5 className="card-header">NUMBER OF VOTERS</h5>
                <div className="card-body">
                  <h5 className="card-title">{voterList.length}</h5>
                  <div>
                    <i
                      className="bi bi-patch-plus-fill btn-icon btn-icon-padding btn-icon-active"
                      // onClick={voterList.length < 10 ? addList : popupAlert}
                      onClick={voterList.length < 10 ? addList : {}}
                    ></i>
                    <i
                      className="bi bi-patch-minus-fill btn-icon btn-icon-active"
                      onClick={voterList.length > 1 ? removeList : {}}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-5 col-xl-4">
              <div className="card bg-darkgray">
                <h5 className="card-header">NUMBER OF PROPOSALS</h5>
                <div className="card-body">
                  <h5 className="card-title">4</h5>
                  <div>
                    <i className="bi bi-patch-plus-fill btn-icon btn-icon-padding btn-icon-disabled"></i>
                    <i className="bi bi-patch-minus-fill btn-icon btn-icon-disabled"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-xl-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="table-responsive mt-3 col-lg-8">
              <table className="table align-middle">
                <thead className="fw-bold">
                  <tr>
                    <th>VOTERS</th>
                    <th>Proposal A</th>
                    <th>Proposal B</th>
                    <th>Proposal C</th>
                    <th>Proposal D</th>
                  </tr>
                </thead>
                <tbody>
                  {voterList.map((e) => (
                    <VoterList index={e.index} key={e.index} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-dark" onClick={calList}>
                GO
              </button>
            </div>
          </div>
        </voterListContext.Provider>

        <div id="result" style={isLoading ? {} : { display: "none" }}>
          <div className="row row__title row__padding">
            <h3>VOTING RESULTS</h3>
            <hr className="hr__primary" />
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="table-responsive card-body table__padding col-lg-8">
              <table className="table">
                <thead className="fw-bold">
                  <tr>
                    <th>TYPE</th>
                    <th>Proposal A</th>
                    <th>Proposal B</th>
                    <th>Proposal C</th>
                    <th>Proposal D</th>
                  </tr>
                </thead>
                <tbody>
                  <VotingResult
                    linearResult={linearResult}
                    QVResult={QVResult}
                    sybilResult={sybilResult}
                    PQVResult={PQVResult}
                    EQVResult={EQVResult}
                  />
                </tbody>
              </table>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PQV;
