import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, AppBar, Toolbar, Button, Grid, List, ListItem, ListItemText, ListItemIcon, Box, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as ScrollLink, Element } from 'react-scroll';
import internshipCert from './assets/internship.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#FFC107',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      marginBottom: '16px',
    },
    h5: {
      fontWeight: 500,
      marginBottom: '12px',
    },
    body1: {
      fontSize: '1.1rem',
      marginBottom: '12px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: '20px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiFooter: {
      styleOverrides: {
        root: {
          padding: '20px 0',
          backgroundColor: '#4CAF50',
          textAlign: 'center',
          color: '#fff',
        },
      },
    },
  },
});

const App = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vellore Institute Of Technology, Chennai Campus",
      date: "Sep. 2022 – July 2026 (Expected)",
      cgpa: "9.26 (Current)",
      coursework: "Data Structures and Algorithms, Operating Systems, Computer Networks, Design and Analysis Of Algorithms"
    },
    {
      degree: "AISSCE",
      institution: "DAV Public School, Velachery, Chennai",
      date: "July 2022",
      percentage: "95.8%"
    },
    {
      degree: "AISSE",
      institution: "Unity Public School, Chennai",
      date: "July 2020",
      percentage: "95.2%"
    }
  ];

  const experience = [
    {
      role: "Information Technology Intern",
      company: "NMDC Group",
      location: "Abu Dhabi, United Arab Emirates",
      date: "May 2024 - June 2024",
      description: (
        <ul>
          <li>Developed a full-stack application for OAuth Implementation with React JS for the front-end, Flask for the web server, and Axios for communication between the front-end and web server.</li>
          <li>Implemented robust encryption for user passwords using CryptoJS.</li>
          <li>Engineered an efficient user validation mechanism and session management with localStorage and React Router.</li>
          <li>Utilized pandas for reading and writing Excel files, optimizing the storage and retrieval of user access tokens.</li>
        </ul>
      ),
      certificate: internshipCert
    }
  ];

  const projects = [
    {
      title: "DigiPlanner: A Smart Planner",
      description: (
        <ul>
          <li>Developed DigiPlanner, a voice-controlled task manager featuring optimized scheduling and seamless cloud integration.</li>
          <li>Integrated Raspberry Pi for voice-to-text conversion.</li>
          <li>Utilized Python scripts for task scheduling.</li>
          <li>Managed the frontend calendar view using ReactJS.</li>
        </ul>
      ),
      technologies: "Linux, Python, React, Firebase, Raspberry Pi 4B",
      link: "https://drive.google.com/file/d/1hQHtDuxxbzKnXdP6K1Ah6bIiN34tfdwe/view?usp=sharing"
    },
    {
      title: "Multi-Threaded Data Analysis",
      description: (
        <ul>
          <li>Created a Terminal User Interface based multi-threaded C++ application in Linux for efficient sales data analysis.</li>
          <li>Reduced data processing time by 50%.</li>
          <li>Provided detailed insights into sales performance, profit trends, and inventory management.</li>
        </ul>
      ),
      technologies: "Linux, Git, C++, TUI - ncurses C++ Library",
      link: "https://github.com/n-noorul-mubeen/Multi-Threaded-Data-Analysis"
    },
    {
      title: "Arduino Based Weather Monitoring System",
      description: (
        <ul>
          <li>Designed a weather monitoring system with various sensors for accurate real-time data updates.</li>
          <li>Utilized BMP180, DHT11, and MQ135 sensors to measure atmospheric pressure, temperature, humidity, and air quality.</li>
        </ul>
      ),
      technologies: "Arduino, Arduino IDE, Weather Sensors",
      link: "https://www.youtube.com/watch?v=QRG17Ypz66U"
    },
    {
      title: "Analysis of Anomaly Detection Algorithms",
      description: (
        <ul>
          <li>Implemented anomaly detection algorithms including Isolation Forest, One-Class SVM, and Autoencoders.</li>
          <li>Evaluated performance on diverse datasets.</li>
          <li>Optimized model parameters through cross-validation and hyperparameter tuning.</li>
          <li>Visualized detection results and performance metrics with Matplotlib and Seaborn.</li>
        </ul>
      ),
      technologies: "Python, Scikit-learn, NumPy",
      link: "https://github.com/ram-shankar58/Anamoly-detector"
    }
  ];
  const skills = {
    technicalSkills: {
      Languages: "Java, Python, C/C++, C#, SQL (MySQL), JavaScript, HTML/CSS, R, Rust, MATLAB",
      Frameworks: "React, Node.js, Flask, JQuery, Unity, Material-UI, Axios API",
      DeveloperTools: "Git, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse",
      Libraries: "pandas, NumPy, Matplotlib, ncurses"
    },
    certifications: [
      "Cisco Packet Tracer (Cisco Networking Academy) - Jan 2024",
      "Introduction to Cybersecurity (Cisco Networking Academy) - Jan 2024",
      "C# Unity Game Developer 2D (Udemy) - June 2023"
    ]
  };

  const achievements = [
    "Coordinated marketing efforts for the PASSWORD 2.0 event organized by the Linux Club at VIT Chennai.",
    "Winner of 'Code Fusion-BCD23' conducted by TechnoVIT’23.",
    "Awarded for scoring more than 95% in AISSCE."
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          {['home', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
            <Button color="inherit" key={section}>
              <ScrollLink to={section} smooth={true} duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Container>
        <Element name="home">
          <Card>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                Noorul Mubeen Noorul Ameen
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                Aspiring Software Engineer
              </Typography>
              <Typography variant="body1">
                I am a third-year Computer Science Engineering student at Vellore Institute of Technology, Chennai Campus. Passionate about web development, machine learning, and creating impactful solutions through technology.
              </Typography>
            </CardContent>
          </Card>
        </Element>

        <Element name="education">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Education
              </Typography>
              {education.map((edu, index) => (
                <Card key={index} style={{ marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h5">{edu.degree}</Typography>
                    <Typography variant="body2"><strong>Institution:</strong> {edu.institution}</Typography>
                    <Typography variant="body2"><strong>Date:</strong> {edu.date}</Typography>
                    {edu.cgpa && <Typography variant="body2"><strong>CGPA:</strong> {edu.cgpa}</Typography>}
                    {edu.percentage && <Typography variant="body2"><strong>Percentage:</strong> {edu.percentage}</Typography>}
                    {edu.coursework && <Typography variant="body2"><strong>Relevant Coursework:</strong> {edu.coursework}</Typography>}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Element>

        <Element name="experience">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Experience
              </Typography>
              {experience.map((exp, index) => (
                <Card key={index} style={{ marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h5">{exp.role}</Typography>
                    <Typography variant="body2"><strong>Company:</strong> {exp.company}</Typography>
                    <Typography variant="body2"><strong>Location:</strong> {exp.location}</Typography>
                    <Typography variant="body2"><strong>Date:</strong> {exp.date}</Typography>
                    <Typography variant="body2"><strong>Description:</strong></Typography>
                    {exp.description}
                    {exp.certificate && (
                      <Box mt={2} display="flex" justifyContent="center">
                        <img src={exp.certificate} alt="Internship Certificate" style={{ width: '80%', maxWidth: '600px', borderRadius: '8px' }} />
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Element>

        <Element name="projects">
  <Card>
    <CardContent>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      {projects.map((proj, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{proj.title}</Typography>
            <Typography variant="body2"><strong>Description:</strong></Typography>
            {proj.description}
            <Typography variant="body2"><strong>Technologies Used:</strong> {proj.technologies}</Typography>
            <Button variant="contained" color="primary" href={proj.link} style={{ marginTop: '10px' }}>
              View Project
            </Button>
          </CardContent>
        </Card>
      ))}
    </CardContent>
  </Card>
</Element>

        <Element name="skills">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Skills
              </Typography>
              <Card>
                <CardContent>
                  <Typography variant="h5">Technical Skills</Typography>
                  <Typography variant="body1"><strong>Languages:</strong> {skills.technicalSkills.Languages}</Typography>
                  <Typography variant="body1"><strong>Frameworks:</strong> {skills.technicalSkills.Frameworks}</Typography>
                  <Typography variant="body1"><strong>Developer Tools:</strong> {skills.technicalSkills.DeveloperTools}</Typography>
                  <Typography variant="body1"><strong>Libraries:</strong> {skills.technicalSkills.Libraries}</Typography>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h5">Certifications</Typography>
                  <List>
                    {skills.certifications.map((cert, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={cert} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Element>

        <Element name="achievements">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Achievements and Volunteering Works
              </Typography>
              <List>
                {achievements.map((ach, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={ach} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Element>

        <Element name="contact">
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Contact
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="contained" color="secondary" href="mailto:noorulmubeen@example.com" startIcon={<Email />}>
                    Email
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" href="https://www.linkedin.com/in/noorul-mubeen/" target="_blank" rel="noopener noreferrer" startIcon={<LinkedIn />}>
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" href="https://github.com/n-noorul-mubeen" target="_blank" rel="noopener noreferrer" startIcon={<GitHub />}>
                    GitHub
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Element>
      </Container>

      <footer>
        <Box className="MuiFooter-root">
          <Typography variant="body2">
            © 2024 Noorul Mubeen. All rights reserved.
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
};

export default App;
