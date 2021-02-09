import './App.css';
import Header from '../Header/Header'
import InfoBox from '../InfoBoxes/InfoBox'
import Map from '../Map/Map'

import { Card, CardContent } from '@material-ui/core'

function App() {
  return (
    <div className="app">


      <div className='app__left'>
        {/* Header */}
        <Header/>

        <div className='app__InfoBox__stats'>
          {/* Info Boxes Corona Virus Cases*/}
          <InfoBox title='Coronavirus cases' cases={123} total={2345}/>
          {/* Info Boxes Recovered*/}
          <InfoBox title='Recovered' cases={1234} total={24345}/>
          {/* Info Boxes Deaths*/}
          <InfoBox title='Deaths' cases={1235} total={23450}/>
        </div>

        {/* Map */}
        <Map />
        
      </div>
        

      <Card className='app__right'>
        <CardContent>
          <h3>Live cases by country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>

      
    </div>
  );
}

export default App;
