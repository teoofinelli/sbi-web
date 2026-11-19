// SBI — English / Spanish switch.
// English lives in index.html. Every translatable element carries data-i18n="key";
// its Spanish text is below under the same key. To change a Spanish text, edit it here.
// Language order of preference: ?lang=es|en in the URL, the visitor's last choice, the browser language.

(function () {
  /* ES:start */
  const ES = {
    "nav.who": "Quiénes somos",
    "nav.what": "Qué hacemos",
    "nav.approach": "Nuestro enfoque",
    "nav.lookfor": "Qué buscamos",
    "nav.think": "Cómo pensamos",
    "nav.contact": "Contacto",
    "hero.eyebrow": "<span class=\"nowrap\">Ag-Biotech</span> · Del mundo a <span class=\"nowrap\">Latinoamérica</span>",
    "hero.tagline": "<span class=\"nowrap\">Tecnología global.</span> <span class=\"nowrap accent\">Inteligencia local.</span> <span class=\"nowrap\">Crecimiento regional.</span>",
    "hero.slide1": "Conectamos la innovación agrícola global con oportunidades reales de mercado.",
    "hero.slide2": "Con una visión global, buscamos soluciones <span class=\"nowrap\">Ag-Biotech</span> que aporten un valor diferencial significativo al agricultor.",
    "hero.slide3": "Transformamos la innovación en negocios viables y crecimiento sostenible en toda Latinoamérica.",
    "hero.tab1": "<span class=\"tab-num\">01</span> Inteligencia de mercado<span class=\"tab-progress\"></span>",
    "hero.tab2": "<span class=\"tab-num\">02</span> Scouting tecnológico<span class=\"tab-progress\"></span>",
    "hero.tab3": "<span class=\"tab-num\">03</span> Desarrollo de mercado<span class=\"tab-progress\"></span>",
    "hero.cta1": "Ver nuestro enfoque",
    "hero.cta2": "Iniciar una conversación",
    "who.kicker": "01 — Quiénes somos",
    "who.title": "Ingenieros agrónomos y especialistas en agronegocios con más de 25 años de experiencia profesional en Latinoamérica.",
    "who.p1": "SBI reúne más de 25 años de experiencia profesional en agronegocios, desarrollo de mercados y tecnologías agrícolas en Latinoamérica.",
    "who.p2": "Combinamos conocimiento agronómico, visión estratégica y experiencia comercial para conectar la innovación global con las necesidades reales de la agricultura latinoamericana.",
    "who.p3": "Contamos con presencia en Europa y una sólida red de conocimiento, relaciones y capacidades locales en los principales mercados de Latinoamérica. Esta estructura nos permite integrar una perspectiva global con un profundo entendimiento de cada mercado y de sus particularidades productivas, comerciales y regulatorias.",
    "who.fact1": "años de experiencia profesional en agronegocios en Latinoamérica",
    "who.fact2v": "Global",
    "who.fact2": "una visión mundial para el scouting de innovación <span class=\"nowrap\">Ag-Biotech</span>",
    "who.fact3": "una red local en los principales mercados de la región",
    "who.statement": "Conectamos conocimiento, tecnología y mercado <strong>para transformar oportunidades de innovación en soluciones con impacto y crecimiento sostenible para la agricultura latinoamericana.</strong>",
    "what.kicker": "02 — Qué hacemos",
    "what.title": "Con una visión global, identificamos tecnologías <span class=\"nowrap\">Ag-Biotech</span> en todo el mundo para responder a las necesidades de la agricultura latinoamericana.",
    "what.lede": "Identificamos oportunidades donde la innovación tecnológica pueda generar un diferencial real. Exploramos soluciones a escala global, evaluamos su potencial agronómico y comercial, y articulamos las capacidades técnicas, regulatorias y operativas necesarias para facilitar su adaptación, validación y desarrollo en los mercados regionales.",
    "what.a.title": "Partimos del problema",
    "what.a.text": "Identificamos necesidades reales, las limitaciones de las soluciones actuales y las oportunidades que se abren para productores y cadenas agroalimentarias.",
    "what.b.title": "Encontramos la tecnología",
    "what.b.text": "Con una visión global, buscamos en todo el mundo tecnologías <span class=\"nowrap\">Ag-Biotech</span>, innovaciones y socios que respondan a esas necesidades.",
    "what.c.title": "La llevamos al mercado",
    "what.c.text": "Evaluamos encaje local, evidencia, escalabilidad, regulación y tiempo de llegada al mercado, y ayudamos a construir el camino hacia la entrada comercial.",
    "what.statement": "No somos un distribuidor tradicional ni trabajamos a partir de un catálogo de productos. <strong>Primero identificamos la oportunidad y después buscamos la tecnología adecuada.</strong>",
    "approach.kicker": "03 — Nuestro enfoque",
    "approach.title": "Empezamos por el problema, no por un producto que vender.",
    "approach.lede": "Cinco etapas llevan una oportunidad desde una necesidad real en el campo hasta una solución comercial viable.",
    "approach.s1.title": "Necesidades reales",
    "approach.s1.text": "Comprender los problemas y las demandas de la agricultura, cultivo por cultivo y mercado por mercado.",
    "approach.s2.text": "Identificar brechas y oportunidades donde las soluciones actuales no responden lo suficiente.",
    "approach.s3.text": "Con una visión global, buscar en todo el mundo tecnologías <span class=\"nowrap\">Ag-Biotech</span> capaces de resolver esos problemas.",
    "approach.s4.title": "Validación",
    "approach.s4.text": "Evaluar su diferencial, aplicabilidad, escalabilidad y potencial de adaptación local.",
    "approach.s5.text": "Ayudar a transformar la oportunidad en una solución comercial viable.",
    "look.kicker": "04 — Qué buscamos",
    "look.title": "Tecnologías con encaje real y potencial de escala.",
    "look.lede": "No se trata de sumar productos: buscamos soluciones diferenciadas para problemas relevantes.",
    "look.c1.title": "Valor agronómico",
    "look.c1.text": "Eficacia consistente, beneficio medible y adaptación a condiciones productivas reales.",
    "look.c2.title": "Diferenciación",
    "look.c2.text": "Una brecha concreta: una necesidad mal resuelta, una limitación de la oferta actual o una oportunidad emergente.",
    "look.c3.title": "Viabilidad de negocio",
    "look.c3.text": "Fabricación escalable, una ruta regulatoria clara, un socio confiable y un tiempo de llegada al mercado razonable.",
    "look.filters": "Filtros de selección",
    "look.f1": "Necesidad real",
    "look.f2": "Diferencial tecnológico",
    "look.f3": "Evidencia",
    "look.f4": "Escalabilidad",
    "look.f5": "Regulación",
    "look.f6": "Mercado",
    "think.kicker": "05 — Cómo pensamos",
    "think.title": "La innovación solo importa cuando tiene sentido técnico, comercial y económico.",
    "think.a1.title": "Visión global",
    "think.a1.text": "Buscamos tecnologías y soluciones más allá de los mercados tradicionales.",
    "think.a2.title": "Conocimiento agronómico",
    "think.a2.text": "Entendemos los cultivos, los problemas productivos y las condiciones reales del mercado.",
    "think.a3.title": "Pensamiento estratégico",
    "think.a3.text": "Identificamos oportunidades donde las soluciones existentes no alcanzan.",
    "think.a4.title": "Orientación a resultados",
    "think.a4.text": "Una tecnología no solo debe ser innovadora: tiene que funcionar en el campo y en el negocio.",
    "think.a5.title": "Innovación y mercado",
    "think.a5.text": "Transformamos capacidades tecnológicas en oportunidades comerciales concretas.",
    "contact.kicker": "06 — Hablemos",
    "contact.title": "¿Una tecnología, una necesidad o una idea que valga la pena explorar?",
    "contact.lede": "Queremos conversar con empresas <span class=\"nowrap\">Ag-Biotech</span>, desarrolladores de tecnologías agrícolas, fabricantes y socios de toda la cadena de valor agrícola, en Europa y Latinoamérica.",
    "contact.cardTitle": "Contáctanos",
    "contact.spain": "(España)",
    "aria.menu": "Menú",
    "aria.slider": "Qué hace SBI",
    "aria.tabs": "Elegir un mensaje",
    "footer.tagline": "Tecnología global. Inteligencia local. Crecimiento regional.",
    "footer.values": "Inteligencia de mercado · Scouting tecnológico · Desarrollo de mercado",
    "footer.rights": "Todos los derechos reservados.",
    "meta.title": "SBI — Tecnología global. Inteligencia local. Crecimiento regional.",
    "meta.description": "Con una visión global, SBI busca innovación Ag-Biotech y la conecta con oportunidades reales de mercado en la agricultura latinoamericana: inteligencia de mercado, scouting tecnológico y desarrollo de mercado."
  };
  /* ES:end */

  const STORAGE_KEY = "sbi-lang";
  const nodes = document.querySelectorAll("[data-i18n]");
  const ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  const EN = {};
  nodes.forEach((el) => { EN[el.dataset.i18n] = el.innerHTML; });
  ariaNodes.forEach((el) => { EN[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
  EN["meta.title"] = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  EN["meta.description"] = metaDesc ? metaDesc.content : "";

  const read = () => { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } };
  const save = (lang) => { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ } };

  const apply = (lang) => {
    const dict = lang === "es" ? ES : EN;
    nodes.forEach((el) => {
      const text = dict[el.dataset.i18n];
      if (text !== undefined) el.innerHTML = text;
    });
    ariaNodes.forEach((el) => {
      const text = dict[el.dataset.i18nAria];
      if (text !== undefined) el.setAttribute("aria-label", text);
    });
    document.title = dict["meta.title"];
    if (metaDesc) metaDesc.content = dict["meta.description"];
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  };

  const fromUrl = new URLSearchParams(location.search).get("lang");
  const browser = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  let lang = ["es", "en"].includes(fromUrl) ? fromUrl : read() || browser;
  if (lang !== "es") lang = "en";
  apply(lang);

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      save(lang);
      apply(lang);
      // drop a ?lang= from the link so a reload keeps the visitor's choice
      if (fromUrl) history.replaceState(null, "", location.pathname + location.hash);
    });
  });
})();
