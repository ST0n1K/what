import { Card, Col, Row, Image, Select, Form, Button, message } from 'antd';
import React from 'react';

import image from '../../assets/1.jpg';
import image1 from '../../assets/2.jpg';
import './Question.scss';
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
		if (option === 'anniversary') {
			message.success('Congratulations!', 1);
			setTimeout(() => {
				props.history.push('/q2');
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
								<p style={{ zIndex: 3 }}>So. Your first task as simple as it is.</p>
								<p>Do you remember what day is it today?!</p>
								<h5 style={{ textAlign: 'center' }}>Good luck! Love youuuu!!</h5>
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants2}>
								<Form.Item>
									<Select defaultValue="bth" style={{ width: '100%', paddingTop: '20px' }} onChange={handleChange}>
										<Option value="bth">My birthday</Option>
										<Option value="ny">New Year</Option>
										<Option value="wd">Our wedding day</Option>
										<Option value="id">Independence day</Option>
										<Option value="anniversary">Our anniversary</Option>
										<Option value="buk">Bukovel trip day</Option>
										<Option value="xmas">Catholics XMas</Option>
									</Select>
								</Form.Item>
							</motion.div>
							<motion.div transition={{ duration: 1.3 }} initial="hidden" animate="visible" variants={variants}>
								<Form.Item style={{ textAlign: 'center' }}>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</motion.div>
						</Card>
						<motion.div transition={{ duration: 1.3 }} initial="hidden" animate="visible" variants={variants}>
							<Image src={image1} style={{ transform: 'rotate(30deg)', width: '40%', marginLeft: '60%', marginTop: '-40px', zIndex: 2 }} />
						</motion.div>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Question;
