import React from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, AppBar, Toolbar, Button, Grid, List, ListItem, ListItemText, ListItemIcon, Box, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub, School, Work, Code, Star, VolunteerActivism } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as ScrollLink, Element } from 'react-scroll';
import internshipCert from './assets/internship.png';

// Create a vibrant theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722', // Vibrant orange
    },
    secondary: {
      main: '#00BCD4', // Vibrant cyan
    },
    text: {
      primary: '#212121', // Darker text for better contrast
      secondary: '#757575',
    },
    background: {
      default: '#F5F5F5', // Light grey background
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      color: '#FF5722', // Vibrant color for headings
      marginBottom: '16px',
    },
    h5: {
      fontWeight: 500,
      color: '#00BCD4', // Vibrant color for subheadings
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
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#FFFFFF', // White card background
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 600,
          backgroundColor: '#FF5722', // Vibrant orange for buttons
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#E64A19', // Darker orange on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: '#FF5722', // Vibrant orange for the AppBar
        },
      },
    },
    MuiFooter: {
      styleOverrides: {
        root: {
          padding: '20px 0',
          backgroundColor: '#FF5722',
          textAlign: 'center',
          color: '#FFFFFF',
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
      coursework: "Data Structures and Algorithms, Operating Systems, Computer Networks, Design and Analysis Of Algorithms",
      icon: <School />,
    },
    {
      degree: "AISSCE",
      institution: "DAV Public School, Velachery, Chennai",
      date: "July 2022",
      percentage: "95.8%",
      icon: <School />,
    },
    {
      degree: "AISSE",
      institution: "Unity Public School, Chennai",
      date: "July 2020",
      percentage: "95.2%",
      icon: <School />,
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
      certificate: internshipCert,
      icon: <Work />,
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
      link: "https://drive.google.com/file/d/1hQHtDuxxbzKnXdP6K1Ah6bIiN34tfdwe/view?usp=sharing",
      icon: <Code />,
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
      link: "https://github.com/n-noorul-mubeen/Multi-Threaded-Data-Analysis",
      icon: <Code />,
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
      link: "https://www.youtube.com/watch?v=QRG17Ypz66U",
      icon: <Code />,
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
      link: "https://github.com/ram-shankar58/Anamoly-detector",
      icon: <Code />,
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

  const volunteering = [
    {
      title: "Password 2.0 Event Coordination",
      description: "Coordinated marketing efforts for the PASSWORD 2.0 event organized by the Linux Club at VIT Chennai.",
      icon: <VolunteerActivism />,
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          {['home', 'education', 'experience', 'projects', 'skills', 'achievements', 'volunteering', 'contact'].map((section) => (
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
          <Typography variant="h3" gutterBottom>
            Noorul Mubeen Noorul Ameen
          </Typography>
          <Typography variant="h5" gutterBottom>
            A passionate computer science student with experience in full-stack development, data analysis, and more.
          </Typography>
        </Element>

        <Element name="education">
          <Typography variant="h4" gutterBottom>
            <School /> Education
          </Typography>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {edu.date}
                </Typography>
                {edu.cgpa && <Typography variant="body1">CGPA: {edu.cgpa}</Typography>}
                {edu.percentage && <Typography variant="body1">Percentage: {edu.percentage}</Typography>}
                {edu.coursework && <Typography variant="body1">Coursework: {edu.coursework}</Typography>}
              </CardContent>
            </Card>
          ))}
        </Element>

        <Element name="experience">
          <Typography variant="h4" gutterBottom>
            <Work /> Experience
          </Typography>
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {exp.role} - {exp.company}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {exp.location} | {exp.date}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {exp.description}
                </Typography>
                <Box textAlign="center">
                  <img src={exp.certificate} alt="Internship Certificate" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Element>

        <Element name="projects">
          <Typography variant="h4" gutterBottom>
            <Code /> Projects
          </Typography>
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {project.description}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Technologies Used:</strong> {project.technologies}
                </Typography>
                <Button href={project.link} target="_blank" variant="contained">
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </Element>

        <Element name="skills">
          <Typography variant="h4" gutterBottom>
            <Star /> Skills
          </Typography>
          {Object.entries(skills.technicalSkills).map(([category, items]) => (
            <Box key={category} mb={3}>
              <Typography variant="h5">{category}</Typography>
              <Typography variant="body1">{items}</Typography>
            </Box>
          ))}
          <Typography variant="h5" gutterBottom>
            Certifications
          </Typography>
          <List>
            {skills.certifications.map((cert, index) => (
              <ListItem key={index}>
                <ListItemText primary={cert} />
              </ListItem>
            ))}
          </List>
        </Element>

        <Element name="achievements">
          <Typography variant="h4" gutterBottom>
            <Star /> Achievements
          </Typography>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ListItemText primary={achievement} />
              </ListItem>
            ))}
          </List>
        </Element>

        <Element name="volunteering">
          <Typography variant="h4" gutterBottom>
            <VolunteerActivism /> Volunteering Works
          </Typography>
          {volunteering.map((vol, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {vol.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {vol.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Element>

        <Element name="contact">
          <Typography variant="h4" gutterBottom>
            <Email /> Contact Me
          </Typography>
          <Box textAlign="center" mb={4}>
            <IconButton color="inherit" href="mailto:your.email@example.com" target="_blank">
              <Email />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/noorul-mubeen/" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://github.com/n-noorul-mubeen" target="_blank">
              <GitHub />
            </IconButton>
          </Box>
          <Typography variant="body1" align="center">
            Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
          </Typography>
        </Element>
      </Container>

      <Box component="footer" sx={{ mt: 4, py: 3, textAlign: 'center', backgroundColor: theme.palette.primary.main, color: '#FFFFFF' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Noorul Mubeen Noorul Ameen. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
