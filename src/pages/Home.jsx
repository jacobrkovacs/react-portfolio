const header = {
    fontFamily: 'Klee One'
  }

  const paragraph = {
    fontSize: '1.5rem',
    fontFamily: 'Klee One',
    margin: '5rem'
  }


export default function Home() {
    return (
        <div>
            <h1 style={header}>Home</h1>
            <hr />
            <p style={paragraph}>
                Welcome to my React Portfolio! <br />
                Utilize the tabs at the top of the screen to navigate to the different sections of this app. <br />
                This is a single page web application run on React.
            </p>
        </div>
    )
}