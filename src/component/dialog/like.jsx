import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Rating,
} from '@material-tailwind/react';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import LikeItems from './likeItems';

const LikeModal = ({ open, handleOpen }) => {
  const { likeItems, cartItems } = useContext(MainContext);
 
  return (
    <Dialog
      open={open}
      handler={handleOpen}>
      <DialogHeader>LIKE MODAL</DialogHeader>
      <DialogBody>
        {likeItems.map((el) => (
          <LikeItems
            key={el.id}
            data={el}
            cart={cartItems.some((item) => item.id == el.id)}
          />
        ))}
      </DialogBody>
      <DialogFooter>
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
      </DialogFooter>
    </Dialog>
  );
};

export default LikeModal;
