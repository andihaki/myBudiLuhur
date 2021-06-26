import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

import { CardMenu } from '../CardMenu';
import './styles.css';

import { Ribbon, Medal, Newspaper, Notifications, Cellular, Location } from 'react-ionicons';
const BACKGROUND_COLORS = ['#C4DCFC', '#262B69', '#A0C4FA', '#B4D0FC', '#73A7F9', '#8CB9FA']

export const GridMenu: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow className="cell-row-1">
        <IonCol>
          <CardMenu title="Fakultas" icon={<Medal
              color={BACKGROUND_COLORS[0]}
              height="100%"
              width="100%"
            />} 
            background={BACKGROUND_COLORS[0]}
            link="home"
          />
        </IonCol>
        <IonCol>
          <CardMenu title="Program Studi" icon={<Ribbon
              color={BACKGROUND_COLORS[1]}
              height="100%"
              width="100%"
              />} 
            link="prodi"
          />
        </IonCol>
      </IonRow>

      <IonRow className="cell-row-2">
        <IonCol>
          <CardMenu title="News" icon={<Newspaper
              color={BACKGROUND_COLORS[2]}
              height="100%"
              width="100%"
              />} 
            link="news"
          />          
        </IonCol>
        <IonCol>
          <CardMenu title="Events" icon={<Notifications
              color={BACKGROUND_COLORS[3]}
              height="100%"
              width="100%"
              />} 
            link="events"
          />
        </IonCol>
      </IonRow>
      <IonRow className="cell-row-3">
        <IonCol>          
          <CardMenu title="History" icon={<Cellular
              color={BACKGROUND_COLORS[4]}
              height="100%"
              width="100%"
              />} 
            link="history"
          />
        </IonCol>
        <IonCol>
          <CardMenu title="Location" icon={<Location
              color={BACKGROUND_COLORS[5]}
              height="100%"
              width="100%"
              />} 
            link="location"
          />
        </IonCol>
      </IonRow>

    </IonGrid>
  </IonContent>
);