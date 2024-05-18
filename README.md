# **Movie Recommendation App Backend**

This repository contains the backend code for a movie recommendation app. It provides APIs for user authentication, registration, movie recommendation, rating, and searching functionalities. The backend is built using Express.js and connects to a PostgreSQL database. Additionally, it utilizes Flask to interact with the AI for generating movie recommendations.

## Features

- **User Authentication:** Allows users to register and login securely to the application.
- **Movie Recommendation:** Utilizes AI to provide personalized movie recommendations based on user preferences.
- **Rating:** Enables users to rate movies, which helps improve the recommendation system.
- **Movie Search:** Provides a search functionality for users to find specific movies within the app.

## Technologies Used

- **Express.js:** A web application framework for Node.js, providing robust features for building APIs.
- **PostgreSQL:** A powerful, open-source relational database system.
- **Flask:** A lightweight WSGI web application framework for Python, used to interact with the AI module.

## Getting Started

To get started with the backend of the movie recommendation app, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   DB_URL=postgres://username:password@localhost:5432/database_name
   FLASK_API_URL=http://localhost:5000
   ```

4. **Run the server:**
   ```
   npm start
   ```

## API Endpoints

- **POST /api/auth/register:** Register a new user.
- **POST /api/auth/login:** Login with existing credentials.
- **GET /api/movies/recommendation:** Get recommended movies for the authenticated user.
- **POST /api/movies/rate:** Rate a movie.
- **GET /api/movies/search:** Search for movies.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.

---

For any questions or support, please contact [author_the7ag](mailto:the7ag22477@gmail.com). Thank you for using our movie recommendation app backend!
