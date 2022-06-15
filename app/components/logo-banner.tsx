export default function LogoBanner() {
  return (
    <div className="w-screen py-4 mb-10 shadow-2xl bg-white/70 bg-blur-lg">
      <div className="flex items-center justify-around w-1/2 mx-auto">
        <img className="h-8" src="images/clerk-logo.svg" />
        <img className="h-5" src="images/remix-logo.svg" />
        <img className="h-7" src="images/fauna-logo.svg" />
        <img className="h-8" src="images/netlify-logo.svg" />
      </div>
    </div>
  );
}
