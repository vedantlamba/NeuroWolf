import React from "react";
import { Brain, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerData = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Support", href: "#" },
      { name: "Status", href: "#" },
    ],
    social: [
      {
        name: "Twitter",
        href: "#",
        icon: Twitter,
      },
      {
        name: "Instagram",
        href: "#",
        icon: Instagram,
      },
      {
        name: "Youtube",
        href: "#",
        icon: Youtube,
      },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200 pb-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <img src="/logo.png" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                NeuroWolf.ai
              </span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerData.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerData.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerData.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Social</h3>
            <ul className="space-y-3">
              {footerData.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center text-center items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 text-balance">
              Copyright © 2025 neurowolf.ai - Automate your workflow with AI
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-violet-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
