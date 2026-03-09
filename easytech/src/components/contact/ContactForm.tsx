"use client";

import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name:    z.string().min(3, "Name must be at least 3 characters"),
  email:   z.string().email("Invalid email address"),
  phone:   z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const serviceLabels: Record<string, string> = {
  web:       "Web Development",
  marketing: "Digital Marketing",
  erp:       "ERP / CRM Solutions",
  app:       "Mobile App",
};

const EMAILJS_SERVICE_ID  = "service_uhpzmd1";
const EMAILJS_TEMPLATE_ID = "template_3ghhek9";
const EMAILJS_PUBLIC_KEY  = "RvkBaL68rGZE_1t6c";

const inputStyle = {
  background: "var(--background)",
  borderColor: "var(--border-color)",
  color: "var(--foreground)",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  values.name,
          from_email: values.email,
          phone:      values.phone,
          service:    serviceLabels[values.service] ?? values.service,
          message:    values.message,
          to_email:   "nazmulhasan00068@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <section className="py-4" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <div
          className="relative backdrop-blur-xl rounded-[2rem] p-6 lg:p-14"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 20px 60px rgba(94,76,220,0.1)",
          }}
        >
          {/* Corner glows */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "#5e4cdc" }} />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: "#a78bfa" }} />

          <div className="relative z-10">

            {/* Header */}
            <div className="text-center mb-12">
              <h3 className="md:text-2xl text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                Let's Build Something Amazing
              </h3>
              <p className="text-left max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
                Tell us about your project and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Success */}
            {status === "success" && (
              <div className="mb-8 flex items-center gap-3 rounded-xl px-5 py-4"
                style={{ background: "rgba(94,76,220,0.08)", border: "1px solid rgba(94,76,220,0.3)", color: "var(--primary)" }}
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Message sent! We'll get back to you within 24 hours.</span>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mb-8 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-red-600">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-medium">Something went wrong. Please try again.</span>
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-3 md:gap-6">

                {/* Name */}
                <FormField control={form.control} name="name"
                  render={({ field }: { field: ControllerRenderProps<FormValues, "name"> }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--foreground)" }}>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 rounded-xl" style={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField control={form.control} name="email"
                  render={({ field }: { field: ControllerRenderProps<FormValues, "email"> }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--foreground)" }}>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="h-12 rounded-xl" style={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField control={form.control} name="phone"
                  render={({ field }: { field: ControllerRenderProps<FormValues, "phone"> }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--foreground)" }}>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+880 1XXXXXXXXX" className="h-12 rounded-xl" style={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Service */}
                <FormField control={form.control} name="service"
                  render={({ field }: { field: ControllerRenderProps<FormValues, "service"> }) => (
                    <FormItem>
                      <FormLabel style={{ color: "var(--foreground)" }}>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 rounded-xl" style={inputStyle}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="erp">ERP / CRM Solutions</SelectItem>
                          <SelectItem value="app">Mobile App</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <div className="lg:col-span-2">
                  <FormField control={form.control} name="message"
                    render={({ field }: { field: ControllerRenderProps<FormValues, "message"> }) => (
                      <FormItem>
                        <FormLabel style={{ color: "var(--foreground)" }}>Your Message</FormLabel>
                        <FormControl>
                          <Textarea rows={6} placeholder="Tell us about your project..." className="rounded-xl" style={inputStyle} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit */}
                <div className="lg:col-span-2 pt-4">
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-14 cursor-pointer text-white text-lg rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #5e4cdc, #a78bfa)",
                      boxShadow: "0 8px 30px rgba(94,76,220,0.35)",
                    }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message →"}
                  </Button>
                </div>

              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}