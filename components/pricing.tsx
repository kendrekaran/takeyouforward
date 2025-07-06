"use client"

import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

const pricingPlans = [
  {
    name: "Sprint Plan",
    subtitle: "Perfect for beginners starting their coding journey",
    originalPrice: 8999,
    regularPrice: 6599,
    offerPrice: 4289.35,
    discount: "27% OFF",
    coupon: "PAYDAY",
    validity: "12 Months",
    features: [
      { name: "All features", included: true },
      { name: "Only DSA, Core & Aptitude", included: true },
      { name: "AI Doubt Support", included: false },
      { name: "Biweekly Sessions", included: false },
      { name: "Code Review", included: false },
    ],
    buttonClass: "bg-gray-900 border border-gray-700 text-white hover:bg-gray-800",
    isPopular: false,
    hasContactButton: false,
  },
  {
    name: "Pinnacle Plan",
    subtitle: "Go all in — with expert support & lifetime access",
    originalPrice: 11999,
    regularPrice: 9120,
    offerPrice: 5928,
    discount: "24% OFF",
    coupon: "PAYDAY",
    validity: "Lifetime",
    features: [
      { name: "All features", included: true },
      { name: "DSA, Core, Design & Aptitude", included: true },
      { name: "AI Doubt Support", included: true },
      { name: "Biweekly Sessions", included: true },
      { name: "Code Review", included: true },
    ],
    buttonClass: "bg-white text-gray-900 hover:bg-gray-100 shadow-lg",
    isPopular: true,
    hasContactButton: false,
  },
  {
    name: "Enterprise Plan",
    subtitle: "Perfect for a group of people (minimum 30) who are looking for an extra discount",
    originalPrice: null,
    regularPrice: null,
    offerPrice: null,
    discount: null,
    coupon: null,
    validity: null,
    features: [
      { name: "All features of Pinnacle", included: true },
      { name: "Performance Dashboard", included: true },
      { name: "Centralized Billing & Licensing", included: true },
      { name: "Custom Curriculum", included: true },
      { name: "Exclusive Webinars & Industry Events", included: true },
      { name: "Batch Enrollment & Role Access", included: true },
    ],
    buttonClass: "bg-gray-900 border border-gray-700 text-white hover:bg-gray-800",
    isPopular: false,
    hasContactButton: true,
  },
]

// Animated price component with view trigger
const AnimatedPrice = ({ value }: { value: number }) => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const priceRef = useRef<HTMLSpanElement>(null)
  const spring = useSpring(0, { 
    mass: 0.8, 
    stiffness: 75, 
    damping: 15,
    restSpeed: 0.1
  });
  
  const display = useTransform(spring, (current) => {
    return Math.round(current).toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  });

  useEffect(() => {
    if (!priceRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          spring.set(value);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(priceRef.current);
    return () => observer.disconnect();
  }, [value, spring, hasAnimated]);

  return <motion.span ref={priceRef}>{display}</motion.span>;
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1
  }
};

const badgeVariants = {
  hidden: { 
    opacity: 0,
    scale: 0
  },
  visible: { 
    opacity: 1,
    scale: 1
  }
};

export default function PricingSection() {
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % pricingPlans.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length)
  }

  return (
    <div className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 px-2">
            Choose Your <span className="text-[#ea763f]">Plan</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl mx-auto">
            Select the perfect plan for your coding journey
          </p>
        </div>

       
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto mt-24">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-xl p-6 border transition-all duration-300 ${
                plan.isPopular 
                  ? "bg-[#ea753f] shadow-xl shadow-[#ea763f]/20 scale-110 -mt-4 mb-4 z-10" 
                  : "bg-white border-gray-700 hover:border-gray-600"
              }`}
            >
             
              {plan.isPopular && (
                <motion.div 
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-white text-[#ea763f] px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </motion.div>
              )}

             
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-white/90' : 'text-black/80'}`}>{plan.subtitle}</p>
              </div>

             
              {!plan.hasContactButton && (
                <div className="mb-8">
                                    
                   <div className={`relative ${plan.isPopular ? 'bg-gradient-to-br from-white via-orange-50 to-orange-100 border-2 border-white shadow-2xl shadow-orange-500/30' : 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300'} rounded-xl shadow-lg p-5 mb-4 transition-all duration-300`}>
                    
                     <div className="absolute -top-4 right-4">
                       <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${plan.isPopular ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/50' : 'bg-[#ea763f] text-white'}`}>
                         {plan.discount} OFF
                       </span>
                     </div>
                    
                     <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
     <div>
                         <div className="flex items-center gap-2 mb-1">
                           <span className={`text-xs font-semibold uppercase tracking-wide ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Original</span>
                           <span className={`text-xs line-through ${plan.isPopular ? 'text-orange-600' : 'text-gray-500'}`}>₹{plan.originalPrice}</span>
                         </div>
                         <div className="flex items-center gap-2 mb-1">
                           <span className={`text-xs font-semibold uppercase tracking-wide ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Regular</span>
                           <span className={`text-xs ${plan.isPopular ? 'text-orange-900 font-bold' : 'text-black font-semibold'}`}>₹{plan.regularPrice}</span>
                         </div>
                       </div>
                      
                       <div className="flex items-end gap-2">
                         <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Now</span>
                         <span className={`text-4xl sm:text-5xl font-extrabold ${plan.isPopular ? 'text-orange-600 drop-shadow-sm' : 'text-[#ea763f] drop-shadow-lg'}`}>
                           ₹{plan.offerPrice && <AnimatedPrice value={plan.offerPrice} />}
                         </span>
                       </div>
                     </div>
                    
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-2">
                       <div className="flex items-center gap-2">
                         <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Coupon:</span>
                         <span className={`px-2 py-1 rounded text-sm font-bold tracking-wider ${plan.isPopular ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm' : 'text-white bg-[#ea763f]'}`}>
                           {plan.coupon}
                         </span>
                       </div>
                       <div className="flex items-center gap-2">
                         <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Validity:</span>
                         <span className={`text-sm font-semibold ${plan.isPopular ? 'text-orange-900' : 'text-black'}`}>{plan.validity}</span>
                       </div>
                     </div>
                   </div>
                 
                </div>
              )}

             
              <div className="mb-6">
                <p className={`text-sm font-medium mb-3 ${plan.isPopular ? 'text-white' : 'text-black'}`}>What&apos;s included:</p>
                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {feature.included ? (
                            <div className="bg-green-600 rounded-full p-1">
                          <Check className="w-4 h-4 text-white" />
                            </div>
                        ) : (
                            <div className="bg-red-600 rounded-full p-1">
                          <X className="w-4 h-4 text-white" />
                            </div>
                        )}
                      </div>
                      <span className={`text-sm font-medium leading-relaxed ${
                        feature.included 
                          ? (plan.isPopular ? "text-white" : "text-black") 
                          : (plan.isPopular ? "text-white/70" : "text-black/60")
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

             
              <button
                className={`w-full py-3 font-semibold rounded-md ${plan.buttonClass} transition duration-300 text-sm sm:text-base`}
              >
                {plan.hasContactButton ? "Contact Us" : `Buy Now @ ₹${plan.offerPrice}`}
              </button>
            </motion.div>
          ))}
        </div>

       
        <div className="lg:hidden">
          <div className="relative max-w-sm mx-auto">
           
            <button
              onClick={prevCard}
              aria-label="Previous pricing plan"
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#1d1c20] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700 transition duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextCard}
              aria-label="Next pricing plan"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#1d1c20] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700 transition duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

           
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                {pricingPlans.map((plan) => (
                  <div key={plan.name} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`relative rounded-xl p-5 border ${
                        plan.isPopular 
                          ? "bg-[#ea753f] shadow-xl shadow-[#ea763f]/20 scale-105 z-10" 
                          : "bg-white border-gray-700"
                      }`}
                    >
                  

                     
                      <div className="mb-5">
                        <h3 className={`text-lg font-bold mb-1 ${plan.isPopular ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                        <p className={`text-xs leading-relaxed ${plan.isPopular ? 'text-white/90' : 'text-black/80'}`}>{plan.subtitle}</p>
                      </div>

                     
                      {!plan.hasContactButton && (
                        <div className="mb-6">
                         
                          <div className={`relative ${plan.isPopular ? 'bg-gradient-to-br from-white via-orange-50 to-orange-100 border-2 border-white shadow-2xl shadow-orange-500/30' : 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300'} rounded-xl shadow-lg p-4 mb-3 transition-all duration-300`}>
                           
                            <div className="absolute -top-3 right-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold shadow-md ${plan.isPopular ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/50' : 'bg-[#ea763f] text-white'}`}>
                                {plan.discount} OFF
                              </span>
                            </div>
                           
                            <div className="flex flex-col gap-2">
    <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-xs font-semibold uppercase tracking-wide ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Original</span>
                                  <span className={`text-xs line-through ${plan.isPopular ? 'text-orange-600' : 'text-gray-500'}`}>₹{plan.originalPrice}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className={`text-xs font-semibold uppercase tracking-wide ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Regular</span>
                                  <span className={`text-xs ${plan.isPopular ? 'text-orange-900 font-bold' : 'text-black font-semibold'}`}>₹{plan.regularPrice}</span>
                                </div>
                              </div>
                             
                              <div className="flex items-end gap-2 mb-3">
                                <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Now</span>
                                <span className={`text-3xl font-extrabold ${plan.isPopular ? 'text-orange-600 drop-shadow-sm' : 'text-[#ea763f] drop-shadow-lg'}`}>
                                  ₹{plan.offerPrice && <AnimatedPrice value={plan.offerPrice} />}
                                </span>
                              </div>
                            </div>
                           
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Coupon:</span>
                                <span className={`px-2 py-1 rounded text-xs font-bold tracking-wider ${plan.isPopular ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm' : 'text-white bg-[#ea763f]'}`}>
                                  {plan.coupon}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs font-semibold ${plan.isPopular ? 'text-orange-800' : 'text-gray-700'}`}>Validity:</span>
                                <span className={`text-sm font-semibold ${plan.isPopular ? 'text-orange-900' : 'text-black'}`}>{plan.validity}</span>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                      )}

                     
                      <div className="mb-5">
                        <p className={`text-sm font-medium mb-3 ${plan.isPopular ? 'text-white' : 'text-black'}`}>What&apos;s included:</p>
                        <div className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="flex-shrink-0 mt-0.5">
                                {feature.included ? (
                                  <div className="bg-green-600 rounded-full p-1">
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
                                ) : (
                                  <div className="bg-red-600 rounded-full p-1">
                                    <X className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>
                              <span className={`text-sm font-medium leading-relaxed ${
                                feature.included 
                                  ? (plan.isPopular ? "text-white" : "text-black") 
                                  : (plan.isPopular ? "text-white/70" : "text-black/60")
                              }`}>
                                {feature.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                     
                      <button
                        className={`w-full py-3 font-semibold rounded-md ${plan.buttonClass} transition duration-300 text-sm`}
                      >
                        {plan.hasContactButton ? "Contact Us" : `Buy Now @ ₹${plan.offerPrice}`}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="flex justify-center mt-6 space-x-2">
              {pricingPlans.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCard(idx)}
                  aria-label={`Go to ${plan.name} plan`}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    idx === currentCard ? "bg-[#ea763f]" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}