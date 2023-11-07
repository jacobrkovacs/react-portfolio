import ContactForm from '../components/ContactForm'

const header = {
  fontFamily: 'Klee One'
}

const paragraph = {
  fontSize: '1.5rem',
  fontFamily: 'Klee One',
  margin: '5rem'
}

export default function Contact() {
    return (
      <div>
        <h1 style={header}>Contact Page</h1>
        <hr />
        <p style={paragraph}>Please fill out all fields and I will get back to you as soon as I can.</p>
        <ContactForm />

      </div>
    );
  }
  