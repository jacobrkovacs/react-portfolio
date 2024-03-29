import myface from '../assets/images/IMG_3345.jpeg'

const header = {
  fontFamily: 'Klee One'
}

const image = {
  margin: '3rem',
  height: '300px',
  borderRadius: '100px',
  boxShadow: '3px 3px 3px black'
}

const paragraph = {
  fontSize: '1.5rem',
  fontFamily: 'Klee One',
  margin: '5rem'
}

export default function About() {
    return (
      <div className=''>
        <h1 style={header}>About me</h1>
        <hr />
        <div className='d-flex'>
          <img style={image} src={`${myface}`} alt="Image of Jacob Kovacs" />
          <p style={paragraph}>
            My name is Jacob. I am a certified full-stack web developer. I enjoy playing and designing board games. A page of my current board game designs will be up on this site soon!
          </p>
        </div>
      </div>
    );
  }
  