/**
 * ContactSection — one-screen contact: green info panel (left) + message
 * form (right), slim footer underneath. Sized to the viewport height.
 */
import { reveal } from '@/hooks/reveal';
import ContactPanel from './contact/ContactPanel';
import ContactForm from './contact/ContactForm';
import ContactFooter from './contact/ContactFooter';
import s from './contact/Contact.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={s.screen}>
      <div className={`container ${s.inner}`}>
        <div className={s.split} ref={reveal()}>
          <ContactPanel />
          <ContactForm />
        </div>
        <ContactFooter />
      </div>
    </section>
  );
}
