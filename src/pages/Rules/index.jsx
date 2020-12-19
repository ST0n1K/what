import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';

import './Rules.scss';

const Rules = (props) => {
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

	return (
		<div className="rules">
			<Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
				<Col span={20}>
					<Card className="card-background">
						<motion.div transition={{ duration: 1.3 }} initial="hidden" animate="visible" variants={variants}>
							<h2 style={{ textAlign: 'center' }}>=== RULES ===</h2>
						</motion.div>
						<motion.div initial="hidden" animate="visible" variants={variants1}>
							<ul style={{ marginLeft: '20px' }}>
								<h4>
									<li>Answer the listed questions without cheating!</li>
								</h4>
								<h4>
									<li>Smile everytime!</li>
								</h4>
								<h4>
									<li>Give me a kiss after each question!</li>
								</h4>
								<h4>
									<li>{`Be happy your whole life! <3`}</li>
								</h4>
							</ul>
						</motion.div>
						<motion.div initial="hidden" animate="visible" transition={{ duration: 0.7 }} variants={variants2}>
							<h3 style={{ textAlign: 'center' }}>I LOVE YOU!</h3>
						</motion.div>
					</Card>
				</Col>
				<Col>
					<Button onClick={() => props.history.push('/secret')} style={{ width: '150px', borderColor: 'white', textAlign: 'center' }} type="dashed" ghost>
						BEGIN
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Rules;
