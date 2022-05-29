import './Elem.css';
import { IonCol, IonIcon } from '@ionic/react';
import { backspace, expand } from 'ionicons/icons';

const Elem = (props) => {
  const { valeur, speciale, clickEvent } = props
  return (
    <IonCol className={`${speciale ? 'speciale' : 'nonSpeciale'}`} onClick={e => clickEvent(e, valeur)}>
      {valeur === "/" ? <>&divide;</> : valeur === "*" ? <>&times;</> : valeur === 'del' ? <IonIcon icon={backspace} /> : valeur === 'plus' ? <IonIcon icon={expand}></IonIcon> : valeur}

    </IonCol>
  )
}

export default Elem;