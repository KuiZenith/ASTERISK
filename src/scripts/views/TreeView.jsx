export default function TreeView({ tree }) {
  let index = 0
  return (
    <div className="treeview-wrapper">
      <ul style={{
        overflow: "auto"
      }}>
        {tree.length !== 0 && tree.map(child => {
          return <TreeNode key={index++} node={child} />
        })}
      </ul>
    </div>
  )
}

function TreeNode({ node }) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const hasChild = node.children && node.children.length !== 0
  let index = 0
  return (
    <li className={`node-wrapper ${isExpanded ? "expanded" : "collapsed"}`} style={{
      height: `calc(${isExpanded && hasChild ? node.children.length + 1 : 1} * var(--list-item-height))`
    }}>
      <ReactRouterDOM.Link to={node.url ? node.url : ""}>
        <div className={`node-title ${hasChild ? "has-child" : "no-child"}`} onClick={() => setIsExpanded(!isExpanded)}>
          {hasChild && (isExpanded ? <i className="fa-sharp fa-solid fa-caret-down"></i> : <i className="fa-solid fa-caret-right"></i>)}
          <span>{node.title}</span>
        </div>
      </ReactRouterDOM.Link>
      {hasChild && <ul>
        {node.children.map(child => {
          return <TreeNode key={index++} node={child} />
        })}
      </ul>}
    </li>
  )
}