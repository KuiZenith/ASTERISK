import TreeView from "../views/Treeview.jsx"

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [companies, setCompanies] = React.useState([])

  React.useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await eel.select_company()()
      const newCompanies = []
      companyData.forEach(company => {
        newCompanies.push({
          title: `${company.name} (${company.company_id})`,
          url: `${company.company_id}`,
          children: [
            {
              title: "歷史股價",
              url: `${company.company_id}/history`
            }
          ]
        })
      })
      setCompanies(newCompanies)
    }
    fetchCompanies()
  }, [])

  return (
    <div className={`sidebar-wrapper ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-backdrop" onClick={() => {
        if (isExpanded) setIsExpanded(!isExpanded)
      }}></div>
      <div className="sidebar-toggler" onClick={() => setIsExpanded(!isExpanded)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="sidebar-header">
        <span>應用功能</span>
      </div>
      <div className="sidebar-list">
        {companies.length !== 0 && <TreeView tree={companies} />}
      </div>
    </div>
  )
}