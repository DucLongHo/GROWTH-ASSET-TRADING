# Growth Asset Trading — Website Project

## Project Overview

Landing page for **Growth Asset Trading**, a company specializing in custom trading bot development. The site showcases services, results, and drives potential clients to initiate contact.

**Primary goal:** Convert visitors (traders, investors, fund managers) into qualified leads via a contact/consultation CTA.

---

## Tech Stack

- **HTML5** — semantic markup, single `index.html` entry point
- **CSS3** — custom properties (CSS vars), no frameworks; `style.css`
- **Vanilla JavaScript** — `main.js`; smooth scroll, animations, form handling
- **No build tools** — works by opening `index.html` directly in a browser
- **Font:** `Inter` via Google Fonts (fallback: `system-ui, sans-serif`)

---

## File Structure

```
GROWTH-ASSET-TRADING/
├── index.html
├── style.css
├── main.js
├── Logo.svg          # Robot icon — browser tab favicon
├── Design.png        # Reference design
└── CLAUDE.md
```

---

## Design System

### Color Palette

```css
--bg-primary:    #0a0a0f;              /* near-black page background */
--bg-card:       #111118;              /* card / section background */
--bg-elevated:   #16161f;              /* elevated surfaces, nav */
--border:        #1e1e2e;              /* subtle borders */
--text-primary:  #f0f0f5;              /* headings, primary text */
--text-secondary:#8888a0;              /* body, descriptions */
--text-muted:    #555568;              /* captions, labels */
--accent:        #f5a623;              /* orange — highlights, CTAs */
--accent-hover:  #e8971a;              /* darker orange on hover */
--accent-glow:   rgba(245,166,35,.15); /* glow / subtle bg */
--purple-accent: #6c5ce7;              /* secondary accent */
--success:       #00c896;              /* green for positive metrics */
```

### Typography Scale

```css
--text-h1:      clamp(2rem, 4vw, 3.5rem);
--text-h2:      clamp(1.5rem, 3vw, 2.5rem);
--text-h3:      clamp(1.125rem, 2vw, 1.5rem);
--text-body:    1rem;
--text-small:   0.875rem;
--text-caption: 0.75rem;
```

> **Implemented:** `.hero-headline` dùng `font-size: clamp(2rem, 4vw, 3.2rem)` — nhỏ hơn spec vì text tiếng Việt dài hơn tiếng Anh trong design gốc.

### Spacing

8px base grid: `8 | 16 | 24 | 32 | 48 | 64 | 96 | 128px`.

### Key Design Rules

- **Accent highlights:** `<span class="accent">word</span>` → `color: var(--accent)`
- **Section rhythm:** Alternating dark sections; `96–128px` vertical padding
- **Cards:** `1px solid var(--border)`, `background: var(--bg-card)`, `border-radius: 12px`
- **Buttons:** Primary = solid orange; Secondary = ghost with orange border
- **No stock images** — CSS shapes, SVG line art, abstract chart motifs only
- **Animations:** Subtle `fade-up` on scroll via `IntersectionObserver`; no heavy motion

---

## Page Sections (in order)

### 1. `<nav>` — Sticky Navigation
- Left: Logo SVG inline + "Growth Asset Trading" wordmark
- Right: links (`Dịch Vụ`, `Kết Quả`, `Quy Trình`, `Liên Hệ`) + CTA "Tư Vấn Miễn Phí"
- Glassmorphism on scroll: `backdrop-filter: blur(12px)` via `.scrolled` class

### 2. `#hero` — Hero Section
- Headline: `Không phải bot<br>đầu tiên.<br><span class="accent">Nhưng là bot tốt nhất.</span>`
  - `font-size: clamp(2rem, 4vw, 3.2rem)` — nhỏ hơn spec vì tiếng Việt dài hơn
  - `padding-top: calc(var(--nav-height) + 60px)` ; `align-items: flex-start`
- Subheadline: value prop về custom trading bot
- CTAs: "Bắt Đầu Ngay" (primary) + "Xem Kết Quả" (secondary ghost)
- Background: faint grid pattern + orange radial glow top-right
- `.hero-chart`: `max-width: 480px`, `padding: 1.75rem`; `.hero-visual`: `justify-content: center`

### 3. `#exchanges` — Supported Brokers
- Label: "TÍCH HỢP VỚI CÁC BROKER HÀNG ĐẦU"
- 6 broker tags: **IC Markets**, **Pepperstone**, **Exness**, **XM**, **IG Group**, **FXCM**
- Background: `section-alt`

### 4. `#pain` — Pain Points
- Label: "VẤN ĐỀ BẠN ĐANG GẶP PHẢI"
- Headline: `Bạn đang xây dựng thứ gì đó <span class="accent">quan trọng.</span>`
- 4 pain rows (icon + title + description):
  1. Cảm xúc can thiệp vào lệnh
  2. Không thể theo dõi thị trường 24/7
  3. Chiến lược tốt nhưng thực thi kém
  4. Mất cơ hội vì vào lệnh trễ
- Right side: feature highlight card with purple accent border

### 5. `#benefits` — What Changes with Our Bots
- Headline: `Điều gì thay đổi khi Growth Asset <span class="accent">embed với bạn.</span>`
- 3-column grid, 6 benefit cards:
  1. Kỷ luật tuyệt đối — Bot không cảm xúc
  2. Hoạt động 24/7 — Châu Á, Âu, Mỹ
  3. Tốc độ thực thi — Vào lệnh trong mili-giây
  4. Quản lý rủi ro — Stop-loss, take-profit tự động
  5. Tùy biến hoàn toàn — Theo đúng chiến lược của bạn
  6. Backtesting — Kiểm tra trên dữ liệu lịch sử

### 6. `#flywheel` — Success Flywheel
- Headline: `Mỗi thành công dẫn<br>đến dự án <span class="accent">tiếp theo.</span>`
  - `<br>` sau "dẫn" (không phải sau "đến") để 2 dòng cân đối
- Circular diagram (CSS-drawn): Strategy → Bot → Profit → Scale → repeat
- Orange blockquote / pull quote bên dưới

### 7. `#results` — Metrics / Social Proof
- Label: "KẾT QUẢ ĐÃ ĐẠT ĐƯỢC"
- Headline: `Nhà giao dịch như bạn đã thấy <span class="accent">những kết quả này.</span>`
- 4 stat cards: `$400K+` lợi nhuận · `6+` sàn tích hợp · `78%` tỷ lệ thắng · `0%` can thiệp cảm xúc

### 8. `#process` — From Idea to Live Bot
- Headline: `Từ ý tưởng đến <span class="accent">bot chạy thực tế</span><br>qua 4 bước rõ ràng.`
- 4 steps — "Bước X" nằm trong `.process-number`, hiển thị phía trên số 01/02/03/04:
  1. **Bước 1** — Tư vấn chiến lược
  2. **Bước 2** — Thiết kế & Backtesting
  3. **Bước 3** — Triển khai & Kiểm tra
  4. **Bước 4** — Theo dõi & Tối ưu
- Layout:
  ```css
  .process-step    { display: grid; grid-template-columns: 56px 1fr; }
  .process-number  { display: flex; flex-direction: column; align-items: flex-start; }
  .process-week    { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em;
                     text-transform: uppercase; color: var(--accent); margin-bottom: 0.15rem; }
  ```

### 9. `#portfolio` — Case Studies
- Headline: `Nơi chúng tôi đã triển khai. <span class="accent">Điều đã thay đổi.</span>`
- 2–3 case study cards: exchange, strategy type, result metrics
- Small purple/orange market tag (Crypto / Forex / Futures)

### 10. `#about` — Company Background
- Headline: `X năm giúp nhà giao dịch <span class="accent">tạo ra kết quả lớn.</span>`
- Left: founding story, mission, team approach
- Right: 4 mini stats — `25+ năm` / `2 sàn` / `500+ lệnh/ngày` / `100% custom`
- `.about-inner { align-items: center; }` — hai cột căn giữa dọc

### 11. `#services` — Service Tiers
- Headline: `Xây dựng cho nhà giao dịch với <span class="accent">mục tiêu đầy tham vọng.</span>`
- 3 service cards (positioning, not pricing):
  - **Starter Bot** — 1 chiến lược, 1 sàn, backtesting
  - **Pro Bot** — Multi-strategy, multi-pair, dashboard ← badge `.tag-accent`
  - **Enterprise** — Full custom, dedicated support, white-label
- Pro badge — chữ vàng đậm, không nền:
  ```css
  .tag-accent { background: transparent; color: var(--accent); font-weight: 700; border: none; padding: 0; }
  ```

### 12. `#contact` — Final CTA + Form
- Headline: `Hành trình bắt đầu<br><span class="accent">bằng một cuộc trò chuyện.</span>`
  - `.contact-left h2 { font-size: clamp(1.4rem, 2.5vw, 2.3rem); }` — override để tránh wrap 4+ dòng
- Form: Tên / Email / Số điện thoại / Mô tả chiến lược / Submit
- Contact info:
  - Điện thoại: **0866 797 299**
  - Telegram: **@longhdtrader** (`https://t.me/longhdtrader`)
  - Email: _(chưa điền)_
  - Địa chỉ: _(chưa điền)_

### 13. `<footer>` — Footer
- Logo + tagline + nav links
- Socials: Telegram `@longhdtrader`, YouTube, Twitter/X
- Copyright: © 2026 Growth Asset Trading. All rights reserved.

---

## Content Language

- **Primary:** Vietnamese — mọi text người dùng thấy đều bằng tiếng Việt
- **Technical terms:** giữ nguyên tiếng Anh (Bot, Backtesting, Stop-loss, Futures, CFDs)
- **Tone:** Tự tin, trực tiếp, chuyên nghiệp — không hype, ưu tiên số liệu

---

## JavaScript Behaviors (`main.js`)

1. **Scroll animations** — `IntersectionObserver` thêm `.visible` vào `[data-animate]`; CSS xử lý `opacity` + `translateY`
2. **Sticky nav** — thêm `.scrolled` sau 50px scroll (glassmorphism)
3. **Counter animation** — animate số trong `#results` khi vào viewport
4. **Smooth scroll** — mọi `<a href="#...">` dùng `scrollIntoView({ behavior: 'smooth' })`
5. **Contact form** — client-side validation; `fetch` POST hoặc `mailto:` fallback
6. **Mobile menu** — hamburger toggle dưới `768px`

---

## Favicon

```html
<link rel="icon" type="image/svg+xml" href="Logo.svg">
```

`Logo.svg` là robot/bot icon từ Font Awesome — phù hợp branding trading bot.

---

## Responsive Breakpoints

```css
/* sm */  @media (min-width: 640px)  { ... }
/* md */  @media (min-width: 768px)  { ... }
/* lg */  @media (min-width: 1024px) { ... }
/* xl */  @media (min-width: 1280px) { ... }
```

- Nav → hamburger dưới `768px`
- 3-col grids → 2-col → 1-col
- Hero font scales via `clamp()`

---

## Quy Tắc Bắt Buộc

> Những quy tắc này phải được tuân thủ trong mọi thay đổi, không có ngoại lệ.

### 1. So Sánh Với Design Sau Mỗi Thay Đổi Lớn
- Chụp screenshot (`Win+Shift+S`) và so sánh trực quan với `Design.png`
- Kiểm tra: spacing, font weight, màu accent, alignment
- Không chuyển sang section tiếp theo nếu section hiện tại chưa khớp design

### 2. Mobile-Friendly Bắt Buộc
- CSS theo **mobile-first**: styles mặc định cho `<768px`, `@media (min-width: ...)` mở rộng lên desktop
- Test 3 breakpoint sau mỗi section: `375px` (iPhone SE), `768px` (iPad), `1280px` (Desktop)
- Không element nào `overflow-x` trên mobile; touch targets tối thiểu `44×44px`
- Nav phải có hamburger hoạt động đầy đủ dưới `768px`

### 3. Animation Scroll Bắt Buộc
- **Mọi section** có `data-animate` attribute và animation khi vào viewport
- `IntersectionObserver` với `threshold: 0.15`; animation chỉ chạy **một lần** (`observer.unobserve()`)
- Mặc định: `fade-up` (opacity 0→1, translateY 30→0, 0.6s ease-out)
- Element con dùng stagger delay cách nhau `0.1s`
- Không dùng thư viện ngoài (AOS, GSAP, ...) — chỉ CSS + vanilla JS

```css
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-animate].visible { opacity: 1; transform: translateY(0); }
```

---

## Development Checklist

- [x] `index.html` skeleton với đủ sections và semantic HTML
- [x] `style.css` với CSS variables, reset, typography, layout
- [x] `main.js` với scroll animations, counter, nav, form
- [x] Tất cả 13 sections đã implement đầy đủ
- [x] Mobile responsive (375px, 768px, 1280px)
- [x] Favicon set tới `Logo.svg`
- [x] Không phụ thuộc vào ảnh ngoài
- [x] Form validation hoạt động
- [x] Smooth scroll hoạt động
- [x] Counter animation hoạt động
- [x] Toàn bộ text tiếng Việt

---

## Thay Đổi Đáng Chú Ý (So Với Design Gốc)

Ghi lại các quyết định thiết kế và sai lệch so với `Design.png`.

| # | Phần | Thay đổi | Lý do |
|---|------|----------|-------|
| 1 | Hero | `font-size: clamp(2rem,4vw,3.2rem)` thay vì `clamp(2.5rem,6vw,5rem)` | Text tiếng Việt dài hơn tiếng Anh trong design gốc |
| 2 | Hero | `padding-top: calc(nav-height + 60px)` + `align-items: flex-start` | `center` trên `100vh` tạo khoảng trắng lớn phía trên |
| 3 | Hero | `<br>` sau "bot" trong "Không phải bot\<br\>đầu tiên." | Tránh orphan "tiên." đứng riêng một dòng |
| 4 | Flywheel | `<br>` sau "dẫn" thay vì sau "đến" | Cân đối 2 dòng heading |
| 5 | Contact | Rút "Hành trình tiếp theo bắt đầu" → "Hành trình bắt đầu" + `font-size: clamp(1.4rem,2.5vw,2.3rem)` | Heading gốc wrap 4+ dòng trên màn nhỏ |
| 6 | About | `.about-inner { align-items: center }` | Hai cột không đều chiều cao — cần căn giữa dọc |
| 7 | Exchanges | Đổi crypto (Binance, Bybit...) → CFDs brokers (IC Markets, Pepperstone...) | Sản phẩm công ty là CFDs bot, không phải crypto |
| 8 | Process | Đổi "Tuần X" → "Bước X"; đặt label vào `.process-number` (trên số 01–04) | Quy trình tính bằng bước, không phải tuần |
| 9 | Services | Pro badge: bỏ nền vàng, giữ chữ vàng đậm (`.tag-accent`) | Nền vàng che mất card featured background |
