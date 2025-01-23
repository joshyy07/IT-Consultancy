import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    title: "IT Consulting",
    description: "Strategic technology planning and implementation guidance",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure services",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Business with Expert IT Consulting
            </h1>
            <p className="text-xl mb-8">
              We help businesses leverage technology to drive growth and innovation
            </p>
            <Button asChild className="bg-white text-blue-800 hover:bg-gray-100">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-150"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;