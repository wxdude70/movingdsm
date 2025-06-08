import { Helmet } from 'react-helmet';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8">
      <div className="flex flex-col items-start justify-start max-w-screen-md mx-auto">
        <Helmet>
          <title>Des Moines Moving Quotes</title>
        </Helmet>

        <header className="bg-blue-600 text-white px-6 py-4 shadow-lg mb-8 w-full">
          <img src="/logo.png" alt="Des Moines Moving Quotes logo" className="h-20 w-20 object-contain mb-4" />
          <h1 className="text-3xl font-bold">Get Free Moving Quotes in Des Moines</h1>
          <p className="text-lg">Compare rates from trusted local movers</p>
        </header>

        <section className="space-y-4">
          <ul className="list-disc list-inside text-gray-700">
            <li>Pre-screened moving companies</li>
            <li>No-obligation quotes</li>
            <li>Save time and money</li>
          </ul>
          <p className="text-base">
            Looking for the best moving quotes in Des Moines? Our trusted partners offer affordable rates and top-rated service.
            Whether you're relocating across town or across the state, compare prices from movers near you — fast, free, and with no obligation.
          </p>
        </section>

        <form action="https://formsubmit.co/wxdude@gmail.com" method="POST" className="mt-8 w-full bg-gray-100 p-6 rounded-2xl shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your email:</label>
            <input type="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your message:</label>
            <textarea name="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
}
