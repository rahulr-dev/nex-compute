# NexCompute

**A Lightweight Orchestration System for University Laboratory Computing Resources**

## Overview

NexCompute is a distributed orchestration system designed to transform idle university computer laboratory resources into a private remote computing grid. The system addresses the significant underutilization of high-performance hardware in educational institutions, where laboratory computers equipped with modern processors, substantial RAM, and dedicated GPUs remain idle for approximately 65-70% of their lifecycle during nights, weekends, and holidays.

The platform enables students and researchers to access computational resources remotely through a streamlined web interface, eliminating the need for complex cloud infrastructure solutions while maintaining strict administrative control and security.

## Key Features

### Automated Resource Discovery

The system automatically detects and registers laboratory computers as they come online through WebSocket-based communication, providing real-time visibility into available computing resources.

### Remote Execution Environment

Each connected laboratory computer provides access to Jupyter Lab, enabling users to execute computationally intensive tasks including deep learning models, simulations, and data analysis workflows without local hardware constraints.

### Application-Level Isolation

Unlike traditional remote desktop solutions, NexCompute restricts user access to code execution environments only, preventing unauthorized system modifications and maintaining laboratory computer security.

### Secure Connectivity

All connections utilize Cloudflare Zero Trust tunnels, eliminating the need for open firewall ports and ensuring secure communication between users and laboratory resources.

### Ephemeral Sessions

The system implements automatic workspace cleanup after each session, ensuring no data residue remains on laboratory computers and maintaining user privacy.

## System Architecture

NexCompute employs a centralized orchestration model consisting of three decoupled components:

### The Nexus (Server)

A Node.js middleware service that functions as the central traffic controller, managing real-time connections, machine state, and coordinating communication between clients and laboratory computers.

### The Agent (Host)

A background Python service running on laboratory computers that manages the lifecycle of computing environments, including startup, execution, and cleanup operations.

### The Dashboard (Client)

A Next.js web application providing the user interface for resource discovery, connection management, and session control.

## Technology Stack

| Component               | Technology        | Version | Purpose                                     |
| ----------------------- | ----------------- | ------- | ------------------------------------------- |
| Frontend                | Next.js           | 16.0.6  | User interface framework                    |
| Frontend Runtime        | React             | 19.2.0  | UI component library                        |
| Frontend Styling        | Tailwind CSS      | 4.x     | Utility-first CSS framework                 |
| Backend                 | Express.js        | 4.16.1  | HTTP server and API routing                 |
| Backend Runtime         | Node.js           | -       | Server-side JavaScript runtime              |
| Real-Time Communication | Socket.io         | -       | WebSocket-based bidirectional communication |
| Host Agent              | Python            | 3.10.11 | System-level automation                     |
| Execution Environment   | Jupyter Lab       | -       | Interactive computing interface             |
| Secure Tunneling        | Cloudflare Tunnel | -       | Zero Trust network access                   |

## Prerequisites

### Server Requirements

- Node.js (version 20.9.0 or higher)
- npm or yarn package manager
- Network access to laboratory computers

### Client Requirements

- Node.js (version 20.9.0 or higher)
- Modern web browser with JavaScript enabled

### Host Requirements

- Python 3.10.11 or compatible version
- Jupyter Lab installation
- Cloudflare Tunnel (cloudflared) binary
- Sufficient permissions to run background services

## Installation

### Server Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Start the server:

```bash
npm start
```

The server will listen on port 3000 by default. This can be modified through the PORT environment variable.

### Client Setup

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

Start the development server:

```bash
npm run dev
```

The client application will be available at http://localhost:3000 by default.

For production deployment:

```bash
npm run build
npm start
```

### Host Agent Setup

Navigate to the host directory and ensure Python 3.10.11 is installed:

```bash
cd host
python --version
```

Install required dependencies (requirements.txt to be created):

```bash
pip install -r requirements.txt
```

Run the agent:

```bash
python main.py
```

## Project Structure

```
NexCompute/
│
├── server/                 # Node.js Orchestrator
│   ├── bin/                # Server executable
│   ├── routes/             # Express route handlers
│   ├── views/              # Template files
│   ├── public/             # Static assets
│   ├── app.js              # Application configuration
│   └── package.json        # Server dependencies
│
├── host/                   # Python Lab Agent
│   ├── main.py             # Agent entry point
│   └── requirements.txt    # Python dependencies (to be created)
│
├── client/                 # Next.js Frontend
│   ├── app/                # Next.js app directory
│   │   ├── page.tsx        # Main page component
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── public/             # Static assets
│   ├── package.json        # Client dependencies
│   └── tsconfig.json       # TypeScript configuration
│
├── docs/                   # Documentation
│   ├── Architecture.png    # System architecture diagram
│   └── Report.docx         # Project report
│
└── README.md               # Project documentation
```
