import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Content from "./components/Content.jsx"

export default function App({ theme, scale }) {
  const [companies, setCompanies] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const companyData = await eel.select_company()()
      console.log(companyData);
      setCompanies(companyData);
    }
    fetchData()
  }, [])

  return (
    <div id="app" theme={theme} scale={scale}>
      <Header />
      <Sidebar companies={companies} />
      <Content companies={companies} />
    </div>
  )
}