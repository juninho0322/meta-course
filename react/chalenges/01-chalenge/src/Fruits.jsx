

function Fruits({fruitsProps}) {
 

    return (
        <div>
            {fruitsProps.map(f => <p key={f.id}>{f.id}: {f.fruitName}</p>)}
        </div>
    );
};

export default Fruits;