export default function NewsReport({ record }) {
  const { link, title, content, date } = record
  const maxContentLength = 100

  return (
    <div className="news-card-wrapper" style={{
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      minHeight: "var(--news-min-height)"
    }}>
      <div style={{
        minHeight: "30px"
      }}>
        <h3 style={{
          fontFamily: "NotoSansMono"
        }}>
          <a href={link} rel="noopener noreferrer" target="_blank" style={{
            color: "slateblue",
            cursor: "pointer"
          }}>{title}</a>
        </h3>
      </div>
      <div>
        <p style={{
          fontFamily: "NotoSansMono",
          fontSize: "12px"
        }}>
          {content.slice(0, maxContentLength)}……
        </p>
      </div>
      <div style={{
        height: "30px"
      }}>
        <span style={{
          fontFamily: "NotoSansMono",
          fontSize: "10px"
        }}>{date}</span>
      </div>
    </div>
  )
}