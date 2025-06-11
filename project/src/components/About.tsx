import React, { useEffect, useState } from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Target, value: '98%', label: 'Project Success Rate' },
    { icon: Award, value: 'Industry Expert', label: 'Recognition' },
    { icon: TrendingUp, value: '100K+', label: 'Lines of Code' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <img 
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About VersaFlex</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At VersaFlex, we are passionate professionals dedicated to making a difference in the world. 
              Founded as a startup, we have grown into a dynamic force in the industry, redefining 
              what's possible every day.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to transform the way businesses operate through innovation and cutting-edge 
              technologies. We strive to make a positive impact not only on our clients but on the 
              industry as a whole through forward-thinking strategies and solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Thank you for considering us as your trusted partner. Let's embark on this journey 
              of innovation and excellence together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;