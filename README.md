# 🎨 LendingFront Loan Application - Frontend

This project is the frontend for a small business loan application simulation. It was developed using **React v19** and **Vite** to provide a fast and modern development experience.

It was built as part of a technical assessment.

## 📄 Table of Contents

- [🚀Quickstart](#🚀quickstart)
    - [🔍Prerequisites](#🔍prerequisites)
    - [📦Dependencies](#📦dependencies)
    - [💻Development](#💻development)
    - [🧪Testing](#🧪testing)
- [🌐Production](#🌐production)
    - [⚙️Railway Configuration](#⚙️railway-configuration)
    - [🛠Steps to Deploy on Railway](#🛠steps-to-deploy-on-railway)
- [🔧Built With](#🔧built-with)
- [👥Authors](#👥authors)
- [📜License](#📜license)

# 🚀Quickstart

## 🔍Prerequisites

Before you begin configuring and running this project, make sure you have the following components installed on your system:

1. **Git**: To clone the repository and collaborate in development.

2. **Node.js y npm**: You will need Node.js to run the code and npm to manage the dependencies.

## 📦Dependencies

This project uses the following technologies and versions:

- **React**: = 19.0.0
- **Vite**: = 6.3.3
- **Node.js**: = 22.12.0

Please keep these versions in mind when setting up your development environment.

## 💻Development

Describe how to install all development dependencies and run the application.

1. Clone this repository to your local machine.
2. Open a terminal in the project folder.
3. Run `npm install` to install project dependencies.
4. Run `npm run dev` to start the server.
5. The app will be available at `http://localhost:5173` by default.

Remember to create the environment variables before starting the project following the example `.env.template` in the repository.

## 🧪Testing

To run unit tests for the application:

1. Run the test suite `npm run test`.

This project uses [Vitest](https://vitest.dev/) as the test runner, along with React Testing Library and jest-dom for improved assertions.

Test files are stored in the `tests/` folder and follow the naming convention `*.test.jsx`.

# 🌐Production

This application is deployed using [Railway](https://railway.app), a cloud platform that simplifies backend deployments.

## ⚙️Railway Configuration

Railway automatically detects that this is a static site (such as a React app created with Create React App or Vite) and applies the appropriate build and deployment settings.

## 🛠Steps to Deploy on Railway

1. **Connect the repository**  
   - Go to [Railway](https://railway.app) and log in.  
   - Click **"New Project" → "Deploy from GitHub Repo"**.  
   - Select this repository to import.

2. **Environment Variables**  
   - Navigate to the **"Variables"** tab.  
   - Add all environment variables as defined in the `.env.template` file.

3. **Build Command**  
   - Railway will automatically detect the project as a React app and run:
     ```bash
        npm install
        npm run build
     ```
4. **Static File Hosting**
    - Railway will serve the contents of the `dist/` directory as a static site.

4. **Automatic Deploys**  
   - Pushing to the `main` branch will trigger an automatic rebuild and redeploy on Railway.

# 🔧Built With

* [React](https://react.dev/)
* [Node.js](https://nodejs.org/es)
* [Vite](https://vitejs.dev/)

# 👥Authors

* **Efraín González** - *Software Developer*

# 📜License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.