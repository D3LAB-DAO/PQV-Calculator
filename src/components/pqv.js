import { useEffect, useState } from "react";
import { createContext } from "react";

import VoterList from "./voterlist";
import VotingResult from "./votingresult";
import {
  calSybil,
  calLinear,
  calPQV,
  calEQV,
  calQV,
  calSumVoting,
} from "../utils/voting";

export const voterListContext = createContext();

let isLoading = false;

const PQV = () => {
  // In this code, variable Proj means Proposal.
  const [projList, setProjList] = useState([]);
  const [voterList, setVoterList] = useState([]);
  const [linearResult, setLinearResult] = useState([]);
  const [QVResult, setQVResult] = useState([]);
  const [sybilResult, setSybilResult] = useState([]);
  const [EQVResult, setEQVResult] = useState([]);
  const [PQVResult, setPQVResult] = useState([]);

  useEffect(() => {}, []);

  const addVoterList = () => {
    const tmp = [
      ...voterList,
      {
        index: voterList.length,
        projList: projList,
      },
    ];
    setVoterList(tmp);
  };

  const removeVoterList = () => {
    const tmp = [...voterList];
    tmp.pop();
    setVoterList(tmp);
  };

  const addProjList = () => {
    const tmp = [
      ...projList,
      {
        index: projList.length,
        projName: String.fromCharCode(projList.length + 65),
        projVoting: "",
      },
    ];
    setProjList(tmp);

    const ttmp = [...voterList];
    setVoterList(ttmp);
  };

  const removeProjList = () => {
    const tmp = [...projList];
    tmp.pop();
    setProjList(tmp);
  };

  const calList = () => {
    isLoading = true;

    let resultLinear = Array.from({ length: projList.length }, () => 0);
    let resultQV = Array.from({ length: projList.length }, () => 0);
    let resultSybil = Array.from({ length: projList.length }, () => 0);
    let resultEQV = Array.from({ length: projList.length }, () => 0);
    let resultPQV = Array.from({ length: projList.length }, () => 0);

    let sumVoting = Array.from({ length: projList.length }, () => 0);

    voterList.forEach((voter) => {
      voter.projList.forEach((e) => {
        sumVoting[e.index] += calSumVoting(e.projVoting);

        resultLinear[e.index] += calLinear(e.projVoting);
        resultQV[e.index] += calQV(e.projVoting);
        resultSybil[e.index] += calSybil(e.projVoting);
        resultEQV[e.index] += calEQV(e.projVoting);
        resultPQV[e.index] += calPQV(e.projVoting, sumVoting[e.index]);
      });
    });
    resultEQV.forEach((index) => {
      resultEQV[index] /= sumVoting[index] === 0 ? 1 : sumVoting[index];
    });

    setLinearResult(resultLinear.map((num) => num.toFixed(2)));
    setQVResult(resultQV.map((num) => num.toFixed(2)));
    setSybilResult(resultSybil.map((num) => num.toFixed(2)));
    setEQVResult(resultEQV.map((num) => num.toFixed(2)));
    setPQVResult(resultPQV.map((num) => num.toFixed(2)));
  };

  const popupVoterAlert = () => {
    return alert("No More Voters!");
  };

  const popupProjAlert = () => {
    return alert("No More Proposals!");
  };

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
                      onClick={
                        voterList.length < 10 ? addVoterList : popupVoterAlert
                      }
                    ></i>
                    <i
                      className="bi bi-patch-minus-fill btn-icon btn-icon-active"
                      onClick={removeVoterList}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-5 col-xl-4">
              <div className="card bg-darkgray">
                <h5 className="card-header">NUMBER OF PROPOSALS</h5>
                <div className="card-body">
                  <h5 className="card-title">{projList.length}</h5>
                  <div>
                    <i
                      className="bi bi-patch-plus-fill btn-icon btn-icon-padding btn-icon-active"
                      onClick={
                        projList.length < 10 ? addProjList : popupProjAlert
                      }
                    ></i>
                    <i
                      className="bi bi-patch-minus-fill btn-icon btn-icon-active"
                      onClick={removeProjList}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-xl-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="table-responsive mt-3 col-lg">
              <table className="table align-middle">
                <thead className="fw-bold" key="voters">
                  <tr>
                    <th>VOTERS</th>
                    {projList.map((e) => (
                      <th>Proposal {e.projName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {voterList.map((e) => (
                    <VoterList index={e.index} projList={e.projList} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-1"></div>
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
                    {projList.map((e) => (
                      <th>Proposal {e.projName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <VotingResult
                    linearResult={linearResult}
                    QVResult={QVResult}
                    sybilResult={sybilResult}
                    EQVResult={EQVResult}
                    PQVResult={PQVResult}
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
