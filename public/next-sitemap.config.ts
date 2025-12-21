import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.mohammademamiproject.ir/',  // آدرس سایتت
  generateRobotsTxt: true,            // اگر میخوای فایل robots.txt هم ساخته بشه
  sitemapSize: 5000,                   // حداکثر URL در هر فایل sitemap
  changefreq: 'weekly',                 // فرکانس تغییر صفحات (اختیاری)
  priority: 1.0,                       // اولویت صفحات (اختیاری)
};

export default config;
