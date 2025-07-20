
function PassingProps({ id, name, age, country }) {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{country}</td>
      </tr>
    </>
  )
}

export default PassingProps;