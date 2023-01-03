import DeckView from "../views/DeckView.jsx"

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="content-section">
        <ReactRouterDOM.Outlet />
        {/* <DeckView deck={courses} Widget={CourseInfo} /> */}
      </div>
    </div>
  )
}