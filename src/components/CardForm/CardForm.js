import React, { useState } from "react";
import styles from './CardForm.module.scss';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";


const CardForm = props => {

  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const columnId = props.columnId;

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput 
      type='text' 
      value={title} 
      onChange={e => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );

};

export default CardForm;