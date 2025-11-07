const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MyApp by Osama Faisal - Inspired by Apple Store</title>
      <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f5f5f7;
          color: #1d1d1f;
          line-height: 1.5;
          overflow-x: hidden;
        }
        .hero {
          background: linear-gradient(135deg, #0071e3, #40e0d0);
          color: white;
          padding: 100px 20px;
          text-align: center;
          position: relative;
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          animation: fadeInUp 1s ease-out;
        }
        .hero p {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 40px;
          animation: fadeInUp 1.2s ease-out;
        }
        .hero .btn {
          background: white;
          color: #0071e3;
          padding: 15px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
          animation: fadeInUp 1.4s ease-out;
        }
        .hero .btn:hover {
          background: #0071e3;
          color: white;
          transform: scale(1.05);
        }
        .features {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }
        .feature {
          text-align: center;
          background: white;
          padding: 40px 20px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
        }
        .feature i {
          font-size: 3rem;
          color: #0071e3;
          margin-bottom: 20px;
        }
        .feature h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .feature p {
          color: #86868b;
        }
        .screenshots {
          padding: 80px 20px;
          background: white;
          text-align: center;
        }
        .screenshots h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
        }
        .screenshot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .screenshot {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .screenshot:hover {
          transform: scale(1.05);
        }
        .screenshot img {
          width: 100%;
          height: auto;
        }
        .footer {
          padding: 40px 20px;
          background: #f5f5f7;
          text-align: center;
          color: #86868b;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .hero p {
            font-size: 1.1rem;
          }
          .features {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    </head>
    <body>
      <section class="hero">
        <h1>🚀 MyApp by Osama Faisal</h1>
        <p>Seamless performance, elegant design, and cutting-edge automation. Experience the future of apps.</p>
        <a href="#" class="btn">Download Now</a>
      </section>

      <section class="features">
        <div class="feature">
          <i class="fas fa-bolt"></i>
          <h3>Lightning Fast</h3>
          <p>Optimized for speed with instant load times and smooth interactions.</p>
        </div>
        <div class="feature">
          <i class="fas fa-cloud"></i>
          <h3>Cloud Integrated</h3>
          <p>Sync your data across devices with secure cloud connectivity.</p>
        </div>
        <div class="feature">
          <i class="fas fa-shield-alt"></i>
          <h3>Secure & Private</h3>
          <p>Advanced security features to protect your data and privacy.</p>
        </div>
        <div class="feature">
          <i class="fas fa-sync-alt"></i>
          <h3>Auto Updates</h3>
          <p>Stay up-to-date with automatic updates and new features.</p>
        </div>
      </section>

      <section class="screenshots">
        <h2>Screenshots</h2>
        <div class="screenshot-grid">
          <div class="screenshot">
            <img src="https://via.placeholder.com/300x500/0071e3/ffffff?text=App+Screenshot+1" alt="Screenshot 1">
          </div>
          <div class="screenshot">
            <img src="https://via.placeholder.com/300x500/40e0d0/ffffff?text=App+Screenshot+2" alt="Screenshot 2">
          </div>
          <div class="screenshot">
            <img src="https://via.placeholder.com/300x500/0071e3/ffffff?text=App+Screenshot+3" alt="Screenshot 3">
          </div>
          <div class="screenshot">
            <img src="https://via.placeholder.com/300x500/40e0d0/ffffff?text=App+Screenshot+4" alt="Screenshot 4">
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2023 Osama Faisal. All rights reserved. Inspired by Apple Store design.</p>
      </footer>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
