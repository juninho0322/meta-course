
function PassingProps({ name, age, country }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{country}</td>
      </tr>
    </>
  )
}

export default PassingProps;