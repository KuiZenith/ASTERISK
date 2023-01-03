import TreeView from "../views/Treeview.jsx"

export default function Sidebar({ companies }) {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const [functions, setFunctions] = React.useState([
    {
      title: "歷史股價",
      children: []
    }
  ])

  React.useEffect(() => {
    if (!companies.length) return
    console.log(companies);
    const functionsCopy = [...functions]
    for (const fCopy of functionsCopy) {
      companies.forEach(company => {
        fCopy.children.push({
          title: `${company.name} (${company.company_ID})`,
          children: []
        })
      })
    }
    setFunctions(functionsCopy)
  }, [companies])

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
        {companies && <TreeView tree={functions} />}
      </div>
    </div>
  )
}