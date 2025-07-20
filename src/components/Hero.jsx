export default function HeroSection({ hero }) {
  return (
    <section
      id="hero"
      className="relative h-[560px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${hero.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold mb-4">{hero.headline}</h1>
        <p className="text-xl">{hero.subheadline}</p>
      </div>
    </section>
  );
}
