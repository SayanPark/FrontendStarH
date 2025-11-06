// convert.js  (نسخه ESM)
import fs from "fs";
import HTMLtoJSX from "htmltojsx";

const input = "public/fullsite/script.html"; // مسیر درست فایل HTML
const output = "src/components/elements/Scripts.jsx";


const html = fs.readFileSync(input, "utf8");
const converter = new HTMLtoJSX({ createClass: false });
const jsx = converter.convert(html);

fs.writeFileSync(output, jsx);
console.log(`✅ فایل ${output} ساخته شد.`);
