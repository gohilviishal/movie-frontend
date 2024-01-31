# Movie App

## Overview

This Next.js project is a simple movie management application with features like user authentication, movie creation, editing, and listing. The project utilizes popular libraries and frameworks such as React, Bootstrap, Mantine, and more.

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js and npm:** ReactJS requires Node.js, which includes npm (Node Package Manager). You can download and install them from [https://nodejs.org/](https://nodejs.org/).

## Create a new React App

1. Open your terminal or command prompt.
2. Run the following command to create a new React app:

   ```bash
   git clone https://github.com/kinjalgiridev/movie-app.git
   cd movie-app
   npm i
   npm run dev
   ```

## Project Structure

Your project structure will look like this:

```plaintext
movie-app/
|-- components
|   |-- movie-card.module.css
|   |-- movie-card.js
|-- package-lock.json
|-- package.json
|-- pages
|   |-- emptymovielist.js
|   |-- _app.js
|   |-- list.module.css
|   |-- signin.module.css
|   |-- newmovie.js
|   |-- index.js
|   |-- signin.js
|   |-- list.js
|   |-- editMovie
|   |   |-- [movieId].js
|-- public
|   |-- favicon.ico
|   |-- vercel.svg
|   |-- Vectors.png
|-- README.md
|-- styles
|   |-- newmovie.module.css
|   |-- reset.css
|   |-- global.css
|   |-- index.module.css
|   |-- Home.module.css
```

1. **components**
   - Contains reusable React components.
   - `movie-card.module.css`: CSS module for styling the `movie-card` component.
   - `movie-card.js`: JavaScript file defining the `movie-card` React component.

2. **package-lock.json**
   - Automatically generated file which locks the versions of all packages and their dependencies installed via NPM.

3. **package.json**
   - Lists the project's dependencies and contains various metadata relevant to the project, such as scripts for running, building, and testing the application.

4. **pages**
   - Typically used in Next.js (a React framework), where each file corresponds to a route.
   - `emptymovielist.js`, `_app.js`, `newmovie.js`, `index.js`, `signin.js`, `list.js`: These are React components that likely correspond to different pages or routes in the application.
   - `list.module.css`, `signin.module.css`: CSS modules for styling specific pages.
   - `editMovie/[movieId].js`: A dynamic route in Next.js, likely for editing a movie's details.

    1. **Sign In Page**
        - File: `pages/signin.js`
        - Description: Handles user authentication with hardcoded credentials for demonstration purposes.
    
    2. **Movie List Page**
        - File: `pages/movielist.js`
        - Description: Displays a paginated list of movies fetched from the server. Provides navigation links to add a new movie and logout.
    
    3. **Create Movie Page**
        - File: `pages/createmovie.js`
        - Description: Contains the `NewMovieForm` component for creating a new movie entry. The form includes fields for the movie title, publishing year, and the option to upload a poster image.
    
    4. **Edit Movie Page**
        - File: `pages/editmovie.js`
        - Description: Utilizes the Next.js framework with state management using `useState` and `useEffect` hooks. Fetches specific movie details using the movie ID from the router query parameters.


5. **public**
   - Holds static files like images and icons accessible publicly.
   - `favicon.ico`: The small icon displayed in the browser tab.
   - `vercel.svg`, `Vectors.png`: Static image files.

6. **README.md**
   - Markdown file providing an overview or documentation for the project.

7. **styles**
   - Contains global and specific CSS stylesheets for the application.
   - `newmovie.module.css`, `reset.css`, `global.css`, `index.module.css`, `Home.module.css`: These are CSS files for styling different parts or components of the application.

Using Next.js, given the use of the `pages` directory for routing. Each JavaScript file in the `pages` directory corresponds to a different view or route in the web app, and the `components` directory includes reusable parts of the UI. The `styles` directory holds the CSS files for styling, and `public` is for static assets like images. The `package.json` and `package-lock.json` are standard in Node.js-based projects for managing dependencies.
