import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Alert,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Refresh as RefreshIcon,
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
  Schedule as ScheduleIcon,
  DataUsage as DataIcon,
  VideoLibrary as VideoIcon,
  Mic as AudioIcon,
  Psychology as AIIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface ProcessStatus {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  progress: number;
  startTime?: Date;
  endTime?: Date;
  description: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [processes, setProcesses] = useState<ProcessStatus[]>([
    {
      id: 'twitter-fetch',
      name: 'Twitter Data Collection',
      status: 'pending',
      progress: 0,
      description: 'Fetching tweets and downloading videos from health accounts',
    },
    {
      id: 'video-conversion',
      name: 'Video to Audio Conversion',
      status: 'pending',
      progress: 0,
      description: 'Converting downloaded videos to audio format',
    },
    {
      id: 'audio-transcription',
      name: 'Audio Transcription',
      status: 'pending',
      progress: 0,
      description: 'Transcribing audio content to text using Google Cloud',
    },
    {
      id: 'data-integration',
      name: 'Data Integration',
      status: 'pending',
      progress: 0,
      description: 'Combining tweets with transcribed video content',
    },
    {
      id: 'topic-modeling',
      name: 'Topic Modeling',
      status: 'pending',
      progress: 0,
      description: 'Applying LDA algorithm to identify topics',
    },
    {
      id: 'visualization',
      name: 'Visualization Generation',
      status: 'pending',
      progress: 0,
      description: 'Creating interactive visualizations and exporting results',
    },
  ]);

  const [stats, setStats] = useState({
    totalTweets: 0,
    totalVideos: 0,
    totalAudioFiles: 0,
    totalTopics: 0,
  });

  const handleStartProcessing = async () => {
    setIsProcessing(true);
    
    // Simulate processing each step
    for (let i = 0; i < processes.length; i++) {
      // Update current process to running
      setProcesses(prev => prev.map((process, index) => 
        index === i 
          ? { ...process, status: 'running', startTime: new Date() }
          : process
      ));

      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setProcesses(prev => prev.map((process, index) => 
          index === i 
            ? { ...process, progress }
            : process
        ));
      }

      // Mark as completed
      setProcesses(prev => prev.map((process, index) => 
        index === i 
          ? { ...process, status: 'completed', endTime: new Date() }
          : process
      ));

      // Update stats
      setStats(prev => ({
        totalTweets: prev.totalTweets + Math.floor(Math.random() * 50) + 10,
        totalVideos: prev.totalVideos + Math.floor(Math.random() * 10) + 2,
        totalAudioFiles: prev.totalAudioFiles + Math.floor(Math.random() * 10) + 2,
        totalTopics: prev.totalTopics + (i === 4 ? 10 : 0),
      }));
    }

    setIsProcessing(false);
  };

  const handleStopProcessing = () => {
    setIsProcessing(false);
    setProcesses(prev => prev.map(process => 
      process.status === 'running' 
        ? { ...process, status: 'pending', progress: 0 }
        : process
    ));
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckIcon color="success" />;
      case 'running':
        return <ScheduleIcon color="primary" />;
      case 'error':
        return <ErrorIcon color="error" />;
      default:
        return <ScheduleIcon color="disabled" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'running':
        return 'primary';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Analysis Dashboard
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Monitor and control the data processing pipeline
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Control Panel */}
        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Processing Control
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
            {!isProcessing ? (
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayIcon />}
                onClick={handleStartProcessing}
                sx={{ px: 4 }}
              >
                Start Analysis
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="large"
                startIcon={<PauseIcon />}
                onClick={handleStopProcessing}
                sx={{ px: 4 }}
              >
                Stop Processing
              </Button>
            )}
            <Button
              variant="outlined"
              size="large"
              startIcon={<RefreshIcon />}
              onClick={() => window.location.reload()}
              sx={{ px: 4 }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<DataIcon />}
              onClick={handleViewResults}
              sx={{ px: 4, ml: 'auto' }}
            >
              View Results
            </Button>
          </Box>
          
          {isProcessing && (
            <Alert severity="info" sx={{ mb: 2 }}>
              Processing in progress... This may take several minutes depending on the amount of data.
            </Alert>
          )}
        </Paper>

        {/* Statistics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {stats.totalTweets}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tweets Processed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {stats.totalVideos}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Videos Downloaded
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {stats.totalAudioFiles}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Audio Files Created
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {stats.totalTopics}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics Identified
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Process Status */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Processing Pipeline Status
              </Typography>
              <List>
                {processes.map((process, index) => (
                  <React.Fragment key={process.id}>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemIcon>
                        {getStatusIcon(process.status)}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="h6" component="span">
                              {process.name}
                            </Typography>
                            <Chip
                              label={process.status}
                              color={getStatusColor(process.status) as any}
                              size="small"
                              sx={{ textTransform: 'capitalize' }}
                            />
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              {process.description}
                            </Typography>
                            {process.status === 'running' && (
                              <LinearProgress 
                                variant="determinate" 
                                value={process.progress} 
                                sx={{ mt: 1 }}
                              />
                            )}
                            {process.status === 'completed' && process.endTime && (
                              <Typography variant="caption" color="text.secondary">
                                Completed at {process.endTime.toLocaleTimeString()}
                              </Typography>
                            )}
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < processes.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Processing Steps
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <DataIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Data Collection" 
                    secondary="Fetch tweets and videos"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VideoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Video Processing" 
                    secondary="Convert to audio"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AudioIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Transcription" 
                    secondary="Audio to text"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AIIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Topic Modeling" 
                    secondary="LDA analysis"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;

