import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './components/Footer'
import { Table } from './components/Table'

import './index.css'

const App = () => (
  <body>
    <div className="content">
      <h1>react-notion-example</h1>
      <br />
      <Table />
    </div>
    <Footer />
  </body>
)

ReactDOM.render(<App />, document.getElementById('root'))
