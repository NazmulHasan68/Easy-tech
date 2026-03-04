import ContactDetails from '@/components/contacts/ContactDetails'
import ContactForm from '@/components/contacts/ContactForm'
import ContactHero from '@/components/contacts/ContactHero'
import ContactLocation from '@/components/contacts/ContactLocation'

export default function Contact() {
  return (
    <div>
      <ContactHero />

      {/* Details + Form section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto p-1 md:px-2 grid lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>

      <ContactLocation />
    </div>
  )
}
