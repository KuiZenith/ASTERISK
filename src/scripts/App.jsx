import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Content from "./components/Content.jsx"

import HistoryInfo from "./pages/HistoryPage.jsx"

export default function App({ theme, scale }) {
  return (
    <div id="app" theme={theme} scale={scale}>
      <Header />
      <Sidebar />
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route path="/" element={<Content />} />
        <ReactRouterDOM.Route path=":companyId" element={<Content />}>
          <ReactRouterDOM.Route path="history" element={<HistoryInfo />} />
        </ReactRouterDOM.Route>
      </ReactRouterDOM.Routes>
    </div>
  )
}