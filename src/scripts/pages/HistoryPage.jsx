export default function HistoryInfo() {
  const { companyId } = ReactRouterDOM.useParams()
  const [dateRange, setDateRange] = React.useState(["2017-12-01", "2018-03-31"])
  const [companies, setCompanies] = React.useState([])
  const [prices, setPrices] = React.useState([])
  const [news, setNews] = React.useState([])
  const [chart, setChart] = React.useState(null)

  React.useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await eel.select_company()()
      setCompanies(companyData)
    }
    fetchCompanies()
  }, [companyId])

  React.useEffect(() => {
    const fetchData = async () => {
      const priceData = await eel.select_price_within(companyId, dateRange)()
      const newsData = await eel.select_news_within(companyId, dateRange)()
      setPrices(priceData)
      setNews(newsData)
    }
    fetchData()
  }, [companyId, dateRange])

  React.useEffect(() => {
    if (!prices.length) return
    if (chart) chart.destroy()
    const labels = []
    const startDate = new Date(dateRange[0])
    const endDate = new Date(dateRange[1])
    const period = (endDate - startDate) / 1000 / 60 / 60 / 24
    const graphPrices = []
    let index = 0
    for (let day = 0; day <= period; day++) {
      const newDate = new Date(startDate)
      newDate.setDate(startDate.getDate() + day)
      const dateString = newDate.toISOString().split("T")[0]
      labels.push(dateString)
      graphPrices.push(prices[index].price)
      if (prices[index].date === dateString) index++
    }
    const ctx = document.getElementById("price-graph")
    const cht = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "收盤價",
            data: graphPrices,
            fill: false,
            borderJoinStyle: "round",
            pointHitRadius: 5,
            pointHoverRadius: 8
          }
        ]
      }
    })
    setChart(cht)
  }, [dateRange, prices])

  return (
    <div className="history-info-wrapper">
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>
        <div className="history-info-title">
          <h1>{companies.length !== 0 && `${companies.find(company => company.company_id === companyId).name} (${companyId})`}</h1>
        </div>
        <div className="history-info-content">
          <div>
            <canvas id="price-graph" width="600px" height="400px"></canvas>
          </div>
        </div>
      </div>
      <div className="history-info-news"></div>
    </div>
  )
}