# Multimodal LDA Topic Summarizer

A comprehensive text mining system that extracts insights from unstructured social media data by converting multimedia content to text and applying advanced topic modeling techniques. Focused on health and science communication analysis.

## 🚀 Features

### Core Capabilities
- **Social Media Mining**: Extract tweets and embedded videos from health-focused Twitter accounts
- **Multimedia Processing**: Convert embedded videos to audio format using advanced video processing
- **Speech Recognition**: Transcribe audio content to text using Google Cloud Speech-to-Text API
- **Topic Modeling**: Apply LDA (Latent Dirichlet Allocation) to identify and categorize topics
- **Data Visualization**: Interactive visualizations and dashboards to explore topic distributions
- **Cloud Integration**: Leverage Google Cloud services for scalable processing and storage

### Target Accounts
- BBC Health (@bbchealth)
- Harvard Health (@HarvardHealth)
- Stanford Medicine (@StanfordMed)
- Nature Medicine (@NatureMedicine)
- Health Magazine (@healthmagazine)
- World Health Organization (@WHO)
- Harvard Chan SPH (@HarvardChanSPH)

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 19 with TypeScript
- **UI Library**: Material-UI v7 with responsive design
- **Routing**: React Router DOM for single-page application
- **Visualization**: Recharts and D3.js for data visualization
- **State Management**: React hooks for component state

### Backend (Python)
- **Twitter API**: Data collection from health-focused accounts
- **Video Processing**: MoviePy for video-to-audio conversion
- **Speech Recognition**: Google Cloud Speech-to-Text API
- **Topic Modeling**: LDA implementation for topic extraction
- **Data Storage**: CSV and JSON formats for processed data

## 📋 Prerequisites

- Node.js 16+ and npm
- Python 3.8+
- Google Cloud account with Speech-to-Text API enabled
- Twitter API credentials

## 🛠️ Installation

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
pip install -r requirements.txt
```

## 🚀 Usage

### 1. Data Collection
```bash
python Modules/TwitterAPI/fetch_tweet_handler.py
```

### 2. Video Processing
```bash
python Modules/V2A/videotoAudio.py
```

### 3. Audio Transcription
```bash
python Modules/A2T/audiotoText.py
```

### 4. Topic Modeling
```bash
python Modules/LDA/topicModelling.py
```

### 5. Visualization
Access the web interface at `http://localhost:3000`

## 📊 Data Processing Pipeline

1. **Data Collection**: Fetch tweets and download embedded videos
2. **Video Processing**: Convert videos to audio format
3. **Audio Transcription**: Transcribe audio to text using Google Cloud
4. **Data Integration**: Combine tweets with transcribed content
5. **Topic Modeling**: Apply LDA algorithm to identify topics
6. **Visualization**: Generate interactive charts and export results

## 🎯 Applications

- **Health Research**: Track health trends and monitor public health concerns
- **Scientific Communication**: Analyze how scientific information spreads
- **Content Analysis**: Organize and categorize health-related content by topics

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json
TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
```

### Google Cloud Setup
1. Create a Google Cloud project
2. Enable the Speech-to-Text API
3. Create a service account and download credentials
4. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable

## 📁 Project Structure

```
Tweet-Modeller/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   └── ...
│   └── package.json
├── Modules/                 # Python backend modules
│   ├── TwitterAPI/         # Twitter data collection
│   ├── V2A/               # Video to audio conversion
│   ├── A2T/               # Audio to text transcription
│   ├── LDA/               # Topic modeling
│   └── Data/              # Processed data storage
├── requirements.txt        # Python dependencies
└── README.md
```

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
python -m pytest Modules/
```

## 📈 Performance

- **Processing Speed**: Multi-threaded processing for efficient data collection
- **Scalability**: Cloud-based processing with Google Cloud services
- **Accuracy**: High-precision speech recognition and topic modeling
- **Responsiveness**: Real-time processing status and interactive visualizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Cloud Speech-to-Text API for audio transcription
- Material-UI for the frontend component library
- Recharts and D3.js for data visualization
- The health and science community for providing valuable content

## 📞 Support

For support, email support@multimodal-lda.com or create an issue in the repository.

---

**Multimodal LDA Topic Summarizer** - Transforming social media data into actionable health insights.
