import { Card, Col, Row, Image, Select, Form, Button, message } from 'antd';
import React from 'react';

import image from '../../assets/5.jpeg';
import image1 from '../../assets/6.jpg';
import './Question3.scss';
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
		if (option === '5') {
			message.success('Congratulations!', 1);
			setTimeout(() => {
				props.history.push('/q4');
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
								<Image src={image} style={{ transform: 'rotate(-30deg) translate(5px, -45px)', width: '50%', zIndex: 2 }} />
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants1}>
								<p style={{ zIndex: 3 }}>I'm excited, sweety! Give more correct answers to finish :)</p>
								<p>Let me ask you a few questions about us hmm..</p>
								<h5 style={{ textAlign: 'center' }}>What was the first place that we visited?</h5>
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants2}>
								<Form.Item>
									<Select defaultValue="1" style={{ width: '100%', paddingTop: '20px' }} onChange={handleChange}>
										<Option value="1">Mario</Option>
										<Option value="2">Lviv Croissants</Option>
										<Option value="3">Frantsua</Option>
										<Option value="4">Pleasantville</Option>
										<Option value="5">Cherepaha</Option>
										<Option value="6">McDonalds</Option>
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
							<Image src={image1} style={{ transform: 'rotate(30deg)', width: '40%', marginLeft: '60%', marginTop: '-40px', zIndex: 2 }} />
						</motion.div>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Question;
