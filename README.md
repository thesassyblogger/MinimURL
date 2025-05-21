# 🌸 MinimURL – Elegant URL Shortener

**MinimURL** is a modern, full-stack URL shortener built using **Node.js**, **Express**, **MongoDB**, and **EJS** with a clean **MVC architecture**. It features a responsive UI with animated cherry blossom effects for a refined user experience.

### 🔗 Live Project:
▶ [http://minimurl-env.eba-d2pggyzm.ca-central-1.elasticbeanstalk.com/](http://minimurl-env.eba-d2pggyzm.ca-central-1.elasticbeanstalk.com/)

---

## 🚀 Key Features

- 🔗 Shorten long URLs to compact, shareable links.
- 📊 Track click counts and visit history per URL.
- 🌸 Clean, animated frontend with cherry blossom effects.
- 📁 Structured using MVC architecture for maintainability.
- 🐳 Dockerized and production-ready.
- 🌐 Deployed via AWS Elastic Beanstalk and MongoDB Atlas.

---

## 🛠️ Tech Stack

| Technology        | Description                          |
|------------------|--------------------------------------|
| **Node.js**       | Backend runtime                      |
| **Express.js**    | Web server framework                 |
| **MongoDB Atlas** | Cloud database (NoSQL)               |
| **Mongoose**      | MongoDB ORM                          |
| **EJS**           | Templating engine for dynamic HTML   |
| **HTML/CSS**      | Frontend structure and styling       |
| **Docker**        | Containerization                     |
| **AWS EB**        | Hosting platform for deployment      |

---

## 🏗️ Project Structure (MVC)
MinimURL/
├── controllers/ # Business logic
├── models/ # Mongoose schemas
├── routes/ # Application routes
├── views/ # EJS frontend templates
├── public/ # Static assets (CSS, images)
├── app.js # Main server file
└── .env # Environment variables

🌐 Deployment
Backend: AWS Elastic Beanstalk
Database: MongoDB Atlas (Cluster-hosted)
Container Registry: Docker Hub – mansip1409/minimurl
