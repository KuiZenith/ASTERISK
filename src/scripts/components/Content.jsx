import DeckView from "../views/DeckView.jsx"

import CourseInfo from "../widgets/CourseInfo.jsx"

export default function Content({ companyData }) {
  return (
    <div className="content-wrapper">
      <div className="content-section">
        {/* <DeckView deck={courses} Widget={CourseInfo} /> */}
      </div>
      <div className="content-query-panel"></div>
    </div>
  )
}