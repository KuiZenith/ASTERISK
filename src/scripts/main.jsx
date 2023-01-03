import App from "./App.jsx"
import "../styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  // <React.StrictMode>
    <ReactRouterDOM.MemoryRouter>
      <App theme="claret" scale="md" />
    </ReactRouterDOM.MemoryRouter>
  // </React.StrictMode>
)