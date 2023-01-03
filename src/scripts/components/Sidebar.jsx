import TreeView from "../views/Treeview.jsx"

export default function Sidebar({ companyData }) {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [companies, setCompanies] = React.useState([])

  React.useEffect(() => {
    if (!companyData.length) return
    console.log(companyData);
    const companiesCopy = [...companies]
    companyData.forEach(company => {
      companiesCopy.push({
        title: `${company.name} (${company.company_ID})`,
        url: `${company.company_ID}`,
        children: [
          {
            title: "歷史股價",
            url: `${company.company_ID}/history`
          }
        ]
      })
    })
    setCompanies(companiesCopy)
  }, [companyData])

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
        {companyData && <TreeView tree={companies} />}
      </div>
    </div>
  )
}