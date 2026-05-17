# StudyCircle

StudyCircle is a React-based study group platform where students can create, join, and manage study groups. It uses Firebase for authentication and data persistence, and includes protected routes, responsive design, and testing.

# Live Demo

https://studycirclea.netlify.app/

## Features

- Google Authentication (Firebase Auth)
- Email/Password Authentication
- Create Study Groups
- Search Groups by title
- View all study groups (Firestore)   
- Protected Routes (Dashboard, Create Group, Profile)
- User Profile (Firebase user data)
- Fully responsive UI (mobile + desktop)
- Cloud data persistence (Firestore)
-Unit testing with Vitest + React Testing Library
- Logout functionality
- Fast React SPA (Vite)

## Tech Stack

- React (Vite)
- Firebase (Authentication + Firestore)
- React Router DOM
- Tailwind CSS
- Vitest
- React Testing Library

## Project Structure

src/
 ├── components/        # Reusable UI components
 ├── pages/             # App pages (Home, Login, Groups, etc.)
 ├── routes/            # Protected routes
 ├── context/           # Auth context
 ├── firebase/          # Firebase config
 ├── tests/             # Unit tests
 ├── App.jsx            # Routes setup
 └── main.jsx

## Installation & Setup

1. Clone repository
git clone https://github.com/Nasra-Hassan/StudyCirlce-App.git

cd studycircle
2. Install dependencies
npm install
3. Run development server
npm run dev

## Firebase Setup

- Create a Firebase project:

- Enable:
. Authentication (Google + Email/Password)

### Firestore Database

Then update:

src/firebase/firebase.js

Example config:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

## Running Tests
npm test

## Deployment

You can deploy using:

Netlify
Vercel
GitHub Actions (CI/CD)

Build command:

npm run build


## Protected Routes

These routes require login:

/dashboard
/create-group
/profile

Unauthenticated users are redirected to /login.

## API / Data Structure (Firestore)
Collection: groups
{
  title: string,
  description: string,
  createdAt: timestamp
}
## Future Improvements

These features can be added later to improve the app:

- Real-time chat inside groups
- Group comments/discussion threads
- Follow users
- User profiles with bios and interests
- Profile editing
- Study scheduling system
- Calendar integration
- Reminders and notifications
- Upload notes and PDFs
- Share resources inside groups
- Filter by subject/category
- Sort by newest/most active groups
- User engagement stats
- Dark mode toggle
- Animations and transitions
 
## Versioning

This project follows semantic versioning:

v1.0.0 → Initial MVP release
v1.1.0 → Feature additions
v1.1.1 → Bug fixes
v2.0.0 → Major redesign or breaking changes

## Author

Developed by Nasra Hassan

## License

MIT