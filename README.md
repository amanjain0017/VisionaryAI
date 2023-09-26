
# Visionary AI

https://visionaryai-aman.netlify.app/

Visionary AI is a powerful image generation application built using the MERN (MongoDB, Express, React, Node.js) stack.

 It leverages the OpenAI API for creating stunning images and utilizes Cloudinary for efficient image storage. With Visionary AI, you can generate, store, and search for images based on name or prompts, making it a versatile tool for various applications.

The front-end has been hosted using Netlify while Render deploys the backend.



## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Contributing](#contributing)

## Features


- **Image Generation**: Visionary AI allows you to generate images using the OpenAI API by providing prompts or descriptions.

- **Image Gallery**: All generated images are stored in an organized gallery.

- **Search Functionality**: Easily search for images based on their names or prompts.

- **Cloudinary Integration**: Seamless integration with Cloudinary for efficient image storage and retrieval.

- **Responsive Design**: The user interface is designed to work smoothly on various devices and screen sizes.

## Demo
https://github.com/amanjain0017/VisionaryAI/assets/132781670/f87de92f-be33-48c0-80f2-0ea2e4186a80

## Technologies Used

- React.js
- Node.js with Express.js
- MongoDB for database storage
- Cloudinary for image storage
- OPEN AI API for image generation
## Installation

To run Visionary AI locally, follow these steps:

1. &nbsp;&nbsp;Clone the repository:

   ```bash
   git clone https://github.com/amanjain0017/VisionaryAI
    ```
2. &nbsp;&nbsp;Navigate to the project directory:
    ```bash
   cd visionary-ai

    ```

3. &nbsp;&nbsp;Install server dependencies:
  ```bash
  npm install

```
4. &nbsp;&nbsp; Navigate to the client directory:
  ```bash
  cd client
```
5.  &nbsp;&nbsp;Install client dependencies:
  ```bash
  npm install

```
6.  &nbsp;&nbsp;Return to the project root:
```bash
  cd ..
```
7.  &nbsp;&nbsp;Create a .env file in the project root and configure the following environment variables:

- MONGODB_URI: Your MongoDB connection URI.
- OPENAI_API_KEY: Your OpenAI API key.
- CLOUDINARY_CLOUD_NAME: Your Cloudinary cloud name.
- CLOUDINARY_API_KEY: Your Cloudinary API key.
- CLOUDINARY_API_SECRET: Your Cloudinary API secret

8.  &nbsp;&nbsp;Start the development server:
```bash
  npm run dev
```

9.  &nbsp;&nbsp;In a new terminal, start the client ( frontend ):
```bash
  cd client
  npm start
```
The application should now be running locally. Visit http://localhost:3000 in your web browser to access Visionary AI.
## Contributing

Contributions are welcome! If you'd like to contribute to Visionary AI, please follow these steps:

1. &nbsp; Fork the repository.
1. &nbsp; Create a new branch for your feature or bug fix.
1. &nbsp; Commit your changes and push them to your fork.
1. &nbsp; Submit a pull request to the main repository.

