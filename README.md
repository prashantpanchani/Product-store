# Product Store

A web application for managing products in a store, built with modern web technologies. This project demonstrates functionality such as product listing, management, and interaction, and is designed to be intuitive and scalable.

---
##Deployed Link
https://product-store-ck1a.onrender.com/
## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Future Improvements](#future-improvements)
6. [Contributing](#contributing)
7. [License](#license)
8. [Acknowledgments](#acknowledgments)

---

## Features

- View and manage a product catalog.
- Add, update, and delete products.
- Responsive design for desktop and mobile.
- Backend API for managing product data.
- Simple and user-friendly interface.

---

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, Axios, dotenv

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/prashantpanchani/Product-store.git
    cd Product-store
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following variables:

      ```
      MONGO_URI=<your_mongodb_connection_string>
      PORT=5000
      ```

4. Start the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:5000`.

---

## Folder Structure

```
Product-store/
├── backend/        # Backend API and server files
├── frontend/       # React frontend application
├── .env.example    # Environment variable template
├── package.json    # Dependency and script management
└── README.md       # Project documentation
```

---

## Future Improvements

- Add authentication and authorization for product management.
- Implement search and filter functionality for the product catalog.
- Integrate payment gateway for e-commerce capabilities.
- Improve UI/UX design for better user engagement.
- Add testing with Jest and Supertest.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
