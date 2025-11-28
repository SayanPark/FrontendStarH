import React, { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
    // اگر بخوای اسکریپت خاصی بعد از لود اجرا بشه، اینجا بذار.
    console.log("Structured data added to head.");
  }, []);

  return (
    <>
      {/* ✅ Structured Data (برای SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "باربری نیلگون خلیج فارس",
              "description": "خدمات حمل بار در کرمانشاه و سراسر ایران با بیش از ۸۰ سال تجربه",
              "url": "https://nilgoonlogistics.ir",
              "telephone": "+988337103072",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "کیلومتر ۵ جاده کرمانشاه به بیستون",
                "addressLocality": "کرمانشاه",
                "addressCountry": "IR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.3277",
                "longitude": "47.0778"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "areaServed": "Iran"
            }
          `,
        }}
      />
    </>
  );
}
