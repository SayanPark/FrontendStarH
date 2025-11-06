import React, { useEffect } from "react";

export default function Services() {

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-xl">
        <div className="transition-all duration-1000 opacity-0 translate-y-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">خدمات ما</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              راه‌حل‌های جامع
              <span className="text-emerald-600 block">حمل و نقل</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              از حمل‌های محلی تا مدیریت زنجیره تامین جهانی، ما
              راه‌حل‌های یکپارچه‌ای ارائه می‌دهیم که با نیازهای کسب‌وکار
              شما رشد می‌کند.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                      <circle cx={7} cy={18} r={2} />
                      <path d="M15 18H9" />
                      <circle cx={17} cy={18} r={2} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">حمل بار تجاری</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    حمل کلیه بارهای تجاری با ماشین‌های ملکی و تحت پوشش
                    به سراسر ایران.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">پیگیری آنلاین</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">ماشین‌های مجهز</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">تحویل سریع</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                      <path d="M6 18h12" />
                      <path d="M6 14h12" />
                      <rect width={12} height={12} x={6} y={10} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">حمل ماشین‌آلات</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    حمل ماشین‌آلات سنگین و تجهیزات صنعتی با بالاترین
                    استانداردهای ایمنی.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">بیمه کامل</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">تجهیزات تخصصی</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">نظارت ۲۴ساعته</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe2 w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                      <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                      <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                      <circle cx={12} cy={12} r={10} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">بارهای ترافیکی</h3>
                  <p className="text-gray-600 leading-relaxed mb-6"> حمل بارهای ترافیکی با رعایت کامل ضوابط و مقررات حمل و نقل.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">مسیریابی بهینه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">کاهش هزینه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">آنالیز عملکرد</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
                      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
                      <path d="M12 10v4" />
                      <path d="M12 2v3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ارسال به بنادر</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">حمل بار به کلیه بنادر و مناطق آزاد با خدمات ترخیص کامل.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">ترخیص کالا</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">پوشش بیمه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">حمل چندوجهی</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="m7.5 4.27 9 5.15" />
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                      <path d="m3.3 7 8.7 5 8.7-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">محصولات کشاورزی</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">حمل محصولات کشاورزی با تجهیزات ویژه و رعایت شرایط نگهداری.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">دمای کنترل شده</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">تحویل سریع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">اعلان پیامکی</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="transition-all duration-1000 opacity-0 translate-y-10">
            <article>
              <div className="rounded-xl bg-card text-card-foreground group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                <div className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} x2={8} y1={13} y2={13} />
                      <line x1={16} x2={8} y1={17} y2={17} />
                      <line x1={10} x2={8} y1={9} y2={9} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4"> محصولات پتروشیمی</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">حمل محصولات پتروشیمی و سیمان با رعایت استانداردهای بین‌المللی.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">مستندسازی</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">بهینه‌سازی هزینه</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      <span className="text-xl text-gray-600">مدیریت مطابقت</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}