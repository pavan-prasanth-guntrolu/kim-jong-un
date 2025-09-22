import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  User,
  Mail,
  Phone,
  GraduationCap,
  Building,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    year: "",
    branch: "",
    experience: "",
    motivation: "",
    agreeTerms: false,
    agreeUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "institution",
      "year",
      "branch",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Commented out actual fetch for offline testing
      /*
      const response = await fetch("REPLACE_WITH_REGISTRATION_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      */

      // Dummy response for offline testing
      const dummyResponse = {
        ok: true,
        json: async () => ({
          success: true,
          message: "Registration successful (dummy response)",
        }),
      };

      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description:
          "Thanks! You're registered for Qiskit Fall Fest 2025 — check your email for details.",
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Registration Successful!",
          description:
            "Thanks! You're registered for Qiskit Fall Fest 2025 — check your email for details.",
        });
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // Fallback to Google Form if registration endpoint fails
      console.log("Registration endpoint failed, opening Google Form fallback");
      window.open("REPLACE_WITH_GOOGLE_FORM_URL", "_blank");

      toast({
        title: "Registration Form Opened",
        description: "Please complete your registration in the new tab.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-background px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </motion.div>
          <h1 className="text-2xl font-bold font-poppins mb-4">
            Registration Successful!
          </h1>
          <p className="text-muted-foreground mb-6">
            Thanks! You're registered for Qiskit Fall Fest 2025 — check your
            email for details.
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="btn-quantum"
          >
            Return to Home
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Register for{" "}
              <span className="text-gradient">Qiskit Fall Fest 2025</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure your spot at IIIT Srikakulam's quantum computing
              celebration
            </p>
          </div>

          {/* Registration Form */}
          <Card className="glass-card border border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                    Academic Information
                  </h3>

                  <div>
                    <Label htmlFor="institution">Institution *</Label>
                    <Input
                      id="institution"
                      type="text"
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                      placeholder="Your college/university name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Academic Year *</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("year", value)
                        }
                      >
                        <SelectTrigger className="px-4 py-2">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover text-popover-foreground p-2 space-y-1">
                          <SelectItem
                            value="1st-year"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            1st Year
                          </SelectItem>
                          <SelectItem
                            value="2nd-year"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            2nd Year
                          </SelectItem>
                          <SelectItem
                            value="3rd-year"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            3rd Year
                          </SelectItem>
                          <SelectItem
                            value="4th-year"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            4th Year / Final Year
                          </SelectItem>
                          <SelectItem
                            value="masters"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            Master's Student
                          </SelectItem>
                          <SelectItem
                            value="phd"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            PhD Student
                          </SelectItem>
                          <SelectItem
                            value="faculty"
                            className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            Faculty/Staff
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="branch">Branch/Major *</Label>
                      <Input
                        id="branch"
                        type="text"
                        value={formData.branch}
                        onChange={(e) =>
                          handleInputChange("branch", e.target.value)
                        }
                        placeholder="e.g., Computer Science, Physics"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Background Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Building className="h-5 w-5 mr-2 text-primary" />
                    Background & Motivation
                  </h3>

                  <div>
                    <Label htmlFor="experience">
                      Quantum Computing Experience
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("experience", value)
                      }
                    >
                      <SelectTrigger className="px-4 py-2">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover text-popover-foreground p-2 space-y-1">
                        <SelectItem
                          value="none"
                          className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          No prior experience
                        </SelectItem>
                        <SelectItem
                          value="beginner"
                          className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Beginner (some reading/online courses)
                        </SelectItem>
                        <SelectItem
                          value="intermediate"
                          className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Intermediate (some projects/coursework)
                        </SelectItem>
                        <SelectItem
                          value="advanced"
                          className="px-4 py-2 rounded hover:bg-accent hover:text-accent-foreground"
                        >
                          Advanced (research/professional experience)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="motivation">
                      Why do you want to attend? (Optional)
                    </Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) =>
                        handleInputChange("motivation", e.target.value)
                      }
                      placeholder="Tell us what motivates you to learn quantum computing..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="space-y-4 border-t border-border pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeTerms", checked)
                      }
                    />
                    <div className="text-sm">
                      <Label htmlFor="agreeTerms" className="cursor-pointer">
                        I agree to the{" "}
                        <a
                          href="/code-of-conduct"
                          className="text-primary hover:underline"
                        >
                          Code of Conduct
                        </a>{" "}
                        and event terms and conditions. *
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeUpdates"
                      checked={formData.agreeUpdates}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeUpdates", checked)
                      }
                    />
                    <div className="text-sm">
                      <Label htmlFor="agreeUpdates" className="cursor-pointer">
                        I would like to receive updates about future quantum
                        computing events and opportunities.
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full btn-quantum text-primary-foreground py-3 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Complete Registration"}
                </Button>

                {/* Fallback Link */}
                <div className="text-center text-sm text-muted-foreground">
                  Having trouble? You can also{" "}
                  <a
                    href="REPLACE_WITH_GOOGLE_FORM_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    register via Google Form
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;
