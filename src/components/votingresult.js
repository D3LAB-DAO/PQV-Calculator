const VotingResult = (props) => {
  const linearResult = props.linearResult;
  const QVResult = props.QVResult;
  const sybilResult = props.sybilResult;
  const PQVResult = props.PQVResult;
  const EQVResult = props.EQVResult;

  return (
    <>
      <tr>
        <td>Linear Voting</td>
        {linearResult.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
      <tr>
        <td>QV</td>
        {QVResult.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
      <tr>
        <td>QV in Sybil Attack</td>
        {sybilResult.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
      <tr>
        <td>PQV</td>
        {PQVResult.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
      <tr>
        <td>EQV</td>
        {EQVResult.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
    </>
  );
};

export default VotingResult;
