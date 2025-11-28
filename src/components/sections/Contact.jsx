import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="transition-all duration-1000 opacity-100 translate-y-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">تماس با ما</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              آماده بهینه‌سازی
              <span className="text-emerald-600 block">زنجیره تامین شما هستیم</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              بیایید در مورد اینکه باربری نیلگون خلیج فارس چگونه
              می‌تواند عملیات کسب‌وکار شما را متحول کند، صحبت کنیم. همین
              امروز برای مشاوره رایگان با ما تماس بگیرید.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="transition-all duration-1000 opacity-100 translate-y-10 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">اطلاعات تماس</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-emerald-600">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">تماس با ما - موبایل</h4>
                    <div className="space-y-1 mb-2">
                      <a href="tel:09181316405" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+989181316405</a>
                      <a href="tel:09183341953" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+989183341953</a>
                      <a href="tel:09181300370" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+989181300370</a>
                      <a href="tel:09181300369" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+989181300369</a>
                    </div>
                    <p className="text-xs text-emerald-600 font-medium">پشتیبانی ۲۴ ساعته</p>
                  </div>
                </div>
                <div className="rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-emerald-600">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">تماس با ما - ثابت</h4>
                    <div className="space-y-1 mb-2">
                      <a href="tel:08337103072" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+98337103072</a><a href="tel:08337103081" className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors" dir="ltr">+98337103081</a>
                    </div>
                    <p className="text-xs text-emerald-600 font-medium">تضمین شده</p>
                  </div>
                </div>
                <div className="rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 text-emerald-600">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx={12} cy={10} r={3} />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">آدرس دفتر مرکزی</h4>
                    <div className="space-y-1 mb-2">
                      <p className="text-gray-600 text-sm">کیلومتر ۵ جاده کرمانشاه به بیستون</p>
                      <p className="text-gray-600 text-sm">پایانه بزرگ کرمانشاه</p>
                    </div>
                    <p className="text-xs text-emerald-600 font-medium">شبانه‌روزی در خدمت شما</p>
                  </div>
                </div>
                <div className="rounded-xl bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-emerald-600">
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">ساعات کاری</h4>
                    <div className="space-y-1 mb-2">
                      <p className="text-gray-600 text-sm">۲۴ ساعته - ۷ روز هفته</p>
                    </div>
                    <p className="text-xs text-emerald-600 font-medium">پشتیبانی شبانه‌روزی</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <div className="rounded-2xl leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabIndex={0} style={{height: '100%', width: '100%', position: 'relative'}}>
                  <div className="leaflet-pane leaflet-map-pane" style={{transform: 'translate3d(0, 0, 0)'}}>
                    <div className="leaflet-pane leaflet-tile-pane">
                      <div className="leaflet-layer" style={{zIndex: 1, opacity: 1}}>
                        <div className="leaflet-tile-container leaflet-zoom-animated" style={{zIndex: 18, transform: 'translate3d(0, 0, 0) scale(1)'}}>
                          <img alt src="https://a.tile.openstreetmap.org/15/20681/13051.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(78px, 103px, 0)', opacity: 1}} /><img alt src="https://c.tile.openstreetmap.org/15/20681/13050.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(78px, -153px, 0)', opacity: 1}} /><img alt src="https://c.tile.openstreetmap.org/15/20680/13051.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(-178px, 103px, 0)', opacity: 1}} /><img alt src="https://b.tile.openstreetmap.org/15/20682/13051.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(334px, 103px, 0)', opacity: 1}} /><img alt src="https://b.tile.openstreetmap.org/15/20681/13052.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(78px, 359px, 0)', opacity: 1}} /><img alt src="https://b.tile.openstreetmap.org/15/20680/13050.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(-178px, -153px, 0)', opacity: 1}} /><img alt src="https://a.tile.openstreetmap.org/15/20682/13050.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(334px, -153px, 0)', opacity: 1}} /><img alt src="https://a.tile.openstreetmap.org/15/20680/13052.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(-178px, 359px, 0)', opacity: 1}} /><img alt src="https://c.tile.openstreetmap.org/15/20682/13052.png" className="leaflet-tile" style={{width: 256, height: 256, transform: 'translate3d(334px, 359px, 0)', opacity: 1}} />
                        </div>
                      </div>
                    </div>
                    <div className="leaflet-pane leaflet-overlay-pane" />
                    <div className="leaflet-pane leaflet-shadow-pane">
                      <img src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png" className="leaflet-marker-shadow leaflet-zoom-animated" alt style={{marginLeft: '-12px', marginTop: '-41px', width: 41, height: 41, transform: 'translate3d(216px, 192px, 0)'}} />
                    </div>
                    <div className="leaflet-pane leaflet-marker-pane">
                      <img src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png" className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="Marker" tabIndex={0} role="button" style={{marginLeft: '-12px', marginTop: '-41px', width: 25, height: 41, transform: 'translate3d(216px, 192px, 0)', zIndex: 192}} />
                    </div>
                    <div className="leaflet-pane leaflet-tooltip-pane" />
                    <div className="leaflet-pane leaflet-popup-pane" />
                    <div className="leaflet-proxy leaflet-zoom-animated" style={{transform: 'translate3d(5.29447e6px,3.34115e6px,0)scale(16384)'}} />
                  </div>
                  <div className="leaflet-control-container">
                    <div className="leaflet-top leaflet-left">
                      <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                        <a className="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in" aria-disabled="false"><span aria-hidden="true">+</span></a><a className="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out" aria-disabled="false"><span aria-hidden="true">−</span></a>
                      </div>
                    </div>
                    <div className="leaflet-top leaflet-right" />
                    <div className="leaflet-bottom leaflet-left" />
                    <div className="leaflet-bottom leaflet-right">
                      <div className="leaflet-control-attribution leaflet-control">
                        <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={12} height={8} viewBox="0 0 12 8" className="leaflet-attribution-flag">
                            <path fill="#4C7BE1" d="M0 0h12v4H0z" />
                            <path fill="#FFD500" d="M0 4h12v3H0z" />
                            <path fill="#E0BC00" d="M0 7h12v1H0z" />
                          </svg>
                          Leaflet
                        </a>
                        <span aria-hidden="true">|</span> ©
                        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                        contributors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="transition-all duration-1000 opacity-100 translate-y-10">
            <div className="rounded-xl bg-card text-card-foreground border-0 shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">پیام خود را برای ما ارسال کنید</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">نام و نام خانوادگی</label>
                      <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="احمد احمدی" required defaultValue />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">ایمیل</label>
                      <input type="email" className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="ahmad@company.com" required defaultValue />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">شماره تماس</label>
                      <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="۰۹۱۲۳۴۵۶۷۸۹" defaultValue />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">نام شرکت</label>
                      <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="شرکت شما" defaultValue />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">پیام</label>
                    <textarea className="flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="نیازهای حمل و نقل خود را برای ما توضیح دهید..." rows={4} required defaultValue={""} />
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 w-full bg-emerald-500 hover:bg-emerald-600 py-3 text-xlg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" type="submit">
                    ارسال پیام
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>        
  );
});

export default Contact;