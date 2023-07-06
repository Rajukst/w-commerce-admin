import React from 'react';
import "./Dashboard.css"
import TopSummary from '../../AllCharts/TopSummary/TopSummary';
import ChartRenderAll from '../../AllCharts/ChartRenderAll/ChartRenderAll';
const Dashboard = () => {
    return (
        <div className=''>
            <TopSummary/>
            <ChartRenderAll/>
        </div>
    );
};

export default Dashboard;