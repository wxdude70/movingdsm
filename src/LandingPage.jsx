import { Helmet } from 'react-helmet';

export default function LandingPage() {
  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>

        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1" />
        </noscript>
      </Helmet>

      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        <header className="bg-blue-600 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold">Get Free Moving Quotes in Des Moines</h1>
          <p className="text-lg">Compare rates from trusted local movers</p>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-center p-8 gap-10">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Trusted by 10,000+ Customers</h2>
            <ul className="list-disc pl-5 text-base">
              <li>Pre-screened moving companies</li>
              <li>No-obligation quotes</li>
              <li>Save time and money</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Request Your Quote</h3>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xdoqzjvq"
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
