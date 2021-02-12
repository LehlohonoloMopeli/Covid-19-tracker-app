import React from 'react';
import './AppRight.css';
import Table from './Table';
import LineGraph from './LineGraph';

import { Card, CardContent } from '@material-ui/core'

function AppRight() {

    return (
        <Card className='app__right'>
            <CardContent>
                <h3>Live cases by country</h3>
                <Table />
                <h3>Worldwide new cases</h3>
                <LineGraph />
            </CardContent>
      </Card>
    )
}

export default AppRight; 
