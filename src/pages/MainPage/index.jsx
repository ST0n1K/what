import React from 'react';
import { Row, Col, Divider, Input, Form, Space, message } from 'antd';

import './MainPage.scss';
import { withRouter } from 'react-router-dom';

const MainScreen = (props) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		if (values) {
			console.log(values);
			if (values.phrase.toLowerCase() == 'lesha') {
				props.history.push('/q1');
			} else {
				form.resetFields();
			}
		}
	};

	return (
		<div className="body">
			<Row justify="center" align="bottom" style={{ minHeight: '65vh' }}>
				<Col span={12}>
					<Form form={form} name="dynamic_rule" onFinish={onFinish}>
						<Form.Item
							name="phrase"
							rules={[
								{
									required: true,
									message: 'Input secret phrase',
									len: 5,
								},
							]}
						>
							<Input type="password" placeholder="Secret" />
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default withRouter(MainScreen);
