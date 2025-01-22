This folder exists to prevent Next.js from treating `src/pages` as the Pages Router. `src/pages` is used as the Pages layer in [Feature-Sliced Design](https://feature-sliced.design)
Here's the updated **Project Structure** based on a typical FSD (Full-Stack Development) example:

### Project Structure

```
/ root
│
├── /app                # Containing routing exported from /src/app folder
│
│
├── /pages              # Pages layer for Next.js, used for Pages Router, and defining page-specific routes
│   └── /readme.md       # Contains documentation for managing pages
│
├── /public             # Static assets like images, fonts, etc.
│
│
├── /src
        │
        ├── /app            # Main directory containing everything that runs the app — routing, entry points, global styles, providers
        │
        ├── /pages          # Pages layer for Pages Router, defining full pages or nested routes
        │
        ├── /widgets        # Widgets — self-contained UI or functionality chunks
        │
        ├── /features       # Features — reused implementations of entire product features, bringing business value
        │
        ├── /entities       # Entities — business entities like user, product, etc.
        │
        ├── /shared         # Shared functionality, reusable across the project
```

### Methods for Running the Project

| Method            | Command           |
|-------------------|-------------------|
| Install           | `npm run install` |
|                   | `yarn add`        |
|                   | `pnpm install`        |
|                   | `bun install`         |
| Development (Dev) | `npm run dev`     |
|                   | `yarn dev`        |
|                   | `pnpm dev`        |
|                   | `bun dev`         |
