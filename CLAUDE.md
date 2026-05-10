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
├── Logo.svg          # Robot icon — used as browser tab favicon
├── Design.png        # Reference design
└── CLAUDE.md
```

---

## Design System

### Color Palette

```css
--bg-primary:    #0a0a0f;   /* near-black page background */
--bg-card:       #111118;   /* card / section background */
--bg-elevated:   #16161f;   /* elevated surfaces, nav */
--border:        #1e1e2e;   /* subtle borders */
--text-primary:  #f0f0f5;   /* headings, primary text */
--text-secondary:#8888a0;   /* body, descriptions */
--text-muted:    #555568;   /* captions, labels */
--accent:        #f5a623;   /* orange — highlights, CTAs, underlines */
--accent-hover:  #e8971a;   /* darker orange on hover */
--accent-glow:   rgba(245, 166, 35, 0.15); /* glow / subtle bg */
--purple-accent: #6c5ce7;   /* secondary accent for variety */
--success:       #00c896;   /* green for positive metrics */
```

### Typography Scale

```css
/* Display */
--text-display: clamp(2.5rem, 6vw, 5rem);   /* Hero headline (spec) */
--text-h1:      clamp(2rem, 4vw, 3.5rem);
--text-h2:      clamp(1.5rem, 3vw, 2.5rem);
--text-h3:      clamp(1.125rem, 2vw, 1.5rem);
--text-body:    1rem;
--text-small:   0.875rem;
--text-caption: 0.75rem;
```

> **Implemented:** `.hero-headline` dùng `font-size: clamp(2rem, 4vw, 3.2rem)` — nhỏ hơn spec vì text tiếng Việt dài hơn tiếng Anh trong design gốc.

### Spacing

Use an 8px base grid: `8 | 16 | 24 | 32 | 48 | 64 | 96 | 128px`.

### Key Design Rules

- **Accent highlights:** Key words in headings use `<span class="accent">word</span>` styled with `color: var(--accent)`.
- **Section rhythm:** Alternating dark sections; generous vertical padding (`96px–128px`).
- **Cards:** Subtle border `1px solid var(--border)`, `background: var(--bg-card)`, `border-radius: 12px`.
- **Buttons:** Primary = solid orange; Secondary = ghost with orange border.
- **No stock images** — use CSS geometric shapes, SVG line art, or abstract number/chart motifs.
- **Animations:** Subtle `fade-up` on scroll via `IntersectionObserver`; no heavy motion.

---

## Page Sections (in order)

### 1. `<nav>` — Sticky Navigation
- Left: Logo SVG inline + "Growth Asset Trading" wordmark
- Right: nav links (`Dịch Vụ`, `Kết Quả`, `Quy Trình`, `Liên Hệ`) + CTA button "Tư Vấn Miễn Phí"
- Glassmorphism on scroll: `backdrop-filter: blur(12px)`

### 2. `#hero` — Hero Section
- Headline (large): `Không phải bot<br>đầu tiên.<br><span class='accent'>Nhưng là bot tốt nhất.</span>`
  - Line break sau "bot" để tránh orphan "tiên." ở dòng riêng
  - `font-size: clamp(2rem, 4vw, 3.2rem)` — nhỏ hơn spec vì text tiếng Việt dài
- Subheadline: 2–3 sentence value prop about custom trading bots
- Two CTAs: "Bắt Đầu Ngay" (primary) + "Xem Kết Quả" (secondary ghost)
- Background: faint grid pattern + subtle orange radial glow at top-right
- Layout: `align-items: flex-start` (không dùng `center` — tránh khoảng trắng lớn phía trên)
- `padding-top: calc(var(--nav-height) + 60px)` (spec: 80px → giảm xuống 60px)
- `.hero-chart`: `max-width: 480px`, `padding: 1.75rem`; `.hero-visual`: `justify-content: center`

### 3. `#exchanges` — Supported Brokers
- Section label: "TÍCH HỢP VỚI CÁC BROKER HÀNG ĐẦU"
- 6 broker tags: **IC Markets**, **Pepperstone**, **Exness**, **XM**, **IG Group**, **FXCM**
- Background: `section-alt` (slightly lighter dark)

### 4. `#pain` — Pain Points (Why manual trading fails)
- Section label (small caps): "VẤN ĐỀ BẠN ĐANG GẶP PHẢI"
- Headline: "Bạn đang xây dựng thứ gì đó <span class='accent'>quan trọng.</span>"
- 4 pain point rows with icon + title + description:
  1. Cảm xúc can thiệp vào lệnh
  2. Không thể theo dõi thị trường 24/7
  3. Chiến lược tốt nhưng thực thi kém
  4. Mất cơ hội vì vào lệnh trễ
- Right side: feature highlight card with purple accent border

### 4. `#benefits` — What Changes with Our Bots
- Headline: "Điều gì thay đổi khi Growth Asset <span class='accent'>embed với bạn.</span>"
- 3-column grid of benefit cards:
  1. **Kỷ luật tuyệt đối** — Bot thực thi đúng chiến lược, không cảm xúc
  2. **Hoạt động 24/7** — Theo dõi mọi phiên: châu Á, Âu, Mỹ
  3. **Tốc độ thực thi** — Vào lệnh trong mili-giây
  4. **Quản lý rủi ro** — Stop-loss, take-profit tự động
  5. **Tùy biến hoàn toàn** — Theo đúng chiến lược của bạn
  6. **Backtesting** — Kiểm tra chiến lược trên dữ liệu lịch sử

### 5. `#flywheel` — Success Flywheel (Center-aligned)
- Headline: `Mỗi thành công dẫn<br>đến dự án <span class='accent'>tiếp theo.</span>`
  - `<br>` sau "dẫn" (không phải sau "đến") để line break gọn 2 dòng cân đối
- Circular flywheel diagram (CSS-drawn): Strategy → Bot → Profit → Scale → repeat
- Short paragraph below about long-term partnership approach
- Orange blockquote / pull quote

### 6. `#results` — Metrics / Social Proof
- Section label: "KẾT QUẢ ĐÃ ĐẠT ĐƯỢC"
- Headline: "Nhà giao dịch như bạn đã thấy <span class='accent'>những kết quả này.</span>"
- 4 big stat cards:
  - `$400K+` — Lợi nhuận tích lũy cho client
  - `6+` — Sàn giao dịch tích hợp
  - `78%` — Tỷ lệ lệnh thắng trung bình
  - `0%` — Can thiệp cảm xúc

### 7. `#process` — From First Call to Live Bot
- Headline: `Từ ý tưởng đến <span class='accent'>bot chạy thực tế</span><br>qua 4 bước rõ ràng.`
- Horizontal timeline with 4 steps — label "Bước X" nằm bên trong `.process-number` (trên số 01/02):
  1. **Bước 1** — Tư vấn chiến lược
  2. **Bước 2** — Thiết kế & Backtesting
  3. **Bước 3** — Triển khai & Kiểm tra
  4. **Bước 4** — Theo dõi & Tối ưu
- `.process-number` dùng `display: flex; flex-direction: column` để stack label trên số

### 8. `#portfolio` — Where We've Built, What Changed
- Headline: "Nơi chúng tôi đã triển khai. <span class='accent'>Điều đã thay đổi.</span>"
- 2–3 case study cards (anonymous if needed):
  - Exchange, strategy type, result metrics
  - Small purple/orange tag for market: Crypto / Forex / Futures

### 9. `#about` — 25+ Years Track Record (adapt to company age)
- Headline: "X năm giúp nhà giao dịch <span class='accent'>tạo ra kết quả lớn.</span>"
- Left: long-form paragraph about Growth Asset Trading's founding, mission, team approach
- Right: 4 mini stats: `25+ năm` / `2 sàn` / `500+ lệnh/ngày` / `100% custom`
- Small team section or founder note (text only, no photo required)
- `.about-inner { align-items: center; }` — hai cột left/right căn giữa theo chiều dọc

### 10. `#services` — Service Tiers
- Headline: "Xây dựng cho nhà giao dịch với <span class='accent'>mục tiêu đầy tham vọng.</span>"
- 3 service cards (not "pricing" — positioning over cost):
  - **Starter Bot** — 1 chiến lược, 1 sàn, backtesting included
  - **Pro Bot** — Multi-strategy, multi-pair, dashboard ← badge `.tag-accent`: chữ vàng đậm, không nền
  - **Enterprise** — Full custom, dedicated support, white-label option
- Each card: feature list + "Liên Hệ" CTA
- `.tag-accent { background: transparent; color: var(--accent); font-weight: 700; border: none; padding: 0; }`

### 11. `#contact` — Final CTA + Contact
- Headline: `Hành trình bắt đầu<br><span class='accent'>bằng một cuộc trò chuyện.</span>`
  - Rút ngắn từ "Hành trình tiếp theo bắt đầu" → "Hành trình bắt đầu" để vừa 2 dòng
  - `.contact-left h2 { font-size: clamp(1.4rem, 2.5vw, 2.3rem); }` — override để tránh wrap 4+ dòng
- Simple contact form: Tên / Email / Số điện thoại / Mô tả chiến lược / Submit
- OR: WhatsApp/Telegram button + Email link
- Contact info block:
  - Điện thoại: **0866 797 299**
  - Telegram: **@longhdtrader** (link: `https://t.me/longhdtrader`)
  - Email: (to be filled)
  - Địa chỉ: (to be filled)

### 12. `<footer>` — Footer
- Logo + tagline
- Nav links
- Social icons: Telegram `@longhdtrader` (`https://t.me/longhdtrader`), YouTube, Twitter/X
- Copyright: © 2026 Growth Asset Trading. All rights reserved.

---

## Content Language

- **Primary language: Vietnamese** — all user-facing text in Vietnamese
- **Technical terms** — keep in English where standard (Bot, Backtesting, Stop-loss, Futures)
- **Tone:** Confident, direct, professional — no hype, numbers-first

---

## JavaScript Behaviors (`main.js`)

1. **Scroll animations** — `IntersectionObserver` adds `.visible` class to `[data-animate]` elements; CSS handles `opacity` + `translateY` transition
2. **Sticky nav** — add `.scrolled` class after 50px scroll for glassmorphism effect
3. **Counter animation** — animate numbers in `#results` when they enter viewport
4. **Smooth scroll** — all `<a href="#...">` links use `scrollIntoView({ behavior: 'smooth' })`
5. **Contact form** — basic client-side validation; `fetch` POST or `mailto:` fallback
6. **Mobile menu** — hamburger toggle for `<768px`

---

## Favicon

Use `Logo.svg` as the browser tab icon:

```html
<link rel="icon" type="image/svg+xml" href="Logo.svg">
```

The SVG is a robot/bot icon from Font Awesome — appropriate branding for a trading bot company.

---

## Responsive Breakpoints

```css
/* Mobile first */
/* sm */  @media (min-width: 640px)  { ... }
/* md */  @media (min-width: 768px)  { ... }
/* lg */  @media (min-width: 1024px) { ... }
/* xl */  @media (min-width: 1280px) { ... }
```

- Nav collapses to hamburger at `<768px`
- 3-col grids → 2-col → 1-col
- Hero font scales via `clamp()`

---

## Quy Tắc Bắt Buộc

> Những quy tắc này phải được tuân thủ trong mọi thay đổi, không có ngoại lệ.

### 1. Screenshot & So Sánh Sau Mỗi Thay Đổi Lớn
- Sau mỗi section hoàn thành hoặc thay đổi layout đáng kể, chụp screenshot (`Snipping Tool` / `Win+Shift+S`) và so sánh trực quan với `Design.png`
- Kiểm tra: spacing, font weight, màu sắc accent, alignment
- Không chuyển sang section tiếp theo nếu section hiện tại chưa khớp design

### 2. Mobile-Friendly Bắt Buộc
- Viết CSS theo hướng **mobile-first**: styles mặc định cho `<768px`, dùng `@media (min-width: ...)` để mở rộng lên desktop
- Test tại 3 breakpoint sau mỗi section: `375px` (iPhone SE), `768px` (iPad), `1280px` (Desktop)
- Không có element nào bị tràn ngang (`overflow-x`) trên mobile
- Touch targets tối thiểu `44×44px`
- Nav phải có hamburger menu hoạt động đầy đủ dưới `768px`

### 3. Animation Scroll Bắt Buộc Cho Mọi Section
- **Mọi section** đều phải có `data-animate` attribute và animation khi vào viewport
- Dùng `IntersectionObserver` với `threshold: 0.15`
- Animation mặc định: `fade-up` (opacity 0→1, translateY 30px→0, duration 0.6s, easing `ease-out`)
- Các element con trong section nên có `stagger delay` (cách nhau `0.1s`) để tạo hiệu ứng cascade
- Animation chỉ chạy **một lần** (dùng `observer.unobserve()` sau khi trigger)
- Không dùng thư viện animation ngoài (AOS, GSAP, v.v.) — chỉ CSS + vanilla JS

```css
/* Animation base — bắt buộc áp dụng */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
[data-animate].delay-1 { transition-delay: 0.1s; }
[data-animate].delay-2 { transition-delay: 0.2s; }
[data-animate].delay-3 { transition-delay: 0.3s; }
[data-animate].delay-4 { transition-delay: 0.4s; }
```

---

## Development Checklist

- [x] `index.html` skeleton with all sections and semantic HTML
- [x] `style.css` with CSS variables, reset, typography, layout
- [x] `main.js` with scroll animations, counter, nav, form
- [x] All 12 sections fully implemented
- [x] Mobile responsive (test at 375px, 768px, 1280px)
- [x] Favicon set to `Logo.svg`
- [x] No external image dependencies
- [x] Form validation working
- [x] Smooth scroll working
- [x] Counter animation working
- [x] All text in Vietnamese

---

## Thay Đổi Đã Thực Hiện

Ghi lại tất cả các chỉnh sửa so với design gốc (so sánh với `Design.png`).

### Fix #1 — HTML: h1 duplicate `class` attribute (bug)
**File:** `index.html`
```html
<!-- Trước (lỗi): -->
<h1 class="hero-headline" data-animate class="delay-1">

<!-- Sau (đã sửa): -->
<h1 class="hero-headline" data-animate style="transition-delay:.1s">
```

### Fix #2 — CSS: Thiếu `.delay-1` → `.delay-4` classes
**File:** `style.css`  
Các class `.delay-1` → `.delay-4` có trong spec nhưng thiếu trong implementation. Đã thêm sau `[data-animate].visible`:
```css
[data-animate].delay-1 { transition-delay: 0.1s; }
[data-animate].delay-2 { transition-delay: 0.2s; }
[data-animate].delay-3 { transition-delay: 0.3s; }
[data-animate].delay-4 { transition-delay: 0.4s; }
```

### Fix #3 — Hero section: alignment + padding
**File:** `style.css`
```css
/* Trước: */
#hero { padding-top: calc(var(--nav-height) + 80px); align-items: center; }

/* Sau: */
#hero { padding-top: calc(var(--nav-height) + 60px); align-items: flex-start; }
```
`align-items: center` trên `min-height: 100vh` tạo khoảng trắng lớn phía trên. `flex-start` khắc phục.

### Fix #4 — Hero headline: font size + line break
**File:** `style.css` + `index.html`
```css
/* style.css — Trước: */
.hero-headline { font-size: clamp(2.2rem, 6vw, 4.2rem); }
/* Sau: */
.hero-headline { font-size: clamp(2rem, 4vw, 3.2rem); }
```
```html
<!-- index.html — Trước: -->
Không phải bot đầu tiên.<br>
<!-- Sau (thêm <br> trước "đầu tiên" tránh orphan): -->
Không phải bot<br>đầu tiên.<br>
```

### Fix #5 — Hero chart card: kích thước + căn giữa
**File:** `style.css`
```css
/* Trước: */
.hero-chart { padding: 1.5rem; max-width: 380px; }
.hero-visual { justify-content: flex-end; }  /* @768px+ */

/* Sau: */
.hero-chart { padding: 1.75rem; max-width: 480px; }
.hero-visual { justify-content: center; }
```

### Fix #6 — Flywheel heading: vị trí `<br>`
**File:** `index.html`
```html
<!-- Trước: -->
<h2>Mỗi thành công dẫn đến<br>dự án <span class="accent">tiếp theo.</span></h2>

<!-- Sau: -->
<h2>Mỗi thành công dẫn<br>đến dự án <span class="accent">tiếp theo.</span></h2>
```

### Fix #7 — Contact heading: rút ngắn text + font size
**File:** `index.html` + `style.css`
```html
<!-- index.html — Trước: -->
<h2>Hành trình tiếp theo bắt đầu<br><span class="accent">bằng một cuộc trò chuyện.</span></h2>

<!-- Sau: -->
<h2>Hành trình bắt đầu<br><span class="accent">bằng một cuộc trò chuyện.</span></h2>
```
```css
/* style.css — thêm mới: */
.contact-left h2 { font-size: clamp(1.4rem, 2.5vw, 2.3rem); }
```

### Fix #8 — About section: căn giữa hai cột
**File:** `style.css`
```css
/* Trước: */
.about-inner { align-items: start; }

/* Sau: */
.about-inner { align-items: center; }
```

### Fix #9 — Pro badge: bỏ nền vàng, giữ chữ vàng đậm
**File:** `style.css`
```css
/* Trước: */
.tag-accent { background: var(--accent); color: #000; }

/* Sau: */
.tag-accent { background: transparent; color: var(--accent); font-weight: 700; border: none; padding: 0; }
```

### Fix #10 — Process: đổi "Tuần X" thành "Bước X", đặt vào `.process-number`
**File:** `index.html` + `style.css`
- Label "Bước 1–4" chuyển từ trong `.process-content` vào trong `.process-number` (trên số 01/02/03/04)
- Heading đổi từ "trong tuần, không phải quý" → "qua 4 bước rõ ràng"
```css
/* style.css — thêm: */
.process-number { display: flex; flex-direction: column; align-items: flex-start; }
.process-number .process-week { margin-bottom: 0.15rem; }
```

### Fix #11 — Exchanges: đổi crypto → CFDs brokers
**File:** `index.html`
- Label: "TÍCH HỢP VỚI CÁC BROKER HÀNG ĐẦU" (thay "CÁC SÀN HÀNG ĐẦU")
- Tags: IC Markets, Pepperstone, Exness, XM, IG Group, FXCM (thay Binance, Bybit, OKX, Bitget, MEXC, Gate.io)
