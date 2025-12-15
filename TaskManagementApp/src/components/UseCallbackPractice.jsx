import { useState,memo,useCallback } from "react";

const UseCallbackPractice = () => {
  console.log('Parent rendered')
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    complete: false,
  });
  const [ theme,setTheme] = useState('dark')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "") return;
    const newUser = {
      id: Date.now(),
      name: formData.name,
      complete: false,
    };
    setUser([...user, newUser]);
    setFormData({ id: "", name: "", complete: false });
  };


  const handleCheck = useCallback((id) => {
  setUser((prevUser) =>  // ✅ Uses functional update
    prevUser.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    )
  );
  }, []);  // ✅ No dependencies! Function NEVER recreates!

  const deleteHandle = useCallback((id) => {
  setUser((prevUser) => prevUser.filter((item) => item.id !== id));
  }, []);  // ✅ No dependencies! Never recreates!

  return (
    <>
    <p>{theme}</p>
    <button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>Change theme </button>
      <input name="name" value={formData.name} onChange={handleChange} />
      <button onClick={handleSubmit}>ADD</button>
      {user.map((item) => (
        <ChildComponent
          key={item.id}
          item={item}
          onToggle={handleCheck}
          onDelete={deleteHandle}
        />
      ))}
    </>
  );
};

const ChildComponent = memo(({ item, onToggle, onDelete }) => {
  console.log('ChildComponent rendered:', item.id)
  return (
    <>
      <div>
        <span
          style={{
            textDecoration: item.complete ? "line-through" : "none",
          }}
        >
          {item.name}
        </span>
        <button onClick={() => onDelete(item.id)}>Delete</button>
        <input
          type="checkbox"
          checked={item.complete}
          onChange={() => onToggle(item.id)}
        />
        status
      </div>
    </>
  );
});

export default UseCallbackPractice;
