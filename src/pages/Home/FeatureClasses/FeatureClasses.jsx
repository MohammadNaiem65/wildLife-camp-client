import { useState } from 'react';
import bgImg from '../../../assets/div-bg.jpg';
import { useEffect } from 'react';
import leftRays from '../../../assets/rays-l.png';
import rightRays from '../../../assets/rays-r.png';
import AClass from '../../Shared/AClass/AClass';

const FeatureClasses = () => {
	const [classes, setClasses] = useState([]);

	// fetch users
	useEffect(() => {
		fetch('http://localhost:5000/classes/6')
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);
	
	return (
		<div className='mt-28 mb-16 relative'>
			<img
				className='w-full h-[112%] absolute -top-12 -z-10'
				src={bgImg}
				alt='background image'
			/>
			{/* Title */}
			<div className='w-fit mx-auto relative'>
				<img
					className='absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='title-lg'>Instructors</h1>
				<img
					className='absolute -top-6 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>
			{/* Classes */}
			<div className='w-4/5 mx-auto mt-10 grid grid-cols-3 gap-5'>
				{classes.map((aClass) => (
					<AClass key={aClass._id} c={aClass} />
				))}
			</div>
		</div>
	);
};

export default FeatureClasses;
