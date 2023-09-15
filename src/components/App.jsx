import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
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
  },
]

export default function App() {
  const [items, setItems] = useState(todosItems)
  function handleAddItem(item){
    setItems([...items, item])
  }
  function handleDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
       <div className="app">
          <Header />
          <Form onAddItem={handleAddItem}/>
          <TodoList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
          <Footer items={items}/>
        </div>
  );
}
