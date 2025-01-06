# ELECTRON Based Text Background App [Electron](https://electronjs.org/images/electron-logo.svg)

![Screenshot 2025-01-07 015947](https://github.com/user-attachments/assets/18b9b1a1-cae9-407f-ad61-22e73fb3f213)
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
### Project Structure
```
text-background-app/
├── package.json        # Project metadata and dependencies
├── main.js             # Main process code for Electron
├── preload.js          # Preload script for Electron contextBridge
├── index.html          # HTML structure of the app
├── renderer.js         # JavaScript for renderer process (UI interaction)
└── styles.css          # Styling for the app
```

## Conclusion

And there you have it – a simple yet powerful way to type, log, and let your creativity flow! Whether you're jotting down your next big idea, venting out your thoughts, or just passing time, **Text Background App** has got your back. It's minimalistic, it's efficient, and it’s all about letting you focus on what really matters – your words.

Go ahead, type away, and let the text do the talking – in the background, of course. 😎

Feel free to fork, modify, and make it your own – because let’s face it, who wouldn’t want an app this cool? ✌️


## Built with 💻 and ❤️ using Electron

## Acknowledgement
Under guidance of  [Dr Agughasi Victor Ikechukwu](https://github.com/Victor-Ikechukwu)
