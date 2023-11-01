import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

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
            label: 'Sales',
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
        labels: ['Fashion', 'Gadget', 'Other'],
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

  useEffect(() => {
    // On component mount
    document.documentElement.style.fontSize = '62.5%';

    // On component unmount (cleanup)
    return () => {
      document.documentElement.style.fontSize = ''; // Reset font size to default or any other value you prefer
    };
  }, []);
  return (
    <div class="dashboard dashboardsee">
      <div class="menus flex11-c">
        <div class="logo">
          <div class="icon">
            <ion-icon name="logo-bitbucket"></ion-icon>
          </div>
        </div>
        <div class="navigation">
          <div class="icon">
            <ion-icon name="filter-circle-outline"></ion-icon>
          </div>
          <div class="icon">
            <ion-icon name="file-tray-full-outline"></ion-icon>
          </div>
          <div class="icon">
            <ion-icon name="mail-unread-outline"></ion-icon>
          </div>
          <div class="icon">
            <ion-icon name="pulse-outline"></ion-icon>
          </div>
          <div class="icon">
            <ion-icon name="storefront-outline"></ion-icon>
          </div>
        </div>
        <div class="settings">
          <div class="icon">
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
              <h2 class="headingss">Sales</h2>
              <canvas ref={salesRef} id="sales"></canvas>
            </div>

            <div class="stats-box earning">
              <h2 class="headingss">Earning</h2>
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
              <h2 class="headingss">Sales</h2>
              <canvas ref={productsRef} id="products"></canvas>
            </div>

            <div class="top-selling stats-box">
              <h2 class="headingss">Top Selling Product</h2>
              <table class="top-selling-products" height="100%" width="100%">
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sold</th>
                </tr>

                <tr>
                  <td>68231</td>
                  <td>
                    <div class="product-name flex11">
                      <div class="icon">
                        <ion-icon name="logo-amazon"></ion-icon>
                      </div>
                      <p>Amazon Kindle 4th Gen</p>
                    </div>
                  </td>
                  <td>$1900</td>
                  <td>351</td>
                </tr>

                <tr>
                  <td>68231</td>
                  <td>
                    <div class="product-name iphone flex11">
                      <div class="icon">
                        <ion-icon name="logo-apple"></ion-icon>
                      </div>
                      <p>Iphone 11 Pro</p>
                    </div>
                  </td>
                  <td>$1300</td>
                  <td>121</td>
                </tr>

                <tr>
                  <td>68231</td>
                  <td>
                    <div class="product-name windows flex11">
                      <div class="icon">
                        <ion-icon name="logo-microsoft"></ion-icon>
                      </div>
                      <p>Windows 11</p>
                    </div>
                  </td>
                  <td>$180</td>
                  <td>195</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="profile">
          <div class="title flex11">
            <h2 class="headingss">Profile</h2>
            <div class="icon">
              <ion-icon name="notifications-outline"></ion-icon>
            </div>
          </div>

          <div class="user">
            <img src="img/avatar.png" alt="" />
            <h2>Hassnain Haider</h2>
            <p>Front-End Developer</p>
          </div>

          <div class="activities">
            <div class="title flex11">
              <h2 class="headingss">Activity</h2>
              <p>View All</p>
            </div>
          </div>

          <div class="activity flex11">
            <div class="icon">
              <ion-icon name="wallet-outline"></ion-icon>
            </div>
            <div class="task">
              <h2>Earning Widrawal</h2>
              <p>$125</p>
            </div>
            <div class="time">11:30 AM</div>
          </div>

          <div class="activity flex11">
            <div class="icon">
              <ion-icon name="wallet-outline"></ion-icon>
            </div>
            <div class="task">
              <h2>Website Taxes</h2>
              <p>$95</p>
            </div>
            <div class="time">12:20 AM</div>
          </div>

          <div class="upgrade flex11-c">
            <div class="icon">
              <ion-icon name="albums-outline"></ion-icon>
            </div>

            <p>Unlock more unique features by becoming a <span>PRO</span></p>
          </div>
          <div class="btnss flex11">Upgrade Now</div>
        </div>
      </div>
    </div>
  )
}