import './App.css';
import { AutoComplete } from './components/autocomplete';
import { ContSpec } from './components/containment-and-specialization';
import { UserProfiles } from './exercise/user';
import { ReducerTask } from './exercise/using-reducer';
import { Home } from './pages/home';
import { LemonApp } from './pages/lemon-app';
import { TestForm } from './pages/test-form';
import { Todo } from './pages/todo';
import ImpureFunction from './types-of-functions/impure';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Todo /> */}
      <AutoComplete />
      <ContSpec />
      <ReducerTask />
      <LemonApp />
      <TestForm />
      <ImpureFunction />
      {/* <UserProfiles /> */}
    </div>
  );
}

export default App;
