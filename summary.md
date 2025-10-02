# Tweet Modeller: Advanced Text Mining System for Health & Science Data

## Project Overview

The **Tweet Modeller** is an innovative text mining system that extracts and analyzes unstructured data from social media platforms, specifically focusing on health and science content. This project addresses the challenge of processing vast amounts of unstructured data by implementing a comprehensive pipeline that converts multimedia content into analyzable text and applies advanced topic modeling techniques.

## Problem Statement

Traditional text mining techniques, while effective, have been unable to extract useful information from the vast presence of unstructured data, particularly multimedia content embedded in social media posts. This system bridges this gap by:

1. **Multimedia Processing**: Converting embedded videos in Twitter posts to audio, then to text
2. **Advanced NLP**: Applying preprocessing and NLP techniques to both original and transcribed text
3. **Topic Modeling**: Using LDA (Latent Dirichlet Allocation) to categorize and model documents by topics
4. **Health & Science Focus**: Specializing in extracting insights from health and scientific content

## System Architecture

### Core Components

#### 1. **Twitter Data Extraction Module** (`TwitterAPI/`)
- **Base Tweet Parser**: Fetches tweets from health-focused Twitter accounts
- **Threaded Parser**: Implements multi-threading for efficient data collection
- **Media Downloader**: Downloads embedded videos from tweets
- **Target Accounts**: BBC Health, Harvard Health, Stanford Medicine, Nature Medicine, Health Magazine, WHO, Harvard Chan SPH

#### 2. **Video-to-Audio Conversion** (`V2A/`)
- **Video Processing**: Uses MoviePy to extract audio from video files
- **Format Standardization**: Converts to WAV format with 16kHz sample rate
- **Batch Processing**: Handles multiple video files efficiently

#### 3. **Audio-to-Text Transcription** (`A2T/`)
- **Google Cloud Speech-to-Text**: Leverages Google's advanced speech recognition API
- **Cloud Storage Integration**: Uploads audio files to Google Cloud Storage
- **Long-running Recognition**: Handles extended audio files with timeout management
- **Multi-language Support**: Configured for English (en-US) transcription

#### 4. **Topic Modeling Engine** (`LDA/`)
- **Data Integration**: Combines original tweets with transcribed video content
- **Text Preprocessing**: Applies CountVectorizer with stop word removal
- **LDA Implementation**: Uses scikit-learn's LatentDirichletAllocation
- **Topic Analysis**: Generates 10 topics with top 15 words per topic
- **Result Export**: Creates CSV files with topic assignments

#### 5. **Data Management** (`Data/`)
- **Structured Storage**: Organized by source and data type
- **Fetched Data**: Original tweets and videos
- **Processed Data**: Converted audio and transcribed text
- **Results**: Topic modeling outputs and visualizations

#### 6. **Web Interface** (`GraphicalRepresentation/`)
- **HTTP Server**: Custom server for handling requests
- **Interactive Dashboard**: Real-time processing status
- **Data Visualization**: D3.js-based tree visualization of topics
- **Multi-step Workflow**: Guided process through data collection to analysis

## Technical Implementation

### Technology Stack
- **Backend**: Python 3.x
- **Data Processing**: pandas, numpy, scikit-learn
- **Multimedia**: MoviePy, Google Cloud Speech-to-Text
- **Web Framework**: Custom HTTP server
- **Visualization**: D3.js, Bootstrap
- **Cloud Services**: Google Cloud Storage, Google Speech API

### Key Features

#### 1. **Multi-threaded Processing**
- Parallel tweet fetching from multiple accounts
- Concurrent video downloading and processing
- Thread-safe data management

#### 2. **Cloud Integration**
- Google Cloud Storage for audio file management
- Google Speech-to-Text API for transcription
- Scalable processing capabilities

#### 3. **Advanced NLP Pipeline**
- Text preprocessing and cleaning
- Stop word removal and feature extraction
- Topic modeling with LDA algorithm
- Topic-word and document-topic analysis

#### 4. **Interactive Visualization**
- Real-time processing status updates
- Interactive topic tree visualization
- Responsive web interface

## Data Flow

1. **Data Collection**: Fetch tweets and download embedded videos from health-focused Twitter accounts
2. **Media Processing**: Convert videos to audio format using MoviePy
3. **Cloud Upload**: Upload audio files to Google Cloud Storage
4. **Transcription**: Use Google Speech-to-Text API to convert audio to text
5. **Data Integration**: Combine original tweets with transcribed content
6. **Topic Modeling**: Apply LDA to identify topics and categorize content
7. **Visualization**: Generate interactive visualizations and export results

## Target Applications

### Health & Science Research
- **Public Health Monitoring**: Track health trends and concerns from social media
- **Scientific Communication**: Analyze how scientific information spreads
- **Content Categorization**: Organize health-related content by topics
- **Trend Analysis**: Identify emerging health topics and discussions

### Research Applications
- **Social Media Analysis**: Study information dissemination patterns
- **Multimedia Content Mining**: Extract insights from video content
- **Topic Evolution**: Track how health topics change over time
- **Source Credibility**: Analyze content from authoritative health sources

## Key Innovations

1. **Multimedia Integration**: First system to combine text and video content from social media for topic modeling
2. **Health Focus**: Specialized for health and science content analysis
3. **Real-time Processing**: Interactive web interface with live status updates
4. **Cloud Scalability**: Leverages cloud services for heavy processing tasks
5. **Comprehensive Pipeline**: End-to-end solution from data collection to visualization

## Technical Achievements

- **Efficient Data Processing**: Handles large volumes of social media data
- **Multimedia Pipeline**: Seamless video-to-text conversion
- **Advanced NLP**: State-of-the-art topic modeling implementation
- **Scalable Architecture**: Modular design for easy extension
- **User-friendly Interface**: Intuitive web-based dashboard

## Future Enhancements

- **Real-time Processing**: Live data streaming and analysis
- **Multi-language Support**: Expand beyond English content
- **Advanced Visualizations**: Enhanced interactive dashboards
- **Machine Learning**: Predictive modeling and trend forecasting
- **API Development**: RESTful API for external integrations

## Conclusion

The Tweet Modeller represents a significant advancement in text mining technology, specifically addressing the challenge of processing unstructured multimedia data from social media. By combining traditional text mining with modern multimedia processing and cloud technologies, this system provides valuable insights into health and science communication patterns, making it a valuable tool for researchers, public health officials, and content analysts.

The system's modular architecture and focus on health and science content make it particularly relevant for current research needs, while its technical implementation demonstrates proficiency in modern software development practices, cloud computing, and data science techniques.

