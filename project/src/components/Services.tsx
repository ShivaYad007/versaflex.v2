import React, { useEffect, useState } from 'react';
import { RefreshCw, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: RefreshCw,
      title: 'ISO Conversion Tool',
      description: 'Convert ISO 20022 messages seamlessly across different formats. Our advanced tool handles XML formatting, legacy system protocols, and ensures SWIFT MT message compatibility with proprietary formats.',
      features: ['Real-time Processing', 'Multi-format Support', 'Error Validation', 'Batch Operations'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Reconciliation Engine',
      description: 'Powerful bank transaction reconciliation system that manages financial data across multiple branches. Ensures accuracy and consistency in financial records with automated matching algorithms.',
      features: ['Automated Matching', 'Multi-branch Support', 'Audit Trail', 'Exception Handling'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions with comprehensive compliance frameworks. Protect your data with advanced encryption, access controls, and regulatory compliance tools.',
      features: ['End-to-end Encryption', 'Role-based Access', 'Compliance Reporting', 'Security Monitoring'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamless API integration services that connect your systems with third-party platforms. Build robust, scalable integrations with real-time data synchronization.',
      features: ['RESTful APIs', 'Real-time Sync', 'Custom Connectors', 'Webhook Support'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to streamline your operations and accelerate digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;