# Prisma Node js tutorial

## Steps

- Initialize app with `npm init -y`
- Install required dependencies
    - `npm install express`
    - `npm install bcryptjs validator jsonwebtoken cookie-parser dotenv`
    - DevDependencies `npm i -D nodemon`
- change the scripts for `start` and `dev` 
- Prepare the folder structure
    - controllers
    - middlewares
    - helpers
    - routes
    - `index.js`
- setup `index.js` with the basic configuration
    - regular middlewares
    - cookie middlewares
    - test route


# What is Prisma?
Prisma is an open source ORM that allows you to easily manage and interact with your database. This is done with Prisma schema, a place where you can define your database models and relations using the Prisma schema language.

## steps to setup prisma
- `npm i -D prisma` (install as the devDependency)
- `npx prisma init`
    - This command does two things:
        - creates a new directory called `prisma` that contains a file called `schema.prisma`, which contains the Prisma schema with your database connection variable and schema models
        - creates the `.env` file in the root directory of the project, which is used for defining environment variables (such as your database connection)
- Connect to the database
    - To connect your database, you need to set the url field of the datasource block in your Prisma schema to your database connection URL:
    - connect mongodb url (atlas)

- Defining schema in `prisma.schema`
    - `User`
    - `Post`

- Install prisma/client `npm install @prisma/client`
- Check out the database with `npx prisma studio`

- Head over to the `controllers` folder and create `userController.js` file
    - import prisma from `../prisma/index` (created globally)
    - create getJwtToken function in `/helpers/getJwtToken`
    - create cookieToken function in `/utils/cookieToken`
    - import cookieToken from `/utils/cookieToken` in  `userController.js`
    - create signUp , Login and Logout function in `userController.js`
    - create routes in `/routes/useRoutes.js`
    - import routes in `/index.js`

- Now create the isLoggedIn middleware in `/middlewares`

- Head over to `/controllers` folder and create `postController.js` file
    - import prisma from `../prisma/index` (created globally)
    - create createPost , updatePost, deletePost and getPosts function in `userController.js`
    - create routes in `/routes/postRoutes.js` with `isLoggedIn` middleware
    - import routes in `/index.js`
    - finally check all the endpoints in POSTMAN 
