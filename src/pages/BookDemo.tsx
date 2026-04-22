import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Format the data for email
      const emailData = {
        to: 'Dean@E9Global.com',
        subject: `Contact Request from ${data.firstName} ${data.lastName} - ${data.subject}`,
        body: `
Contact Request Details:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This request was submitted through the E9 Global website contact form.
        `.trim()
      };

      // Create mailto link
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
      
      // Open user's email client
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Message Prepared",
        description: "Your email client should open with the contact message. Please send the email to complete your request.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-playfair font-bold mb-6 text-center" style={{ lineHeight: '1.5' }}>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent block mb-1 sm:mb-3 py-1 sm:py-2 font-extrabold">
                Contact Us
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
              Please complete the form below
            </p>
          </div>

          {/* Two Column Layout */}
         <div className="flex justify-center items-center min-h-[600px]">
      

            {/* Right Column - Form */}
            <div className="max-w-2xl w-full">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Section */}
                    <div className="space-y-2">
                      <FormLabel className="text-lg font-medium text-foreground/90">Name (required)</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <FormLabel className="text-sm text-foreground/70">First Name</FormLabel>
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <FormLabel className="text-sm text-foreground/70">Last Name</FormLabel>
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Section */}
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-medium text-foreground/90">Email (required)</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Subject Section */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium text-foreground/90">Subject (required)</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message Section */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-medium text-foreground/90">Message (required)</FormLabel>
                          <FormControl>
                            <Textarea 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="bg-card text-primary border-2 border-primary px-8 py-3 font-semibold text-lg hover:bg-primary hover:text-background transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default BookDemo;

