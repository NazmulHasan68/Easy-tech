"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    alert("Message sent successfully!");
  }

  return (
  <section className="py-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
    <div className="max-w-5xl mx-auto px-2 md:px-4">
      <div className="relative bg-white/80 backdrop-blur-xl border border-emerald-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-[32px] p-6 lg:p-14">

        {/* Decorative glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-3">
              Let’s Build Something Amazing
            </h3>
            <p className="text-gray-500 text-left max-w-xl mx-auto">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid lg:grid-cols-2 gap-3 md:gap-6"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+880 1XXXXXXXXX"
                        className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Service */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Service Interested In
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:ring-emerald-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-sky-50 mt-16">
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="erp">ERP / CRM Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message (full width) */}
              <div className="lg:col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Your Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Tell us about your project..."
                          className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Button */}
              <div className="lg:col-span-2 pt-4">
                <Button
                  type="submit"
                  className="w-full h-14 cursor-pointer text-white text-lg rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-200"
                >
                  Send Message
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
