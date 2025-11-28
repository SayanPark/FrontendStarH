import React from "react";
import footerLarge from '../../assets/images/footer-large.webp';
import footerMedium from '../../assets/images/footer-medium.webp';
import footerSmall from '../../assets/images/footer-small.webp';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <picture className="absolute inset-0">
          <source media="(max-width: 480px)" srcSet={footerSmall} type="image/webp"/>
          <source media="(max-width: 768px)" srcSet={footerMedium} type="image/webp"/>
          <source srcSet={footerLarge} type="image/webp"/>
          <img src={footerMedium} alt="کامیون‌های باری در حال بارگیری کانتینرها در بندر" className="w-full h-full object-cover"/>
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-700/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* بخش معرفی شرکت */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6 text-white">
                  <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                  <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                  <circle cx={7} cy={18} r={2} />
                  <path d="M15 18H9" />
                  <circle cx={17} cy={18} r={2} />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">باربری نیلگون خلیج فارس</span>
            </div>
            <p className="text-emerald-200 leading-relaxed mb-4">مؤسسه اصفهان سابق | تأسیس از سال ۱۳۶۰</p>
            <p className="text-emerald-200 leading-relaxed mb-4">مدیرعامل و سهام‌دار: رامین پارسه</p>
            <p className="text-emerald-200 leading-relaxed mb-6">
              شرکت مطمئن شما در حمل و نقل. ما راه‌حل‌هایی ارائه می‌دهیم که کسب‌وکار شما را
              با قابلیت اطمینان، کارایی و پایدار به جلو می‌برد.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>09181316405 | 09183341953</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>08337103072 | 08337103081</span>
              </div>
            </div>
          </div>
          {/* خدمات */}
          <div>
            <h3 className="font-semibold text-xl mb-4">خدمات</h3>
            <div className="space-y-2 text-emerald-200">
              <p>حمل بار تجاری</p>
              <p>حمل ماشین‌آلات</p>
              <p>محصولات کشاورزی</p>
              <p>محصولات پتروشیمی</p>
            </div>
          </div>
          {/* تماس */}
          <div>
            <h3 className="font-semibold text-xl mb-4">تماس</h3>
            <div className="space-y-2 text-emerald-200">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span>کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه باربری کرمانشاه</span>
              </div>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5">
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>ساعات کاری: شبانه‌روزی</span>
              </div>
            </div>
          </div>
        </div>

        {/* حقوق و طراحی */}
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-200">
          <p>© ۱۴۰۳ باربری نیلگون خلیج فارس. تمامی حقوق محفوظ است.</p>
        </div>
        <div className="mt-4 text-center text-emerald-300 text-sm">
          <p>Designed with ♥ by Negin Parseh</p>
        </div>
      </div>
    </footer>
  );
}
