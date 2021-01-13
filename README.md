[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Frontend Build Status: 
[![Netlify Status](https://api.netlify.com/api/v1/badges/a90a1699-d7e5-4653-9c8c-c43cbc3c4638/deploy-status)](https://app.netlify.com/sites/skyjohnson/deploys)

<!--
Admin Portal Build Status: 
[![Netlify Status](https://api.netlify.com/api/v1/badges/8366ad4c-fd65-476c-869f-9c346ea51ef9/deploy-status)](https://app.netlify.com/sites/portfolioadmin/deploys)

Backend Deploy Status:
-->


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jskyjohnson/FullstackPortfolio">
    <img src="https://i.imgur.com/zitO1cF.gif" alt="Logo">
  </a>

  <h1 align="center">Fullstack Portfolio</h1>

  <h3>Hello! </h3>
  <p align="center">
This is the code that I use to manage my personal portfolio <a href="https://skyjohnson.me">site</a>. Please feel free to send me a message if you're curious about this project at jsky.johnson@gmail.com. If you end up using this code to create your own website I would love to hear about it! 
  </p>
  
  <p align="center">  
    Welcome to my Fullstack portfolio project! The goals of this project are to create a simple, stylish, personal website that mixes someone focused in design and software development. All as a deployable fullstack website that lets you change the values on the main page without having to rebuild it.
    
<!--     <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a> -->
<a href="https://skyjohnson.me/">View the live website</a>
    <!-- ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>-->
    ·
    <a href="https://github.com/jskyjohnson/FullstackPortfolio/issues">Request Feature</a> 
  </p>
</p>

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
      <a href="#getting-started">Getting Started: Frontend Only</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started: Fullstack</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This website started as a ReactJS static site generator but I got annoyed with having to upload and redeploy the frontend everytime I wanted to add a new project or edit a value. So I decided to make the content pull from an Apollo GraphQL api for certain values that change often.

However, please checkout the frontend-only branch. It isn't as updated as often but I plan to carry out support for both, if you do not wish to deploy a backend VPS.


### Frontend Built With
* [React](https://reactjs.org/)
* [Semantic Ui](https://react.semantic-ui.com/)
* [Sass](https://sass-lang.com/)

### Backend Built With
* [NodeJS](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)
* [ApolloGraphQL](https://www.apollographql.com/)
* [TypeGraphQL](https://typegraphql.com/)
* [TypeORM](https://typeorm.io/)
* [react-jsonschema-form](https://react-jsonschema-form.readthedocs.io/en/latest/)

### Deployed On
* [Frontend: Netlify](https://www.netlify.com/)
* [Backend: DigitalOcean VPS Droplets](https://www.digitalocean.com/)


<!-- GETTING STARTED -->
## Getting Started

To get started, first make sure that NodeJS, and PostgreSQL are installed. Then set to set up a local copy, run the following commands in your favorite shell.

<!---
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` --->

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/jskyjohnson/FullstackPortfolio.git
   ```
2. Install NPM packages on each folder `admin`, `client`, `server`:
  Note, if you are just using the frontend, you will only need to install the client.
     ```sh
   cd client
   npm install
   ```
   ```sh
   cd admin
   npm install
   ```
   ```sh
   cd server
   npm install
   ```
   
## File Structure
```
📦FullstackPortfolio
 ┣ 📂admin
 ┃ ┣ 📂public *Public info and Manifest, Logos go here*
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂component *Components with Logic*
 ┃ ┃ ┣ 📂containers *Components with no logic (but pulls data)*
 ┃ ┃ ┣ 📂util *Random Utils*
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ ... *Other react files appear here*
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜package.json
 ┃ ┣ 📜tsconfig.json
 ┃ ┗ ...
 ┣ 📂client
 ┃ ┣ 📂public *Public info and Manifest, Logos go here*
 ┃ ┃ ┣ 📜CNAME *Required for CNAME DNS updates*
 ┃ ┃ ┗ 📜_redirects *Required for Netlify redirecting with ReactRouter*
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂css *SASS Components*
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂containers
 ┃ ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📜main.scss *Main Component*
 ┃ ┃ ┃ ┃ ┣ 📜_fonts.scss *Importing Custom Fonts*
 ┃ ┃ ┃ ┃ ┣ 📜_variables.scss *Change variables referenced in other pages here*
 ┃ ┃ ┃ ┃ ┗ ...
 ┃ ┃ ┃ ┣ 📂docs
 ┃ ┃ ┃ ┃ ┗ 📜resume.pdf *Current place to store the resume on resume page*
 ┃ ┃ ┃ ┣ 📂fonts *Downloaded fonts here*
 ┃ ┃ ┃ ┗ 📂images *Someday this will be empty but for the frontend, reference values in here*
 ┃ ┃ ┃ ┃ ┣ 📂branding
 ┃ ┃ ┃ ┃ ┃ ┗ 📜main-logo.png
 ┃ ┃ ┃ ┃ ┣ 📂placeholder
 ┃ ┃ ┃ ┃ ┗ 📂... *All other folders are extra*
 ┃ ┃ ┣ 📂components *Logical components*
 ┃ ┃ ┣ 📂containers *Page Containers*
 ┃ ┃ ┃ ┣ 📂home *Sections on the homepage*
 ┃ ┃ ┃ ┃ ┗ 📜...
 ┃ ┃ ┃ ┗ 📜...
 ┃ ┃ ┣ 📂data *Managing the data objects on Frontend Only*
 ┃ ┃ ┃ ┣ 📂temp
 ┃ ┃ ┃ ┃ ┣ 📜temp_blogs.ts
 ┃ ┃ ┃ ┃ ┗ 📜temp_projects.ts
 ┃ ┃ ┃ ┣ 📜homepageinfo.ts
 ┃ ┃ ┃ ┣ 📜projectsMenuInfo.ts
 ┃ ┃ ┃ ┣ 📜socialsinfo.ts
 ┃ ┃ ┃ ┗ 📜userinfo.ts
 ┃ ┃ ┣ 📂pages *Pages*
 ┃ ┃ ┣ 📂utils *Utils*
 ┃ ┃ ┃ ┗📜dataClient.ts *Manages data for the frontend branch (Unused currently in the main branch)*
 ┃ ┃ ┣ 📜App.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜...
 ┃ ┗ 📜package.json
 ┣ 📂server
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂data *Type definitions*
 ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┣ 📂unused *Left over entities*
 ┃ ┃ ┃ ┗ 📜... *Currently all entities manage data files on the frontend branch*
 ┃ ┃ ┣ 📂migration *Set up migrations for creating a new database*
 ┃ ┃ ┣ 📂resolvers
 ┃ ┃ ┃ ┣ 📂unused
 ┃ ┃ ┃ ┗ 📜*Resolvers are the mirrors for all entities currently*
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜isAuth.ts *Authentication logic handled here (referenced in resolvers)*
 ┃ ┃ ┗ 📜MyContext.ts
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜.env.example *env for local*
 ┃ ┣ 📜.env.example.production *env variables for production. Currently admin account info is set up here*
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜ormconfig.json *Set up data config*
 ┃ ┣ 📜package.json
 ┃ ┗ 📜...
 ┣ 📜LICENSE
 ┗ 📜README.md
 ```

<!-- USAGE EXAMPLES -->
<!---
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

--->

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jskyjohnson/FullstackPortfolio/issues) for a list of proposed features (and known issues).

I have many more plans for this project, like live content matching with instagram, twitch, and twitter. As well as a better place for blogging on various projects. If you want to contribute in anyway please do!



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Follow me! Sky Johnson - [@isky_jk](https://twitter.com/isky_jk) - email: jsky.johnson@gmail.com
Or message me on linkedin: [jskyjohnson](https://www.linkedin.com/in/jskyjohnson/)

Project Link: [https://github.com/jskyjohnson/FullstackPortfolio](https://github.com/jskyjohnson/FullstackPortfolio)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jskyjohnson/FullstackPortfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/jskyjohnson/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jskyjohnson/FullstackPortfolio.svg?style=for-the-badge
[forks-url]: https://github.com/jskyjohnson/FullstackPortfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/jskyjohnson/FullstackPortfolio.svg?style=for-the-badge
[stars-url]: https://github.com/jskyjohnson/FullstackPortfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/jskyjohnson/FullstackPortfolio.svg?style=for-the-badge
[issues-url]: https://github.com/jskyjohnson/FullstackPortfolio/issues
[license-shield]: https://img.shields.io/github/license/jskyjohnson/FullstackPortfolio.svg?style=for-the-badge
[license-url]: https://github.com/jskyjohnson/FullstackPortfolio/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jskyjohnson/
