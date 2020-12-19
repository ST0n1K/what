import { Card, Col, Row, Image, Select, Form, Button, message } from 'antd';
import React from 'react';

import image from '../../assets/7.jpg';
import image1 from '../../assets/8.jpg';
import './Question4.scss';
import { motion } from 'framer-motion';

const Question = (props) => {
	const { Option } = Select;

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const variants1 = {
		hidden: { x: -300 },
		visible: { x: 0 },
	};

	const variants2 = {
		hidden: { x: 300 },
		visible: { x: 0 },
	};

	const [option, setOption] = React.useState();

	const handleChange = (value) => {
		console.log(`selected ${value}`);
		setOption(value);
	};

	const onFinish = () => {
		if (option === '6') {
			message.success('Congratulations!', 1);
			setTimeout(() => {
				props.history.push('/q5');
			}, 1500);
		} else {
			message.warning('Hmm.. Mm..', 1);
		}
	};

	return (
		<div className="question">
			<Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
				<Col span={20}>
					<Form onFinish={onFinish}>
						<Card className="card-background">
							<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
								<Image src={image} style={{ transform: 'rotate(30deg)', width: '50%', marginLeft: '60%', marginBottom: '30px', zIndex: 2 }} />
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants1}>
								<p style={{ zIndex: 3 }}>Good job! Let me ask more difficult question</p>
								<p>Are you ready?</p>
								<h5 style={{ textAlign: 'center' }}>When did we first go to the cinema?</h5>
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants2}>
								<Form.Item>
									<Select defaultValue="1" style={{ width: '100%', paddingTop: '20px' }} onChange={handleChange}>
										<Option value="1">March 9th, 2018</Option>
										<Option value="2">January 9th, 2019</Option>
										<Option value="3">February 9th, 2019 </Option>
										<Option value="4">January 9th, 2018</Option>
										<Option value="5">February 8th, 2018</Option>
										<Option value="6">February 9th, 2018</Option>
									</Select>
								</Form.Item>
							</motion.div>
							<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
								<Form.Item style={{ textAlign: 'center' }}>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</motion.div>
						</Card>
						<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
							<Image src={image1} style={{ transform: 'rotate(-30deg)', width: '40%', marginLeft: '5%', marginTop: '-40px', zIndex: 2 }} />
						</motion.div>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Question;
