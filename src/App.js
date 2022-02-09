import React, { useEffect } from 'react';
import './assets/fonts/font.css'
import './App.css';
import { Topbar, Info, Templates } from './components';
import { getAllTemplates } from './store/template/templateSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTemplates())
  }, [dispatch])
  return (
    <div className="App">
      <Topbar />
      <Info />
      <Templates />
    </div>
  );
}

export default App;
