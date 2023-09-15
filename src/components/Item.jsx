export default function Item({ item, onDelete, onToggleItem }) {
    const handleDeleteClick = () => {
      onDelete(item.id);
    };
    return (
      <li>
        <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)}/>
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.name}
        </span>
        <button onClick={handleDeleteClick}>&times;</button>
      </li>
    );
  }