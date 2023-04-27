# Programación Web

Universidad Rafael Landivar

## Installation

Need to have npm installed

Use the package manager to install all dependency.

```bash
cd ProyectosWeb
```

```bash
npm i
```

```bash
npm start
```

## Backend

All backend is hosted and develop on Google with Firestore and Cloud Functions

## JWT

At a time to register, and the user do not exist, it create a new entry for the database with non cryptos. The password is encrypted when sent to backend, the backend encrypt it again and stored. When the user login, the password is sent to the backend and if found any, return the new state for the project. Saving the JWT for requesting the CRUD operations.

## CRUD

The backend CRUD was develop with the existing user in mine, as if someone try to fetch the data from other than the authorize user, the backendcode trows a 401 No authorize user. 