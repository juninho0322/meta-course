

function GetNames({namesData}) {
 

    return (
        <div>
            {namesData.map(f => <p key={f.id}>{f.id}: {f.name}</p>)}
        </div>
    );
};

export default GetNames;