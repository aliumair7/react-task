import logo from './logo.svg';
import './App.css';
import './global.scss'
import TableComponnet from './components/TableComponent';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import React from 'react';


const queryClient = new QueryClient()

function App() {
  return (
    <>
    <Provider store={store} >
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <TableComponnet />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </QueryClientProvider>
    </Provider>
    </>
  );
}

export default App;
