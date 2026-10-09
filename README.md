# Docker Full Stack Application

## Overview

A full-stack web application organized into frontend and backend components, with Docker Compose used to manage the multi-container development environment.

The repository demonstrates containerization concepts and the use of Nginx as a reverse proxy.

## Technology Stack

* **Frontend:** React
* **Backend:** Node.js and Express
* **Database:** MongoDB
* **Containerization:** Docker and Docker Compose
* **Reverse Proxy:** Nginx

## Architecture

```text
Browser
   |
   v
Nginx Reverse Proxy
   |
   +----> Frontend (React)
   |
   +----> Backend (Node.js / Express)
                 |
                 v
              MongoDB
```

This is a conceptual overview. Confirm the actual routing and service configuration in `nginx.conf` and `docker-compose.yml`.

## Repository Structure

```text
docker-fullstack-app/
├── backend/
├── frontend/
├── docker-compose.yml
├── nginx.conf
└── README.md
```

## Run Locally

### Prerequisites

* Docker Desktop
* Docker Compose

### Start the application

Clone the repository and enter its directory:

```bash
git clone https://github.com/akshayshendurkar55-dot/docker-fullstack-app.git
cd docker-fullstack-app
docker compose up --build
```

Keep the terminal open while the containers are running.

### Access the application

The README's previously documented local endpoints are:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

These endpoints depend on the current Compose and Nginx configuration. If the application does not load at these addresses, check the port mappings and reverse-proxy configuration.

### Stop the application

```bash
docker compose down
```

## Key Learning Areas

* Containerizing frontend and backend components
* Running multiple services with Docker Compose
* Understanding service communication
* Using Nginx as a reverse proxy
* Troubleshooting local containerized applications

## Future Improvements

* Add a health check for each service where appropriate.
* Document environment variables and configuration.
* Add automated build and test checks.
* Review container security and production deployment practices.

## Author

**Laxmikant Shendurkar**

B.Tech Computer Science Engineering | Aspiring Cloud & DevOps Engineer

GitHub: [akshayshendurkar55-dot](https://github.com/akshayshendurkar55-dot)
