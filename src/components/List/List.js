import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	Container,
	Row,
	Col,
	ListGroup
} from 'react-bootstrap';
import {
	updateList,
	updateServer
} from '../../redux/reducers/todo/actions';

import './style.scss';

const List = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todos);
	dispatch(updateServer(todos));

	const update = (todo, checked) => {
		dispatch(
			updateList([...todos]
				.map(item => todo.value === item.value ? {...item, done: checked} : item))
		);
	};

	const remove = item => {
		dispatch(
			updateList([...todos].filter(todo => todo !== item))
		);
	};

	return (
		<Container className="list" data-testid="list">
			<Row>
				<Col xs={{ span: 8, offset: 2 }}>
					{
						todos.length ?
							<ListGroup>
								{ todos.map(item =>
									<ListGroup.Item
										data-testid={item.value}
										key={item.value}
										className={item.done ? 'done' : ''}
									>
										{ item.value }
										<div className="buttons">
											<input
												data-testid={`${item.value}_done`}
												type="checkbox"
												checked={item.done}
												onChange={({target: { checked }}) => update(item, checked)}
											/>
											<button
												data-testid={`${item.value}_remove`}
												className="remove"
												onClick={() => remove(item)}
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