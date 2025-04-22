# Welcome to Diabetes Management App

## Introduction

Diabetes Management App is a web application that allows individuals with diabetes type two to manage their condition in an interactive mananer. Users can track their various indicators which gives the integral perspective of their conditions at given time. It encompasses features like glucose and insulin tracking as well as other aspects that are related to diabetes type 2.

This application is built with Next.js, a react-based framework.

## Installation

- Clone the application from: https://github.com/henryomosh/diabetes-management-app.git
  Install depedencies by running `pnpm install ` i.e you can use your preffered package manager though pnpm is recommended because it is faster.

- Run `pnpm run dev` to run your local development server at http://localhost:3000

- Set up you database

  - This application uses PostgreSQL, so make sure to install it on your machine and set it up accordingly.
  - Create .env file in project's root directory and add the following:

    - POSTGRES_URL=postgres://postgres:<your db passowrd>@localhost:5432/<your database username> eg \* postgres://postgres:123456@localhost:5432/postgres \*
    - POSTGRES_URL_NON_POOLING=postgres://postgres:postgres@127.0.0.1:5432/<your database username>
    - POSTGRES_USER=your database username
    - POSTGRES_HOST=localhost
    - POSTGRES_PASSWORD=database password
    - POSTGRES_DATABASE=database name

- Note: In production, change the above to match production set up.
- Seed/Populate database with predefined datasets by navigating to http://localhost:3000/seed on your browser, you should get a response stating ** database seed successfully **.

- A default user will be created with the following credentials, email: user@nextmail.com, password: 123456. Use the credentials to login into the application

## User Guide

The application consits of four main areas or components namely: Home, Status, Alerts, and Reports.

### Home

This section dispalays immediate information of the user including basic information like name, date of birth etc. There are charts that shows the user's Glucose, Insulin, and Meal summaries over the past seven days. The data is a weekly average of corresponding indicators.

There is also a section showing latest data loged by the user and any treament adminstered recently.

### Status

This section allows the user to log their latest data i.e glucose, insulin, blood pressure, etc. It also displays the data enter and the corresponding level in the given day.

### Alerts

This section tracks the user's glucose level from morning to evening and indicates potential Hypoglycemia and Hyperglycemia.

### Reports

Reports section displays graphs of glucose and insulin levels over the week. It also allows generating the document in pdf format whcih can be shared with relevant health practioners.

Application url can be found at : https://nextjs-dashboard-seven-drab-77.vercel.app/dashboard
