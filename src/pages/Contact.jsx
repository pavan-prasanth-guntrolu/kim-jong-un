import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our organizing team",
      contact: "",
      action: "mailto:contact@REPLACE_WITH_EMAIL",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with organizers",
      contact: "",
      action: "tel:+91REPLACE_WITH_PHONE",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "IIIT Srikakulam Campus",
      contact: "Srikakulam, Andhra Pradesh, India",
      action: "https://maps.google.com",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <section className="hero-gradient py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Have questions? We're here to help make your quantum journey
              successful
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="glass-card border border-white/10 text-center h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {method.description}
                        </p>
                        <a
                          href={method.action}
                          className="text-primary hover:text-primary-hover transition-colors font-medium"
                        >
                          {method.contact}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="glass-card border border-white/10 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-poppins mb-6 text-center">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-popover"
                    >
                      <option value="">Select a topic</option>
                      <option value="registration">
                        Registration Questions
                      </option>
                      <option value="technical">Technical Support</option>
                      <option value="sponsorship">Sponsorship Inquiry</option>
                      <option value="media">Media & Press</option>
                      <option value="general">General Questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button type="submit" className=" px-8">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Code of Conduct */}
            <Card className="glass-card border border-white/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  Code of Conduct
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We follow a zero-tolerance Code of Conduct. Respect everyone —
                  harassment is not tolerated. Report incidents to
                  contact@REPLACE_WITH_EMAIL.
                </p>
                <Button
                  variant="outline"
                  className="hover:bg-[#1e1e1e] hover:text-primary transition-colors glass-card border"
                >
                  View Full Code of Conduct
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
