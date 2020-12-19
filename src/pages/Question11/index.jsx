import React from 'react';

import './Question11.scss';
import { motion } from 'framer-motion';

const Question = () => {
	const variants = {
		visible: {
			opacity: 1,
		},
		hidden: { opacity: 0 },
	};
	const variants1 = {
		visible: {
			opacity: 1,
			transition: {
				delay: 2.5,
			},
		},
		hidden: { opacity: 0 },
	};
	const variants2 = {
		visible: {
			x: 0,
			transition: {
				delay: 5.5,
			},
		},
		hidden: { x: -400 },
	};
	const variants3 = {
		visible: {
			x: 0,
			transition: {
				delay: 8.5,
			},
		},
		hidden: { x: 400 },
	};

	return (
		<>
			<div className="questionLast">
				<div className="block">
					<motion.div initial="hidden" animate="visible" variants={variants}>
						<h2 style={{ textAlign: 'center' }}>Welcome to the final page!</h2>
					</motion.div>
					<motion.div initial="hidden" animate="visible" variants={variants1}>
						<h4 style={{ textAlign: 'center' }}>I hope that questions were interesting to read and answer.</h4>
					</motion.div>
					<motion.div initial="hidden" animate="visible" variants={variants2}>
						<h4 style={{ textAlign: 'center' }}>But it's not a finish of my surprize.</h4>
					</motion.div>
					<motion.div initial="hidden" animate="visible" variants={variants3}>
						<h3 style={{ textAlign: 'center', color: '#702792' }}>Come to me and make me tell you where is the last part of your gift :)</h3>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Question;
