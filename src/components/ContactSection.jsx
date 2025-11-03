import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [success]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = Object.fromEntries(new FormData(form));

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    const messageOk = (data.message || '').trim().length >= 10;
    const requiredFilled = ['name', 'company', 'email', 'country', 'message'].every((k) => (data[k] || '').trim().length > 0);

    if (!requiredFilled) {
      const firstInvalid = ['name', 'company', 'email', 'country', 'message'].find((k) => (data[k] || '').trim().length === 0);
      form.elements[firstInvalid]?.focus();
      return;
    }
    if (!emailOk) {
      form.elements['email'].focus();
      return;
    }
    if (!messageOk) {
      form.elements['message'].focus();
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-5" data-animate>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black">Contact</h2>
            <div className="mt-6 grid gap-2 text-neutral-700">
              <p><span className="font-medium text-black">Company:</span> SVS Horizon Pvt Ltd</p>
              <p><span className="font-medium text-black">Email:</span> enquiry@svshorizontraders.com</p>
              <p><span className="font-medium text-black">WhatsApp:</span> +91 8179665999</p>
              <p><span className="font-medium text-black">Location:</span> Hyderabad, India</p>
            </div>
            <p className="mt-6 text-sm text-neutral-500">We’ll respond within 24 hours.</p>
          </div>

          <div className="col-span-12 lg:col-span-7" data-animate>
            <form ref={formRef} onSubmit={onSubmit} className={`rounded-xl border border-neutral-200 bg-white p-6 shadow-sm ${sending ? 'animate-pulse' : ''}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600">Name</label>
                  <input name="name" type="text" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Company / Business Name</label>
                  <input name="company" type="text" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Email</label>
                  <input name="email" type="email" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Country</label>
                  <select name="country" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required>
                    <option value="">Select Country</option>
                    <option>India</option>
                    <option>United Arab Emirates</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>United Kingdom</option>
                    <option>Italy</option>
                    <option>Netherlands</option>
                    <option>Spain</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-neutral-600">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" required minLength={10} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="shimmer-button" disabled={sending}>
                  <div className="spark-container"><div className="spark"><div className="spark-inner"></div></div></div>
                  <span className="button-content">{sending ? 'Sending…' : 'Send Message'}</span>
                  <div className="highlight"></div>
                  <div className="backdrop"></div>
                </button>
                {success && <span className="text-sm text-green-600">Thanks! Well get back within 24 hours.</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
