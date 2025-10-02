import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as d3 from 'd3';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`results-tabpanel-${index}`}
      aria-labelledby={`results-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Results: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState<any[]>([]);
  const [tweets, setTweets] = useState<any[]>([]);
  const [topicStats, setTopicStats] = useState<any[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // Sample data - in real app, this would come from API
  const sampleTopics = [
    { id: 1, name: 'COVID-19 Research', count: 45, words: ['covid', 'vaccine', 'research', 'study', 'health'] },
    { id: 2, name: 'Mental Health', count: 32, words: ['mental', 'health', 'anxiety', 'depression', 'therapy'] },
    { id: 3, name: 'Nutrition & Diet', count: 28, words: ['nutrition', 'diet', 'food', 'healthy', 'eating'] },
    { id: 4, name: 'Exercise & Fitness', count: 25, words: ['exercise', 'fitness', 'workout', 'training', 'physical'] },
    { id: 5, name: 'Medical Research', count: 22, words: ['medical', 'research', 'study', 'clinical', 'trial'] },
    { id: 6, name: 'Public Health', count: 18, words: ['public', 'health', 'policy', 'prevention', 'community'] },
    { id: 7, name: 'Technology in Health', count: 15, words: ['technology', 'digital', 'health', 'innovation', 'tech'] },
    { id: 8, name: 'Chronic Diseases', count: 12, words: ['chronic', 'disease', 'diabetes', 'cancer', 'condition'] },
    { id: 9, name: 'Healthcare Policy', count: 10, words: ['policy', 'healthcare', 'government', 'regulation', 'access'] },
    { id: 10, name: 'Preventive Care', count: 8, words: ['prevention', 'screening', 'early', 'detection', 'care'] },
  ];

  const sampleTweets = [
    { id: 1, text: 'New study shows promising results for COVID-19 vaccine effectiveness', topic: 'COVID-19 Research', source: 'BBC Health' },
    { id: 2, text: 'Mental health awareness is crucial during these challenging times', topic: 'Mental Health', source: 'Harvard Health' },
    { id: 3, text: 'Proper nutrition plays a key role in maintaining good health', topic: 'Nutrition & Diet', source: 'Stanford Medicine' },
    { id: 4, text: 'Regular exercise can significantly improve cardiovascular health', topic: 'Exercise & Fitness', source: 'Nature Medicine' },
    { id: 5, text: 'Breakthrough in medical research offers hope for cancer patients', topic: 'Medical Research', source: 'WHO' },
  ];

  const topicDistributionData = sampleTopics.map(topic => ({
    name: topic.name,
    count: topic.count,
    percentage: ((topic.count / sampleTopics.reduce((sum, t) => sum + t.count, 0)) * 100).toFixed(1)
  }));

  const sourceDistributionData = [
    { name: 'BBC Health', count: 35, color: '#8884d8' },
    { name: 'Harvard Health', count: 28, color: '#82ca9d' },
    { name: 'Stanford Medicine', count: 25, color: '#ffc658' },
    { name: 'Nature Medicine', count: 22, color: '#ff7300' },
    { name: 'Health Magazine', count: 18, color: '#00ff00' },
    { name: 'WHO', count: 15, color: '#0088fe' },
    { name: 'Harvard Chan SPH', count: 12, color: '#ff0000' },
  ];

  const timeSeriesData = [
    { date: '2024-01-01', covid: 12, mental: 8, nutrition: 6, exercise: 5 },
    { date: '2024-01-02', covid: 15, mental: 10, nutrition: 7, exercise: 6 },
    { date: '2024-01-03', covid: 18, mental: 12, nutrition: 8, exercise: 7 },
    { date: '2024-01-04', covid: 14, mental: 9, nutrition: 9, exercise: 8 },
    { date: '2024-01-05', covid: 16, mental: 11, nutrition: 10, exercise: 9 },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'text', headerName: 'Tweet Text', width: 400, flex: 1 },
    { field: 'topic', headerName: 'Topic', width: 150 },
    { field: 'source', headerName: 'Source', width: 120 },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setTopics(sampleTopics);
      setTweets(sampleTweets);
      setTopicStats(topicDistributionData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (topics.length > 0 && svgRef.current) {
      createTopicTree();
    }
  }, [topics]);

  const createTopicTree = () => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 120, bottom: 20, left: 320 };

    svg.attr("width", width + margin.right + margin.left)
       .attr("height", height + margin.top + margin.bottom);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const tree = d3.tree().size([height, width]);
    const root = d3.hierarchy({
      name: "Health Topics",
      children: topics.map(topic => ({
        name: topic.name,
        count: topic.count,
        words: topic.words
      }))
    });

    tree(root);

    const link = g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal()
        .x((d: any) => d.y)
        .y((d: any) => d.x));

    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("r", (d: any) => d.children ? 6 : 4)
      .style("fill", (d: any) => d.children ? "#69b3a2" : "#69b3a2");

    node.append("text")
      .attr("dy", ".35em")
      .attr("x", (d: any) => d.children ? -13 : 13)
      .style("text-anchor", (d: any) => d.children ? "end" : "start")
      .text((d: any) => d.data.name)
      .style("font-size", "12px")
      .style("fill", "#333");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress size={60} />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Loading analysis results...
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Analysis Results
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Explore topic modeling results and data insights
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={2}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="results tabs">
              <Tab label="Topic Distribution" />
              <Tab label="Source Analysis" />
              <Tab label="Topic Tree" />
              <Tab label="Raw Data" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  Topic Distribution by Count
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topicDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Top Topics
                </Typography>
                <List>
                  {topicDistributionData.slice(0, 5).map((topic, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={topic.name}
                        secondary={`${topic.count} tweets (${topic.percentage}%)`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Data Sources Distribution
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={sourceDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {sourceDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Topic Trends Over Time
                </Typography>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="covid" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="mental" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="nutrition" stroke="#ffc658" strokeWidth={2} />
                    <Line type="monotone" dataKey="exercise" stroke="#ff7300" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Typography variant="h6" gutterBottom>
              Interactive Topic Tree Visualization
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              This visualization shows the hierarchical relationship between different health topics identified in the analysis.
            </Alert>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <svg ref={svgRef} className="topic-tree" />
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <Typography variant="h6" gutterBottom>
              Processed Tweets Data
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              This table shows the processed tweets with their assigned topics and source information.
            </Alert>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={tweets}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10, 25, 50]}
                checkboxSelection
                disableSelectionOnClick
              />
            </Box>
          </TabPanel>
        </Paper>

        {/* Summary Statistics */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {topics.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics Identified
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {tweets.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tweets Analyzed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  {sourceDistributionData.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sources Processed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  95%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Accuracy Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Results;

