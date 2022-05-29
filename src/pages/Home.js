import { IonContent, IonHeader, IonItemDivider, IonPage, IonTitle, IonToolbar, IonRow, IonIcon, IonFooter, IonGrid, IonText, IonRouterLink } from '@ionic/react';
import { useState, useEffect } from 'react';
import Elem from '../components/Elem';
import Row from '../components/Row';
import './Home.css';
import { tableau } from './tableau';
import { peopleCircle } from 'ionicons/icons';


const Home = () => {

  const [elementFraper, setElementFraper] = useState("");
  const [resultat, setResultat] = useState(0);
  const [aff, setAff] = useState('');


  const handleClick = (e, operateur) => {
    if ("0123456789".indexOf(operateur) != -1) {
      setAff(operateur);
      console.log(aff);
    }
    if (operateur === "=") {
      total();
    } else if (operateur === "C") {
      reset()
    } else if (operateur === "del") {
      effacer()
    }
    else if (operateur === "%") {
      pourcentage()
    } else if ("*/-+".indexOf(operateur) != -1 && "*/-+".indexOf(elementFraper[elementFraper.length - 1]) != -1) {
      let tmp = elementFraper.slice(0, elementFraper.length - 1);
      setElementFraper(tmp.concat(operateur));

    }
    else {
      setElementFraper(elementFraper.concat(operateur));
    }
  }

  const total = () => {
    setResultat(eval(elementFraper));

  }
  const reset = () => {
    setElementFraper("");
    setResultat(0);
  }
  const effacer = () => {
    setElementFraper(elementFraper.slice(0, elementFraper.length - 1));

  }
  const pourcentage = () => {
    setResultat(resultat / 100);
  }

  useEffect(() => {
    setAff('t');
    total();
  }, [aff])


  return (
    <IonPage className='noir'>
      <IonHeader className='header' >
        <IonToolbar >
          <IonTitle className='noir title' >CALCO</IonTitle>
          <IonRouterLink href='participants' className='people'>
            <IonIcon icon={peopleCircle} />
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonRow className='noir row'>
        <IonText >
          <div className='frapper'>
            {elementFraper}
          </div>
          <div className='frapper'>
            {resultat}
          </div>
        </IonText>

      </IonRow>

      <IonFooter  >
        <IonGrid>
          {tableau.map((row, index) => {
            return (
              <Row key={index}>
                {
                  row.map((elt, index) => {
                    return (
                      <Elem key={index} valeur={elt.valeur} speciale={elt.speciale} clickEvent={handleClick}>

                      </Elem>
                    )
                  })
                }

              </Row>
            )

          })}
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
