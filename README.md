# Notice Board

A full-stack Notice Board application built using **Next.js (Pages Router)**, **Prisma**, and **MySQL (TiDB Cloud)**. The application allows users to create, view, edit, and delete notices with server-side validation and persistent database storage.

## Live Demo

**Vercel:** https://reno-notice-board-gamma.vercel.app/

## Features

- Create a new notice
- View all notices
- Edit an existing notice
- Delete a notice with confirmation
- Server-side validation
- Urgent notices displayed first
- Responsive design for desktop and mobile
- Persistent data using TiDB Cloud and Prisma

## Tech Stack

- Next.js (Pages Router)
- React
- Prisma ORM
- MySQL (TiDB Cloud)
- Tailwind CSS
- Vercel

## Notice Fields

- Title (Required)
- Body (Required)
- Category (Exam, Event, General)
- Priority (Normal, Urgent)
- Publish Date
- Image URL (Optional)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/reno-notice-board.git
```

### 2. Navigate to the project

```bash
cd reno-notice-board
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add your database connection string:

```env
DATABASE_URL="your_database_connection_string"
```

### 5. Push the Prisma schema

```bash
npx prisma db push
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/notices` | Fetch all notices |
| POST | `/api/notices` | Create a notice |
| GET | `/api/notices/:id` | Fetch a single notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

## Project Structure

```
components/
│── NoticeCard.js
│── NoticeForm.js

lib/
│── prisma.js

prisma/
│── schema.prisma

src/
│── pages/
│   ├── api/
│   │   └── notices/
│   ├── notice/
│   ├── index.js
│   ├── _app.js
│   └── _document.js
│
└── styles/
```

## One Improvement With More Time

If given more time, I would implement image upload functionality using cloud storage (such as Cloudinary) instead of accepting an image URL. I would also add search, filtering.

## AI Usage

AI was used as a development assistant for understanding concepts, debugging issues, reviewing code structure, and resolving Prisma and Next.js errors. All code was integrated, tested, and verified manually before deployment.

## Author

Kushagra
