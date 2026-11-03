import { FormEvent, useState } from 'react'

type IconName =
  | 'arrow'
  | 'area'
  | 'bath'
  | 'bed'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'close'
  | 'heart'
  | 'location'
  | 'mail'
  | 'menu'
  | 'phone'
  | 'search'
  | 'star'
  | 'whatsapp'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
    area: <><path d="M3 9V3h6" /><path d="M21 15v6h-6" /><path d="m3 3 7 7" /><path d="m21 21-7-7" /></>,
    bath: <><path d="M4 12V5a2 2 0 0 1 4 0" /><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" /><path d="M8 19v2M16 19v2" /></>,
    bed: <><path d="M3 7v11M21 18v-6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6" /><path d="M3 14h18M6 9V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    star: <path d="m12 2.5 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.1L6 21l1.2-6.7-4.9-4.7 6.7-1Z" />,
    whatsapp: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-3.8-.9L3 21l1.8-5a8.6 8.6 0 1 1 16.2-4.5Z" /><path d="M8.5 7.5c.3 3.7 2.3 5.8 6 6.4" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const properties = [
  { title: 'پنت‌هاوس مدرن زعفرانیه', location: 'زعفرانیه، تهران', price: '۲۹۰ میلیارد تومان', area: '۴۸۰', beds: '۴', baths: '۵', tag: 'فروش ویژه', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88' },
  { title: 'ویلای باغ مجلل لواسان', location: 'لواسان، شهرک باستی', price: '۴۵۰ میلیارد تومان', area: '۱۲۰۰', beds: '۶', baths: '۷', tag: 'اختصاصی آریا', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88' },
  { title: 'آپارتمان لوکس نیاوران', location: 'نیاوران، کامرانیه', price: '۱۲۵ میلیارد تومان', area: '۲۶۰', beds: '۳', baths: '۳', tag: 'پیشنهاد ویژه', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=88' },
  { title: 'خانه باغ فرمانیه', location: 'فرمانیه، اندرزگو', price: '۳۲۰ میلیارد تومان', area: '۶۸۰', beds: '۵', baths: '۶', tag: 'جدید', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=88' },
  { title: 'برج باغ الهیه', location: 'الهیه، فرشته', price: '۱۸۰ میلیارد تومان', area: '۳۱۰', beds: '۳', baths: '۴', tag: 'فایل شخصی', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=88' },
  { title: 'ویلای مینیمال کردان', location: 'کردان، البرز', price: '۷۸ میلیارد تومان', area: '۹۵۰', beds: '۴', baths: '۴', tag: 'فرصت سرمایه‌گذاری', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=88' },
]

const categories = [
  ['آپارتمان', '۸۷ فایل', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85'],
  ['ویلا', '۴۲ فایل', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85'],
  ['زمین', '۲۹ فایل', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85'],
  ['املاک تجاری', '۳۴ فایل', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85'],
  ['واحد اداری', '۵۱ فایل', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'],
]

const faqs = [
  ['چطور می‌توانم از صحت اطلاعات یک ملک مطمئن شوم؟', 'تمام فایل‌های ارائه‌شده توسط کارشناسان حقوقی و ملکی آریا بررسی می‌شوند. اسناد، مالکیت و اطلاعات فنی پیش از بازدید اعتبارسنجی شده‌اند.'],
  ['هزینه مشاوره اولیه چقدر است؟', 'مشاوره اولیه، بررسی نیاز و پیشنهاد فایل‌های مناسب کاملاً رایگان است. هزینه‌های احتمالی پیش از شروع هر خدمتی به‌صورت شفاف اعلام می‌شود.'],
  ['آیا خدمات حقوقی و تنظیم قرارداد هم ارائه می‌دهید؟', 'بله، تیم حقوقی متخصص ما از بررسی اسناد تا تنظیم مبایعه‌نامه و انتقال قطعی سند همراه شما خواهد بود.'],
  ['برای فروش ملک از کجا شروع کنم؟', 'فرم درخواست مشاوره را تکمیل کنید. کارشناس منطقه در کمتر از یک روز کاری برای ارزیابی و تعیین استراتژی فروش با شما تماس می‌گیرد.'],
]

function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-title ${light ? 'light' : ''}`}>
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [favorite, setFavorite] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  const submitLead = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main dir="rtl">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="املاک آریا">
            <span className="brand-mark"><i /><i /><i /></span>
            <span><strong>املاک آریا</strong><small>ARYA REAL ESTATE</small></span>
          </a>
          <nav className={menuOpen ? 'open' : ''}>
            <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="بستن منو"><Icon name="close" /></button>
            {['صفحه اصلی', 'خرید', 'فروش', 'اجاره', 'درباره ما', 'تماس'].map((item, index) => <a key={item} className={index === 0 ? 'active' : ''} href={index === 0 ? '#top' : `#${index === 4 ? 'about' : index === 5 ? 'contact' : 'properties'}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="phone-link" href="tel:02122008080"><Icon name="phone" size={18} /><span>۰۲۱ ۲۲۰۰ ۸۰۸۰</span></a>
            <a className="btn btn-gold btn-small" href="#consult">مشاوره رایگان</a>
            <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="باز کردن منو"><Icon name="menu" size={25} /></button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90" alt="ویلای مدرن و لوکس" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="hero-kicker">انتخابی فراتر از یک خانه</span>
          <h1>خانه‌ای که همیشه<br />آرزویش را داشتید، <em>همین‌جاست</em></h1>
          <p>مجموعه‌ای گزیده از بهترین املاک تهران و حومه، برای کسانی که کیفیت، اصالت و آرامش را انتخاب می‌کنند.</p>
          <div className="hero-buttons">
            <a className="btn btn-gold" href="#properties">مشاهده املاک <Icon name="arrow" size={18} /></a>
            <a className="btn btn-outline" href="#consult">مشاوره رایگان</a>
          </div>
        </div>
        <div className="hero-stat">
          <span><strong>+۱۸</strong> سال تجربه</span>
          <i />
          <span><strong>+۱۲۰۰</strong> معامله موفق</span>
          <i />
          <span><strong>۹۸٪</strong> رضایت مشتری</span>
        </div>
        <a className="scroll-cue" href="#search"><span>کشف کنید</span><i /></a>
      </section>

      <section className="search-panel-wrap" id="search">
        <form className="container search-panel" onSubmit={(e) => e.preventDefault()}>
          <div className="search-heading"><span><Icon name="search" /></span><div><strong>جستجوی ملک</strong><small>ملک دلخواهتان را پیدا کنید</small></div></div>
          {[
            ['معامله', ['خرید', 'رهن و اجاره']],
            ['نوع ملک', ['همه املاک', 'آپارتمان', 'ویلا', 'زمین']],
            ['منطقه', ['همه مناطق', 'منطقه ۱', 'منطقه ۲', 'لواسان']],
            ['محدوده قیمت', ['بدون محدودیت', 'تا ۵۰ میلیارد', '۵۰ تا ۱۵۰ میلیارد', 'بیش از ۱۵۰ میلیارد']],
          ].map(([label, options]) => <label key={label as string}><span>{label as string}</span><select>{(options as string[]).map(option => <option key={option}>{option}</option>)}</select></label>)}
          <button className="btn btn-navy" type="submit"><Icon name="search" size={19} /> جستجوی ملک</button>
        </form>
      </section>

      <section className="section properties" id="properties">
        <div className="container">
          <div className="title-row">
            <SectionTitle eyebrow="گزیده‌ای برای خاص‌پسندان" title="املاک منتخب" text="فایل‌هایی که با وسواس انتخاب و با دقت کارشناسی شده‌اند." />
            <a className="text-link" href="#categories">مشاهده همه املاک <Icon name="arrow" size={18} /></a>
          </div>
          <div className="property-grid">
            {properties.map((property, index) => <article className="property-card" key={property.title}>
              <div className="property-image">
                <img src={property.image} alt={property.title} loading="lazy" />
                <span className="property-tag">{property.tag}</span>
                <button className={favorite.includes(index) ? 'heart active' : 'heart'} onClick={() => setFavorite(prev => prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index])} aria-label="افزودن به علاقه‌مندی"><Icon name="heart" /></button>
              </div>
              <div className="property-body">
                <div className="property-location"><Icon name="location" size={16} />{property.location}</div>
                <h3>{property.title}</h3>
                <div className="property-meta">
                  <span><Icon name="area" size={17} />{property.area} متر</span>
                  <span><Icon name="bed" size={18} />{property.beds} خواب</span>
                  <span><Icon name="bath" size={18} />{property.baths} حمام</span>
                </div>
                <div className="property-footer"><strong>{property.price}</strong><button aria-label="مشاهده جزئیات"><Icon name="arrow" size={18} /></button></div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section category-section" id="categories">
        <div className="container">
          <SectionTitle eyebrow="هر سبک، یک انتخاب متمایز" title="بر اساس نوع ملک" />
          <div className="category-grid">
            {categories.map(([title, count, image], index) => <a className={`category-card category-${index + 1}`} href="#properties" key={title}>
              <img src={image} alt={title} loading="lazy" />
              <span className="category-overlay" />
              <span className="category-content"><small>{count}</small><strong>{title}</strong><i><Icon name="arrow" size={17} /></i></span>
            </a>)}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container why-layout">
          <div className="why-image">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=88" alt="فضای داخلی لوکس" loading="lazy" />
            <div className="experience"><strong>۱۸</strong><span>سال تجربه<br />در بازار املاک لوکس</span></div>
          </div>
          <div className="why-content">
            <SectionTitle eyebrow="چرا املاک آریا؟" title="اعتماد، تخصص و تجربه در کنار شما" text="در مهم‌ترین تصمیم مالی زندگی‌تان، تنها نیستید. از نخستین گفتگو تا تحویل کلید، با شفافیت و تعهد همراه شما هستیم." />
            <div className="why-list">
              {[
                ['۰۱', 'مشاوران حرفه‌ای', 'تیمی منتخب از کارشناسان متخصص هر منطقه'],
                ['۰۲', 'فایل‌های احراز شده', 'بررسی کامل اسناد و اطلاعات پیش از معرفی'],
                ['۰۳', 'شناخت عمیق بازار', 'تحلیل هوشمند قیمت و فرصت‌های سرمایه‌گذاری'],
                ['۰۴', 'پشتیبانی همه‌جانبه', 'همراهی حقوقی و اجرایی تا پایان معامله'],
              ].map(([num, title, text]) => <div className="why-item" key={title}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-intro">
          <div>
            <SectionTitle eyebrow="داستان آریا" title="معامله‌ای امن، رابطه‌ای ماندگار" />
          </div>
          <div className="about-copy"><p>املاک آریا از سال ۱۳۸۵ با یک باور ساده آغاز شد: هر مشتری شایسته تجربه‌ای شفاف، حرفه‌ای و آرام در بازار ملک است. امروز، اعتبار ما حاصل اعتماد صدها خانواده و سرمایه‌گذار است.</p><a className="text-link" href="#contact">بیشتر درباره ما <Icon name="arrow" size={18} /></a></div>
        </div>
        <div className="container agents">
          {[
            ['پویان آریامنش', 'مدیر مجموعه و مشاور سرمایه‌گذاری', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=88'],
            ['سارا نیک‌فر', 'کارشناس ارشد منطقه یک', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=88'],
            ['آرش فرهمند', 'متخصص املاک لوکس و ویلایی', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=700&q=88'],
          ].map(([name, role, image]) => <article className="agent-card" key={name}>
            <div><img src={image} alt={name} loading="lazy" /><a href="tel:02122008080" aria-label={`تماس با ${name}`}><Icon name="phone" /></a></div>
            <h3>{name}</h3><p>{role}</p>
          </article>)}
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <SectionTitle eyebrow="روایت اعتماد" title="مشتریان درباره آریا چه می‌گویند؟" light />
          <div className="testimonial-grid">
            {[
              ['فرایند خرید خانه با آریا برخلاف تجربه‌های قبلی، کاملاً شفاف و آرام بود. مشاور ما حتی بعد از انتقال سند هم پیگیر جزئیات بود.', 'مهرداد کاویانی', 'خریدار پنت‌هاوس، زعفرانیه'],
              ['شناخت دقیق تیم آریا از بازار لواسان باعث شد ویلای مناسب را با قیمتی منطقی پیدا کنیم. همراهی حقوقی‌شان بی‌نظیر بود.', 'نگار و امیر سامانی', 'خریدار ویلا، لواسان'],
              ['ملک من در کمتر از سه هفته و دقیقاً در بازه قیمتی پیشنهادی فروخته شد. گزارش‌دهی منظم و حرفه‌ای، نقطه قوت آریاست.', 'سام رستگار', 'فروشنده، الهیه'],
            ].map(([quote, name, role], index) => <article className={`testimonial-card ${index === 1 ? 'featured' : ''}`} key={name}>
              <div className="stars">{[1, 2, 3, 4, 5].map(star => <Icon name="star" size={16} key={star} />)}</div>
              <blockquote>«{quote}»</blockquote>
              <div className="reviewer"><span>{name.slice(0, 1)}</span><div><strong>{name}</strong><small>{role}</small></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="consult" id="consult">
        <div className="consult-image"><img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=90" alt="خانه مدرن برای فروش" loading="lazy" /></div>
        <div className="consult-content">
          <div className="consult-inner">
            <SectionTitle eyebrow="ملک خود را با اطمینان بفروشید" title="ارزیابی تخصصی و فروش هوشمند" text="اطلاعات اولیه را ثبت کنید تا کارشناس منطقه، ارزش واقعی ملک شما و بهترین مسیر فروش را بررسی کند." light />
            {submitted ? <div className="success-message"><span><Icon name="check" size={28} /></span><div><strong>درخواست شما با موفقیت ثبت شد</strong><p>کارشناسان ما به‌زودی با شما تماس می‌گیرند.</p></div></div> :
            <form className="lead-form" onSubmit={submitLead}>
              <label><span>نام و نام خانوادگی</span><input required placeholder="مثلاً علی احمدی" /></label>
              <label><span>شماره تماس</span><input required type="tel" inputMode="tel" placeholder="۰۹۱۲ ۱۲۳ ۴۵۶۷" /></label>
              <label><span>نوع ملک</span><select required defaultValue=""><option value="" disabled>انتخاب کنید</option><option>آپارتمان</option><option>ویلا</option><option>زمین</option><option>تجاری یا اداری</option></select></label>
              <label><span>محدوده ملک</span><input required placeholder="مثلاً نیاوران" /></label>
              <button className="btn btn-gold" type="submit">درخواست مشاوره <Icon name="arrow" size={18} /></button>
              <small><Icon name="check" size={15} /> اطلاعات شما نزد ما محفوظ خواهد ماند.</small>
            </form>}
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-layout">
          <div className="faq-heading">
            <SectionTitle eyebrow="پرسش‌های متداول" title="پاسخ‌هایی برای یک انتخاب مطمئن" text="اگر پاسخ پرسش خود را پیدا نکردید، مشاوران ما آماده گفت‌وگو با شما هستند." />
            <a className="btn btn-navy" href="tel:02122008080"><Icon name="phone" size={18} /> تماس با مشاور</a>
          </div>
          <div className="accordion">
            {faqs.map(([question, answer], index) => <article className={activeFaq === index ? 'open' : ''} key={question}>
              <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{question}</span><i><Icon name="chevron" size={18} /></i></button>
              <div><p>{answer}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-cta container"><div><span>آماده یک انتخاب متفاوت هستید؟</span><h2>خانه رؤیایی شما، یک تماس فاصله دارد.</h2></div><a className="btn btn-gold" href="tel:02122008080"><Icon name="phone" size={19} /> ۰۲۱ ۲۲۰۰ ۸۰۸۰</a></div>
        <div className="container footer-main">
          <div className="footer-about"><a className="brand brand-light" href="#top"><span className="brand-mark"><i /><i /><i /></span><span><strong>املاک آریا</strong><small>ARYA REAL ESTATE</small></span></a><p>مشاور تخصصی خرید، فروش و سرمایه‌گذاری در املاک ممتاز تهران و حومه.</p><div className="socials"><a href="#" aria-label="اینستاگرام">in</a><a href="#" aria-label="لینکدین">Li</a><a href="#" aria-label="تلگرام">tg</a></div></div>
          <div className="footer-links"><strong>دسترسی سریع</strong>{['خرید ملک', 'فروش ملک', 'رهن و اجاره', 'املاک منتخب', 'درباره آریا'].map(link => <a href="#properties" key={link}>{link}</a>)}</div>
          <div className="footer-contact"><strong>ارتباط با ما</strong><p><Icon name="location" size={19} /> تهران، زعفرانیه، خیابان مقدس اردبیلی، پلاک ۱۸۲</p><a href="tel:02122008080"><Icon name="phone" size={18} /> ۰۲۱ ۲۲۰۰ ۸۰۸۰</a><a href="mailto:info@aryarealestate.ir"><Icon name="mail" size={18} /> info@aryarealestate.ir</a><p><Icon name="clock" size={18} /> شنبه تا پنج‌شنبه، ۹ تا ۲۰</p></div>
          <div className="mini-map"><div><span><Icon name="location" size={28} /></span><strong>دفتر مرکزی آریا</strong><small>مشاهده روی نقشه</small></div></div>
        </div>
        <div className="container copyright"><span>تمامی حقوق برای املاک آریا محفوظ است © ۱۴۰۳</span><span>حریم خصوصی · قوانین و مقررات</span></div>
      </footer>

      <a className="floating-contact" href="tel:02122008080" aria-label="تماس با مشاور"><Icon name="phone" size={24} /><span>تماس با مشاور</span></a>
    </main>
  )
}
