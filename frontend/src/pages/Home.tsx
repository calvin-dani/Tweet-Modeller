import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Paper,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  VideoLibrary as VideoIcon,
  Mic as AudioIcon,
  Psychology as AIIcon,
  Timeline as ChartIcon,
  CloudUpload as CloudIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TwitterIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Social Media Mining',
      description: 'Extract tweets and embedded videos from health-focused Twitter accounts including BBC Health, Harvard Health, Stanford Medicine, and more.',
    },
    {
      icon: <VideoIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Multimedia Processing',
      description: 'Convert embedded videos to audio format using advanced video processing techniques with MoviePy.',
    },
    {
      icon: <AudioIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Speech Recognition',
      description: 'Transcribe audio content to text using Google Cloud Speech-to-Text API with high accuracy.',
    },
    {
      icon: <AIIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Topic Modeling',
      description: 'Apply LDA (Latent Dirichlet Allocation) to identify and categorize topics from combined text data.',
    },
    {
      icon: <ChartIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Data Visualization',
      description: 'Interactive visualizations and dashboards to explore topic distributions and trends.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Cloud Integration',
      description: 'Leverage Google Cloud services for scalable processing and storage of multimedia content.',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Data Collection',
      description: 'Fetch tweets and download embedded videos from health-focused Twitter accounts',
      status: 'completed',
    },
    {
      step: 2,
      title: 'Video Processing',
      description: 'Convert videos to audio format with optimal quality settings',
      status: 'completed',
    },
    {
      step: 3,
      title: 'Audio Transcription',
      description: 'Transcribe audio content to text using Google Cloud Speech API',
      status: 'completed',
    },
    {
      step: 4,
      title: 'Data Integration',
      description: 'Combine original tweets with transcribed video content',
      status: 'completed',
    },
    {
      step: 5,
      title: 'Topic Modeling',
      description: 'Apply LDA algorithm to identify and categorize topics',
      status: 'completed',
    },
    {
      step: 6,
      title: 'Visualization',
      description: 'Generate interactive visualizations and export results',
      status: 'completed',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Multimodal LDA Topic Summarizer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Advanced Text Mining System for Health & Science Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
            Extract insights from unstructured social media data by converting multimedia content 
            to text and applying advanced topic modeling techniques. Focused on health and science 
            communication analysis.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Start Analysis
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/about')}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'white', color: 'white' }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card className="feature-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
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

      {/* Process Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Processing Pipeline
          </Typography>
          <Grid container spacing={3}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper className="process-step" elevation={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        mr: 2,
                      }}
                    >
                      {step.step}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.description}
                      </Typography>
                    </Box>
                    <Chip
                      label={step.status}
                      color="success"
                      size="small"
                      sx={{ textTransform: 'capitalize' }}
                    />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #00acee 0%, #1da1f2 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Analyze Health Data?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            Start exploring health and science communication patterns from social media data.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/dashboard')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;

