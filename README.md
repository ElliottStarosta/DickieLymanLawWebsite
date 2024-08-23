# Dickie and Lyman Lawyers LLP Website

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


[![Netlify Status](https://api.netlify.com/api/v1/badges/aa1dce55-1cc6-4b3c-974f-15293560dbf5/deploy-status)](https://app.netlify.com/sites/dickieandlyman/deploys)


## Description

Welcome to the official repository for the Dickie and Lyman Lawyers LLP website.


## Table of Contents

- [Installation and Updates](#installation-and-updates)
  - [Folder Structure](#folder-structure)
  - [Setup Explanation](#setup-explanation)
- [Usage](#usage)
- [License](#license)



## Installation and Updates

To get started with the project, you can clone the repository using the following command:

```bash
https://github.com/ElliottStarosta/DickieLymanLawWebsite.git
```
After cloning the repository, navigate to the project directory and install the necessary dependencies using npm:

```bash
cd DickieLymanLawWebsite
npm install
```

### Folder Structure

The project is organized as follows:

```graphql
DickieLymanLawWebsite/
│
├── assets/                # Contains all the assets used in the webpage (images, fonts, etc.)
│
├── css/                   # Contains CSS files, with each section of the webpage having its own CSS file
│   ├── header.css         # Styles specific to the header section
│   ├── hero.css           # Styles specific to the hero section
│   ├── about-us.css       # Styles specific to the about section
│   └── ...                # Additional CSS files for other sections
│
├── js/                    # JavaScript files organized into components and utils
│   ├── components/        # JavaScript components for different functionalities
│   ├── utils/             # Utility functions used across the site
│   └── main.js            # The main JavaScript file where all components are integrated
│
├── node_modules/          # Contains all the npm packages installed for the project
│
└── index.html             # The main HTML file that links to the respective CSS and JS files
```

### Setup Explanation
**CSS**: Each section of the webpage (e.g., header, hero, about us) has a dedicated CSS file in the css/ folder. This modular approach keeps styles organized and makes it easier to maintain and update specific sections.

**JavaScript**: The js/ folder is divided into two main parts:
- **components/**: Contains JavaScript files for individual components of the site (e.g., sliders, modals).
- **utils/**: Houses utility functions that are used across multiple components.
All the component and utility scripts are linked and managed within the main.js file, ensuring that everything runs smoothly together.

**Assets**: The assets/ folder holds all the media used throughout the website, keeping them organized and easily accessible.


### Usage
To run the project locally:

1. Clone the repository.
2. Install the necessary npm packages.
3. Run the following command:
```bash
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.