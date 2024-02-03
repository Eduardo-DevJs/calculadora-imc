import { useState } from 'react';
import styles from './App.module.css';
import { levels, calulateImc, LevelsProps } from './Helpers/imc';
import GridItem from './components/GridItem/GridItem';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const App = () => {
  const [campoAltura, setCampoAltura] = useState<number>(0);
  const [campoPeso, setCampoPeso] = useState<number>(0);
  const [mostrarItem, setMostrarItem] = useState<LevelsProps | null>(null);

  function calcularIMC() {
    if (campoPeso && campoAltura) {
      setMostrarItem(calulateImc(campoAltura, campoPeso));
    } else {
      alert('Digite todoso os campos');
    }
  }

  function handleBackButton() {
    window.location.href = '/';
  }

  return (
    <div className={styles.main}>
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
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial da Saúde para Calcular o peso ideal de cada
            Pessoa
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={campoAltura > 0 ? campoAltura : ''}
            onChange={(e) => setCampoAltura(parseFloat(e.target.value))}
            disabled={mostrarItem ? true : false}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 60.5 (em kg)"
            value={campoPeso > 0 ? campoPeso : ''}
            onChange={(e) => setCampoPeso(parseFloat(e.target.value))}
            disabled={mostrarItem ? true : false}
          />

          <button disabled={mostrarItem ? true : false} onClick={calcularIMC}>
            Calcular
          </button>
        </div>

        <div className={styles.rightSide}>
          {!mostrarItem && (
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          )}

          {mostrarItem && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <FaLongArrowAltLeft size={25} color="#fff" />
              </div>
              <GridItem item={mostrarItem} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
