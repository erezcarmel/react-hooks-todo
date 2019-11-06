import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	Container,
	Row,
	Col,
	ListGroup
} from 'react-bootstrap';

import './style.scss';

const updateItem = item => ({ type: "UPDATE_ITEM", item });
const removeItem = item => ({ type: "REMOVE_ITEM", item });

const List = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);

	return (
		<Container className="list">
			<Row>
				<Col xs={{ span: 8, offset: 2 }}>
					{
						todos.length ?
							<ListGroup>
								{ todos.map(item =>
									<ListGroup.Item
										key={item.value}
										className={item.done ? 'done' : ''}
									>
										{ item.value }
										<div className="buttons">
											<input
												type="checkbox"
												checked={item.done}
												onChange={({target: { checked }}) =>
													dispatch(updateItem({...item, done: checked}))}
											/>
											<button
												className="remove"
												onClick={() => dispatch(removeItem(item))}
											>
												X
											</button>
										</div>
									</ListGroup.Item>)
								}
							</ListGroup> :
							<div className="empty">No tasks</div>
					}
				</Col>
			</Row>
		</Container>
	);
};

export default List;