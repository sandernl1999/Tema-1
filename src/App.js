import React from 'react';
import './App.css';
import TodoListe from './components/TodoListe';
import Todo from './components/Todo':
import ReactGA from 'react-ga';
ReactGA.initialize('UA-196522041-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="todo-app">
     <TodoListe />
    </div>
  );
}




export default App;
