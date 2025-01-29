import './App.css';
import { Home } from './pages/home';
import { LemonApp } from './pages/lemon-app';
import { TestForm } from './pages/test-form';
import { Todo } from './pages/todo';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Todo /> */}
      <LemonApp />
      <TestForm />
    </div>
  );
}

export default App;
