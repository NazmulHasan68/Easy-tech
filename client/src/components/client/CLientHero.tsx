import clientHero from "@/assets/img/pm.jpg"

export default function ClientHero() {
  return (
    <section
      className="relative h-[100vh] md:h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          `url(${clientHero})`, // 👉 তোমার image path দাও
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Meet With Our<span className="text-green-500"> Happy Clients</span>
        </h1>
        

        <p className="mt-6 text-gray-200 text-sm md:text-lg">
          We are proud to work with amazing clients who trust us to build,
          grow, and scale their digital presence.
        </p>
      </div>
    </section>
  );
}
