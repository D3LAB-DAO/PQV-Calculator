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
  const [viewProjList, setViewProjList] = useState([]);
  const [projLength, setProjLength] = useState(0);

  const [voterList, setVoterList] = useState([]);
  const [viewVoterList, setViewVoterList] = useState([]);
  const [voterLength, setVoterLength] = useState(0);

  const [linearResult, setLinearResult] = useState([]);
  const [QVResult, setQVResult] = useState([]);
  const [sybilResult, setSybilResult] = useState([]);
  const [EQVResult, setEQVResult] = useState([]);
  const [PQVResult, setPQVResult] = useState([]);

  const [isSet, setIsSet] = useState(false);
  const [isGo, setIsGo] = useState(false);

  useEffect(() => {}, []);

  const addVoterList = () => {
    const tmp = [
      ...voterList,
      {
        index: voterList.length,
        projList: projList,
      },
    ];

    if (voterLength < 10) setVoterLength(voterLength + 1);

    setVoterList(tmp);
  };

  const removeVoterList = () => {
    const tmp = [...voterList];
    tmp.pop();

    if (voterLength > 0) setVoterLength(voterLength - 1);

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

    if (projLength < 10) setProjLength(projLength + 1);

    setProjList(tmp);
  };

  const removeProjList = () => {
    const tmp = [...projList];
    tmp.pop();

    if (projLength > 0) setProjLength(projLength - 1);

    setProjList(tmp);
  };

  const setList = () => {
    setViewVoterList([...voterList]);
    setViewProjList([...projList]);

    setIsSet(true);
  };

  const resetList = () => {
    setVoterList([]);
    setProjList([]);

    setVoterList([]);
    setProjList([]);

    setVoterLength(0);
    setProjLength(0);

    setIsSet(false);
    setIsGo(false);
  };

  const popupVoterAlert = () => {
    return alert("No More Voters!");
  };

  const popupProjAlert = () => {
    return alert("No More Proposals!");
  };

  const calList = () => {
    isLoading = true;
    setIsGo(true);

    const resultLinear = Array.from({ length: projList.length }, () => 0);
    const resultQV = Array.from({ length: projList.length }, () => 0);
    const resultSybil = Array.from({ length: projList.length }, () => 0);
    const resultEQV = Array.from({ length: projList.length }, () => 0);
    const resultPQV = Array.from({ length: projList.length }, () => 0);

    const sumVoting = Array.from({ length: projList.length }, () => 0);

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

    resultEQV.forEach((v, i) => {
      resultEQV[i] /= sumVoting[i] === 0 ? 1 : sumVoting[i];
    });

    setLinearResult(resultLinear.map((num) => num.toFixed(2)));
    setQVResult(resultQV.map((num) => num.toFixed(2)));
    setSybilResult(resultSybil.map((num) => num.toFixed(2)));
    setEQVResult(resultEQV.map((num) => num.toFixed(2)));
    setPQVResult(resultPQV.map((num) => num.toFixed(2)));
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
                <h5 className="card-header">NUMBER OF PROPOSALS</h5>
                <div className="card-body">
                  <h5 className="card-title">{projLength}</h5>
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
            <div className="col col-lg-5 col-xl-4">
              <div className="card bg-darkgray">
                <h5 className="card-header">NUMBER OF VOTERS</h5>
                <div className="card-body">
                  <h5 className="card-title">{voterLength}</h5>
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
            <div className="col-lg-1 col-xl-2"></div>
          </div>
          {!isSet ? (
            <>
              <div className="row mt-3">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={setList}
                  >
                    SET
                  </button>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col">
                  <h3>Please SET Number of Voters and Proposals</h3>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row mt-3">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={resetList}
                  >
                    RESET
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="table-responsive mt-3 col-lg">
                  <table className="table align-middle">
                    <thead className="fw-bold">
                      <tr>
                        <th>VOTERS</th>
                        {viewProjList.map((e) => (
                          <th>
                            Proposal
                            <br />
                            {e.projName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {viewVoterList.map((e) => (
                        <VoterList index={e.index} projList={e.projList} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-1"></div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={calList}
                  >
                    GO
                  </button>
                </div>
              </div>
            </>
          )}
        </voterListContext.Provider>
        {isGo ? (
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PQV;
