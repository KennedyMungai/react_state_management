import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import { store } from './app/store'
import './index.css'


ReactDOM.render(<App />, document.getElementById("root"))