import React from 'react';
import './App.css';
import collegeData from './CollegeBasketballTeams.json';

interface CollegeProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <div>
      <h1>Welcome to the NCAA March Madness Hub</h1>
      <p>
        This website is your ultimate guide to the NCAA Basketball March Madness
        Tournament. Here, you'll find detailed information on all participating
        colleges, including team names, mascots, and locations. Dive into the
        excitement of March Madness and get to know the teams competing for the
        championship!
      </p>
    </div>
  );
}

class TeamCard extends React.Component<CollegeProps> {
  render() {
    return (
      <div className="team-card">
        <h2>{this.props.school}</h2>
        <h3>Masoct: {this.props.name}</h3>
        <h4>Location: {this.props.city}</h4>
        <br></br>
      </div>
    );
  }
}

function SchoolInfo() {
  return (
    <div className="teams-container">
      {collegeData.teams.map((oneSchool) => (
        <TeamCard {...oneSchool} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <br></br>
      <SchoolInfo />
    </div>
  );
}

export default App;
