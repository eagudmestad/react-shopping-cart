import CartItem from './CartItem';
import { useState } from 'react';
import _ from 'lodash';
import {nanoid} from 'nanoid';

function CartList() {
  const [items, setItems] = useState([
    { id: nanoid(), name: 'Hat', quantity: 2 },
    { id: nanoid(), name: 'Tie', quantity: 2 },
    { id: nanoid(), name: 'Belt', quantity: 1 },
  ]);

  function onNameChange(evt, item) {
    const newName = evt.currentTarget.value;
    setItems(
      _.map(items, (x) => (x.id === item.id ? { ...x, name: newName } : x))
    );
  }

  function onQuantityAdd(evt, item) {
    setItems(
      _.map(items, (x) =>
        x.id === item.id ? { ...x, quantity: ++x.quantity } : x
      )
    );
  }

  function onQuantityRemove(evt, item) {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      setItems(
        _.map(items, (x) =>
          x.id === item.id ? { ...x, quantity: --x.quantity } : x
        )
      );
    } else {
      setItems(_.filter(items, (x) => x.id !== item.id));
    }
  }

  let itemCount = 0;
  for (const item of items) {
    if (item && item.quantity) {
      itemCount += item.quantity;
    }
  }

  return (
    <div className="CartList">
      <h1 className="CartList-header d-flex align-items-start my-3">
        <span>Shopping Cart</span>
        {itemCount > 0 && (
          <span className="badge bg-primary ms-2 rounded-pill fs-4">
            {itemCount}
          </span>
        )}
      </h1>
      <div className='my-3'>
        <button
          type="click"
          className="CartList-add btn btn-primary m-1"
          onClick={(evt) =>
            setItems([
              ...items,
              { id: nanoid(), name: '', quantity: 1 },
            ])
          }
        >
          Add Item
        </button>
      </div>
      <div className='my-3'>
        {itemCount <=0 && <div className='CartList-empty fst-italic fs-3 text-danger'>Your cart is empty! Add some items to it.</div>}
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
    </div>
  );
}

export default CartList;
