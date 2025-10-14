function ProductData({row, tdStyle}){      
    return(        
        <tr>
            <td style={tdStyle}>{row.id}</td>
            <td style={tdStyle}>{row.name}</td>
            <td style={tdStyle}>${row.price}</td>            
        </tr>        
    )
}
export default ProductData