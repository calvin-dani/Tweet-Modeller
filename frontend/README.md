# Tweet Modeller Frontend

A modern React TypeScript frontend for the Tweet Modeller text mining system. This application provides an intuitive interface for monitoring data processing, visualizing results, and exploring health and science communication patterns from social media data.

## Features

- **Modern UI/UX**: Built with Material-UI (MUI) for a professional, responsive design
- **Real-time Dashboard**: Monitor data processing pipeline with live status updates
- **Interactive Visualizations**: Explore topic distributions, source analysis, and trends
- **Data Management**: View and export processed tweets and analysis results
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Technology Stack

- **React 19** with TypeScript
- **Material-UI (MUI)** for UI components
- **React Router** for navigation
- **Recharts** for data visualization
- **D3.js** for advanced interactive visualizations
- **MUI X Data Grid** for data tables

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Dashboard.tsx   # Processing dashboard
│   └── Results.tsx     # Results visualization
├── App.tsx             # Main app component
├── App.css             # Global styles
└── index.tsx           # App entry point
```

## Key Components

### Home Page
- Hero section with project overview
- Feature highlights
- Processing pipeline visualization
- Call-to-action buttons

### About Page
- Detailed project description
- Problem statement and solution
- Technical capabilities
- Target applications and impact

### Dashboard
- Real-time processing status
- Control panel for starting/stopping analysis
- Statistics and metrics
- Process monitoring with progress indicators

### Results Page
- Interactive data visualizations
- Topic distribution charts
- Source analysis
- Interactive topic tree (D3.js)
- Raw data tables with filtering

## API Integration

The frontend is designed to integrate with the Python backend API. Key integration points:

- **Data Collection**: `/api/twitter/fetch` - Start tweet collection
- **Processing Status**: `/api/status` - Get processing status
- **Results**: `/api/results` - Fetch analysis results
- **Visualizations**: `/api/visualizations` - Get chart data

## Customization

### Theming
The app uses Material-UI's theming system. Customize colors, typography, and components in `App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: { main: '#00acee' },
    secondary: { main: '#1da1f2' },
  },
  // ... other theme options
});
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Update the navigation in `Navbar.tsx`

### Adding New Visualizations
1. Install required charting libraries
2. Create visualization components
3. Integrate with data from the backend API

## Deployment

### Production Build
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Environment Variables
Create a `.env` file for environment-specific configuration:

```
REACT_APP_API_URL=http://localhost:8080
REACT_APP_GOOGLE_ANALYTICS_ID=your-ga-id
```

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Write meaningful component and function names
4. Add comments for complex logic
5. Test your changes thoroughly

## License

This project is part of the Tweet Modeller system. See the main project README for licensing information.