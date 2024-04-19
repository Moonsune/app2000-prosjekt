const MenuCartPage = ({ cartItems, removeFromCart }) => {
  console.log('Received cartItems:', cartItems);

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    console.log('No items in the cart');
    return <div>No items in the cart</div>;
  }

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <h1>Cart Summary</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>Name: {item.title}</p>
          <p>Description: {item.desc}</p>
          <p>Price: kr {item.price}.-</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MenuCartPage;
