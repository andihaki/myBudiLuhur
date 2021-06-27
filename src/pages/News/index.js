import { IonDatetime, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useSWR from 'swr';

const API = 'http://www.budiluhur.ac.id/wp-json/wp/v2/posts'
const fetcher = url => fetch(url).then(r => r.json())
const News: React.FC = () => {
  const { data, error } = useSWR(API, fetcher)
  if (error || !data) return ''
  
  const posts = data || []

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
          <h3 align="center">Berita Budi Luhur</h3>
          <IonList>
            {posts.map(({ id, title, date }) => (
            <IonItem routerLink={`news/${id}`} key={id}>
              <div dangerouslySetInnerHTML={{__html: title.rendered}} />
              <IonDatetime value={date} displayTimezone="utc" disabled />
            </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default News;
