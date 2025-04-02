


# Weather App

A responsive weather application built with React, JavaScript, and the OpenWeather API.

Live demo: [http://myweatherbucket1570.s3-website.us-east-2.amazonaws.com](http://myweatherbucket1570.s3-website.us-east-2.amazonaws.com)

## Features

- Current weather conditions with geolocation support
- 5-day weather forecast
- Responsive design for all devices
- 95+ Lighthouse performance score
- Automated deployment via GitHub Actions

## Tech Stack

- **Frontend**: React.js, JavaScript
- **API**: OpenWeather API
- **Deployment**: AWS S3, GitHub Actions CI/CD

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your OpenWeather API key
```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

4. Start the application
```bash
npm start
```

## Project Structure

```
├── public/            # Static files
├── src/               # React components
├── .github/workflows  # GitHub Actions CI/CD
└── README.md          # Project documentation
```

## License

MIT
