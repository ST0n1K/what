import { Card, Col, Row, Image, Select, Form, Input, message } from 'antd';
import React from 'react';

import image from '../../assets/11.jpg';
import image1 from '../../assets/12.jpg';
import './Question6.scss';
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

	const [form] = Form.useForm();

	const [option, setOption] = React.useState();

	const handleChange = (value) => {
		console.log(`selected ${value}`);
		setOption(value);
	};

	const onFinish = (values) => {
		if (values.code === '281218') {
			message.success('Congratulations!', 1);
			setTimeout(() => {
				props.history.push('/q7');
			}, 1500);
		} else {
			message.warning('Hmm.. Mm..', 1);
		}
	};

	return (
		<div className="question">
			<Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
				<Col span={20}>
					<Form onFinish={onFinish} form={form}>
						<Card className="card-background">
							<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
								<Image src={image} style={{ transform: 'rotate(-30deg)', width: '50%', marginLeft: '60%', marginBottom: '30px', zIndex: 2 }} />
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants1}>
								<p style={{ zIndex: 3 }}>You did it! Almost.. haha</p>
								<p>Find your next card somewhere. Bathroom..? Under someone's pillow..? Who knows</p>
								<h5 style={{ textAlign: 'center' }}>Secret code?</h5>
							</motion.div>
							<motion.div transition={{ duration: 1 }} initial="hidden" animate="visible" variants={variants2}>
								<Form.Item
									name="code"
									rules={[
										{
											required: true,
											message: 'Input code',
										},
									]}
								>
									<Input type="password" placeholder="Code?" />
								</Form.Item>
							</motion.div>
						</Card>
					</Form>
					<motion.div transition={{ duration: 1.7 }} initial="hidden" animate="visible" variants={variants}>
						<Image src={image1} style={{ transform: 'rotate(30deg)', width: '40%', marginLeft: '5%', marginTop: '-10px', zIndex: 2 }} />
					</motion.div>
				</Col>
			</Row>
		</div>
	);
};

export default Question;
