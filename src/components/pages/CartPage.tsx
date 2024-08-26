import { useCart } from "../CartContext";
import { Button } from "../ui/Button";

export const CartPage = () => {
  const { cartItems, setCartItems } = useCart();

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price} each</p>
                <div className="flex items-center">
                  <span className="mr-2">Quantity</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 p-1 border rounded"
                    min="1"
                  />
                </div>
                <p className="text-gray-600 mt-2">
                  Total: ${item.price * item.quantity}
                </p>
              </div>
              <Button
                type="button"
                label="Remove"
                className="danger"
                onClick={() => handleRemoveItem(item.id)}
              />
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total Price: ${calculateTotalPrice()}
            </p>
            <Button
              type="button"
              label="Proceed to Checkout"
              className="primary mt-4"
              onClick={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
};
