import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA_wqlpSp5isbgemFeqhTP6QsX2zg7liYA'

const App = () => {
  return (<div>
    <SearchBar />
  </div>)
}

ReactDOM.render(<App />, document.querySelector('.container'))
