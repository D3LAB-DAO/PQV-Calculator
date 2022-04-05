const VotingResult = (props) => {
  const linearResult = props.linearResult;
  const QVResult = props.QVResult;
  const sybilResult = props.sybilResult;
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
        <td>QV in Sybil Attack</td>
        <td>{sybilResult[0]}</td>
        <td>{sybilResult[1]}</td>
        <td>{sybilResult[2]}</td>
        <td>{sybilResult[3]}</td>
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
