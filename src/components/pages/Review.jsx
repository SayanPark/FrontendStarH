import React from "react";

export default function Review() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <a href="/">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">ثبت بازخورد</h1>
                <p className="text-gray-600">
                  تجربه خود را با باربری نیلگون خلیج فارس به اشتراک بگذارید
                </p>
              </div>
            </div>

            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="rounded-xl bg-card text-card-foreground border-0 shadow-xl">
                <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
                  <div className="tracking-tight text-2xl font-bold">
                    نظر شما برای ما مهم است
                  </div>
                  <p className="text-emerald-100">
                    با به اشتراک گذاشتن بازخورد صادقانه خود درباره تجربه‌تان، به ما در
                    بهبود خدمات‌مان کمک کنید.
                  </p>
                </div>

                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          نام شرکت
                        </label>
                        <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="نام شرکت شما" required/>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          نام و نام خانوادگی
                        </label>
                        <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="نام شما" required/>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          ایمیل
                        </label>
                        <input type="email" className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="email@company.com" required/>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          شماره تماس
                        </label>
                        <input className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required/>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        نوع خدمت *
                      </label>
                      <button type="button" role="combobox" aria-controls="radix-:r7:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                        <span style={{ pointerEvents: "none" }}>
                          یک خدمت را انتخاب کنید
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>

                      <select aria-hidden="true" tabIndex={-1}
                        style={{
                          position: "absolute",
                          border: 0,
                          width: "1px",
                          height: "1px",
                          padding: 0,
                          margin: "-1px",
                          overflow: "hidden",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          whiteSpace: "nowrap",
                          overflowWrap: "normal",
                        }}
                      >
                        <option value="freight_transport">حمل بار تجاری</option>
                        <option value="warehousing">حمل ماشین‌آلات</option>
                        <option value="supply_chain">بارهای ترافیکی</option>
                        <option value="international_shipping">ارسال به بنادر</option>
                        <option value="last_mile_delivery">محصولات کشاورزی</option>
                        <option value="customs_clearance">محصولات پتروشیمی</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-4 block">
                        امتیاز کلی *
                      </label>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <button key={i} type="button" className="transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-gray-300 hover:text-yellow-400">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        نظر شما *
                      </label>
                      <textarea
                        className="flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="درباره تجربه خود با باربری نیلگون خلیج فارس بنویسید. چه کارهایی را خوب انجام دادیم؟ چگونه می‌توانیم بهتر شویم؟"
                        rows={6}
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="recommend" className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"/>
                      <label htmlFor="recommend" className="text-sm font-medium text-gray-700">
                        باربری نیلگون خلیج فارس را به دیگران توصیه می‌کنم
                      </label>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 w-full bg-emerald-600 hover:bg-emerald-700 py-3 text-xlg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={false}>
                        ثبت بازخورد
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform">
                          <path d="m22 2-7 20-4-9-9-4Z"></path>
                          <path d="M22 2 11 13"></path>
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
    </div>
  );
}
