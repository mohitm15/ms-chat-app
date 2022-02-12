


<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">ms-chat-app</h3>

  <p align="center">
    A chapApp where you can express what you want 
    <br />
    <a href="https://github.com/mohitm15/my-notebook"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ms-chat-app-mohit.netlify.app/">View Demo</a>
    
    
  </p>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ac17955a-f4b4-4bb1-accd-6ec6cc96183b/deploy-status)](https://app.netlify.com/sites/ms-chat-app-mohit/deploys)


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
       <li><a href="#runningcode">Running the code</a></li>
      </ul>
    </li>
    <li><a href="#rpreview">Preview</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

ms-chat-app is the macro version of ms-teams where you can form groups and can message & share images with different people. You can also customize the UI by yourself. Built for both desktop and mobile. It uses react-chatengine APIs.




### Built With

* [ReactJS](https://reactjs.org/)
* [ReactChatEngine](https://chatengine.io/)
* [TailwindCSS](https://tailwindcss.com/)



## Preview

### Visit the website [here](https://ms-chat-app-mohit.netlify.app/) 

### Desktop View

![Screenshot from 2022-02-12 18-55-42](https://user-images.githubusercontent.com/35539313/153713870-c5719b58-4dd9-48a6-9f46-2ccfb2d8d8b0.png)


![Screenshot from 2022-02-12 19-07-19](https://user-images.githubusercontent.com/35539313/153713836-98f6bcc2-7d1e-43c0-9fce-74ade60f7717.png)

### Mobile view


![ImageLR_Merge (1)](https://user-images.githubusercontent.com/35539313/153713889-292cc8f2-170c-42b4-aea4-5eedd0ff8576.png)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Package.json file mentioned the requirements you need to use the software and how to install them.

* npm
  ```sh
  npm install npm@latest -g
  ```

* Any code editor of your choice (VScode preferable )

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohitm15/ms-chat-app
   ```
2. Install NPM packages and requirements
   ```sh
   npm install or npm i
   ```

### Running the code

1. To run the frontend server , go to project folder first
    ```sh
        cd ms-chat-app
    ```

    and then 
    ```sh
        npm start
    ```
   
    The frontend server will run on `localhost:/3000`

2. To setup the backend server, 
    ```sh
       Go to https://chatengine.io/
    ```

    and then 
    ```sh
        register yourself
    ```
    The username & password you will chose by yourself. However, you will get a projectID.
    
3. Create a `.env.local` file in the root directory and paste the content as below
   ```
   REACT_APP_PROJECT_ID="<your project Id>"
   REACT_APP_USERNAME="<username>"
   REACT_APP_USER_SECRET="<password>"
   ```
   Now your environment variables also setup. You're ready to go.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request





<!-- CONTACT -->
## Contact

Your Name -Mohit Maroliya

Project Link: [https://github.com/mohitm15/ms-chat-app](https://github.com/mohitm15/ms-chat-app)