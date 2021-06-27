import { IonDatetime, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useSWR from 'swr';

const api = id => `http://www.budiluhur.ac.id/wp-json/wp/v2/posts/${id}`
const fetcher = url => fetch(url).then(r => r.json())
const NewsItem: React.FC = ({match}) => {
  const id = match.params.id;
  
  const { data, error } = useSWR(api(id), fetcher)
  if (error || !data) return ''
  
  const post = data || []

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <IonItem routerLink="/news">Budi Luhur</IonItem>
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
          <h3 
            dangerouslySetInnerHTML={{__html: post.title.rendered}}
            />
          
          <IonDatetime value={post.date} displayTimezone="utc" disabled />
          <div
            dangerouslySetInnerHTML={{__html: post.content.rendered}}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewsItem;
