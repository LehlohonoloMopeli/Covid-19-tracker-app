import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import AppLeft from './components/App/AppLeft/AppLeft'
import reportWebVitals from './reportWebVitals';
import countries__data__state, { countries__data__initial__state } from './components/App/AppLeft/Reducer/CountriesDataReducer'
import { CountriesDataStateProvider } from './components/App/AppLeft/StateProvider/CountriesDataStateProvider'
import table__data__state, { table__data__initial__state } from './components/App/AppLeft/Reducer/TableDataReducer'
import { TableDataStateProvider } from './components/App/AppLeft/StateProvider/TableDataStateProvider'

ReactDOM.render(
  <React.StrictMode>
    <TableDataStateProvider table__data__initial__state={table__data__initial__state} table__data__reducer={table__data__state}>
    <CountriesDataStateProvider countries__data__initial__state={countries__data__initial__state} countries__data__reducer={countries__data__state}>
      <App />
    </CountriesDataStateProvider>
    </TableDataStateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
