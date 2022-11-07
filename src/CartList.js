import CartItem from './CartItem';
import { useState } from 'react';
import _ from 'lodash';

function CartList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Hat', quantity: 2 },
    { id: 2, name: 'Tie', quantity: 2 },
    { id: 3, name: 'Belt', quantity: 1 },
  ]);

  function onNameChange(evt, item) {
    const newName = evt.currentTarget.value;
    setItems(
      _.map(items, (x) => (x.id === item.id ? { ...x, name: newName } : x))
    );
  }

  function onQuantityAdd(evt, item) {
    if (item.quantity >= 0 && item.quantity < 10) {
      setItems(
        _.map(items, (x) =>
          x.id === item.id ? { ...x, quantity: ++x.quantity } : x
        )
      );
    }else{
      
    }
  }

  function onQuantityRemove(evt, item) {
    if (item.quantity > 0 && item.quantity <= 10) {
      setItems(
        _.map(items, (x) =>
          x.id === item.id ? { ...x, quantity: --x.quantity } : x
        )
      );
    }
  }

  return (
    <div className="CartList">
      <h1>Shopping Cart</h1>
      {_.map(items, (item) => (
        <CartItem
          key={item.id}
          item={item}
          onNameChange={(evt) => onNameChange(evt, item)}
          onQuantityAdd={(evt) => onQuantityAdd(evt, item)}
          onQuantityRemove={(evt) => onQuantityRemove(evt, item)}
        />
      ))}
    </div>
  );
}

export default CartList;
