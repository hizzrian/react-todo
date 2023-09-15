import { useState } from "react";
export default function Form({onAddItem}) {
    const [todos, setTodos] = useState('')
  
    const [quantities, setQuantities] = useState(1)
  
    const handleSubmit = (e) => {
      if(!todos)return
      e.preventDefault()
      const newItem = { name: todos, quantity: quantities, checked: false, id: Date.now() };
      onAddItem(newItem);
      console.log(newItem)
      setQuantities(1)
      setTodos('')
    }
    const quantity = Array.from({ length: 20 }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select value={quantities} onChange={(e)=>setQuantities(Number(e.target.value))}>
              {quantity }
            </select>
            <input type="text" placeholder="nama barang..." value={todos} onChange={(e)=>setTodos(e.target.value)}/>
          </div>
          <button >Tambah</button>
      </form>
    )
}
  