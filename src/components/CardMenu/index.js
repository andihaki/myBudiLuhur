import React from 'react';
import { IonItem } from '@ionic/react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
// import { Ribbon } from 'react-ionicons';

export const CardMenu: React.FC = ({ title, children, icon, background, link }) => {
  return (
    <IonItem routerLink={link}>
      <ion-card style={{ backgroundColors: background}}>
        {icon}
        <ion-card-header>
          <ion-card-title>{title}</ion-card-title>
        </ion-card-header>
      </ion-card>
      
    </IonItem>
  );
};
