import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { GridMenu } from '../components/GridMenu';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Budi Luhur
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Budi Luhur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GridMenu />
      </IonContent>
    </IonPage>
  );
};

export default Home;
