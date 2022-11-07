import './CartItem.css';

function CartItem({ item, onNameChange, onQuantityAdd, onQuantityRemove }) {
  return (
    <div className="CartItem d-flex" id={`item-${item.id}`}>
      <label htmlFor={`item-${item.id}-name`} className='visually-hidden'>Name</label>
      <input
        id={`item-${item.id}-name`}
        type="text"
        value={item.name}
        //className={"form-control CartItem-name " + (item.name ? 'is-valid':'is-invalid')}
        className={`form-control CartItem-name ${item.name ?'is-valid':'is-invalid'}`}
        onChange={(evt) => onNameChange(evt)}
      />
      <label htmlFor={`item-${item.id}-name`}className='visually-hidden'>Quantity</label>
      <span id={`item-${item.id}-quantity`} className="m-3 CartItem-quantity">
        {item.quantity}
      </span>
      <button
        type="button"
        className="btn btn-primary m-1 rounded-circle CartItem-add"
        onClick={(evt) => onQuantityAdd(evt)}
        id='btnAdd'
        disabled={item.quantity>=10}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="btn btn-danger m-1 rounded-circle CartItem-remove"
        onClick={(evt) => onQuantityRemove(evt)}
        disabled={item.quantity <= 0}
      >
        <span>-</span>
        <span className="visually-hidden">Remove</span>
      </button>
    </div>
  );
}

export default CartItem;
