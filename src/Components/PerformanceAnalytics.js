import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import pic from '../assets/img/avatar.png'
import { createGlobalStyle } from 'styled-components';
export const PerformanceAnalytics = () => {
  const salesRef = useRef(null);
  const earningRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const salesChart = new Chart(salesRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Watch Time (min)',
            data: [380, 200, 500, 300, 150, 400, 100],
            backgroundColor: 'rgba(155, 128, 151, 1)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const earningChart = new Chart(earningRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Earning',
            data: [380, 200, 500, 300, 150],
            backgroundColor: 'rgba(155, 128, 151, 1)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const productsChart = new Chart(productsRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Attempted', 'Pending', 'Awaiting'],
        datasets: [
          {
            label: 'Products',
            data: [380, 200, 500],
            backgroundColor: [
              'rgba(155, 128, 151, 1)',
              'rgba(254, 111, 162, 1)',
              'rgba(244, 164, 111, 1)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Destroy previous instances to prevent conflicts
    return () => {
      salesChart.destroy();
      earningChart.destroy();
      productsChart.destroy();
    };
  }, []);

  const GlobalStyle = createGlobalStyle`
  html {
    font-size: 65%; /* default font size */
  }

  @media (max-width: 1180px) {
    html {
      font-size: 50%; /* font size for max-width: 1180px */
    }
  }

  @media (max-width: 1050px) {
    html {
      font-size: 50%; /* font size for max-width: 1050px */
    }
  }
  @media (max-width: 300px) {
    html {
      font-size: 35%; /* font size for max-width: 1050px */
    }
  }
`;

  return (
    <>
      <GlobalStyle />
      <div class="dashboard dashboardsee">
        <div class="menus flex11-c">
          <div class="logo">
            <div class="icon111">
              <ion-icon name="logo-bitbucket"></ion-icon>
            </div>
          </div>
          <div class="navigation">
            <div class="icon111">
              <ion-icon name="filter-circle-outline"></ion-icon>
            </div>
            <div class="icon111">
              <ion-icon name="file-tray-full-outline"></ion-icon>
            </div>
            <div class="icon111">
              <ion-icon name="mail-unread-outline"></ion-icon>
            </div>
            <div class="icon111">
              <ion-icon name="pulse-outline"></ion-icon>
            </div>
            <div class="icon111">
              <ion-icon name="storefront-outline"></ion-icon>
            </div>
          </div>
          <div class="settings">
            <div class="icon111">
              <ion-icon name="settings-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="main-content">
            <div class="headss flex11">
              <h1>Good Morning 👋</h1>

              <div class="box flex11 time-period">
                Monthly
                <ion-icon class="angle" name="caret-down-outline"></ion-icon>
              </div>
              <div class="box flex11">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
            <div class="stats flex11">
              <div class="stats-box sales">
                <h2 class="headingss">Progress</h2>
                <canvas ref={salesRef} id="sales"></canvas>
              </div>

              <div class="stats-box earning">
                <h2 class="headingss">Watch Time (min)</h2>
                <div class="earning-amount flex11-c">
                  <div class="earning-icon flex11">
                    <ion-icon name="logo-paypal"></ion-icon>
                  </div>
                  <p>$9125.33</p>
                </div>
                <canvas ref={earningRef} id="earning"></canvas>
              </div>
            </div>

            <div class="product-stats flex11">
              <div class="product-sales stats-box">
                <h2 class="headingss">Status</h2>
                <canvas ref={productsRef} id="products"></canvas>
              </div>

              <div class="top-selling stats-box">
                <h2 class="headingss">Top Watched Videos</h2>
                <table class="top-selling-products" height="100%" width="100%">
                  <tr>
                    <th>ID</th>
                    <th>Assignment Name</th>
                    {/* <th>Price</th> */}
                    {/* <th>Sold</th> */}
                  </tr>

                  <tr>
                    <td>68231</td>
                    <td>
                      <div class="product-name flex11">
                        <div class="icon111">
                          <ion-icon name="logo-amazon"></ion-icon>
                        </div>
                        <p>Fulfill Salah Obligation</p>
                      </div>
                    </td>
                    {/* <td>$1900</td> */}
                    {/* <td>351</td> */}
                  </tr>

                  <tr>
                    <td>68231</td>
                    <td>
                      <div class="product-name iphone flex11">
                        <div class="icon111">
                          <ion-icon name="logo-apple"></ion-icon>
                        </div>
                        <p>Read, Comprehend Quran</p>
                      </div>
                    </td>
                    {/* <td>$1300</td> */}
                    {/* <td>121</td> */}
                  </tr>

                  <tr>
                    <td>68231</td>
                    <td>
                      <div class="product-name windows flex11">
                        <div class="icon111">
                          <ion-icon name="logo-microsoft"></ion-icon>
                        </div>
                        <p>Embrace Quran's Wisdom</p>
                      </div>
                    </td>
                    {/* <td>$180</td> */}
                    {/* <td>195</td> */}
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div class="profile">
            <div class="title flex11">
              <h2 class="headingss">Profile</h2>
              <div class="icon111">
                <ion-icon name="notifications-outline"></ion-icon>
              </div>
            </div>

            <div class="user">
              <img src={pic} alt="" />
              <h2>Tazkiyah Team</h2>
              <p>Data Scientist</p>
            </div>

            <div class="activities">
              <div class="title flex11">
                <h2 class="headingss">Activity</h2>
                <p>View All</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}