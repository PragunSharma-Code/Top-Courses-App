import CourseCard from './CourseCard';

function Courses(props) {
    let courses = props.api_data;
    const category = props.category;
    // console.log(courses);

    function getCourses() {
        if (category === 'All') {
            let allcourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            });
            return allcourses;
        } else {
            return courses?.[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((coursData) => {
                return <CourseCard key={coursData.id} {...coursData}></CourseCard>
            })}
        </div>
    );
};

export default Courses;