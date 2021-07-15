import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


function Tracker({selectRow}) {
    console.log(selectRow)


    return (
        <div className="container">
            <Chart
              width={'500px'}
              height={'300px'}
              chartType="Bar"
              loader={<div>Getting Performance Chart</div>}
              data={[
                ['Grades (Bar)', 'Attempts'],
                ['4', 5],
                ['5', 12],
                ['6', 20],
                ['7', 29],
              ]}
              options={{
                // Material design options
                chart: {
                  title: 'Climbing Performance',
                  subtitle: 'Attempts on various grades in March to June',
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '2' }}
            />
            
        </div>
    )
}

export default Tracker


