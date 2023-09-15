export default function Footer({items}) {
    const totalItems = items.length
    const totalCheckedItems = items.filter((item) => item.checked).length
    const percentage = totalItems ? Math.round((totalCheckedItems / totalItems) * 100) : 0
    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {totalCheckedItems} barang sudah dibeli ({percentage}%)</footer>
}