# Netflix Clone Project

This is a **Netflix Clone** built with React, featuring a movie browsing interface that fetches data from The Movie Database (TMDb) API. The app allows users to browse movies and TV shows, view movie posters, and watch trailers directly within the app. It mimics the look and feel of Netflix, providing a modern, responsive design.

## Features
- Movie and TV Show Browsing: Browse various categories like "Popular," "Top Rated," "Trending," and more.
- Movie Trailers: Click on a movie to watch the trailer directly in the app.
- Responsive Design: Fully responsive layout that adapts to desktop, tablet, and mobile views.
- Dynamic Movie Content: Fetches data dynamically from the TMDb API to keep the content up-to-date.

## Technologies Used
- **React**: Frontend framework to build the user interface.
- **TMDb API**: Used to fetch movie and TV show data.
- **React YouTube**: Embedded YouTube player for trailer playback.
- **Axios**: Used for making API requests to fetch movie data.
- **CSS**: Custom styles to create the layout and design.

## Installation

### Prerequisites
- Node.js and npm should be installed on your local machine. You can download Node.js [here](https://nodejs.org/).

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your TMDb API key:
   ```bash
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## How It Works

1. **Fetching Movie Data**: 
   - The project uses the TMDb API to get a list of movies and TV shows. This is done using the `axios` library.
   - `useEffect` is used to fetch the data when the component is mounted.

2. **Displaying Movie Posters**:
   - Movie posters are displayed in a grid layout. Each poster is clickable and shows a YouTube trailer when clicked.
   - The layout of the posters changes based on the `isLargeRow` prop, which determines whether the posters are large or small.

3. **Showing Movie Trailers**:
   - When a user clicks on a movie poster, the app fetches the trailer using the `movieTrailer` package and displays it using the `react-youtube` component.




