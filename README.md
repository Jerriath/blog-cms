# Blog CMS

This application was coded in ReactJS and created with create-react-app. This webapp is for my personal use for managing the content on my personal blog. This specific application was cloned from my blog-client application which is also on my github. This project is part of "The Odin Project's" Javascript webdev curriculum. This project is my first fullstack application and consists of a React frontend and Express backend.

# Frontend

As said before, this application was written in ReactJS with the help of create-react-app. The routing between pages was implemented with react-router-dom. This app is able to sign in to an authorized user, and then the backend will send a jwt which is used to authorize creating new posts in the mongodb database.

## CMS

This specific frontend application is used by authorized users for managing the documents in the backend. One of the main differences between this application (CMS) and the blog-client is that the routes used in the CMS are protected by a passport JWT strategy for checking if a jwt is sent in the request headers. This allows for admin-life privilleges for editing the documents in the backend. You can checkout the live demo [here](https://blog-cms-mauve.vercel.app/)

# Backend

The backend for this app was created using NodeJS and Express. The frontend makes RESTful api calls to the backend which will then send the appropriate information back to the frontend to be rendered. You can checkout the backend api repo [here](https://github.com/Jerriath/blog-api)
