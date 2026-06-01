# news-app

News App is a React application that displays the latest U.S. headlines using the NewsAPI. It features class-based components, Bootstrap styling, simple client-side pagination, and external links to full articles.

## Features

- Latest top headlines from NewsAPI
- Responsive news cards with images and summaries
- `Read More` buttons open the full article in a new tab
- Previous/Next pagination controls
- Bootstrap-powered layout and navigation
- Implemented with React Router and class components

## Getting Started

Install dependencies:

```bash
npm install
```

Start the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Build for production:

```bash
npm run build
```

## Notes

- Make sure the NewsAPI endpoint is accessible and your API key works.
- You can get a free API key by signing up at https://newsapi.org/docs/get-started.
- Create an ignored `.env.local` file in the project root and set your key as:

```bash
REACT_APP_NEWS_API_KEY=your_api_key_here
```

- Do not commit `.env.local` to source control; it is already ignored by `.gitignore`.
- You can customize the app by changing the API URL, page size, or component styling.
