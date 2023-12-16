import logo from './logo.svg';
import style from './App.module.css';

function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <img src={logo} className={style.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
   
      </header>
    </div>
  );
}

export default App;
