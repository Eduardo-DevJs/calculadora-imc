import styles from './App.module.css';

const App = () => {
  return (
    <div className="">
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <h2 className={styles.logo}>IMC</h2>
            <span>Feito por Dudu Oliveira</span>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          
        </div>
        <div className={styles.rightSide}>

        </div>
      </div>
    </div>
  );
};

export default App;
