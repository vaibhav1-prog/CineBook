# CineBook

CineBook is a MERN full stack movie ticket booking application. It provides a modern movie browsing experience with show details, date selection, seat selection, user bookings, favorites, authentication, and an admin dashboard for managing cinema operations.

## Live Demo

[https://cine-book-teal.vercel.app/](https://cine-book-teal.vercel.app/)

## GitHub Repository

[vaibhav1-prog/CineBook](https://github.com/vaibhav1-prog/CineBook)

## Features

- Browse featured and available movies
- View movie details, cast, ratings, runtime, and trailers
- Select show dates and available timings
- Interactive seat selection flow
- User authentication with Clerk
- My bookings page
- Favorites page
- Admin dashboard
- Admin pages for adding shows, listing shows, and listing bookings
- Responsive UI built with React and Tailwind CSS

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Clerk Authentication
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment

- Vercel

## Project Structure

```text
CineBook/
├── client/              # React frontend
│   ├── public/          # Static assets
│   ├── src/             # Components, pages, assets, utilities
│   ├── package.json
│   └── vite.config.js
├── README.md
└── LICENSE
```

## Environment Variables

Create a `.env` file inside the `client` folder:

```env
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Run Locally

Clone the project:

```bash
git clone https://github.com/vaibhav1-prog/CineBook.git
cd CineBook/client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploy On Vercel

Use these settings when importing the GitHub repository into Vercel:

```text
Framework Preset: Vite
Root Directory: client
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Add the same environment variables in Vercel:

```env
VITE_CURRENCY=$
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Author

[Vaibhav](https://github.com/vaibhav1-prog)

## License

This project is licensed under the MIT License.
