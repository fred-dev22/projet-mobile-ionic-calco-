import { IonRow } from "@ionic/react"

const Row = (props) => {
    return (
        <IonRow>
            {props.children}
        </IonRow>
    )
}

export default Row;