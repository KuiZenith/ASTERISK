export default function HistoryInfo() {
  const { companyId } = ReactRouterDOM.useParams()
  const [dateRange, setDateRange] = React.useState(["2020-01-01", "2020-01-31"])
  const [companies, setCompanies] = React.useState([])
  const [prices, setPrices] = React.useState([])
  const [news, setNews] = React.useState([])
  const [chart, setChart] = React.useState(null)
  const [predicted, setPredicted] = React.useState([])
  const [canPredict, setCanPredict] = React.useState(true)

  React.useEffect(() => {
    const fetchCompanies = async () => {
      const companyData = await eel.select_company()()
      setCompanies(companyData)
    }
    fetchCompanies()
  }, [companyId])

  React.useEffect(() => {
    const fetchData = async () => {
      const newStart = new Date(dateRange[0])
      newStart.setDate(newStart.getDate() - 15)
      const priceData = await eel.select_price_within(companyId, [newStart.toISOString().split("T")[0], dateRange[1]])()
      const newsData = await eel.select_news_within(companyId, dateRange)()
      priceData.sort((p1, p2) => new Date(p1.date) < new Date(p2.date))
      newsData.sort((n1, n2) => new Date(n1.date) < new Date(n2.date))
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
    const period = (endDate - startDate) / 1000 / 60 / 60 / 24 + 1
    const graphPrices = []
    const begin = prices.indexOf(prices.find(p => new Date(p.date) > startDate)) - 1
    let index = 0
    // console.log(prices);
    // console.log(prices[begin].date, begin);
    for (let day = 0; day < period; day++) {
      const newDate = new Date(startDate)
      newDate.setDate(startDate.getDate() + day)
      const dateString = newDate.toISOString().split("T")[0]
      labels.push(dateString)
      while (new Date(dateString) > new Date(prices[begin + index].date)) {
        if (begin + index >= prices.length - 1) break
        index++
      }
      if (new Date(dateString) < new Date(prices[begin + index].date)) index--
      // console.log(dateString, prices[begin + index].date, prices[begin + index].price);
      if (prices[begin + index].date !== dateString) {
        if (graphPrices.length) graphPrices.push(graphPrices.at(-1))
        else graphPrices.push(prices[begin].price)
      } else graphPrices.push(prices[begin + index].price)
    }
    // console.log(graphPrices);
    const ctx = document.getElementById("price-graph")
    const datasets = [
      {
        label: "實際收盤價",
        data: graphPrices,
        fill: false,
        borderJoinStyle: "round",
        pointHitRadius: 5,
        pointHoverRadius: 8
      }
    ]
    // console.log(predicted);
    if (predicted.length !== 0) datasets.push({
      label: "預測收盤價",
      data: predicted,
      fill: false,
      borderJoinStyle: "round",
      pointHitRadius: 5,
      pointHoverRadius: 8
    })
    const cht = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets
      }
    })
    setChart(cht)
  }, [dateRange, prices, predicted])

  const predictPrices = async () => {
    if (!canPredict) return
    setCanPredict(false)
    const results = await eel.model_predict(companyId, dateRange)()
    setPredicted(results)
    setCanPredict(true)
  }

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
        <div className="predict-button" onClick={() => predictPrices()}>
          <span>預測</span>
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