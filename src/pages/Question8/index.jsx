import { Card, Col, Row, Image, Select, Form, Button, message } from 'antd';
import React from 'react';

import image from '../../assets/15.jpg';
import image1 from '../../assets/16.jpg';
import './Question8.scss';
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
		if (option === '3') {
			message.success('Congratulations!', 1);
			setTimeout(() => {
				props.history.push('/q9');
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
								<p style={{ zIndex: 3 }}>Ahh that time.. Love you!</p>
								<p>Next couple of questions will be a bit difficult!</p>
								<h5 style={{ textAlign: 'center' }}>At what age are we going to get married??</h5>
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants2}>
								<Form.Item>
									<Select defaultValue="1" style={{ width: '100%', paddingTop: '20px' }} onChange={handleChange}>
										<Option value="1">22 y.o</Option>
										<Option value="2">24 y.o</Option>
										<Option value="3">25 y.o</Option>
										<Option value="4">23 y.o</Option>
										<Option value="5">27 y.o</Option>
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
					</Form>
					<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
						<Image src={image1} style={{ transform: 'rotate(-30deg)', width: '40%', marginLeft: '5%', marginTop: '-40px', zIndex: 2 }} />
					</motion.div>
				</Col>
			</Row>
		</div>
	);
};

export default Question;
