import { LevelsProps } from '../../Helpers/imc';
import styles from './GridItem.module.css';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';

type Props = {
  item: LevelsProps;
};

const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === 'up' && <FaThumbsUp size={30} color="#FFF" />}
        {item.icon === 'down' && <FaThumbsDown size={30} color="#FFF" />}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.youImc && (
        <div className={styles.yourImc}>Seu IMC é de {item.youImc} Kg</div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{' '}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};

export default GridItem;
