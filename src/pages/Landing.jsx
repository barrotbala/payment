import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronDown, CheckCircle, Shield, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const sharedFeatures = [
    "Learning Dashboard",
    "Internship Opportunities",
    "Skill Development Coding",
    "Practice Resume Building",
    "Placement Support",
    "Progress Tracking",
    "End-to-End Access"
  ];

  const plans = [
    { 
      name: "1 Year Plan", 
      oldPrice: "999", 
      newPrice: "699", 
      duration: "1 Year", 
      badge: null,
      features: sharedFeatures
    },
    { 
      name: "2 Years Plan", 
      oldPrice: "1499", 
      newPrice: "1099", 
      duration: "2 Years", 
      badge: null,
      features: sharedFeatures
    },
    { 
      name: "3 Year Plan", 
      oldPrice: "1999", 
      newPrice: "1499", 
      duration: "3 Years", 
      badge: "Most Popular",
      features: sharedFeatures
    },
    { 
      name: "4 Year Plan", 
      oldPrice: "2499", 
      newPrice: "1899", 
      duration: "4 Years", 
      badge: null,
      features: sharedFeatures
    }
  ];

  const faqs = [
    { q: "What is Prolync Student Workspace?", a: "A platform to build real-world skills, track progress, and get placement support tailored for institutional partnerships." },
    { q: "How long will I get access?", a: "Your access duration is strictly based on your selected plan (ranging from 1 to 4 years of full platform access)." },
    { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your plan anytime by paying the prorated difference right from your dashboard." },
    { q: "Do you provide refunds?", a: "Yes, we offer a straightforward 7-day refund policy. Please refer to our Refund Policy page for exact details." },
    { q: "Is placement support included?", a: "Yes, all plans include comprehensive placement assistance and internship opportunities." }
  ];

  const testimonials = [
    {
      text: "Prolync helped me gain real-world skills and secure my internship. The platform is simple and effective.",
      author: "Rahul M.",
      dept: "Computer Science"
    },
    {
      text: "The placement support features and intuitive dashboard helped me secure my first major job. Highly recommended.",
      author: "Sneha P.",
      dept: "Information Technology"
    },
    {
      text: "Incredible curriculum! The coding challenges prepare you specifically for exactly what top product companies ask for.",
      author: "Aravind K.",
      dept: "Electronics & Comm."
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState("3 Year Plan");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="flex flex-col gap-24">
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] -mt-24 pt-40 pb-24 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-[42px] md:text-[64px] font-[800] tracking-tight leading-[1.1] max-w-4xl mx-auto text-center text-text-main">
            Sensational platform.{' '}
            <span className="bg-gradient-to-r from-[#1E293B] to-[#2563EB] bg-clip-text text-transparent">
              Sensible price.
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 w-full max-w-4xl mx-auto px-4">
            {["Comprehensive Curriculum", "Flexible contracts", "Guaranteed Placement", "Reliable support"].map(item => (
              <div key={item} className="flex items-center justify-center gap-2 text-[14px] md:text-[15px] font-medium text-[#374151]">
                <CheckCircle size={18} className="text-[#2563EB] shrink-0" />
                <span className="text-center">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PRICING SECTION */}
      <section id="pricing" className="w-full">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
             <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary"/> Secure Payment</span>
             <span className="text-gray-300">•</span>
             <span>Trusted by 5000+ students</span>
          </div>
          <h2 className="text-3xl font-bold text-text-main mb-2">Choose Your Plan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {plans.map((plan) => {
            const savings = parseInt(plan.oldPrice) - parseInt(plan.newPrice);
            const isSelected = selectedPlan === plan.name;
            return (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`flex flex-col rounded-2xl relative transition-all duration-300 p-6 cursor-pointer overflow-hidden ${
                  isSelected 
                    ? 'border-2 border-primary bg-white ring-4 ring-blue-50/50 shadow-md scale-[1.02] z-10' 
                    : 'border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
              >
                {/* Selection Tick mark */}
                {isSelected && (
                  <div className="absolute top-4 right-4 text-primary bg-blue-100/50 rounded-full p-1">
                    <CheckCircle size={16} className="fill-blue-50" />
                  </div>
                )}

                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-b-xl text-[11px] font-bold tracking-wider uppercase">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-text-main mt-4 mb-2">{plan.name}</h3>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl text-gray-400 line-through font-medium">₹{plan.oldPrice}</span>
                  <span className="text-4xl font-extrabold text-[#111827]">₹{plan.newPrice}</span>
                </div>

                <div className="inline-block mb-6">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {plan.badge ? "Best Value" : `Save ₹${savings}`}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8 border-t border-gray-200/60 pt-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#4B5563] font-medium">
                        <Check size={18} className="text-primary shrink-0 opacity-80" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      navigate('/payment', { state: { plan } });
                    } else {
                      setSelectedPlan(plan.name);
                    }
                  }}
                  className={`w-full py-3 rounded-lg font-bold transition-all text-[15px] ${
                    isSelected 
                      ? 'bg-primary text-white shadow-sm ring-1 ring-primary ring-offset-2 ring-offset-white' 
                      : 'bg-white text-primary border border-primary hover:bg-blue-50'
                  }`}
                >
                  {isSelected ? "Continue →" : "Select Plan"}
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Universal Checkout Proceed Button */}
        <div className="flex justify-center mt-12 mb-8">
           <button 
             onClick={() => navigate('/payment', { state: { plan: plans.find(p=>p.name === selectedPlan) } })}
             className="px-12 py-4 bg-primary text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all text-lg flex items-center gap-2"
           >
              Proceed to Checkout <ChevronRight size={20} />
           </button>
        </div>
      </section>

      {/* 3. FEEDBACK SECTION (TESTIMONIAL CAROUSEL) */}
      <section className="w-full max-w-4xl mx-auto px-4 mb-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-text-main">Trusted by Students</h2>
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-8 md:p-12 text-center overflow-hidden group">
          
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(star => <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          
          <div className="min-h-[140px] flex flex-col justify-center">
            <p className="text-[18px] md:text-[20px] text-gray-700 font-medium mb-10 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary text-lg">
                 {testimonials[currentTestimonial].author[0]}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-[15px] text-text-main">{testimonials[currentTestimonial].author}</h4>
                <p className="text-sm text-text-muted">{testimonials[currentTestimonial].dept}</p>
              </div>
            </div>
          </div>

          <button 
             onClick={() => setCurrentTestimonial(p => p===0 ? testimonials.length-1 : p-1)} 
             className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2.5 bg-white border border-gray-100 text-gray-400 rounded-full hover:text-primary hover:bg-blue-50 shadow-sm transition-all md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
             onClick={() => setCurrentTestimonial(p => p===testimonials.length-1 ? 0 : p+1)} 
             className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2.5 bg-white border border-gray-100 text-gray-400 rounded-full hover:text-primary hover:bg-blue-50 shadow-sm transition-all md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center gap-2 mt-8">
             {testimonials.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrentTestimonial(i)}
                 className={`h-2 rounded-full transition-all duration-300 ${i===currentTestimonial ? 'bg-primary w-6' : 'bg-gray-200 w-2 hover:bg-gray-300'}`} 
                 aria-label={`Go to slide ${i+1}`}
               />
             ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="max-w-3xl mx-auto w-full mb-20 px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-text-main">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? 'bg-[#F9FAFB] border-gray-300 shadow-sm' : 'bg-white border-[#E5E7EB]'}`}>
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className={`font-semibold text-[15.5px] transition-colors ${isOpen ? 'text-primary' : 'text-text-main'}`}>{faq.q}</span>
                  <ChevronDown className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-primary' : ''}`} size={20} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 text-gray-600 text-[14.5px] leading-relaxed border-t border-gray-100 pt-4 mx-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Landing;
