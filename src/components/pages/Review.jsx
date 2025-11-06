import React from "react";
import Scripts from "../layout/Scripts";
import { Helmet } from "react-helmet";


export default function Review() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="باربری نیلگون خلیج فارس: خدمات حمل بار سریع و مطمئن در کرمانشاه و سراسر ایران. بیمه معتبر، قیمت مناسب و پشتیبانی ۲۴ ساعته. تماس بگیرید!" />
        <meta name="keywords" content="باربری کرمانشاه, حمل بار, نیلگون خلیج فارس, لجستیک, حمل و نقل, باربری بین شهری" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css" as="style" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css" crossOrigin="anonymous" />
        <title>ثبت بازخورد | باربری نیلگون خلیج فارس - نیلگون لجستیک</title>
        <link rel="canonical" href="https://nilgoonlogistics.ir/review" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* ناوبار */}
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a className="flex items-center gap-3 cursor-pointer" href="index.html">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6 text-white">
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                    <circle cx={7} cy={18} r={2} />
                    <path d="M15 18H9" />
                    <circle cx={17} cy={18} r={2} />
                  </svg>
                </div>
                <span className="first-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">باربری نیلگون خلیج فارس</span>
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a href="review.html#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">درباره ما</a>
                <a href="review.html#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">خدمات</a>
                <a href="review.html#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">نظرات مشتریان</a> 
                <a href="review.html#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer">تماس با ما</a>
                <a className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl" href="review.html">ثبت بازخورد</a>
              </div>
              <div className="md:hidden flex items-center gap-4">
                <button className="text-gray-700 hover:text-emerald-600 p-2" aria-label="Toggle menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                    <line x1={4} x2={20} y1={12} y2={12} />
                    <line x1={4} x2={20} y1={6} y2={6} />
                    <line x1={4} x2={20} y1={18} y2={18} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* محتوای اصلی */}
        <main className="pt-20">
          <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                <a href="index.html">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                    </button>
                </a>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">ثبت بازخورد</h1>
                    <p className="text-gray-600">تجربه خود را با باربری نیلگون خلیج فارس به اشتراک بگذارید</p>
                </div>
                </div>
                <div className="transition-all duration-1000 opacity-100 translate-y-0">
                <div className="rounded-xl bg-card text-card-foreground border-0 shadow-xl">
                    <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
                    <div className="tracking-tight text-2xl font-bold">نظر شما برای ما مهم است</div>
                    <p className="text-emerald-100">
                        با به اشتراک گذاشتن بازخورد صادقانه خود درباره تجربه‌تان،
                        به ما در بهبود خدمات‌مان کمک کنید.
                    </p>
                    </div>
                    <div className="p-8">
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">نام شرکت</label>
                            <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="نام شرکت شما" required defaultValue />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">نام و نام خانوادگی</label>
                            <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="نام شما" required defaultValue />
                        </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">ایمیل</label>
                            <input type="email" className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="email@company.com" required defaultValue />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">شماره تماس</label>
                            <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required defaultValue />
                        </div>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">نوع خدمت *</label>
                        <button type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <span style={{pointerEvents: 'none'}}>یک خدمت را انتخاب کنید</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        <select aria-hidden="true" tabIndex={-1} style={{position: 'absolute', border: 0, width: 1, height: 1, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', overflowWrap: 'normal'}}>
                          <option value="freight_transport" selected="selected">حمل بار تجاری</option>
                          <option value="warehousing">حمل ماشین‌آلات</option>
                          <option value="supply_chain">بارهای ترافیکی</option>
                          <option value="international_shipping">ارسال به بنادر</option>
                          <option value="last_mile_delivery">محصولات کشاورزی</option>
                          <option value="customs_clearance">محصولات پتروشیمی</option>
                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700 mb-4 block">امتیاز کلی *</label>
                        <div className="flex items-center gap-2 mb-2">
                            <button type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            </button>
                            <button type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            </button>
                            <button type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            </button>
                            <button type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            </button>
                            <button type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            </button>
                        </div>
                        <p className="text-sm text-gray-500" />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">نظر شما *</label>
                        <textarea className="flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="درباره تجربه خود با باربری نیلگون خلیج فارس بنویسید. چه کارهایی را خوب انجام دادیم؟ چگونه می‌توانیم بهتر شویم؟" rows={6} required defaultValue={""} />
                        </div>
                        <div className="flex items-center gap-3">
                        <input type="checkbox" id="recommend" className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                        <label htmlFor="recommend" className="text-sm font-medium text-gray-700">باربری نیلگون خلیج فارس را به دیگران توصیه می‌کنم</label>
                        </div>
                        <div className="pt-6 border-t border-gray-200">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 w-full bg-emerald-600 hover:bg-emerald-700 py-3 text-xlg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled>
                            ثبت بازخورد
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                            </svg>
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </main>

        {/* فوتر */}
        <footer className="relative bg-emerald-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <picture className="absolute inset-0">
              <source media="(max-width: 480px)" srcSet="./assets/images/footer-small.webp" type="image/webp" />
              <source media="(max-width: 768px)" srcSet="./assets/images/footer-medium.webp" type="image/webp" />
              <source srcSet="./assets/images/footer-large.webp" type="image/webp" />
              <img src="assets/images/footer-medium.webp" alt="کشتی‌های باری در حال بارگیری کانتینرها در بندر" className="w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-700/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
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
                <p className="text-emerald-200 leading-relaxed mb-6">مؤسسه اصفهان سابق | تأسیس از سال ۱۳۴۰</p>
                <p className="text-emerald-200 leading-relaxed mb-6">مدیرعامل و سهام‌دار: رامین پارسه</p>
                <p className="text-emerald-200 leading-relaxed mb-6">
                  شریک مطمئن شما در حمل و نقل. ما راه‌حل‌هایی ارائه می‌دهیم که کسب‌وکار شما را با قابلیت اطمینان، کارایی و پایداری به جلو می‌برد.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span> 09181316405 | 09183341953 </span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span> 08337103072 | 08337103081 </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">خدمات</h3>
                <div className="space-y-2 text-emerald-200">
                    <p>حمل بار تجاری</p>
                    <p>حمل ماشین‌آلات</p>
                    <p>محصولات کشاورزی</p>
                    <p>محصولات پتروشیمی</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">تماس</h3>
                <div className="space-y-2 text-emerald-200">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                    <span>کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه بزرگ کرمانشاه</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5">
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span> ساعات کاری: شبانه‌روزی </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right border-t border-emerald-800 mt-12 pt-8 text-center text-white-300">
              <p>© ۱۴۰۳ باربری نیلگون خلیج فارس. تمامی حقوق محفوظ است.</p>
            </div>
            <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-white-200">
              <p>Designed with ♡ by Negin Parseh</p>
            </div>
          </div>
        </footer>
      </div>

      {/* اسکریپت‌های خارجی */}
      <Scripts />
    </>
  );
}
