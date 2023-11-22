import React, { useEffect } from 'react';
import '../Pages/styles.css';
import ApexCharts from 'apexcharts';

export const Performancepage2 = () => {

    useEffect(() => {
        // ---------- CHARTS ----------

        // BAR CHART
        const barChartOptions = {
            series: [
                {
                    data: [10, 8, 6, 4, 2],
                    name: 'Products',
                },
            ],
            chart: {
                type: 'bar',
                background: 'transparent',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            colors: ['#2962ff', '#2962ff', '#2962ff', '#2962ff', '#2962ff'],
            plotOptions: {
                bar: {
                    distributed: true,
                    borderRadius: 4,
                    horizontal: false,
                    columnWidth: '40%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
            },
            grid: {
                borderColor: '#000',
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            legend: {
                labels: {
                    colors: '#000',
                },
                show: true,
                position: 'top',
            },
            stroke: {
                colors: ['transparent'],
                show: true,
                width: 2,
            },
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'dark',
            },
            xaxis: {
                categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
                title: {
                    style: {
                        color: '#000',
                    },
                },
                axisBorder: {
                    show: true,
                    color: '#000',
                },
                axisTicks: {
                    show: true,
                    color: '#000',
                },
                labels: {
                    style: {
                        colors: '#000',
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Count',
                    style: {
                        color: '#000',
                    },
                },
                axisBorder: {
                    color: '#000',
                    show: true,
                },
                axisTicks: {
                    color: '#000',
                    show: true,
                },
                labels: {
                    style: {
                        colors: '#000',
                    },
                },
            },
        };
        const barChart = new ApexCharts(document.getElementById('bar-chart'), barChartOptions);
        barChart.render();

        // AREA CHART
        const areaChartOptions = {
            series: [
                {
                    name: 'Purchase Orders',
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                    name: 'Sales Orders',
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            chart: {
                type: 'area',
                background: 'transparent',
                height: 350,
                stacked: false,
                toolbar: {
                    show: false,
                },
            },
            colors: ['#2962ff', '#15375c'],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            dataLabels: {
                enabled: false,
            },
            fill: {
                gradient: {
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    shadeIntensity: 1,
                    stops: [0, 100],
                    type: 'vertical',
                },
                type: 'gradient',
            },
            grid: {
                borderColor: '#15375c',
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            legend: {
                labels: {
                    colors: '#15375c',
                },
                show: true,
                position: 'top',
            },
            markers: {
                size: 6,
                strokeColors: '#15375c',
                strokeWidth: 3,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                axisBorder: {
                    color: '#55596e',
                    show: true,
                },
                axisTicks: {
                    color: '#55596e',
                    show: true,
                },
                labels: {
                    offsetY: 5,
                    style: {
                        colors: '#000',
                    },
                },
            },
            yaxis: [
                {
                    title: {
                        text: 'Purchase Orders',
                        style: {
                            color: '#000',
                        },
                    },
                    labels: {
                        style: {
                            colors: ['#000'],
                        },
                    },
                },
                {
                    opposite: true,
                    title: {
                        text: 'Sales Orders',
                        style: {
                            color: '#000',
                        },
                    },
                    labels: {
                        style: {
                            colors: ['#000'],
                        },
                    },
                },
            ],
            tooltip: {
                shared: true,
                intersect: false,
                theme: 'dark',
            },
        };
        const areaChart = new ApexCharts(document.getElementById('area-chart'), areaChartOptions);
        areaChart.render();
    }, []);

    return (
        <div className="grid-container mt-10 mb-10 pl-2 pr-2">
            <header className="headerssss1 mb-7">
                <div className="centersss">
                    <p className='text-center text-3xl font-bold main'>Performance Analytics</p>
                </div>
                <div className="menu-icon">
                    <span className="material-icons-outlined">menu</span>
                </div>
                {/* <div className="header-left"> */}
                {/* <span className="material-icons-outlined">search</span> */}
                {/* </div> */}
                {/* <div className="header-right"> */}
                {/* <span className="material-icons-outlined">notifications</span> */}
                {/* <span className="material-icons-outlined">email</span> */}
                {/* <span className="material-icons-outlined">account_circle</span> */}
                {/* </div> */}
            </header>
            {/* <aside id="sidebar" ref={sidebarRef}>
                <div className="sidebar-title">
                    <div className="sidebar-brand">
                        <span className="material-icons-outlined"></span> Tazkiyah
                    </div>
                    <span className="material-icons-outlined">close</span>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <a href="/" target="_blank">
                            <span className="material-icons-outlined">dashboard</span> Dashboard
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/goal" target="_blank">
                            <span class="material-icons-outlined">inventory_2</span> Set Goal
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/view-gaol" target="_blank">
                            <span class="material-icons-outlined">category</span> View Goal
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/" target="_blank">
                            <span class="material-icons-outlined">groups</span> Notifications
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/" target="_blank">
                            <span class="material-icons-outlined">fact_check</span> TimeLine Management
                        </a>
                    </li>
                    <li class="sidebar-list-item">
                        <a href="/" target="_blank">
                            <span class="material-icons-outlined">poll</span> Upcomming Events
                        </a>
                    </li>
                    {/* <li class="sidebar-list-item"> */}
            {/* <a href="/" target="_blank"> */}
            {/* <span class="material-icons-outlined">settings</span> Settings */}
            {/* </a> */}
            {/* </li> */}
            {/* </ul> */}
            {/* </aside>  */}
            <main className="main-container">
                <div className="main-cards">
                    <div class="card">
                        <div class="card-inner">
                            <h3>EVENTS</h3>
                            <span class="material-icons-outlined">inventory_2</span>
                        </div>
                        <h1>249</h1>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <h3>EBOOKS</h3>
                            <span class="material-icons-outlined">category</span>
                        </div>
                        <h1>25</h1>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <h3>FACULTY</h3>
                            <span class="material-icons-outlined">groups</span>
                        </div>
                        <h1>1500</h1>
                    </div>

                    <div class="card">
                        <div class="card-inner">
                            <h3>NOTIFICATIONS</h3>
                            <span class="material-icons-outlined">notification_important</span>
                        </div>
                        <h1>56</h1>
                    </div>
                </div>
                <div className="charts" style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '60px auto' }}>
                    <div className="charts-card">
                        <h2 className="chart-title color">Top 5 Products</h2>
                        <div id="bar-chart"></div>
                    </div>
                    <div className="charts-card">
                        <h2 className="chart-title color">Purchase and Sales Orders</h2>
                        <div id="area-chart"></div>
                    </div>
                </div>
            </main>
        </div>
    );
};
