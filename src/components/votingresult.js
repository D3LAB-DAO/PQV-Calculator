import styled from "styled-components";

const VotingResult = (props) => {
  const linearResult = props.linearResult;
  const QVResult = props.QVResult;
  const civilResult = props.civilResult;
  const PQVResult = props.PQVResult;

  return (
    <>
      <tr>
        <td>Linear Voting</td>
        <td>{linearResult[0]}</td>
        <td>{linearResult[1]}</td>
        <td>{linearResult[2]}</td>
        <td>{linearResult[3]}</td>
      </tr>
      <tr>
        <td>QV</td>
        <td>{QVResult[0]}</td>
        <td>{QVResult[1]}</td>
        <td>{QVResult[2]}</td>
        <td>{QVResult[3]}</td>
      </tr>
      <tr>
        <td>QV in Civil Attack</td>
        <td>{civilResult[0]}</td>
        <td>{civilResult[1]}</td>
        <td>{civilResult[2]}</td>
        <td>{civilResult[3]}</td>
      </tr>
      <tr>
        <td>PQV or EQV</td>
        <td>{PQVResult[0]}</td>
        <td>{PQVResult[1]}</td>
        <td>{PQVResult[2]}</td>
        <td>{PQVResult[3]}</td>
      </tr>
    </>
  );
};

export default VotingResult;
