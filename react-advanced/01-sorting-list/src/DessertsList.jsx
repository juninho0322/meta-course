// Component to display a list of low-calorie desserts
// filtering desserts with calories less than or equal to 500
// sorting them by calories in ascending order
//mapping them to a list of JSX elements

function DessertsList({ data }) {

  const lowCalorie = data
  .filter(dessert => dessert.calories <=500)
  .sort((a, b) => a.calories - b.calories)
  .map((dessert, index) => (
      <li key={index}>
        {dessert.name} - {dessert.calories}
        </li>
  ))

  return (
    <ul>
      {lowCalorie}
    </ul>
  );
}


export default DessertsList;
