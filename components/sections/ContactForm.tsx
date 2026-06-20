"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Globe, Loader2, CheckCircle2 } from "lucide-react";

import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from "react";

export function ContactForm() {
  const [state, handleSubmit] = useForm('xzdqnegq');



  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-20 px-4">
        <div className="max-w-md w-full bg-foreground/5 border border-border rounded-3xl p-10 text-center backdrop-blur-sm">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Request Received!</h2>
          <p className="text-foreground/70 mb-8">
            We've received your request and will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-32 bg-background relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Let's Talk
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
              Ready to build something extraordinary?
            </h2>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              Fill out the form to request a free strategy session. We'll discuss your goals, technical requirements, and how we can help you achieve them.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-foreground">Email Us</h4>
                  <p className="text-foreground/60">buildyourway.studio@gmail.com</p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 border border-border">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-foreground">Remote</h4>
                  <p className="text-foreground/60">We work remotely worldwide,<br />serving clients globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-foreground/5 border border-border rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-2xl">
            {state.errors && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-sm">
                There was a problem submitting your request. Please ensure all fields are valid.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                  <input required type="text" id="name" name="name" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Rahul Patil" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company</label>
                  <input type="text" id="company" name="company" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Acme Inc." />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</label>
                  <input required type="email" id="email" name="email" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="rahul@example.com" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service Required *</label>
                <select required id="service" name="service" defaultValue="" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option value="" disabled>Select a service...</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Web Application">Web Application</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-foreground/80">Estimated Budget *</label>
                <select required id="budget" name="budget" defaultValue="" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option value="" disabled>Select budget range...</option>
                  <option value="Under ₹50,000">Under ₹50,000</option>
                  <option value="₹50,000 – ₹1 Lakh">₹50,000 – ₹1 Lakh</option>
                  <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
                  <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
                  <option value="₹5 Lakhs – ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                  <option value="₹10 Lakhs+">₹10 Lakhs+</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Project Details *</label>
                <textarea required id="message" name="message" rows={4} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project, goals, and timeline..."></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1 block" />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={state.submitting}>
                {state.submitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
              <p className="text-center text-xs text-foreground/40 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
