import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, ChevronDown, ArrowLeft } from 'lucide-react';

const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-text-main mb-1.5">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-text-main cursor-pointer flex justify-between items-center hover:border-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span className={value ? "text-text-main" : "text-gray-400"}>
          {selectedOption ? selectedOption.label : `Select ${label}`}
        </span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute left-0 right-0 top-[100%] mt-1 z-50 bg-white rounded-lg border border-gray-200 shadow-lg max-h-60 overflow-y-auto overflow-x-hidden">
            {options.map((opt) => (
              <div 
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`px-4 py-2.5 cursor-pointer hover:bg-blue-50 text-sm transition-colors border-b border-gray-100 last:border-0 ${value === opt.value ? 'bg-blue-50 text-primary font-medium' : 'text-text-main'}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan || { name: "1 Year Plan", newPrice: "699", duration: "1 Year" };

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', college: '', department: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Processing payment via secure gateway...');
  };

  const collegeOptions = [
    { value: 'IITM', label: 'IIT Madras' },
    { value: 'NIT', label: 'NIT Trichy' },
    { value: 'AnnaUniv', label: 'Anna University' },
    { value: 'Other', label: 'Other' },
  ];

  const departmentOptions = [
    { value: 'CSE', label: 'Computer Science' },
    { value: 'ECE', label: 'Electronics & Comm.' },
    { value: 'IT', label: 'Info Technology' },
    { value: 'MECH', label: 'Mechanical' },
  ];

  return (
    <div className="flex-grow flex items-center justify-center py-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10">
        
        {/* LEFT: Plan Summary */}
        <div className="md:col-span-2 flex flex-col space-y-6">
          <div className="corporate-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-text-main border-b border-gray-100 pb-4">
              <CheckCircle className="text-primary" /> Order Summary
            </h3>
            
            <div className="mb-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Plan Duration</span>
                <span className="font-semibold text-text-main">{plan.name}</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-text-main font-medium">Total Amount</span>
                <span className="text-2xl font-bold text-text-main">₹{plan.newPrice || plan.price}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm">
              <Shield size={20} className="shrink-0 mt-0.5" />
              <p>Guaranteed safe & secure checkout. Your connection is encrypted.</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-text-main text-sm font-medium rounded-lg transition-colors self-start mt-2"
          >
            <ArrowLeft size={16} /> Back to Plans
          </button>
        </div>

        {/* RIGHT: Form */}
        <div className="md:col-span-3 corporate-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-text-main border-b border-gray-100 pb-4">Checkout Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-main mb-1.5">Full Name</label>
              <input 
                type="text" required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="input-field"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5">Email Address</label>
                <input 
                  type="email" required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5">Phone Number</label>
                <input 
                  type="tel" required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="input-field"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CustomSelect 
                label="College"
                options={collegeOptions}
                value={formData.college}
                onChange={val => setFormData({...formData, college: val})}
              />
              <CustomSelect 
                label="Department"
                options={departmentOptions}
                value={formData.department}
                onChange={val => setFormData({...formData, department: val})}
              />
            </div>

            <button type="submit" className="btn-primary mt-6">
              Proceed to Payment
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Payment;
