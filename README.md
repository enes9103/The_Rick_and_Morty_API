## About The Project
The Rich and Morty Serial Application is an application where users can review and see the details of The Rich and Morty Serial characters and episodes.

DEMO: https://the-rich-and-morty.vercel.app/

<!-- DESCRİPTİON -->
## Description
- The application is prepared using the Next.JS Framework.
- React library and React Hooks structures are used in the application.
- All features of the project are in working condition.
- The project looks responsive on all screens.
- https://rickandmortyapi.com/ Api is used for application data.
- Bootstrap is used as UI library.
- The application consists of "HOME", "EPISODES", "EBOUT", "DETAIL" and "PAGENOTFOUND" pages.
- 20 characters are listed on the main page using the relevant API.
- Back and forth options are used as the pagination structure at the bottom of the main page. In each forward or backward state, the next/previous 20 characters are listed according to the id number.
- When a character card component is clicked on the main page, the Detail page of the character can be accessed and the data of the character details are listed.
- The <title> information is given as the character title on the detail page.
- After 20 characters on the login page, other characters can be accessed from the pagination structure. Since the pagination structure is used, the desired virtual scroll is not used in the case.
- The detail page has been prepared with Server Side Rendering and is in dynamic working condition.
- Application dependencies are managed with npm package manager.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT OUTCOME -->
## Project Outcome
![Project gif](Animation.gif)

<!-- PROJECT SKELETON -->
## Project Skeleton
```
The Rich And Morty (folder)
|
├── components
│    ├── Card.js
│    ├── Cards.js
│    ├── Episode.js
│    ├── Footer.js
│    ├── Layout.js
│    ├── Navbar.js
│    └── Pagination.js
├── pages
│    ├── api
│    │     └── hello.js
│    ├── detail
│    │     └──[id].js
│    ├── _app.js
│    ├── 404.js
│    ├── about.js
│    ├── episode.js
│    └── index.js
├── public
│    ├── 404-2.png
│    ├── about.png
│    ├── banner.webp
│    ├── favicon.ico
│    ├── logo-2.png
│    └── vercel.svg
├── styles
│    ├── CharacterDetails.module.css
│    ├── Episode.module.css
│    ├── Footer.module.css
│    ├── global.css
│    ├── Home.module.css
│    ├── Navbar.module.css
│    ├── NotFound.module.css
│    └── Pagination.module.css
├── babelrc.json
├── eslintrc.json
├── next.config.js
├── package.json
├── package-lock-json
├── tsconfig.json
└── README.md
```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/enes9103/The_Rich_and_Morty_API.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. The project is ready, you can start using it now.
    You can run:

    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">back to top</a>)</p>c


<!-- DEVELOPMENT PROCESS -->
## Project Development Process

- 1 : For Character Api; `https://rickandmortyapi.com/api/character/` and `https://rickandmortyapi.com/api/episode/` are used for Episode Api.

- 2 : Bootstrap was used as a css library for styling purposes in the project.

- 3 : The application is designed in a responsive structure that can run smoothly on mobile and desktop platforms.

- 4: Built using Next.js Framework. In addition, React.js library and React Hook structures were used.

- 5: The application has been shared on Github. During the project preparation, the development phases were committed and pushed into the warehouse.

- 6: After the project is completed, gif and detailed README.md file are added.

- 7: Used npm package manager during application development. Webpack was used for pre-deployment packaging.

- 8: The project was finally deployed using the Vercel service.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- NOTES -->
## Notes

- You can add additional functionalities to your app.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>