import React from 'react';
import { Chart } from 'primereact/chart';
import './Dashboard.css';

function Dashboard() {
    const categoryData = {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [
            {
                data: [200, 50, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const userData = {
        labels: ['User 1', 'User 2', 'User 3'],
        datasets: [
            {
                data: [200, 100, 150],
                backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
                hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
            },
        ],
    };

    const monthBasedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Assets',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const barOptions = {
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="dashboard">
            <div className="chart-card">
                <h3>Category Based</h3>
                <Chart type="pie" data={categoryData} options={pieOptions} />
            </div>
            <div className="chart-card">
                <h3>User Based</h3>
                <Chart type="pie" data={userData} options={pieOptions} />
            </div>
            <div className="chart-card">
                <h3>Month Based</h3>
                <Chart type="bar" data={monthBasedData} options={barOptions} />
            </div>
        </div>
    );
}

export default Dashboard;
