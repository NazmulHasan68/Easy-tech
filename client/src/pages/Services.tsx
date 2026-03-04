

export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Create stunning, responsive websites that convert visitors into customers.',
      features: [
        'Custom Website Design',
        'e-Commerce Solutions',
        'Portfolio Websites',
        'Responsive Design',
        'CMS Integration',
        'Website Maintenance'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Reach your target audience and grow your brand with data-driven marketing strategies.',
      features: [
        'Social Media Marketing',
        'Facebook Ads',
        'Instagram Marketing',
        'Content Marketing',
        'Email Campaigns',
        'Analytics & Reporting'
      ],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '⚙️',
      title: 'ERP / CRM Solutions',
      description: 'Streamline your business operations with custom enterprise software solutions.',
      features: [
        'Custom ERP Development',
        'CRM Implementation',
        'Business Process Automation',
        'Real Estate CRM',
        'Agency Management',
        'Integration Services'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'Create memorable visual identities that make your brand stand out.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'Social Media Graphics',
        'Print Design',
        'UI/UX Design'
      ],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Link Building',
        'Local SEO',
        'SEO Audits'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '💼',
      title: 'Software Development',
      description: 'Build custom software solutions tailored to your specific business needs.',
      features: [
        'Custom Software',
        'Mobile Apps',
        'Web Applications',
        'API Development',
        'Cloud Solutions',
        'DevOps'
      ],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive in the modern marketplace
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700"
                    >
                      <svg className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg">
              Starting from ৳1500 - Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '1500', features: ['Basic Website', '3 Pages', '1 Month Support'] },
              { name: 'Professional', price: '5000', features: ['Custom Design', 'Up to 10 Pages', '3 Months Support', 'SEO Basics'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Full Custom Solution', 'Unlimited Pages', '1 Year Support', 'Full SEO', 'Priority Support'] }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-emerald-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-emerald-600">৳{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/project</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-xl hover:shadow-2xl gap-2"
          >
            Contact Us Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}