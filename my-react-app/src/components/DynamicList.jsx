import { useState } from "react"
function DynamicList(){
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addToList = () => {
    if (inputValue.trim() === '') {
        alert('Please enter an item!');
        return;
    }
        
        setItems([...items, inputValue.trim()]);
        setInputValue('');
    };

    const clearList = () => {
        setItems([]);
    };

        const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    

   return (
        <div className="section">
            <h3>6. Dynamic List</h3>
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add item to list"
            />
            <button onClick={addToList}>Add Item</button>
            <button onClick={clearList}>Clear List</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ margin: '5px 0', padding: '5px', backgroundColor: '#f8f9fa', borderRadius: '3px' }}>
                        {item}
                        <button 
                            onClick={() => removeItem(index)}
                            style={{ marginLeft: '10px', padding: '2px 8px', fontSize: '12px' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default DynamicList