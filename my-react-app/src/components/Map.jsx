function Map({item}){


    return(
        <div>
            <h1>its map</h1>
            <table style={{
                border: "1px solid black", 
                borderCollapse: "collapse", 
                width: "100%",
                margin: "20px 0"
            }}>
                <thead style={{backgroundColor: "#f0f0f0"}}>
                    <tr>
                        <th style={{border: "1px solid black", padding: "8px"}}>ID</th>
                        <th style={{border: "1px solid black", padding: "8px"}}>Name</th>
                        <th style={{border: "1px solid black", padding: "8px"}}>Price</th>
                        <th style={{border: "1px solid black", padding: "8px"}}>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map(data => (
                        <tr key={data.id}>
                            <td style={{border: "1px solid black", padding: "8px"}}>{data.id}</td>
                            <td style={{border: "1px solid black", padding: "8px"}}>{data.name}</td>
                            <td style={{border: "1px solid black", padding: "8px"}}>${data.price}</td>
                            <td style={{border: "1px solid black", padding: "8px"}}>{data.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Map