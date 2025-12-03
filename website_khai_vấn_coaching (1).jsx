# Khai Vấn — Website (Next.js + Tailwind + Framer Motion)

**Mô tả:**
Đây là dự án Next.js mẫu cho website khai vấn của cô chủ **Lê Hoàng Vân**. Dự án sử dụng Tailwind CSS cho styling, Framer Motion cho animation, và shadcn/ui + lucide-react cho các component nếu muốn mở rộng.

---

## Cấu trúc dự án (gợi ý)

```
khaivan-website/
├─ package.json
├─ next.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  └─ images/ (ảnh hero, about, logo)
├─ pages/
│  ├─ _app.js
│  └─ index.js
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ Services.jsx
│  ├─ About.jsx
│  ├─ Testimonials.jsx
│  ├─ Pricing.jsx
│  ├─ FAQ.jsx
│  └─ Footer.jsx
└─ styles/
   └─ globals.css
```

---

## package.json (gợi ý)

```json
{
  "name": "khaivan-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "10.12.5",
    "lucide-react": "0.289.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.24",
    "tailwindcss": "4.0.0"
  }
}
```

> Bạn có thể thêm `@/components/ui` (shadcn/ui) nếu muốn, nhưng để đơn giản mình chỉ dùng Tailwind + lucide-react + Framer Motion.

---

## Cài đặt Tailwind (tóm tắt)

`tailwind.config.js` và `postcss.config.js` là cấu hình tiêu chuẩn. Trong `styles/globals.css` import các directive Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next { height: 100%; }
```

---

## Code chính (pages/_app.js)

```jsx
// pages/_app.js
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
```

## Trang chủ (pages/index.js)

Tập hợp tất cả các component: Header, Hero, Services, About, Testimonials, Pricing, FAQ, Footer.

```jsx
// pages/index.js
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Head>
        <title>Khai Vấn — Lê Hoàng Vân</title>
        <meta name="description" content="Khai vấn lãnh đạo, cá nhân - Lê Hoàng Vân" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
```

---

## Ví dụ component: Header.jsx

```jsx
// components/Header.jsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-bold">KV</div>
          <div>
            <div className="font-semibold">Khai Vấn - Lê Hoàng Vân</div>
            <div className="text-xs text-gray-500">Đào tạo · Khai vấn · Tư vấn lãnh đạo</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:text-green-600">Dịch vụ</a>
          <a href="#about" className="hover:text-green-600">Giới thiệu</a>
          <a href="#testimonials" className="hover:text-green-600">Phản hồi</a>
          <a href="#pricing" className="hover:text-green-600">Gói</a>
          <a href="#contact" className="hover:text-green-600">Liên hệ</a>
          <a className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:opacity-95" href="#contact">Đặt lịch</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-lg">☰</button>
        </div>
      </div>
    </header>
  )
}
```

---

## Ví dụ component: Hero.jsx

(Phần này dựa trên mã React ban đầu — gồm hero text và card mẫu)

```jsx
// components/Hero.jsx
import { motion } from 'framer-motion'
import { CheckCircle, Calendar } from 'lucide-react'

export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Khai vấn chuyển đổi — giúp lãnh đạo & cá nhân đạt hiệu suất thực tế</h1>
        <p className="mt-4 text-lg text-gray-700">Chúng tôi kết hợp phương pháp khai vấn hệ thống, kỹ thuật lắng nghe sâu và bài tập hành vi thực tế để mở ra giải pháp phù hợp cho bạn và đội ngũ.</p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-600 text-white rounded-lg shadow hover:opacity-95">Đặt buổi khai vấn miễn phí</a>
          <a href="#services" className="inline-flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-lg">Xem dịch vụ</a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle size={20} />
            <div>
              <div className="text-sm font-medium">Kinh nghiệm thực tế</div>
              <div className="text-xs text-gray-500">Đã làm việc với doanh nghiệp SME & startup</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={20} />
            <div>
              <div className="text-sm font-medium">Linh hoạt</div>
              <div className="text-xs text-gray-500">Online & offline theo nhu cầu</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="order-first md:order-last">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img src="/images/hero.jpg" alt="coaching" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h3 className="font-semibold text-lg">Buổi khai vấn mẫu — 60 phút</h3>
            <p className="text-sm text-gray-600 mt-2">Một buổi demo để hiểu thách thức chính, mục tiêu kỳ vọng, và bước hành động đầu tiên.</p>
            <div className="mt-4 flex gap-3">
              <a className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow" href="#contact">Đặt lịch</a>
              <a className="self-center text-sm text-gray-500">Giá: Miễn phí</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
```

---

## Các component còn lại
Mình đã chuẩn bị cấu trúc cho Services, About, Testimonials, Pricing, FAQ, Footer theo thiết kế ban đầu — bạn có thể sao chép cách viết component Hero/ Header để tạo các phần còn lại. Nếu muốn, mình sẽ tự tạo đầy đủ các file component và cập nhật vào canvas.

---

## Hướng dẫn chạy nhanh (local)

1. Sao chép mã vào thư mục `khaivan-website`
2. Chạy `npm install`
3. Chạy `npm run dev`
4. Mở `http://localhost:3000`

---

## Mình đã làm gì trong canvas
- Mình đã chuyển mã React ban đầu sang cấu trúc Next.js mẫu và thêm README + ví dụ component (`Header`, `Hero`) vào tài liệu này.

---

Nếu bạn muốn mình **tạo sẵn tất cả component đầy đủ** (Services, About, Testimonials, Pricing, FAQ, Footer) và thêm form xử lý (ví dụ gửi email qua Formspree hoặc API), hoặc tích hợp lịch Google Calendar, chọn 1 trong các tuỳ chọn bên dưới — mình sẽ cập nhật trực tiếp trong canvas ngay:

A) Tạo đầy đủ các component + form gửi email (Formspree)
B) Thêm tích hợp booking (Google Calendar + Cal.com) và hướng dẫn cài đặt
C) Xuất bản bản tĩnh (Vercel deploy file + hướng dẫn)

Chọn A, B, hoặc C, hoặc nói thẳng những thay đổi bạn muốn — mình sẽ cập nhật ngay trong file.
