import { IonPage, IonHeader, IonTitle, IonRouterLink, IonIcon, IonToolbar, IonRow, IonGrid, IonCol } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import './Home.css';


const Participants = () => {
    return (
        <IonPage className="noir">
            <IonHeader className='header' >
                <IonToolbar >
                    <IonTitle className='noir titlePart' >Participants</IonTitle>
                    <IonRouterLink href='home' className='people'>
                        <IonIcon icon={arrowBack} />
                    </IonRouterLink>
                </IonToolbar>
            </IonHeader>

            <IonGrid className="noir grid">
                <IonRow className="first bas">
                    <IonCol>NOMS</IonCol>
                    <IonCol>MATRICULES</IonCol>
                </IonRow>
                <IonRow className="bas">
                    <IonCol>PONE WAFO FREDY DEVESKY</IonCol>
                    <IonCol>CM-UDS-19SCI0095</IonCol>
                </IonRow>
                <IonRow className="bas">
                    <IonCol>DONFACK NGOUNE RONALDO JUNIOR</IonCol>
                    <IonCol>CM-UDS-19SCI1606</IonCol>
                </IonRow><IonRow className="bas">
                    <IonCol>MEGNI SOLEFACK JESSIE AUDREY</IonCol>
                    <IonCol>CM-UDS-19SCI0076</IonCol>
                </IonRow><IonRow className="bas">
                    <IonCol>MAPOUE PEKEKO KELLY NOELLE</IonCol>
                    <IonCol>CM-UDS-19SCI0755</IonCol>
                </IonRow>
                <IonRow className="bas">
                    <IonCol>MAKOUTSING TCHEDJOU AUDREY LAWRENCE</IonCol>
                    <IonCol>CM-UDS-19SCI1903</IonCol>
                </IonRow>
            </IonGrid>

        </IonPage>
    )
}

export default Participants;