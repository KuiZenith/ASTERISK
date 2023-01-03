import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Content from "./components/Content.jsx"

export default function App({ theme, scale }) {
  const [companyData, setCompanyData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const companies = await eel.select_company()()
      console.log(companies);
      setCompanyData(companies);
    }
    fetchData()
  }, [])

  return (
    <div id="app" theme={theme} scale={scale}>
      <Header />
      <Sidebar companyData={companyData} />
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route path="/" element={<Content companyData={companyData} />} />
        <ReactRouterDOM.Route path=":companyId" element={<Content companyData={companyData} />}>
          <ReactRouterDOM.Route path="history" element={<Content companyData={companyData} />} />
        </ReactRouterDOM.Route>
      </ReactRouterDOM.Routes>
    </div>
  )
}