import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-darkNavy text-white py-14">

      <Container>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT */}

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Yatharth Fitness
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Transform your body and mindset with
              premium coaching and live events.
            </p>
          </div>

          {/* CENTER */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Home</li>
              <li>Events</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* RIGHT */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Mumbai, India</li>
              <li>+91 98765 43210</li>
              <li>support@yatharth.com</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            mt-10
            pt-6
            text-center
            text-slate-400
          "
        >
          © 2026 Yatharth Fitness. All rights reserved.
        </div>

      </Container>

    </footer>
  );
};

export default Footer;