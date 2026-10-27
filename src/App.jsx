import { useRef, useState } from 'react'
import { site, services, steps } from './data/site'
import { videos } from './data/videos'
import { instagramPosts, tiktokVideos } from './data/social'
import logo from './assets/logo.png'
import logoTop from './assets/logo-3d.webp'
import {
  IconWhatsApp,
  IconInstagram,
  IconTikTok,
  IconYoutube,
  IconPin,
  IconClock,
  IconArrow,
  IconPlay,
  IconGoogle,
  IconStar,
  serviceIcons,
} from './components/Icons.jsx'

const wa = `https://wa.me/${site.whatsapp}?text=${site.whatsappMsg}`

const heroParticles = [
  { l: '6%', t: '18%', d: '11s', delay: '0s', s: 4 },
  { l: '14%', t: '42%', d: '14s', delay: '1.1s', s: 3 },
  { l: '22%', t: '68%', d: '12s', delay: '2.4s', s: 5 },
  { l: '31%', t: '12%', d: '16s', delay: '0.6s', s: 3 },
  { l: '38%', t: '55%', d: '13s', delay: '3.2s', s: 4 },
  { l: '47%', t: '28%', d: '15s', delay: '1.8s', s: 2 },
  { l: '53%', t: '76%', d: '12s', delay: '0.3s', s: 4 },
  { l: '61%', t: '16%', d: '17s', delay: '2.8s', s: 3 },
  { l: '68%', t: '48%', d: '11s', delay: '4s', s: 5 },
  { l: '74%', t: '82%', d: '14s', delay: '1.4s', s: 3 },
  { l: '81%', t: '22%', d: '13s', delay: '2s', s: 4 },
  { l: '88%', t: '58%', d: '16s', delay: '0.9s', s: 3 },
  { l: '92%', t: '36%', d: '12s', delay: '3.6s', s: 2 },
  { l: '10%', t: '86%', d: '15s', delay: '2.2s', s: 4 },
  { l: '18%', t: '8%', d: '18s', delay: '4.5s', s: 3 },
  { l: '43%', t: '90%', d: '13s', delay: '1.6s', s: 5 },
  { l: '56%', t: '6%', d: '14s', delay: '0.4s', s: 3 },
  { l: '77%', t: '70%', d: '11s', delay: '2.7s', s: 4 },
  { l: '84%', t: '10%', d: '17s', delay: '3.1s', s: 2 },
  { l: '26%', t: '34%', d: '12s', delay: '5s', s: 3 },
  { l: '64%', t: '62%', d: '15s', delay: '1s', s: 4 },
  { l: '95%', t: '80%', d: '13s', delay: '2.5s', s: 3 },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href="#topo">
          <img className="logo-h" src={logoTop} alt="LH Assistência Técnica" />
        </a>
        <nav className="nav">
          <a href="#servicos">Serviços</a>
          <a href="#laboratorio">Laboratório</a>
          <a href="#videos">Reparos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="btn btn-gold" href={wa} target="_blank" rel="noreferrer">
          <IconWhatsApp /> Orçamento
        </a>
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          Menu
        </button>
      </div>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#laboratorio" onClick={() => setOpen(false)}>Laboratório</a>
        <a href="#videos" onClick={() => setOpen(false)}>Reparos</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        <a className="btn btn-gold" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-fx" aria-hidden="true">
        <div className="hero-fx-grid" />
        <div className="hero-fx-glows">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-fx-scanner" />
        <div className="hero-fx-traces">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-fx-particles">
          {heroParticles.map((p, i) => (
            <span
              key={i}
              style={{
                left: p.l,
                top: p.t,
                width: p.s,
                height: p.s,
                animationDuration: p.d,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Apple · Microsolda · Timóteo-MG</p>
          <h1>
            Referência em reparo de placa no <span className="title-grad">Vale do Aço.</span>
          </h1>
          <p className="lead">{site.subhead}</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href={wa} target="_blank" rel="noreferrer">
              <IconWhatsApp /> Falar no WhatsApp
            </a>
            <a className="btn btn-ghost" href="#videos">
              Ver reparos reais <IconArrow />
            </a>
          </div>
        </div>
        <aside className="logo-area">
          <img src={logo} alt="Logo LH Assistência Técnica" />
        </aside>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2>Do diagnóstico ao <span className="title-grad">reparo.</span></h2>
            <p className="lead">
              Mais do que trocar peças: encontramos a causa do problema e entregamos o aparelho testado.
            </p>
          </div>
        </div>
        <div className="cards">
          {services.map((item) => {
            const Icon = serviceIcons[item.id]
            return (
              <article className="card" key={item.id}>
                <div className="icon-box">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Lab() {
  return (
    <section className="section alt" id="laboratorio">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Da recepção ao reparo, <span className="title-grad">com método.</span></h2>
          </div>
        </div>
        <div className="steps">
          {steps.map((item, i) => (
            <article className="step-card" key={item.n} style={{ animationDelay: `${i * 0.12}s` }}>
              <b>{item.n}</b>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Videos() {
  const scroller = useRef(null)
  const [active, setActive] = useState(null)

  const move = (dir) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * 336, behavior: 'smooth' })
  }

  return (
    <section className="section" id="videos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Bancada real</p>
            <h2>Carrossel de <span className="title-grad">reparos da LH.</span></h2>
            <p className="lead">
              Vídeos do canal oficial: Wi-Fi, carga, CPU, RF e microsolda em iPhone e Android.
            </p>
          </div>
          <div className="carousel-nav">
            <button className="nav-btn" onClick={() => move(-1)} aria-label="Anterior">
              ‹
            </button>
            <button className="nav-btn" onClick={() => move(1)} aria-label="Próximo">
              ›
            </button>
          </div>
        </div>
        <div className="carousel-wrap">
          <div className="carousel" ref={scroller}>
            {videos.map((video) => (
              <article className="slide" key={video.id}>
                <div className="thumb" onClick={() => setActive(video)} role="button" tabIndex={0}>
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                  <div className="play">
                    <i>
                      <IconPlay />
                    </i>
                  </div>
                </div>
                <div className="slide-body">
                  <span className="tag">{video.tag}</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="modal-bar">
              <strong>{active.title}</strong>
              <button onClick={() => setActive(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function useDragScroll(ref) {
  const drag = useRef({ active: false, moved: false, startX: 0, scroll: 0 })

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    drag.current = { active: true, moved: false, startX: e.clientX, scroll: el.scrollLeft }
  }

  const onPointerMove = (e) => {
    const el = ref.current
    if (!el || !drag.current.active) return
    const delta = e.clientX - drag.current.startX
    if (!drag.current.moved && Math.abs(delta) < 8) return
    drag.current.moved = true
    el.scrollLeft = drag.current.scroll - delta
  }

  const onPointerUp = () => {
    drag.current.active = false
  }

  const onClickCapture = (e) => {
    if (drag.current.moved) e.preventDefault()
    drag.current.moved = false
  }

  return { onPointerDown, onPointerMove, onPointerUp, onPointerLeave: onPointerUp, onClickCapture }
}

function Social() {
  const igScroller = useRef(null)
  const tkScroller = useRef(null)
  const igDrag = useDragScroll(igScroller)
  const tkDrag = useDragScroll(tkScroller)
  const [tkFailed, setTkFailed] = useState({})
  const [activeIg, setActiveIg] = useState(null)

  const move = (ref, dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="section alt social-section" id="redes">
      <div className="wrap">
        <div className="social-block">
          <div className="section-head">
            <div>
              <p className="eyebrow">Instagram</p>
              <h2>@lhassistencia</h2>
              <p className="lead">Reels reais de bancada, reproduzidos na página.</p>
            </div>
            <div className="social-head-actions">
              <div className="carousel-nav">
                <button className="nav-btn" onClick={() => move(igScroller, -1)} aria-label="Anterior no Instagram">
                  ‹
                </button>
                <button className="nav-btn" onClick={() => move(igScroller, 1)} aria-label="Próximo no Instagram">
                  ›
                </button>
              </div>
              <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noreferrer">
                <IconInstagram /> Ver perfil
              </a>
            </div>
          </div>
          <div className="carousel-wrap">
            <div className="carousel ig-carousel" ref={igScroller} {...igDrag}>
              {instagramPosts.map((post) => (
                <article className="ig-card" key={post.id}>
                  <div className="ig-card-head">
                    <img src="/social/ig-avatar.jpg" alt="" />
                    <span>lhassistencia</span>
                    <IconInstagram size={16} />
                  </div>
                  <button className="ig-media" type="button" onClick={() => setActiveIg(post)}>
                    <img src={`/social/ig-${post.id}.jpg`} alt={post.caption} />
                    <span className="ig-play">
                      <IconPlay />
                    </span>
                  </button>
                  <p className="ig-caption">{post.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        {activeIg && (
          <div className="modal" onClick={() => setActiveIg(null)}>
            <div className="modal-box ig-modal" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`https://www.instagram.com/reel/${activeIg.id}/embed`}
                title={activeIg.caption}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="modal-bar">
                <strong>{activeIg.caption}</strong>
                <button onClick={() => setActiveIg(null)}>Fechar</button>
              </div>
            </div>
          </div>
        )}

        <div className="social-block tiktok-block">
          <div className="section-head">
            <div>
              <p className="eyebrow">TikTok</p>
              <h2>@lucaashenriqu</h2>
              <p className="lead">Vídeos reais dos nossos reparos, direto do TikTok.</p>
            </div>
            <div className="social-head-actions">
              <div className="carousel-nav">
                <button className="nav-btn" onClick={() => move(tkScroller, -1)} aria-label="Anterior no TikTok">
                  ‹
                </button>
                <button className="nav-btn" onClick={() => move(tkScroller, 1)} aria-label="Próximo no TikTok">
                  ›
                </button>
              </div>
              <a className="btn btn-ghost" href={site.tiktok} target="_blank" rel="noreferrer">
                <IconTikTok /> Ver perfil no TikTok
              </a>
            </div>
          </div>
          <div className="carousel-wrap">
            <div className="carousel tk-carousel" ref={tkScroller} {...tkDrag}>
              {tiktokVideos.map((video) => (
                <article className="tk-card" key={video.id}>
                  <div className="tk-card-head">
                    <IconTikTok size={16} />
                    <span>lucaashenriqu</span>
                    <small>{video.views}</small>
                  </div>
                  {tkFailed[video.id] ? (
                    <a
                      className="tk-fallback"
                      href={`https://www.tiktok.com/@lucaashenriqu/video/${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconTikTok size={28} />
                      <span>Abrir no TikTok</span>
                    </a>
                  ) : (
                    <iframe
                      className="tk-embed"
                      title={`TikTok ${video.id}`}
                      src={`https://www.tiktok.com/player/v1/${video.id}?music_info=0&description=0`}
                      allow="encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      onError={() => setTkFailed((prev) => ({ ...prev, [video.id]: true }))}
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
          <p className="social-note">Se um vídeo não carregar aqui, use o botão para abrir o perfil oficial.</p>
        </div>
      </div>
    </section>
  )
}

function GoogleReview() {
  return (
    <section className="section review" id="avaliacao">
      <div className="wrap">
        <div className="review-box">
          <div className="review-brand">
            <IconGoogle size={32} />
            <div className="review-stars" aria-hidden="true">
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
              <IconStar />
            </div>
          </div>
          <h2>Sua opinião é muito <span className="title-grad">importante!</span></h2>
          <p className="lead">
            Já realizou um serviço com a LH Assistência Técnica? Conte como foi sua experiência. Sua avaliação ajuda outras pessoas a conhecerem nosso trabalho e nos ajuda a melhorar cada vez mais.
          </p>
          <a className="btn btn-gold" href={site.googleReview} target="_blank" rel="noreferrer">
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contato">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Visite o laboratório</p>
            <h2>Estamos na Av. Acesita, <span className="title-grad">em Timóteo.</span></h2>
          </div>
        </div>
        <div className="contact-grid">
          <div className="info-list">
            <div className="info">
              <IconPin />
              <div>
                <strong>{site.address}</strong>
                <p>
                  {site.city} · CEP {site.cep}
                </p>
              </div>
            </div>
            <div className="info">
              <IconClock />
              <div>
                {site.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>
            <div className="info">
              <IconWhatsApp />
              <div>
                <a href={site.phoneHref}>{site.phone}</a>
                <p>WhatsApp para orçamentos rápidos.</p>
              </div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-wa" href={wa} target="_blank" rel="noreferrer">
                <IconWhatsApp /> Chamar agora
              </a>
              <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noreferrer">
                <IconInstagram /> Instagram
              </a>
              <a className="btn btn-ghost" href={site.tiktok} target="_blank" rel="noreferrer">
                <IconTikTok /> TikTok
              </a>
              <a className="btn btn-ghost" href={site.mapsDir} target="_blank" rel="noreferrer">
                Como chegar
              </a>
            </div>
          </div>
          <iframe
            className="map"
            title="Mapa LH Assistência Técnica"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Lab />
      <Videos />
      <Social />
      <GoogleReview />
      <Contact />
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {site.name}. Timóteo — MG.</span>
        <div className="footer-links">
          <a href={site.instagram} target="_blank" rel="noreferrer"><IconInstagram /> Instagram</a>
          <a href={site.tiktok} target="_blank" rel="noreferrer"><IconTikTok /> TikTok</a>
          <a href={site.youtube} target="_blank" rel="noreferrer"><IconYoutube /> YouTube</a>
        </div>
      </footer>
      <a className="float-wa" href={wa} target="_blank" rel="noreferrer">
        <IconWhatsApp /> WhatsApp
      </a>
    </>
  )
}
