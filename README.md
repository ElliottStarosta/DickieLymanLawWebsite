# ⚖️ Dickie and Lyman Lawyers LLP Website  

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)



## 📜 Description  

Welcome to the official repository for the Dickie and Lyman Lawyers LLP website.

🔗 **Live Website:** [Dickie and Lyman Lawyers LLP](https://dickieandlyman.netlify.app/)


## 📖 Table of Contents  

- [🚀 Installation and Updates](#-installation-and-updates)  
  - [📂 Folder Structure](#-folder-structure)  
  - [⚙️ Setup Explanation](#-setup-explanation)  
- [🛠️ Usage](#-usage)  
- [📜 License](#-license)  


## 🚀 Installation and Updates  

To get started with the project, you can clone the repository using the following command:

```bash
https://github.com/ElliottStarosta/DickieLymanLawWebsite.git
```
After cloning the repository, navigate to the project directory and install the necessary dependencies using npm:

```bash
cd DickieLymanLawWebsite
npm install
```

### 📂 Folder Structure

The project is organized as follows:

```graphql
DickieLymanLawWebsite/
│
├── assets/                # 🎨 Contains images, fonts, and other assets  
│
├── css/                   # 🎨 CSS files for each section  
│   ├── header.css         # 🏛️ Styles for the header  
│   ├── hero.css           # 🌟 Styles for the hero section  
│   ├── about-us.css       # 🏢 Styles for the about section  
│   └── ...                # ➕ Additional section styles  
│
├── js/                    # ⚙️ JavaScript files  
│   ├── components/        # 🧩 JS components (e.g., sliders, modals)  
│   ├── utils/             # 🔧 Utility functions  
│   └── main.js            # 🚀 Main script integrating everything  
│
├── node_modules/          # 📦 Installed npm packages  
│
└── index.html             # 🏠 Main HTML file  

```

### ⚙️ Setup Explanation
**🖌️ CSS**: Each section of the webpage (e.g., header, hero, about us) has a dedicated CSS file in the css/ folder. This modular approach keeps styles organized and makes it easier to maintain and update specific sections.

**🛠️ JavaScript**: The js/ folder is divided into two main parts:
- **components/**: Contains JavaScript files for individual components of the site (e.g., sliders, modals).
- **utils/**: Houses utility functions that are used across multiple components.
All the component and utility scripts are linked and managed within the main.js file, ensuring that everything runs smoothly together.

**📁 Assets**: The assets/ folder holds all the media used throughout the website, keeping them organized and easily accessible.


### 🛠️ Usage
To run the project locally:

1. Clone the repository.
2. Install the necessary npm packages.
3. Run the following command:
```bash
npm run dev
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
