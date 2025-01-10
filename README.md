# News API Reader with Next.js

A modern web application built with Next.js that fetches and displays news articles from NewsAPI.org. The application features category filtering, search functionality, and a responsive grid layout.

## Features

- News article display in a responsive grid layout
- Category filtering (Technology, Business, Science, Health, Entertainment)
- Search functionality
- Loading skeletons for better UX
- Dark mode support
- Mobile-responsive design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.x or higher)
- npm or yarn
- Git

## API Key Setup

1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Create a `.env.local` file in the root directory of the project
5. Add your API key to the `.env.local` file:

```env
NEXT_PUBLIC_NEWS_API_KEY=your_api_key_here
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd news-api-reader
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
news-api-reader/
├── app/
│   ├── components/
│   │   ├── NewsList.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── Loading.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .env.local
└── package.json
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEWS_API_KEY=your_api_key_here
```

Note: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

## API Routes

The application uses the following NewsAPI endpoints:

- Top Headlines: `https://newsapi.org/v2/top-headlines`
- Everything: `https://newsapi.org/v2/everything`

## Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [NewsAPI](https://newsapi.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Troubleshooting

### Common Issues

1. **API Key Issues**
   - Ensure your API key is correctly set in `.env.local`
   - Check if you've exceeded your API request limit

2. **Build Errors**
   - Make sure all dependencies are installed
   - Clear the `.next` cache folder and rebuild

3. **Loading Issues**
   - Check your internet connection
   - Verify the API endpoints are accessible

For additional help, please open an issue in the repository.

---

Remember to replace `<repository-url>` with your actual repository URL. If you need help setting up the project or encounter any issues, please open an issue in the repository.