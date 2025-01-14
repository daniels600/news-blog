# News Blog with Next.js, Contentful, and News API

A modern web application built with Next.js that combines content management through Contentful and news articles from NewsAPI.org. The application features dynamic content management, category filtering, search functionality, and a responsive grid layout.

## Features

- Dynamic content management with Contentful
- News article display from NewsAPI.org
- Responsive grid layout
- Category filtering
- Search functionality
- Loading skeletons for better UX
- Dark mode support
- Mobile-responsive design

## Prerequisites

Before you begin, ensure you have:
- Node.js (version 16.x or higher)
- npm or yarn
- Git
- Contentful account
- NewsAPI.org account

## API Keys and Configuration

### News API Setup
1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard

### Contentful Setup
1. Log in to your [Contentful](https://www.contentful.com/) account
2. Create a new space or use an existing one
3. Navigate to Settings → API keys
4. Create a new API key or use an existing one
5. Note down your Space ID and Content Delivery API access token

### Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEWS_API_KEY=your_api_key
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/daniels600/news-blog
cd news-blog
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
Directory structure:
└── daniels600-news-blog/
    ├── README.md
    ├── components.json
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .eslintrc.json
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── loading.tsx
    │   ├── page.tsx
    │   ├── about/
    │   │   └── page.tsx
    │   ├── contentful/
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   ├── fonts/
    │   │   ├── GeistMonoVF.woff
    │   │   └── GeistVF.woff
    │   ├── news-api/
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   └── posts/
    │       └── [id]/
    │           ├── loading.tsx
    │           └── page.tsx
    ├── components/
    │   ├── PrelineScript.tsx
    │   ├── navbar.tsx
    │   ├── theme-provider.tsx
    │   ├── toggle-theme.tsx
    │   ├── contentful/
    │   │   ├── CategoryFilter.tsx
    │   │   ├── ContentfulImage.tsx
    │   │   ├── ContentfulNewsList.tsx
    │   │   ├── ContentfulPosts.tsx
    │   │   ├── PostContent.tsx
    │   │   └── SearchForm.tsx
    │   ├── news-api/
    │   │   ├── CategoryFilter.tsx
    │   │   ├── NewsImage.tsx
    │   │   ├── NewsList.tsx
    │   │   └── SearchForm.tsx
    │   └── ui/
    │       ├── avatar.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── command.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── input.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── radio-group.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── tabs.tsx
    │       └── tooltip.tsx
    ├── hooks/
    │   └── use-mobile.tsx
    ├── lib/
    │   ├── contentful.ts
    │   └── utils.ts
    ├── public/
    └── types/
        ├── blog.ts
        └── index.ts

```

## Content Model (Contentful)

Ensure your Contentful space has the following content models:

1. Blog Post
   - Title (Short text)
   - Slug (Short text)
   - Content (Rich text)
   - Featured Image (Media)
   - Categories (Reference)

2. Category
   - Name (Short text)
   - Slug (Short text)
   - Description (Long text)

## API Integration

### Contentful API
```typescript
// lib/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
```

### News API
```typescript
// lib/newsapi.ts
const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.NEWS_API_KEY;
```

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

## Troubleshooting

### Common Issues

1. **API Key Issues**
   - Verify all environment variables are correctly set in `.env.local`
   - Check API request limits for both services
   - Ensure Contentful API key has appropriate permissions

2. **Content Type Issues**
   - Verify Contentful content models match the expected structure
   - Check for required fields in Contentful entries

3. **Build Errors**
   - Clear the `.next` cache folder
   - Ensure all dependencies are installed
   - Check for TypeScript errors

For additional help, please open an issue in the repository.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Contentful](https://www.contentful.com/)
- [NewsAPI](https://newsapi.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details