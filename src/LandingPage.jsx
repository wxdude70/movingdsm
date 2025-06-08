import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    // Meta Pixel Script
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', 'XXXXXXXXXXXXXXXX');
    fbq('track', 'PageView');
  }, []);

  return (
    <>
      <Helmet>
        <title>Free Moving Quotes | Compare Des Moines Movers Near You</title>
        <meta name="description" content="Compare quotes from top-rated Des Moines moving companies. Fast, free, no-obligation moving quotes from movers near you." />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1J532RXL0V"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1J532RXL0V');
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        <header className="bg-blue-600 text-white px-6 py-4 shadow-lg">
          <img src="/logo.png" alt="Des Moines Moving Quotes logo" className="h-20 w-20 object-contain mb-4" />
          <h1 className="text-3xl font-bold">Get Free Moving Quotes in Des Moines</h1>
          <p className="text-lg">Compare rates from trusted local movers</p>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-center p-8 gap-10">
          <div className="max-w-md">
            <ul className="list-disc pl-5 text-base">
              <li>Pre-screened moving companies</li>
              <li>No-obligation quotes</li>
              <li>Save time and money</li>
            </ul>
            <p className="mt-6 text-base text-gray-700">
              Looking for the best <strong>moving quotes</strong> in Des Moines? Our trusted partners offer affordable rates and top-rated service. Whether you're relocating across town or across the state, compare prices from <strong>movers near you</strong> — fast, free, and with no obligation.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Request Your Quote</h3>
            <form
              className="space-y-4"
              action="https://formsubmit.co/wxdude@gmail.com"
              method="POST"
            >
              <input className="w-full p-3 rounded border" name="name" placeholder="Full Name" required />
              <input className="w-full p-3 rounded border" name="email" placeholder="Email Address" type="email" required />
              <input className="w-full p-3 rounded border" name="phone" placeholder="Phone Number" type="tel" required />
              <input className="w-full p-3 rounded border" name="fromZip" placeholder="Current ZIP Code" required />
              <input className="w-full p-3 rounded border" name="toZip" placeholder="Destination ZIP Code" required />
              <input className="w-full p-3 rounded border" name="moveDate" placeholder="Move Date" type="date" required />
              <input type="hidden" name="_replyto" value="wxdude@gmail.com" />
              <input type="hidden" name="_next" value="https://movingquotesdsm.com/thank-you" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">Get My Free Quotes</button>
            </form>
          </div>
        </main>

        <footer className="bg-gray-50 text-center p-4 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} MovingQuotesDSM.com | All rights reserved
        </footer>
      </div>
    </>
  );
}
