const header = {
  fontFamily: 'Klee One'
}

const subheader = {
  fontFamily: 'Klee One',
  borderBottum: 'solid'
}

const paragraph = {
  fontSize: '1.5rem',
  fontFamily: 'Klee One',
  margin: '5rem'
}

const resume = {
  textDecoration: 'none',
  color: 'black'
}

export default function Resume() {
    return (
      <div>
        <h1 style={header}>Resume Page</h1>
        <hr />
        <div className="my-4">
          <a style={resume} href="./images/Jacob Kovacs Resume.pdf" target="_blank">View My Resume Here</a>
        </div>
        <h3 style={subheader}>My Skills</h3>
        <ul style={{fontFamily: 'Klee One', marginTop: '1.5rem', listStyleType: "'- '"}}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    );
  }
  