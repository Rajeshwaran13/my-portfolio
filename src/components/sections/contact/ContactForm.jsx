/**
 * ContactForm — name + message; send either as a prefilled email (mailto)
 * or as a prefilled WhatsApp message. No backend.
 */
import { useState } from 'react';
import { profile, whatsappLink } from '@/data/profile';
import AppIcon from '@/components/ui/AppIcon';
import s from './Contact.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}`);
  const mailtoHref = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  const waHref = message.trim()
    ? whatsappLink(`Hi ${profile.firstName}, ${message}${name ? ` — ${name}` : ''}`)
    : whatsappLink();

  return (
    <form className={s.form} onSubmit={(e) => e.preventDefault()}>
      <div className={s.formHead}>
        <h3>Send a message</h3>
        <p>Opens your email app or WhatsApp with the message ready.</p>
      </div>

      <label className={s.field}>
        <span>Your name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Jane Doe" />
      </label>
      <label className={s.field}>
        <span>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tell me about the role or project…"
        />
      </label>

      <div className={s.sendRow}>
        <a href={mailtoHref} className={s.sendMail}>
          <AppIcon name="send" size={16} /> Send via email
        </a>
        <a href={waHref} target="_blank" rel="noopener" className={s.sendWa}>
          <AppIcon name="chat" size={16} /> Send on WhatsApp
        </a>
      </div>
    </form>
  );
}
