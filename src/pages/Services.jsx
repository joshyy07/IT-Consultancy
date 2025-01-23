import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Services = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive IT solutions for your business needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <div className="space-y-6">
                <Card className="p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">IT Strategy Consulting</h3>
                  <p className="text-gray-600">
                    Develop a comprehensive IT roadmap aligned with your business goals
                  </p>
                </Card>
                <Card className="p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                  <p className="text-gray-600">
                    Modernize your operations with cutting-edge digital solutions
                  </p>
                </Card>
                <Card className="p-6 transition-transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                  <p className="text-gray-600">
                    Secure and scalable cloud infrastructure implementation
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <Textarea placeholder="How can we help?" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;