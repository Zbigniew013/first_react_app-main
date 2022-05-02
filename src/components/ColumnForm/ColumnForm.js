import React, { useState } from "react";
import styles from './ColumnForm.module.scss';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/store";

const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => { 
		e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>
        <span className={styles.column}>Title:</span>
        <TextInput 
        type='text' 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        />
      </label>
      <label>
        <span className={styles.column}>Icon:</span>
        <TextInput 
        type='text' 
        value={icon} 
        onChange={e => setIcon(e.target.value)}  
        />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;