import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { addItem } from '../redux/actions/receiptActions';

const WeightForm = ({ position, hideForm }) => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(0);

  const handleChange = (event) => {
    event.persist();
    setFormValue(() => (event.target.value));
  };

  const buyItem = (e) => {
    e.preventDefault();
    const weightItemArray = [position, formValue];
    dispatch(addItem([weightItemArray]));
    hideForm();
  };

  return (
    <Form onSubmit={buyItem}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Add weight</Form.Label>
        <Form.Control type="number" placeholder="0" onChange={handleChange} value={formValue} />
        <Form.Text className="text-muted">
          Enter product weight and submit
        </Form.Text>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WeightForm;

WeightForm.propTypes = {
  position: PropTypes.number,
  hideForm: PropTypes.func,
};

WeightForm.defaultProps = {
  position: null,
  hideForm: null,
};
