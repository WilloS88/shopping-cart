import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/ui/Button";
import { RootState } from "../state/store";
import { removeFromCart, updateQuantity } from "../state/cart/cartSlice";
import type { ProductItem } from "../types/Product";
import { getPublicImageUrl } from "../supabase/getPublicImageUrl";

export const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: Math.max(1, quantity) }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total: number, item: ProductItem) => total + item.price * item.quantity,
      0,
    );
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: ProductItem) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <img
                src={getPublicImageUrl(item.image_url || item.image)}
                alt={item.name}
                className="h-16 w-16 object-cover "
              />
              <div className="ml-4 flex-1">
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
                    className="w-16 rounded border p-1"
                    min="1"
                  />
                </div>
                <p className="mt-2 text-gray-600">
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
