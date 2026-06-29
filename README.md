# To-Do App

A simple client-side to-do list web app built with HTML, CSS, and JavaScript.

## Features

- Add new tasks
- Mark tasks as completed by clicking on them
- Delete tasks with a trash animation
- Tasks are persisted in `localStorage`
- Responsive, animated UI with a modern glassmorphism style

## Files

- `index.html` — app markup
- `styles.css` — styling and animations
- `script.js` — app logic and localStorage persistence
- `Dockerfile` — containerizes the app using Nginx

## Run locally

1. Open `index.html` in your browser.
2. Or use a local web server to serve the project directory.

## Docker

Build the Docker image:

```bash
docker build -t todo-app .
```

Run the container:

```bash
docker run -d -p 8080:80 todo-app
```

Then open `http://localhost:8080` in your browser.

## Notes

- Tasks are stored in the browser's `localStorage`, so they remain after refresh.
- No backend is required.
