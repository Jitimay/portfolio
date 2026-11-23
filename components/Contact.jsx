import { useState } from 'react';
import { profile } from '../data/profile';

const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState('');

  async function send(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus('sending');
    try {
      const { default: emailjs } = await import('emailjs-com');
      await emailjs.send(service, template, Object.fromEntries(fields), publicKey);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <p className="section-lead">I welcome conversations about research directions and MSc supervision.</p>
      <div className="link-row">
        <a href={'mailto:' + profile.email}>{profile.email}</a>
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
      </div>
      {service && template && publicKey && (
        <form className="contact-form" onSubmit={send}>
          <label>Name<input name="from_name" autoComplete="name" required /></label>
          <label>Email<input name="from_email" type="email" autoComplete="email" required /></label>
          <label>Message<textarea name="message" rows={4} required /></label>
          <button className="button" disabled={status === 'sending'}>Send message</button>
          <p role="status">{{ sending: 'Sending…', sent: 'Message sent.', error: 'The message could not be sent. Please email me directly.' }[status]}</p>
        </form>
      )}
    </div>
  );
}
