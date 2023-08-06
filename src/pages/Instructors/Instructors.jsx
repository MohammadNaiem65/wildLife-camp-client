import { useContext, useEffect, useState } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';
import Instructor from '../Shared/Instructor/Instructor';
import leftRays from '../../assets/rays-l.png';
import rightRays from '../../assets/rays-r.png';

const Instructors = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);
	const [instructors, setInstructors] = useState([]);

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => {
			setShowNavbar(true);
			fetch('http://localhost:5000/instructors')
				.then((res) => res.json())
				.then((data) => setInstructors(data));
		};
		return unsubscribe();
	}, []);

	return (
		<div className='container'>
			{/* Title */}
			<div className='w-fit mx-auto relative'>
				<img
					className='absolute -top-7 -left-12'
					src={leftRays}
					alt=''
				/>
				<h1 className='title-lg'>Instructors</h1>
				<img
					className='absolute -top-7 -right-12'
					src={rightRays}
					alt=''
				/>
			</div>
			{/* Instructor List*/}
			<div className='mt-10 grid grid-cols-3 gap-5'>
				{instructors.map((instructor) => (
					<Instructor key={instructor._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default Instructors;