import React, { useEffect, useState } from 'react';
import { Cloud, Lock, Zap, Monitor, Globe, Headphones } from 'lucide-react';

const Features = () => {
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

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Built for the cloud with scalable, resilient infrastructure that grows with your business.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance frameworks, and audit trails.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and real-time data processing.'
    },
    {
      icon: Monitor,
      title: 'Intelligent Monitoring',
      description: 'Advanced analytics and monitoring tools provide insights into system performance and health.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Deploy anywhere in the world with multi-region support and localization features.'
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of experts to ensure your success.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VersaFlex?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of enterprise-grade software solutions designed for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of enterprises who trust VersaFlex to power their digital transformation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;