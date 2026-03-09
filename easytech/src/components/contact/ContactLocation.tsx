export default function ContactLocation() {
  return (
    <section className="py-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Our Office{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #5e4cdc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Location
            </span>
          </h2>
          <p className="mt-3" style={{ color: "var(--muted)" }}>
            Visit Easy Tech Solutions at our Dhaka office
          </p>
        </div>

        {/* Map */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            border: "1px solid var(--border-color)",
            boxShadow: "0 30px 80px rgba(94,76,220,0.1)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902737450434!2d90.3669874!3d23.7728862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6de2c3b19b%3A0xeeef7eec6d1d012a!2sEasy%20Tech%20Solutions!5e0!3m2!1sen!2sbd!4v1738220000000"
            className="w-full h-[250px] md:h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EasyTech Solutions Office Location"
          />
        </div>

      </div>
    </section>
  );
}