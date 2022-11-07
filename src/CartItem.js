function CartItem({ item, onNameChange, onQuantityAdd, onQuantityRemove }) {
  return (
    <div className="CartItem d-flex" id={`item-${item.id}`}>
      <label htmlFor={`item-${item.id}-name`}>Name</label>
      <input
        id={`item-${item.id}-name`}
        type="text"
        value={item.name}
        className="form-control CartItem-name"
        onChange={(evt) => onNameChange(evt)}
      />
      <label htmlFor={`item-${item.id}-name`}>Quantity</label>
      <span id={`item-${item.id}-quantity`} className="m-3 CartItem-quantity">
        {item.quantity}
      </span>
      <button
        type="button"
        className="btn btn-primary m-1 rounded-circle CartItem-add"
        onClick={(evt) => onQuantityAdd(evt)}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="btn btn-danger m-1 rounded-circle CartItem-remove"
        onClick={(evt) => onQuantityRemove(evt)}
      >
        <span>-</span>
        <span className="visually-hidden">Remove</span>
      </button>
    </div>
  );
}

export default CartItem;
