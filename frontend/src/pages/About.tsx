import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  TrendingUp as TrendingIcon,
  Science as ScienceIcon,
  Public as PublicIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const objectives = [
    'Extract tweets from Twitter API to provide insights in health care research',
    'Utilize unstructured data sources to provide more accuracy to the topic modeler',
    'Process video content embedded in tweets for comprehensive analysis',
    'Extract audio from video files using advanced multimedia processing',
    'Convert audio to text using Google Cloud Speech-to-Text API',
    'Apply LDA topic modeling to extract useful and truthful information from varied sources',
  ];

  const targetAccounts = [
    'BBC Health (@bbchealth)',
    'Harvard Health (@HarvardHealth)',
    'Stanford Medicine (@StanfordMed)',
    'Nature Medicine (@NatureMedicine)',
    'Health Magazine (@healthmagazine)',
    'World Health Organization (@WHO)',
    'Harvard Chan SPH (@HarvardChanSPH)',
  ];

  const technicalFeatures = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Multi-threaded Processing',
      description: 'Parallel processing for efficient data collection and analysis',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Cloud Integration',
      description: 'Secure cloud storage and processing with Google Cloud services',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Advanced NLP',
      description: 'State-of-the-art natural language processing and topic modeling',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Real-time Analysis',
      description: 'Live processing status and interactive visualizations',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            About Tweet Modeller
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Revolutionizing Text Mining for Health & Science Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
            Tweet Modeller addresses the critical challenge of extracting meaningful insights from 
            unstructured social media data, particularly multimedia content embedded in health and 
            science communications.
          </Typography>
        </Container>
      </Box>

      {/* Problem Statement */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          The Challenge
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'error.main', fontWeight: 'bold' }}>
                Traditional Limitations
              </Typography>
              <Typography variant="body1" paragraph>
                Previous text mining techniques, while effective, have been unable to extract useful 
                information from the vast presence of unstructured data, particularly multimedia content 
                embedded in social media posts.
              </Typography>
              <Typography variant="body1">
                This limitation prevents researchers and analysts from gaining comprehensive insights 
                from the full spectrum of social media communication.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'success.main', fontWeight: 'bold' }}>
                Our Solution
              </Typography>
              <Typography variant="body1" paragraph>
                Tweet Modeller bridges this gap by implementing a comprehensive pipeline that converts 
                multimedia content into analyzable text and applies advanced topic modeling techniques.
              </Typography>
              <Typography variant="body1">
                Our system processes both text and video content to provide complete insights into 
                health and science communication patterns.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Objectives */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Project Objectives
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Primary Goals
                </Typography>
                <List>
                  {objectives.map((objective, index) => (
                    <ListItem key={index} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={objective} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Target Accounts
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  We focus on authoritative health and science sources:
                </Typography>
                <List dense>
                  {targetAccounts.map((account, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemText 
                        primary={account} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Technical Features */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Technical Capabilities
        </Typography>
        <Grid container spacing={4}>
          {technicalFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="feature-card" sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Data Flow */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Data Processing Pipeline
          </Typography>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Input Sources
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Twitter API Data" 
                      secondary="Tweets and embedded media from health accounts"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Video Content" 
                      secondary="Embedded videos in tweets"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Metadata" 
                      secondary="Timestamps, engagement metrics, and source information"
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Processing Steps
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="1. Data Collection" 
                      secondary="Fetch tweets and download videos"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="2. Video Processing" 
                      secondary="Convert videos to audio format"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="3. Speech Recognition" 
                      secondary="Transcribe audio to text using Google Cloud"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="4. Topic Modeling" 
                      secondary="Apply LDA to identify and categorize topics"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Applications */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Applications & Impact
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Health Research
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track health trends, monitor public health concerns, and analyze health communication 
                patterns from authoritative sources.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Scientific Communication
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Analyze how scientific information spreads through social media and identify 
                communication gaps or misinformation patterns.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Content Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Organize and categorize health-related content by topics, enabling researchers 
                to identify trends and patterns in health communication.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

