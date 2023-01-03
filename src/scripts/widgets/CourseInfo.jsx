export default function CourseInfo({ item: course }) {
  return (
    <div className="course-info-wrapper">
      <div className="course-info-title">
        <h3>{course.courseName}</h3>
      </div>
      <div className="course-info-content"></div>
    </div>
  )
}