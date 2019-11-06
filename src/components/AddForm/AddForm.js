import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import './style.scss';

const AddForm = () => {
	const dispatch = useDispatch();
	const [item, updateItem] = useState('');

	const addItem = value => ({ type: "ADD_ITEM", value });

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(addItem(item));
		updateItem('');
	};

	return (
		<Container className="add-form">
			<Row>
				<Col xs={{ span: 8, offset: 2 }}>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Add Task</Form.Label>

							<Form.Control
								data-testid="todo-input"
								type="text"
								placeholder="Do something..."
								required
								value={item.value}
								onChange={({ target: { value }}) => updateItem(value)}
							/>

							<Form.Control.Feedback type="invalid">
								Please provide a task
							</Form.Control.Feedback>

						</Form.Group>

						<Button type="submit" data-testid="add-btn">Add</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default AddForm;
