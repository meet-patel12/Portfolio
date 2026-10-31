import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { EarthCanvas } from '@/components/3d/EarthCanvas';
import { GlassButton } from '@/components/ui/GlassButton';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      // Send directly to Meet's email via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.emails.primary}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Project Scope': formData.projectType,
          Message: formData.message,
          _subject: `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`,
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && data.success !== 'false')) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });
      } else {
        // Fallback: If endpoint requires activation or block, open mail client pre-filled
        const mailtoUrl = `mailto:${PERSONAL_INFO.emails.primary}?subject=${encodeURIComponent(
          `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus('success');
      }
    } catch {
      // Direct mailto fallback on network error / ad-blocker
      const mailtoUrl = `mailto:${PERSONAL_INFO.emails.primary}?subject=${encodeURIComponent(
        `Portfolio Inquiry: ${formData.projectType} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-[#39FF14]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#39FF14] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>08 // Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Let's Engineer Something <span className="text-neon-gradient">Extraordinary.</span>
          </h2>
          <p className="text-base text-[#BDBDBD] leading-relaxed">
            Have a project in mind, an engineering role, or a 3D web concept? Let's discuss how we can build it.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Earth & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-8 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-xl relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#BDBDBD]">Global Reach • Remote Ready</span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[11px] font-mono text-[#39FF14]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                  Available Now
                </span>
              </div>

              {/* 3D Earth Globe */}
              <EarthCanvas />

              {/* Contact Direct Cards */}
              <div className="space-y-4 mt-6">
                <a
                  href={`mailto:${PERSONAL_INFO.emails.primary}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#121212] border border-[#2A2A2A] hover:border-[#39FF14]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#2A2A2A] group-hover:border-[#39FF14]/50 flex items-center justify-center text-[#39FF14]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#757575]">Email Directly</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#39FF14] transition-colors">
                      {PERSONAL_INFO.emails.primary}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#121212] border border-[#2A2A2A]">
                  <div className="w-10 h-10 rounded-xl bg-black border border-[#2A2A2A] flex items-center justify-center text-[#00C853]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#757575]">Base Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-6 border-t border-[#2A2A2A] mt-6 flex items-center justify-between">
              <span className="text-xs font-mono text-[#BDBDBD]">Connect on Socials</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black border border-[#2A2A2A] text-[#BDBDBD] hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#1A1A1A]/70 border border-[#2A2A2A] backdrop-blur-xl relative shadow-2xl">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mb-8">
              Guaranteed response within 24 hours. Let's discuss your timeline and vision.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] mb-4 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Message Dispatched!</h4>
                  <p className="text-sm text-[#BDBDBD] max-w-sm mb-6">
                    Thank you. Meet has received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-full bg-[#121212] border border-[#2A2A2A] hover:border-[#39FF14] text-xs font-mono text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#BDBDBD] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-[#2A2A2A] text-sm text-white placeholder-[#757575] focus-neon transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-[#BDBDBD] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-[#2A2A2A] text-sm text-white placeholder-[#757575] focus-neon transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono text-[#BDBDBD] mb-2">
                      Project Scope / Inquiry
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-[#2A2A2A] text-sm text-white focus-neon transition-all cursor-pointer"
                    >
                      <option value="Full Stack Web App">Full Stack Web Application</option>
                      <option value="3D WebGL Experience">3D WebGL & Creative Web</option>
                      <option value="Full Time Engineering Role">Full Time Engineering Role</option>
                      <option value="Performance & Architecture Audit">Performance & Architecture Audit</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#BDBDBD] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#121212] border border-[#2A2A2A] text-sm text-white placeholder-[#757575] focus-neon transition-all resize-none"
                    />
                  </div>

                  {/* ARIA Live Region */}
                  <div aria-live="polite" className="sr-only">
                    {status === 'submitting' && 'Sending message...'}
                  </div>

                  <GlassButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  </GlassButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
