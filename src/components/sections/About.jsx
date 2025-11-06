import React, { useEffect } from "react";

export default function About() {

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="transition-all duration-1000 opacity-0 translate-y-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                <span className="text-sm font-medium">درباره باربری نیلگون خلیج فارس</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                پیشگام در آینده
                <span className="text-emerald-600 block">حمل و نقل پایدار</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                باربری نیلگون خلیج فارس (مؤسسه اصفهان سابق) از سال ۱۳۴۰
                در استان<strong>کرمانشاه</strong> در صدر نوآوری زنجیره
                تامین بوده و با ترکیب فناوری پیشرفته و مسئولیت
                زیست‌محیطی، نتایج استثنایی ارائه می‌دهد.
              </p>
              <div className="space-y-4 mb-8 text-xl">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">سرعت تحویل</h3>
                    <p className="text-gray-600">
                      تحویل بار در کمترین زمان ممکن با استفاده از
                      مسیرهای بهینه
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">بیمه بار معتبر</h3>
                    <p className="text-gray-600">
                      پوشش کامل بیمه و جبران خسارت در کمترین زمان
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">پیگیری آنلاین</h3>
                    <p className="text-gray-600">امکان پیگیری بار از زمان بارگیری تا تحویل در مقصد</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">پشتیبانی شبانه‌روزی</h3>
                    <p className="text-gray-600">
                      تیم پشتیبانی مشتریان ۲۴ ساعته در خدمت شماست
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <picture>
                <source media="(max-width: 640px)" srcSet="./assets/images/truck-small.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="./assets/images/truck-medium.webp" type="image/webp" />
                <source srcSet="./assets/images/truck-large.webp" type="image/webp" />
                <img src="./assets/images/truck-medium.webp" alt="کامیون حمل بار نیلگون خلیج فارس در پایانه کرمانشاه - خدمات حمل بار تجاری و صنعتی" className="w-full h-full object-cover" />
              </picture>
            </div>
          </div>
        </div>
        <div className="transition-all duration-1000 opacity-0 translate-y-10 mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">دستاوردهای نیلگون لجستیک در یک نگاه</h3>
          <div className="stats-section grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-emerald-600">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">۸۰٪+</div>
              <div className="text-gray-600 font-medium">رضایت مشتریان</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-8 h-8 text-emerald-600">
                  <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                  <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                  <circle cx={7} cy={18} r={2} />
                  <path d="M15 18H9" />
                  <circle cx={17} cy={18} r={2} />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">۱۰۰٪</div>
              <div className="text-gray-600 font-medium">ماشین‌های ملکی</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-8 h-8 text-emerald-600">
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">سراسری</div>
              <div className="text-gray-600 font-medium">پوشش ایران</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-emerald-600">
                  <circle cx={12} cy={8} r={6} />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">۸۰+</div>
              <div className="text-gray-600 font-medium">سال تجربه</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}