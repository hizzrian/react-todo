import { useState } from "react";
const todosItems = [
  {
    id: 1,
    name: "Kopi",
    quantity: 4,
    checked: true
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false
  }
]

export default function App() {
  const [items, setItems] = useState(todosItems)
  function handleAddItem(item){
    setItems([...items, item])
    console.log(items)
  }
  return (
       <div className="app">
          <Header />
          <Form onAddItem={handleAddItem}/>
          <TodoList items={items}/>
          <Footer />
        </div>
  );
}

function Header() {
  return <h1>Catatan Todo 📝</h1>
}

function Form({onAddItem}) {
  const [todos, setTodos] = useState('')
  const [quantities, setQuantities] = useState(1)
  const handleSubmit = (e) => {
    if(!todos)return
    e.preventDefault()
    const newTodos = [{ name: todos, quantity: quantities, checked:false, id: Date.now() }]
    console.log(newTodos)
    onAddItem(newTodos)
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

function TodoList({items}) {
  return (
    <>
        <div className="list">
          <ul>
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}  
          </ul>
        </div>
        <div className="actions">
          <select>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button>Bersihkan Daftar</button>
        </div>
    </>
  )
}

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox"/>
      <span style={item.checked ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  )
}

function Footer() {
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
}