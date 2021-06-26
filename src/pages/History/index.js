import { IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const History: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <IonItem routerLink="/">Budi Luhur</IonItem>
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Budi Luhur</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div>
          <h3 align="center">Cerdas Berbudi Luhur</h3>
          <p align="center">
          Cerdas dan berbudi luhur merupakan dua hal yang terpadu yang tidak terpisahkan, karena kecerdasan tanpa dilandasi budi yang luhur akan cenderung digunakan untuk membodohi dan mencelakakan orang lain, sebaliknya budi luhur tanpa diimbangi kecerdasan akan merupakan sasaran kejahatan dan penindasan dari orang lain. – Drs. Djaetun. HS (Pendiri Yayasan Pendidikan Budi Luhur Cakti)
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default History;
