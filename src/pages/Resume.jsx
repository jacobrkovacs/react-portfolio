const resume = {
  textDecoration: 'none',
  color: 'black'
}

export default function Resume() {
    return (
      <div>
        <h1>Resume Page</h1>
        <hr />
        <div>
          <a style={resume} href="./images/Jacob Kovacs Resume.pdf" target="_blank">View My Resume Here</a>
        </div>
      </div>
    );
  }
  