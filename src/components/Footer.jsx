import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechConsult</h3>
            <p className="text-gray-400">
              Delivering innovative IT solutions and strategic consulting services to help businesses thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                128 Business Ave, Tech City
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +234 9022861159 
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                info@techconsult.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>IT Consulting</li>
              <li>Digital Transformation</li>
              <li>Cloud Solutions</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
