import CartItem from './CartItem';
import './App.css';
import {useState} from 'react';

function App() {

  const [item1, setItem1] = useState({id:1,name:"Hat", quantity:2});
  const [item2, setItem2] = useState({id:2,name:"Tie", quantity:2});
  const [item3, setItem3] = useState({id:3,name:"Belt", quantity:1});

//  const onNameChange = (evt, item, setItem) => setItem({...item, name:evt.currentTarget.value});
//  const onQuantityAdd = (evt, item,setItem) => setItem({...item, quantity:++item.quantity});
//  const onQuantityRemove = (evt, item, setItem) => setItem({...item,quantity:--item.quantity});
  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartItem item={item1} 
      onNameChange={(evt) => setItem1({...item1,name:evt.currentTarget.value})} 
      onQuantityAdd={(evt) => setItem1({...item1, quantity:++item1.quantity})}
      onQuantityRemove={(evt) => setItem1({...item1,quantity:--item1.quantity})}/>
     <CartItem item={item2} 
      onNameChange={(evt) => setItem2({...item2,name:evt.currentTarget.value})} 
      onQuantityAdd={(evt) => setItem2({...item2, quantity:++item2.quantity})}
      onQuantityRemove={(evt) => setItem2({...item2,quantity:--item2.quantity})}/>
      <CartItem item={item3} 
      onNameChange={(evt) => setItem3({...item3,name:evt.currentTarget.value})} 
      onQuantityAdd={(evt) => setItem3({...item3, quantity:++item3.quantity})}
      onQuantityRemove={(evt) => setItem3({...item3,quantity:--item3.quantity})}/>
    </div>
  );
}

export default App;
