"use client";
import React from 'react';
import Image from 'next/image';

const Page = () => {
  // Custom testimonials (previously embedded tweets)
  const testimonials = [
    {
      image: "https://pbs.twimg.com/profile_images/1924112640055320576/adxxLqA-_400x400.jpg",
      name: "Kashish",
      handle: "@whatkashish",
      message:
        "I am genuinely impressed by how every little detail is so well thought out.\n\nIt&apos;s so evident that when someone is truly passionate about what they&apos;re building, it reflects in the product and that&apos;s exactly the case with TUF. 👏🏻",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1931308162130337792/G_JbJY-X_400x400.jpg",
      name: "Suraj Jha",
      handle: "@sigmadev234",
      message:
        "Just had a demo of @takeUforward_ V3 — super impressive!\n• Feature-rich & intuitive\n• Learner-first approach\n• Smart personalization\n• Real problem-solving focus\n\nA big shoutout to the amazing team — you're building something truly impactful. Best of luck",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1917192697103745024/8zue7C27_400x400.jpg",
      name: "Aarchi Gandhi",
      handle: "@FafdaJalebie",
      message:
        "Such a crazy 1 stop platform for Interview Preparation. The content quality and structure is amazing!\nThe personalized roadmap and lifetime access make it even better.\nHighly Recommending TUF+ V3 for anyone serious about their tech career 🔥",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1729846436458569728/c1h6uHga_400x400.jpg",
      name: "Ankush Dharkar",
      handle: "@ankushdharkar",
      message:
        "What a great demo! Nicely done @striver_79 and team!! 👌\n\nSo excited to think about all the devs who would be using this product to prepare themselves for the challenges and skills ahead!\n\nIt has a single-pay lifetime access license!! So cool! ❤️\n\n(P.S – Goodbye Leetcode)",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1755986144737828864/wIVGha3H_400x400.jpg",
      name: "Saurabh Kumar",
      handle: "@drummatick",
      message:
        "TUF+ V3 is a one-of-a-kind platform that's revolutionizing interview prep.\nReally amazing what @striver_79 and team have pulled in such a small amount of time. The attention to detail and comprehensive coverage of topics is outstanding.\nDefinitely the best platform I've seen for technical interview preparation!",
    },
    {
      image: "https://pbs.twimg.com/profile_images/1882440578266185728/XGgyeteI_400x400.jpg",
      name: "Riti Kumari",
      handle: "@riti2409",
      message: "V3 looks very promising 💯\n\nAll the very best @striver_79 and entire @takeUforward_ team.",
    },
  ];

  return (
    <div className=' overflow-y-hidden bg-[#1d1c20] text-white'>
      {/* Header */}
      <div className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 px-2'>
            What People Are <span className="text-[#ea763f]">Saying</span>
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl mx-auto">
            Real testimonials from our community of successful engineers
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className='flex-1 relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-12'>
        <div className='max-w-6xl mx-auto h-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
            {testimonials.map((t, idx) => (
              <div key={idx} className='relative'>
                <div className='w-full h-full bg-[#141414] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 flex flex-col'>
                  {/* Header */}
                  <div className='flex justify-between items-center mb-5'>
                    <div className='text-lg font-bold text-[#ea763f]'>TUF+ V3</div>
                    <div className='text-lg font-bold text-[#ea763f]'>
                      <svg viewBox='0 0 24 24' className='w-6 h-6 text-white fill-current' aria-label='X logo'>
                        <path d='M22.162 0H17.43L12.06 7.522 6.164 0H0l8.33 10.543L0 24h4.732l5.855-7.87L17.836 24H24l-8.68-11.01L22.162 0Z'/>
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className='text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-line flex-1'>
                    &ldquo;{t.message}&rdquo;
                  </div>

                  {/* Footer */}
                  <div className='border-t border-gray-700 pt-4 flex items-center'>
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className='text-base font-semibold text-gray-100'>{t.name}</div>
                      <div className='text-xs text-gray-400'>{t.handle}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;