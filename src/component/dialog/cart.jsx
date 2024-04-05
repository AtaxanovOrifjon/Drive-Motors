import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import CartItems from './cartItems';
import { formattedCurrency } from '../../helper';

const CartModal = ({ open, handleOpen }) => {
  const { cartItems } = useContext(MainContext);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const currency = formattedCurrency(totalPrice)

  return (
    <Dialog
      open={open}
      handler={handleOpen}>
      <DialogHeader>Cart modal</DialogHeader>
      <DialogBody>
        {cartItems.length
          ? cartItems.map((el) => (
              <CartItems
                key={el.id}
                data={el}
              />
            ))
          : 'Cart modal is empty'}
      </DialogBody>
      <DialogFooter className="flex items-center justify-between">
        <Button
          variant="filled"
          className="border-2 border-primary block text-primary">
          Total price:{' '}
          <span className="text-xl ml-3">
            {' '}
            {currency}
          </span>
        </Button>
        <div>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default CartModal;
