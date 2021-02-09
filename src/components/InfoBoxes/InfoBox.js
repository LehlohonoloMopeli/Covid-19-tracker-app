import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({ title, cases, total }) {
    return (
        <div className='app__infoBox__stats'>
            <Card className='infoBox'>
                <CardContent>
                    {/* Title */}
                    <Typography className='infoBox_title' color='textSecondary'>{title}</Typography>

                    {/* Number of cases */}
                    <h2 className='infoBox_cases'>{cases}</h2>

                    {/* Total */}
                    <Typography className='infoBox_total' color='textSecondary'>{total}</Typography>

                </CardContent>
            </Card>
        </div>
            
    )
}

export default InfoBox;
