# ELECTRON-based-Text-Background-App



## Overview

The **Text Background App** is an Electron-based desktop application that allows users to type in a `textarea` element and log the entered text to the console. The app runs as a lightweight desktop app, giving users an experience of typing in the background with real-time text logging.

## Features

- **Type in the Background:** Users can type freely into a `textarea` with the text acting as the background.
- **Live Text Logging:** As users type, the text is logged to the console.
- **Minimalistic UI:** Simple design for easy interaction with a clean user interface.

  ### Technologies Used

- **Electron:** Used for building the cross-platform desktop application.
- **HTML/CSS:** For the structure and design of the user interface.
- **JavaScript:** For managing the app's logic and the renderer process.


### Prerequisites

1. Make sure you have **Node.js** installed. You can download it from the official website: [https://nodejs.org/](https://nodejs.org/).
2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/text-background-app.git


  
text-background-app/
├── package.json        # Project metadata and dependencies
├── main.js             # Main process code for Electron
├── preload.js          # Preload script for Electron contextBridge
├── index.html          # HTML structure of the app
├── renderer.js         # JavaScript for renderer process (UI interaction)
└── styles.css          # Styling for the app

## Built with 💻 and ❤️ using Electron
