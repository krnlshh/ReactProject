import ProductData from "./ProductData";
import { useState } from "react";
import styles from '../style/Product.module.css';
import styled from 'styled-components';

// Define styled component OUTSIDE the function component
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: green;
`;
const Title2 = styled.h1({
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'Blue'
})

function Product(){
    const [tdStyle, setTdStyle] = useState({
        textAlign:'center',
        border: '1px solid #ddd',
        padding: '8px',
        color: '#000',
        backgroundColor: '#ccc'
    });
    
    // Separate function to change colors
    function handleColorChange() {
        setTdStyle({
            ...tdStyle, 
            color: 'blue', 
            backgroundColor: '#fff'
        });
    }
    
    const test = [
        [
            { id: 1, name: "Laptop", price: 1000 },
            { id: 2, name: "Mouse", price: 25 },
            { id: 3, name: "Keyboard", price: 75 },
            { id: 4, name: "Monitor", price: 300 },
            { id: 5, name: "Webcam", price: 80 }
        ],
        [
            { id: 6, name: "Phone", price: 500 },
            { id: 7, name: "Tablet", price: 350 },
            { id: 8, name: "Charger", price: 30 },
            { id: 9, name: "Cable", price: 15 },
            { id: 10, name: "Adapter", price: 20 }
        ],
        [
            { id: 11, name: "Headphones", price: 100 },
            { id: 12, name: "Speaker", price: 150 },
            { id: 13, name: "Microphone", price: 120 },
            { id: 14, name: "Camera", price: 800 },
            { id: 15, name: "Tripod", price: 50 }
        ],
        [
            { id: 16, name: "Desk", price: 200 },
            { id: 17, name: "Chair", price: 180 },
            { id: 18, name: "Lamp", price: 40 },
            { id: 19, name: "Fan", price: 60 },
            { id: 20, name: "Clock", price: 25 }
        ],
        [
            { id: 21, name: "Book", price: 15 },
            { id: 22, name: "Notebook", price: 5 },
            { id: 23, name: "Pen", price: 2 },
            { id: 24, name: "Pencil", price: 1 },
            { id: 25, name: "Eraser", price: 1 }
        ]
    ];
    return(
        <div>
            <Title>Product Data</Title>
            <Title2>Product Data</Title2>
            <button onClick={handleColorChange}>Change Color</button>

            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th className={styles.heading} style={{textAlign:'center', border: '1px solid #ddd', padding: '8px'}}>ID</th>
                        <th style={{textAlign:'center', border: '1px solid #ddd', padding: '8px'}}>Name</th>
                        <th style={{textAlign:'center', border: '1px solid #ddd', padding: '8px'}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {test.map((rowArray, arrayIndex) => (
                        rowArray.map((row) => (
                            <ProductData key={row.id} row={row} tdStyle={tdStyle}/>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Product