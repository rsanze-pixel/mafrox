/* ==================================================================
   MAFROX — EXTRAS (compartido por las 4 páginas: inicio, Línea Res,
   Línea Porcino y Productos importados)
   1) Cambio de idioma ES / EN (diccionario DICT)
   2) Modal de contacto (con validación) -> envía al correo de DESTINO
      (busca "var DESTINO" más abajo para cambiarlo)
   3) Botón flotante de WhatsApp
   4) INTRO del logo · RECORRIDO · PUENTE DEL TORO · NUESTRA GENTE
      (al final del archivo)
   Este archivo NO modifica los textos del HTML: guarda el texto
   español original de cada nodo y lo intercambia por el inglés.
   ================================================================== */
(function(){
  'use strict';

  /* ----------------------------------------------------------------
     1) DICCIONARIO ES -> EN
     Clave = texto en español EXACTO como aparece en la página.
     Valor = traducción al inglés.
     Si un texto no está aquí, se deja igual (no se rompe nada).
     ---------------------------------------------------------------- */
  var DICT = {
    /* — Navegación / menú / interfaz — */
    "Menú":"Menu",
    "Cerrar":"Close",
    "Inicio":"Home",
    "Del campo a tu mesa":"From farm to table",
    "Escribe al menos 4 caracteres":"Enter at least 4 characters",
    "Ingresa un teléfono válido (mínimo 9 dígitos)":"Enter a valid phone number (at least 9 digits)",
    "Nuestras soluciones":"Our solutions",
    "Áreas diferenciadas para refrigerados y congelados, y una operación diseñada para trabajar a escala.":"Separate areas for chilled and frozen products, and an operation designed to work at scale.",
    "Y queremos seguir haciéndolo aún más grande junto a ustedes.":"And we want to keep making it even bigger together with you.",
    "Cada cliente tiene una necesidad diferente. Por eso nuestra operación está preparada para adaptarse a distintos productos, presentaciones y formatos.":"Every client has a different need. That's why our operation is ready to adapt to different products, presentations and formats.",
    "No buscamos que te adaptes a una única solución: buscamos entender qué necesitas y hacerlo posible.":"We don't expect you to adapt to a single solution: we seek to understand what you need and make it possible.",
    "Una cadena excepcional se construye trabajando juntos. Nuestra forma de hacer las cosas comienza mucho antes de que la carne llegue a nuestra planta.":"An exceptional chain is built by working together. Our way of doing things begins long before the beef reaches our plant.",
    "Comienza en el campo, junto a los ganaderos y a las comunidades nativas que conocen la tierra, los animales y una actividad que forma parte de la identidad de Oxapampa. Continúa en nuestros procesos, donde las personas, el conocimiento, la tecnología y los estándares de calidad trabajan para preservar ese valor.":"It begins in the field, alongside ranchers and native communities who know the land, the animals and an activity that is part of Oxapampa's identity. It continues in our processes, where people, knowledge, technology and quality standards work to preserve that value.",
    "Depende de cómo cuidamos cada una de ellas.":"It depends on how we care for each one.",
    "Nuestros ganaderos no son solamente proveedores: son parte fundamental de nuestra cadena y de la historia que existe detrás de nuestra carne.":"Our ranchers are not just suppliers: they are a fundamental part of our chain and of the story behind our beef.",
    "Ellos conocen el campo. Nosotros, las exigencias del mercado.":"They know the field. We know what the market demands.",
    "Nuestro compromiso con la calidad no termina en una declaración. Contamos con las certificaciones HACCP e ISO 9001.":"Our commitment to quality doesn't end with a statement. We hold HACCP and ISO 9001 certifications.",
    "Contamos con áreas diferenciadas para productos refrigerados y congelados, preparadas para conservar cada producto bajo las condiciones que requiere.":"We have separate areas for chilled and frozen products, ready to keep each product under the conditions it requires.",
    "Producto refrigerado y congelado. 200 toneladas semanales de capacidad.":"Chilled and frozen product. 200 tons of weekly capacity.",
    "Volver al inicio":"Back to home",
    "A lo largo de nuestra trayectoria hemos trabajado con empresas de diferentes sectores y dimensiones: retail, concesionarios, operaciones mineras, restaurantes y otros canales.":"Throughout our history we have worked with companies of different sectors and sizes: retail, food service, mining operations, restaurants and other channels.",
    "Son empresas que encuentran en Mafrox un aliado de abastecimiento. Pero nuestra relación no termina cuando entregamos un producto: buscamos conocer sus operaciones, entender sus necesidades y acompañar su crecimiento con soluciones que respondan a sus formatos, volúmenes, tiempos y mercados.":"They find in Mafrox a supply partner. But our relationship doesn't end when we deliver a product: we get to know their operations, understand their needs and support their growth with solutions that fit their formats, volumes, timing and markets.",
    "Nacimos en Oxapampa. Nuestro próximo destino es estar más cerca de ti.":"We were born in Oxapampa. Our next destination is to be closer to you.",
    "Lo que comenzó en Oxapampa hoy conecta nuestra operación con empresas, mercados y consumidores en diferentes puntos del Perú. Cada nuevo destino representa una oportunidad para llevar nuestra forma de trabajar más lejos, pero también para estar más cerca de quienes confían en nosotros.":"What began in Oxapampa now connects our operation with companies, markets and consumers across Peru. Every new destination is a chance to take our way of working further, and to be closer to those who trust us.",
    "Una carne excepcional":"Exceptional beef",
    "empieza mucho antes.":"starts long before.",
    "Camal, centro de producción cárnica y frigorífico que abastece a retail, concesionarios, minería y restaurantes del Perú.":"Slaughterhouse, meat production center and cold storage supplying retail, food service, mining and restaurants across Peru.",
    "Ganado criado en libertad en las pasturas de Oxapampa: una carne magra, con origen propio.":"Free-range cattle raised on Oxapampa's pastures: lean beef with a true origin.",
    "Sombra, descanso, enriquecimiento y hasta música: cuidamos al animal en cada etapa.":"Shade, rest, enrichment and even music: we care for the animal at every stage.",
    "Junto a ganaderos y comunidades nativas, la calidad empieza en el campo.":"Together with ranchers and native communities, quality starts in the field.",
    "Termoformadoras, detectores de metales, empacadoras al vacío y tumbler: procesos más precisos, seguros y consistentes.":"Thermoformers, metal detectors, vacuum packers and tumblers: more precise, safer and more consistent processes.",
    "La tecnología no reemplaza el origen. Lo complementa.":"Technology doesn't replace the origin. It complements it.",
    "Esa cadena llega a distintos puntos del Perú: el trabajo de nuestros colaboradores, el conocimiento de los ganaderos, el vínculo con las comunidades nativas y la confianza de quienes eligen trabajar con nosotros.":"That chain reaches many parts of Peru: the work of our team, the knowledge of ranchers, our bond with native communities and the trust of those who choose to work with us.",
    "1. Inicio":"1. Home",
    "Ganadería":"Livestock",
    "Soluciones":"Solutions",
    "Capacidad":"Capacity",
    "Alcance":"Reach",
    "Sectores":"Sectors",
    "Clientes":"Clients",
    "Expansión":"Expansion",
    "De grandes cadenas de supermercados a restaurantes y concesionarias: cada cliente nos exige lo mejor de Oxapampa, y eso es lo que llevamos a su mesa.":"From major supermarket chains to restaurants and food service companies: every client expects the best of Oxapampa, and that is what we bring to their table.",
    "Contacto":"Contact",
    "Oxapampa · Perú":"Oxapampa · Peru",
    "Lo que nos hace diferentes":"What makes us different",
    "Cómo actuamos":"How we work",

    /* — Menú G6 (opciones nuevas) — */
    "Nuestras líneas de productos":"Our product lines",
    "Partners":"Partners",

    /* — H7 Vitrina de líneas — */
    "Nuestras líneas":"Our lines",
    "Tres líneas, un mismo estándar":"Three lines, one standard",
    "Línea Res":"Beef line",
    "Línea Porcino":"Pork line",
    "Importación":"Imports",

    /* — H8 Nuestros canales — */
    "Nuestros canales":"Our channels",
    "Horeca":"Horeca",
    "Retail":"Retail",
    "Concesionarias de alimentos":"Food service",
    "Plantas industriales":"Industrial plants",
    "Un canal distinto para cada necesidad":"A different channel for every need",

    /* — H8 Nuestros canales (cuenta atrás) — */
    "Nuestros canales":"Our channels",
    "Horeca":"Horeca",
    "Retail":"Retail",
    "Concesionarias<br>de alimentos":"Food service<br>contractors",
    "Plantas<br>industriales":"Industrial<br>plants",
    "Un canal distinto para cada necesidad":"A different channel for every need",
    "Cortes parrilleros, hoteles y restaurantes: cocinas que necesitan el mismo producto todas las semanas.":"Grill cuts, hotels and restaurants: kitchens that need the same product every week.",
    "De la planta a la góndola: empaque listo para exhibición y rotación programada.":"From the plant to the shelf: display-ready packaging and scheduled rotation.",
    "Campamentos mineros y comedores industriales: volúmenes grandes y destinos lejanos.":"Mining camps and industrial canteens: large volumes and distant destinations.",
    "Materia prima para embutidoras y plantas de transformación, con especificación acordada.":"Raw material for sausage makers and processing plants, to agreed specification.",

    /* — Portada y cifras de capacidad — */
    "Capacidad y alcance":"Capacity and reach",
    "Capacidad<br>y alcance":"Capacity<br>and reach",
    "Lo que podemos sostener":"What we can sustain",
    "Toneladas de capacidad":"Tonnes of capacity",
    "Ganaderos homologados":"Approved farmers",
    "Países proveedores":"Supplier countries",

    /* — Frase puente — */
    "Empresas que confían en Mafrox":"Companies that trust Mafrox",
    "No nos eligen por cercanía: nos eligen porque cumplimos.":"They don't choose us for being close by: they choose us because we deliver.",

    /* — H12 · descripción de cada cliente — */
    "El mayor operador de supermercados del país. Bajo su paraguas están Plaza Vea, Vivanda, Mass y Makro: más de mil puntos de venta en todo el Perú.":"The country's largest supermarket operator. Plaza Vea, Vivanda, Mass and Makro all sit under its umbrella: more than a thousand points of sale across Peru.",
    "La cadena de supermercados con mayor cobertura nacional, con más de cien tiendas entre Lima y provincias.":"The supermarket chain with the widest national coverage, with more than a hundred stores across Lima and the provinces.",
    "El formato premium del grupo. Pocas tiendas y muy selectivas, con el estándar de frescos más exigente del retail peruano.":"The group's premium format. Few stores, highly selective, with the most demanding fresh-produce standard in Peruvian retail.",
    "Mayorista de autoservicio para negocios: restaurantes, bodegas y hoteles compran aquí por volumen, en más de veinte locales del país.":"Cash-and-carry wholesaler for businesses: restaurants, corner shops and hotels buy here in volume, across more than twenty stores nationwide.",
    "La red de tiendas de cercanía más extendida del Perú: más de mil locales de barrio con reposición diaria.":"Peru's most extensive convenience network: more than a thousand neighbourhood stores restocked daily.",
    "Cadena de hipermercados del grupo Falabella, presente en Lima y en las principales ciudades del país.":"Hypermarket chain of the Falabella group, present in Lima and the country's main cities.",
    "El supermercado de mayor prestigio del Perú. Su exigencia en frescos marcó el estándar de toda la categoría.":"Peru's most prestigious supermarket. Its demands on fresh produce set the standard for the whole category.",
    "La mayor red de tiendas de conveniencia del país: cientos de locales abiertos todos los días del año.":"The country's largest convenience-store network: hundreds of outlets open every day of the year.",
    "Distribuidor mayorista de consumo masivo con cobertura nacional y décadas abasteciendo al canal tradicional.":"Wholesale distributor of consumer goods with national coverage and decades supplying the traditional channel.",
    "Cadena especializada en alimentación consciente y productos de origen responsable, con tiendas en Lima.":"A chain specialising in conscious eating and responsibly sourced products, with stores in Lima.",
    "Operador global de servicios de alimentación presente en decenas de países. En el Perú atiende comedores de minería e industria.":"Global food-services operator present in dozens of countries. In Peru it runs canteens for mining and industry.",
    "Catering internacional que opera en casi sesenta países: aerolíneas, campamentos remotos y operaciones industriales.":"International catering operating in almost sixty countries: airlines, remote camps and industrial operations.",
    "Operador de servicios de alimentación para campamentos y comedores industriales, con operaciones a lo largo del país.":"Food-services operator for camps and industrial canteens, with operations throughout the country.",
    "Plataforma de delivery presente en nueve países de América Latina. En el Perú conecta a miles de comercios con sus clientes.":"Delivery platform present in nine Latin American countries. In Peru it connects thousands of businesses with their customers.",
    "Una de las principales empresas avícolas del Perú, con producción integrada de pollo.":"One of Peru's leading poultry companies, with integrated chicken production.",
    "Cliente del canal gastronómico: una operación que exige abastecimiento constante y producto estandarizado.":"A food-service client: an operation that demands constant supply and a standardised product.",
    "Casa de repostería y panadería de Lima, con una clientela fiel construida a lo largo de los años.":"A Lima pastry and bakery house, with a loyal clientele built over the years.",
    "Pastelería y restaurante limeño de tradición, exigente con el origen de cada insumo.":"A traditional Lima pastry shop and restaurant, demanding about the origin of every ingredient.",
    "Restaurante de parrillas y buffet en Lima, con un volumen de servicio alto y constante.":"A grill and buffet restaurant in Lima, with high and steady service volume.",

    /* — H9 Certificaciones — */
    "Certificaciones":"Certifications",
    "Innovación y tecnología":"Innovation and technology",
    "que garantiza cada corte":"that guarantees every cut",
    "HACCP":"HACCP",
    "ISO 9001":"ISO 9001",
    "Bienestar animal":"Animal welfare",
    "SENASA":"SENASA",

    /* — H10 / H11 / H12 — */
    "Capacidad y alcance":"Capacity and reach",
    "Toneladas de capacidad":"Tonnes of capacity",
    "Ganaderos homologados":"Approved farmers",
    "Países proveedores":"Supplier countries",
    "Responsabilidad social":"Social responsibility",
    "Comunidad":"Community",
    "De la mano de los ganaderos":"Hand in hand with the farmers",
    "Campañas":"Campaigns",
    "Albergue":"Shelter",
    "Banco de alimentos":"Food bank",
    "Responsabilidad social":"Social responsibility",
    "Contáctanos":"Contact us",

    /* — H1: carruseles de portada — */
    "Res · Cerdo · Aves":"Beef · Pork · Poultry",
    "Nuestras líneas de productos":"Our product lines",
    "Importación":"Imports",
    "Líneas cárnicas importadas":"Imported meat lines",

    /* — H2: ¿Quiénes somos? — */
    "01 · Quiénes somos":"01 · Who we are",
    "01 · Desde Oxapampa":"01 · From Oxapampa",
    "Cómo lo garantizamos":"How we guarantee it",
    "HACCP · control de peligros en cada etapa del proceso":"HACCP · hazard control at every stage of the process",
    "ISO 9001 · gestión de calidad y mejora continua":"ISO 9001 · quality management and continuous improvement",
    "Bienestar animal · crianza a pasto y manejo sin estrés":"Animal welfare · pasture rearing and stress-free handling",
    "SENASA · trazabilidad sanitaria desde el campo":"SENASA · sanitary traceability from the field",
    "Tumbler · masajeado que mejora textura y rendimiento":"Tumbler · massaging that improves texture and yield",
    "Empaquetado":"Packaging",
    "Preguntas frecuentes":"FAQ",
    "Encaramelado · porciones envueltas una a una, prácticas para conservar y porcionar":"Candy wrap · portions wrapped one by one, easy to store and portion",
    "Termoformado · bandejas selladas, listas para la góndola":"Thermoformed · sealed trays, ready for the shelf",
    "Al vacío · sin aire: mayor vida útil y el sabor intacto":"Vacuum packed · no air: longer shelf life and flavour intact",
    "Termoformadora · bandejas selladas para exhibición":"Thermoformer · sealed trays for display",
    "Empacadora al vacío · conservación sin aire ni oxidación":"Vacuum packer · preservation without air or oxidation",
    "¿Quiénes somos?":"Who we are",
    "Somos un camal, centro de producción cárnica y frigorífico en Oxapampa. Abastecemos a retail, concesionarias, minería y restaurantes del Perú con una manera responsable de entender la carne: desde su origen en el campo hasta el momento en que llega a tu mesa.":"We are a slaughterhouse, meat production centre and cold-storage facility in Oxapampa. We supply retail, food service, mining and restaurants across Peru with a responsible way of understanding meat: from its origin in the field to the moment it reaches your table.",
    "A lo largo de los años desarrollamos la capacidad de atender mercados muy distintos, cada uno con sus propios formatos, volúmenes y exigencias, sin que eso cambie la forma en que trabajamos ni los controles que aplicamos.":"Over the years we built the capacity to serve very different markets, each with its own formats, volumes and requirements, without changing the way we work or the controls we apply.",
    "Innovamos e incorporamos tecnología para responder a las nuevas exigencias del sector, sin perder de vista aquello que nos define: trabajar de la mano con los ganaderos y las comunidades nativas de Oxapampa.":"We innovate and adopt technology to meet the sector's new demands, without losing sight of what defines us: working hand in hand with the farmers and native communities of Oxapampa.",
    "Cuatro líneas:":"Four lines:",
    "res, cerdo, aves y carnes importadas.":"beef, pork, poultry and imported meats.",
    "Conoce nuestra línea de productos Mafrox":"Discover the Mafrox product line",
    "Nuestros partners":"Our partners",
    "Empresas que confían en nosotros":"Companies that trust us",
    "1. Lo que nos hace diferentes":"1. What makes us different",
    "1. Home":"1. Home",
    "2. Cómo actuamos":"2. How we work",
    "3. Nuestros partners":"3. Our partners",
    "Cómo actuamos →":"How we work →",
    "Nuestros partners →":"Our partners →",
    "Volver al inicio →":"Back to home →",

    /* — Hero index — */
    "Empieza mucho antes":"It starts long before",
    "Con respeto en cada etapa":"With respect at every stage",

    /* — index: bloques — */
    "Quiénes somos":"Who we are",
    "Somos un camal, centro de producción cárnica y frigorífico que ha construido su trayectoria sobre una manera responsable de entender la carne: desde su origen hasta el momento en que llega a las personas. A lo largo de los años hemos desarrollado la capacidad de abastecer a importantes empresas del Perú y atender distintos mercados, trabajando con retail, concesionarios, operaciones mineras y restaurantes.":"We are an abattoir, meat production center and cold-storage facility that has built its track record on a responsible way of understanding meat: from its origin to the moment it reaches people. Over the years we have developed the capacity to supply major companies in Peru and serve different markets, working with retail, catering concessionaires, mining operations and restaurants.",
    "Innovamos, mejoramos nuestros procesos e incorporamos tecnología para responder a las nuevas exigencias del sector, sin perder de vista aquello que nos define: trabajar de la mano con los ganaderos y las comunidades nativas de Oxapampa, construyendo relaciones que nos permitan avanzar juntos.":"We innovate, improve our processes and incorporate technology to respond to the sector's new demands, without losing sight of what defines us: working hand in hand with the farmers and native communities of Oxapampa, building relationships that let us move forward together.",
    "Producir carne también significa asumir una responsabilidad con las personas, los animales, los ganaderos, las comunidades y el territorio.":"Producing meat also means taking on a responsibility to people, animals, farmers, communities and the land.",

    "Carne de pastura":"Pasture-raised beef",
    "Nuestra carne nace en Oxapampa, de una forma de crianza en la que el ganado pastorea libremente y se alimenta principalmente de pasturas. Esta alimentación, junto con una crianza libre, contribuye a obtener una carne de perfil magro y características propias de un sistema basado en pastura.":"Our beef is born in Oxapampa, from a way of raising cattle in which they graze freely and feed mainly on pasture. This diet, together with free-range raising, helps produce lean meat with the characteristics of a pasture-based system.",
    "Pero más allá de sus atributos, representa una manera distinta de entender la producción: una en la que la calidad comienza mucho antes del procesamiento. De la mano de los ganaderos y las comunidades nativas de Oxapampa, buscamos preservar y fortalecer una forma de crianza que pone en valor el origen y el bienestar del animal.":"But beyond its attributes, it represents a different way of understanding production: one in which quality begins long before processing. Together with the farmers and native communities of Oxapampa, we seek to preserve and strengthen a way of raising cattle that values origin and animal welfare.",
    "Una carne excepcional no empieza cuando llega a nuestra planta. Empieza mucho antes.":"Exceptional meat doesn't begin when it reaches our plant. It begins long before.",

    "Bienestar animal":"Animal welfare",
    "Creemos que el bienestar animal no es un elemento adicional de nuestro proceso: es parte de la responsabilidad con la que hacemos nuestro trabajo. Por eso implementamos prácticas orientadas a brindar condiciones adecuadas durante las distintas etapas de manejo: espacios de sombra, elementos de enriquecimiento como pelotas y escobillas, condiciones que favorecen el descanso y reducen el estrés, e incluso estímulos como la música.":"We believe animal welfare is not an add-on to our process: it is part of the responsibility with which we do our work. That is why we implement practices aimed at providing suitable conditions during the different handling stages: shaded areas, enrichment elements such as balls and brushes, conditions that favor rest and reduce stress, and even stimuli such as music.",
    "Nuestro compromiso comienza desde la crianza, de la mano de los ganaderos y las comunidades, y continúa en cada etapa en la que el animal está bajo nuestra responsabilidad.":"Our commitment begins with raising the cattle, hand in hand with the farmers and communities, and continues at every stage in which the animal is under our responsibility.",
    "Tratar a los animales con respeto y procurar su bienestar en cada etapa.":"Treating animals with respect and ensuring their welfare at every stage.",

    "Buenas prácticas ganaderas":"Good livestock practices",
    "La calidad no comienza en una planta de producción. Comienza en la forma en que se cría, se alimenta y se maneja el ganado. Por eso trabajamos junto a los ganaderos y las comunidades nativas de Oxapampa para fortalecer buenas prácticas de crianza, alimentación, manejo y bienestar animal.":"Quality doesn't begin in a production plant. It begins in the way cattle are raised, fed and handled. That is why we work alongside the farmers and native communities of Oxapampa to strengthen good practices in raising, feeding, handling and animal welfare.",
    "Este vínculo nos permite conectar el conocimiento y el trabajo del campo con nuestros propios estándares de producción, trazabilidad, inocuidad y seguridad alimentaria. Así construimos una cadena en la que cada actor tiene un papel fundamental: las comunidades y los ganaderos en el origen, Mafrox en la transformación y nuestros clientes en el destino.":"This bond lets us connect the knowledge and work of the field with our own standards of production, traceability, safety and food safety. In this way we build a chain in which each player has a fundamental role: the communities and farmers at the origin, Mafrox in the transformation and our clients at the destination.",
    "La calidad no comienza en una planta de producción. Comienza en el campo.":"Quality doesn't begin in a production plant. It begins in the field.",

    "Tecnología":"Technology",
    "Tecnología al servicio de la calidad":"Technology at the service of quality",
    "La experiencia nos ha enseñado que evolucionar también significa invertir en mejores herramientas para hacer nuestros procesos con excelencia. Por eso incorporamos tecnología en la producción y el empaque: termoformadoras, detectores de metales, empacadoras al vacío y tumbler, además de sistemas de control y verificación en nuestros procesos de pesaje.":"Experience has taught us that evolving also means investing in better tools to carry out our processes with excellence. That is why we incorporate technology into production and packaging: thermoforming machines, metal detectors, vacuum packers and a tumbler, as well as control and verification systems in our weighing processes.",
    "No se trata de incorporar tecnología por sí misma, sino de utilizarla con criterio para que cada proceso sea más preciso, seguro y consistente, y llevar el trabajo de los ganaderos hasta nuestros clientes con mayor control.":"It is not about adopting technology for its own sake, but about using it wisely so that each process is more precise, safe and consistent, carrying the farmers' work to our clients with greater control.",
    "La tecnología no reemplaza aquello que está en el origen. Lo complementa.":"Technology doesn't replace what is at the origin. It complements it.",

    /* — index: alcance — */
    "Nuestro alcance":"Our reach",
    "04 · Nuestro alcance":"04 · Our reach",
    "Donde crece nuestra cadena, crece nuestro impacto":"Where our chain grows, our impact grows",
    "Nuestro trabajo trasciende la carne. Cada día conectamos personas, comunidades y empresas a través de una cadena que nace en Oxapampa y llega a distintos puntos del Perú: el trabajo de nuestros colaboradores, el conocimiento de los ganaderos, el vínculo con las comunidades nativas y la confianza de quienes eligen trabajar con nosotros.":"Our work goes beyond meat. Every day we connect people, communities and companies through a chain that starts in Oxapampa and reaches different parts of Peru: the work of our team, the knowledge of the farmers, the bond with native communities and the trust of those who choose to work with us.",
    "Nuestro crecimiento no se mide únicamente por lo que producimos o por cuántos clientes atendemos. También se refleja en las oportunidades que generamos, el conocimiento que compartimos, las relaciones que construimos y el valor que llevamos a cada parte de nuestra cadena.":"Our growth is not measured only by what we produce or how many clients we serve. It is also reflected in the opportunities we create, the knowledge we share, the relationships we build and the value we bring to every part of our chain.",
    "Crecer no significa únicamente llegar más lejos; significa hacerlo de manera responsable.":"Growing doesn't only mean reaching further; it means doing so responsibly.",
    "Horas trabajadas sin accidentes":"Hours worked without accidents",
    "Horas de capacitación":"Training hours",
    "Empresas y clientes atendidos":"Companies and clients served",
    "Toneladas de carne procesadas":"Tons of meat processed",
    "Personas alcanzadas":"People reached",
    "Ganaderos y comunidades vinculados":"Farmers and communities linked",
    "Del campo a tu mesa · El origen de una carne excepcional ·":"From the field to your table · The origin of exceptional meat ·",
    "Crecer no significa solo llegar más lejos":"Growing isn't only about reaching further",
    "Significa hacerlo de manera responsable.":"It means doing so responsibly.",

    /* — como-actuamos — */
    "Nuestro proceso":"Our process",
    "Una cadena se construye juntos":"A chain is built together",
    "Producir mejor no depende de una sola etapa":"Producing better doesn't depend on a single stage",
    "Una cadena excepcional se construye trabajando juntos. Nuestra forma de hacer las cosas comienza mucho antes de que la carne llegue a nuestra planta: comienza en el campo, junto a los ganaderos y a las comunidades nativas que conocen la tierra, los animales y una actividad que forma parte de la identidad de Oxapampa. Continúa en nuestros procesos, donde las personas, el conocimiento, la tecnología y los estándares de calidad trabajan para preservar ese valor.":"An exceptional chain is built by working together. The way we do things begins long before the meat reaches our plant: it begins in the field, alongside the farmers and native communities who know the land, the animals and an activity that is part of Oxapampa's identity. It continues through our processes, where people, knowledge, technology and quality standards work to preserve that value.",
    "Producir mejor no depende de una sola etapa. Depende de cómo cuidamos cada una de ellas.":"Producing better doesn't depend on a single stage. It depends on how we care for each one of them.",
    "De la mano del ganadero":"Hand in hand with the farmer",
    "Nuestros ganaderos no son solamente proveedores: son parte fundamental de nuestra cadena y de la historia que existe detrás de nuestra carne. Por eso buscamos construir relaciones que trasciendan una operación comercial: trabajamos junto a ellos, compartimos conocimiento y desarrollamos espacios de capacitación y charlas orientadas a fortalecer las buenas prácticas de crianza, manejo y bienestar animal.":"Our farmers are not just suppliers: they are a fundamental part of our chain and of the story behind our meat. That is why we seek to build relationships that go beyond a commercial transaction: we work alongside them, share knowledge and create training sessions and talks aimed at strengthening good practices in raising, handling and animal welfare.",
    "Cada aprendizaje que compartimos tiene un propósito: crecer juntos y fortalecer desde el origen la calidad de lo que finalmente llegará a miles de personas.":"Every lesson we share has a purpose: to grow together and strengthen, from the origin, the quality of what will ultimately reach thousands of people.",
    "Ellos conocen el campo. Nosotros, las exigencias del mercado. Cuando ambos se encuentran, toda la cadena se fortalece.":"They know the field. We know the market's demands. When the two meet, the whole chain grows stronger.",
    "Calidad":"Quality",
    "Estándares que se demuestran":"Standards that are proven",
    "Calidad que se demuestra":"Quality that is proven",
    "Nuestro compromiso con la calidad no termina en una declaración. Contamos con las certificaciones HACCP e ISO 9001: nuestro sistema HACCP fortalece la inocuidad alimentaria mediante un enfoque preventivo orientado a identificar, evaluar y controlar los peligros significativos; a ello se suma ISO 9001, que respalda nuestro sistema de gestión de la calidad y el compromiso con procesos consistentes y la mejora continua.":"Our commitment to quality does not end in a statement. We hold HACCP and ISO 9001 certifications: our HACCP system strengthens food safety through a preventive approach aimed at identifying, evaluating and controlling significant hazards; to this we add ISO 9001, which backs our quality management system and our commitment to consistent processes and continuous improvement.",
    "Nuestro equipo de Calidad acompaña permanentemente la operación, verificando controles, procedimientos y estándares. Pero cumplir un estándar nunca significa haber terminado: aprendemos, evaluamos y evolucionamos porque la calidad también significa no conformarnos con lo que ya hacemos bien.":"Our Quality team permanently supports the operation, verifying controls, procedures and standards. But meeting a standard never means being finished: we learn, evaluate and evolve, because quality also means not settling for what we already do well.",
    "Seguimos haciendo a Mafrox mejor. Mejor para ti.":"We keep making Mafrox better. Better for you.",
    "Una solución para cada necesidad":"A solution for every need",
    "03 · Una solución para cada necesidad":"03 · A solution for every need",
    "Tu producto. Tu formato. Tu necesidad.":"Your product. Your format. Your need.",
    "Cada cliente tiene una necesidad diferente. Por eso nuestra operación está preparada para adaptarse a distintos productos, presentaciones, gramajes, formatos y requerimientos, desde productos enteros hasta porcionados. A ello sumamos distintas tecnologías de procesamiento y empaque —termoformado, sellado al vacío y encaramelado, además de tumbler y detectores de metales—, que nos permiten atender diferentes requerimientos y fortalecer nuestros controles.":"Every client has a different need. That is why our operation is ready to adapt to different products, presentations, weights, formats and requirements, from whole products to portioned cuts. To this we add different processing and packaging technologies —thermoforming, vacuum sealing and shrink packaging, as well as a tumbler and metal detectors— that let us meet different requirements and strengthen our controls.",
    "No buscamos que nuestros clientes se adapten a una única solución: buscamos entender qué necesitan y tener la capacidad para hacerlo posible. Tu producto. Tu formato. Tu necesidad. Nuestra capacidad para hacerlo posible.":"We don't expect our clients to adapt to a single solution: we seek to understand what they need and to have the capacity to make it possible. Your product. Your format. Your need. Our capacity to make it possible.",
    "Fortalecemos buenas prácticas de crianza, alimentación y manejo junto a las comunidades nativas.":"We strengthen good practices in raising, feeding and handling alongside the native communities.",
    "Certificaciones":"Certifications",
    "HACCP, ISO y pastura. Estándares de trazabilidad, inocuidad y seguridad alimentaria.":"HACCP, ISO and pasture. Standards of traceability, safety and food safety.",
    "Termoformadoras, detectores de metales, empacadoras al vacío y tumbler.":"Thermoforming machines, metal detectors, vacuum packers and tumbler.",
    "Empaques":"Packaging",
    "Termoformado en bandejas, termocontracción y sellado al vacío.":"Tray thermoforming, shrink packaging and vacuum sealing.",
    "Congelamiento y capacidad":"Freezing and capacity",
    "Producto refrigerado y congelado. 600 toneladas mensuales de capacidad.":"Chilled and frozen product. 600 tons of monthly capacity.",
    "Despacho":"Dispatch",
    "Flota frigorífica propia desde Oxapampa hacia los distintos puntos del Perú.":"Our own refrigerated fleet from Oxapampa to different parts of Peru.",
    "Presentaciones a medida":"Custom presentations",
    "Desde productos enteros hasta porcionados y distintas alternativas comerciales.":"From whole products to portioned cuts and different commercial options.",
    "Termoformado":"Thermoforming",
    "Empaque en bandejas con sellado hermético para productos de exhibición.":"Tray packaging with airtight sealing for display products.",
    "Sellado al vacío":"Vacuum sealing",
    "Conservación prolongada y protección del producto durante el transporte.":"Extended preservation and product protection during transport.",
    "Encaramelado":"Shrink wrapping",
    "Alternativa de empaque para requerimientos y formatos específicos.":"A packaging option for specific requirements and formats.",
    "Tumbler":"Tumbler",
    "Equipo que amplía las posibilidades de preparación del producto.":"Equipment that expands the product's preparation possibilities.",
    "Detectores de metales":"Metal detectors",
    "Control adicional que refuerza la seguridad alimentaria en cada lote.":"An additional control that reinforces food safety in every batch.",
    "Preparados para llegar más lejos":"Ready to reach further",
    "04 · Preparados para llegar más lejos":"04 · Ready to reach further",
    "Tenemos espacio para grandes desafíos":"We have room for big challenges",
    "Contamos con áreas diferenciadas para productos refrigerados y congelados, preparadas para conservar cada producto bajo las condiciones que requiere y acompañar las distintas necesidades de nuestros clientes.":"We have separate areas for chilled and frozen products, ready to keep each product under the conditions it requires and to support our clients' different needs.",
    "Nuestra operación está diseñada para trabajar a escala. Una capacidad que nos permite responder a operaciones de distintos tamaños, atender grandes volúmenes y acompañar el crecimiento de quienes trabajan con nosotros. Seguimos desarrollando nuestra infraestructura, procesos y capacidades con una mirada puesta en lo que viene.":"Our operation is designed to work at scale. A capacity that lets us respond to operations of different sizes, serve large volumes and support the growth of those who work with us. We keep developing our infrastructure, processes and capabilities with an eye on what is to come.",
    "Tenemos espacio para grandes desafíos. Y queremos seguir haciéndolo aún más grande junto a ustedes.":"We have room for big challenges. And we want to keep making it even bigger together with you.",
    "Toneladas semanales y más":"Weekly tons and more",
    "Áreas diferenciadas refrigerado y congelado":"Separate chilled and frozen areas",
    "Certificaciones vigentes":"Active certifications",
    "Toneladas mensuales de capacidad":"Tons of monthly capacity",
    "200 toneladas semanales · Y queremos hacerlo aún más grande ·":"200 tons per week · And we want to make it even bigger ·",
    "Y queremos seguir creciendo junto a ustedes":"And we want to keep growing together with you",
    "Crecer también significa estar preparados para cuando nuestros clientes quieran crecer.":"Growing also means being ready for when our clients want to grow.",

    /* — nuestro-partner — */
    "Marca blanca":"Private label",
    "Nuestros clientes":"Our clients",
    "Mapa de expansión":"Expansion map",
    "Crecemos juntos":"We grow together",
    "Le damos un hogar a tu marca":"We give your brand a home",
    "Cada vez más cerca":"Closer and closer",
    "Queremos construir relaciones que crezcan":"We want to build relationships that grow",
    "Nuestro origen. Tu marca. Una misma promesa de calidad. Hay empresas que buscan un proveedor; nosotros queremos construir relaciones que permitan crecer juntos. Nuestra capacidad productiva, experiencia y conocimiento del mercado nos permiten desarrollar productos para diferentes marcas y necesidades comerciales, poniendo nuestra operación al servicio de quienes confían en Mafrox.":"Our origin. Your brand. The same promise of quality. Some companies look for a supplier; we want to build relationships that let us grow together. Our production capacity, experience and market knowledge allow us to develop products for different brands and commercial needs, putting our operation at the service of those who trust Mafrox.",
    "Una marca propia necesita mucho más que un producto: necesita un origen en el que pueda confiar, una operación capaz de responder a sus estándares y un equipo que comprenda que, cuando producimos para otra empresa, también estamos cuidando su nombre.":"A brand of your own needs much more than a product: it needs an origin it can trust, an operation able to meet its standards and a team that understands that, when we produce for another company, we are also taking care of its name.",
    "En Mafrox desarrollamos soluciones de marca blanca que permiten a nuestros clientes comercializar productos bajo su propia identidad, respaldados por nuestra experiencia, capacidad productiva y procesos. Desde el producto y su presentación hasta diferentes alternativas de empaque, trabajamos para construir una solución que responda a las necesidades de cada marca.":"At Mafrox we develop private-label solutions that let our clients market products under their own identity, backed by our experience, production capacity and processes. From the product and its presentation to different packaging options, we work to build a solution that meets the needs of each brand.",
    "Tu marca encuentra un hogar. Nosotros cuidamos lo que hay detrás de ella.":"Your brand finds a home. We take care of what stands behind it.",
    "06 · Nuestros clientes":"06 · Our clients",
    "Relaciones que crecen más allá de una entrega":"Relationships that grow beyond a delivery",
    "A lo largo de nuestra trayectoria hemos trabajado con empresas de diferentes sectores y dimensiones: retail, concesionarios, operaciones mineras, restaurantes y otros canales que encuentran en Mafrox un aliado de abastecimiento. Pero nuestra relación no termina cuando entregamos un producto: buscamos conocer sus operaciones, entender sus necesidades y acompañar su crecimiento con soluciones que respondan a sus formatos, volúmenes, tiempos y mercados. Entender lo que necesitas es el primer paso para crecer contigo.":"Throughout our history we have worked with companies of different sectors and sizes: retail, catering concessionaires, mining operations, restaurants and other channels that find in Mafrox a supply partner. But our relationship doesn't end when we deliver a product: we seek to learn about their operations, understand their needs and support their growth with solutions that match their formats, volumes, timelines and markets. Understanding what you need is the first step to growing with you.",
    "Retail y supermercados":"Retail and supermarkets",
    "Abastecimiento continuo":"Continuous supply",
    "Concesionarios y minería":"Concessionaires and mining",
    "Operaciones exigentes":"Demanding operations",
    "Restaurantes":"Restaurants",
    "Marcas propias":"Private labels",
    "Producción de marca blanca":"Private-label production",
    "07 · Mapa de expansión":"07 · Expansion map",
    "De Oxapampa al Perú":"From Oxapampa to Peru",
    "Nacimos en Oxapampa. Nuestro próximo destino es estar más cerca de ti. Lo que comenzó en Oxapampa hoy conecta nuestra operación con empresas, mercados y consumidores en diferentes puntos del Perú. Cada nuevo destino representa una oportunidad para llevar nuestra forma de trabajar más lejos, pero también para estar más cerca de quienes confían en nosotros.":"We were born in Oxapampa. Our next destination is to be closer to you. What began in Oxapampa now connects our operation with companies, markets and consumers in different parts of Peru. Each new destination is an opportunity to take our way of working further, but also to be closer to those who trust us.",
    "Nuestro crecimiento tiene una dirección: estar cada vez más cerca de nuestros clientes, acompañar su desarrollo y llevar el valor de nuestro origen a nuevos mercados. Expandirnos no significa simplemente aparecer en más lugares.":"Our growth has a direction: to be closer and closer to our clients, support their development and bring the value of our origin to new markets. Expanding doesn't simply mean showing up in more places.",
    "Significa construir nuevas relaciones sin perder aquello que nos hizo llegar hasta aquí.":"It means building new relationships without losing what got us here.",
    "Regiones abastecidas":"Regions supplied",
    "Puntos de entrega":"Delivery points",
    "Clientes atendidos a nivel nacional":"Clients served nationwide",
    "Nuevos destinos proyectados":"New destinations planned",
    "De Oxapampa al Perú · Todavía tenemos mucho camino por recorrer ·":"From Oxapampa to Peru · We still have a long way to go ·",
    "de pastura":"pasture-raised",
    "trazable":"traceable",
    "de Oxapampa":"from Oxapampa",
    "excepcional":"exceptional",
    "Conversemos":"Let's talk",
    "Carne":"Beef",
    "Expandirnos no es aparecer en más lugares":"Expanding isn't showing up in more places",
    "Es construir nuevas relaciones sin perder aquello que nos hizo llegar hasta aquí.":"It's building new relationships without losing what got us here.",

    /* — Modal de contacto — */
    "Contáctanos":"Contact us",
    "Déjanos tus datos y te responderemos a la brevedad.":"Leave us your details and we'll get back to you shortly.",
    "Nombre":"Name",
    "Cargo":"Role",
    "Empresa":"Company",
    "Teléfono":"Phone",
    "Correo corporativo":"Corporate email",
    "Comentarios":"Comments",
    "Enviar":"Send",
    "Nombre completo":"Full name",
    "Tu cargo":"Your role",
    "Nombre de la empresa":"Company name",
    "Cuéntanos en qué podemos ayudarte":"Tell us how we can help you",
    "Este campo es obligatorio":"This field is required",
    "Ingresa un correo válido (ejemplo@dominio.com)":"Enter a valid email (example@domain.com)",
    "Ingresa un teléfono válido (7 a 15 dígitos)":"Enter a valid phone number (7 to 15 digits)",
    "Escríbenos por WhatsApp":"Message us on WhatsApp",

    /* ══════ EDICIÓN DEL 28 DE OCTUBRE ══════
       Estas entradas van al final a propósito: cuando una frase aparece
       dos veces en esta lista, manda la última. Así los textos nuevos
       reemplazan a los antiguos sin tener que borrarlos. */

    /* — Menús — */
    "Nuestras líneas":"Our lines",
    "Nuestros canales":"Our channels",

    /* — Preámbulos — */
    "Carne nacional y productos importados para tu negocio.":"Peruvian meat and imported products for your business.",
    "A cada operación, el producto que necesita.":"To each operation, the product it needs.",
    "Crecer con Oxapampa, no a costa de Oxapampa.":"Growing with Oxapampa, not at its expense.",

    /* — H2 ¿Quiénes somos? — */
    "Somos MAFROX, una empresa dedicada al beneficio de ganado, al procesamiento de carne nacional y a la comercialización y distribución de productos cárnicos importados. Contamos con un camal, centro de producción cárnica y frigorífico en Oxapampa, así como una sede en Lima desde donde también almacenamos y distribuimos nuestros productos.":"We are MAFROX, a company dedicated to livestock slaughtering, the processing of Peruvian meat and the marketing and distribution of imported meat products. We run a slaughterhouse, meat production centre and cold-storage facility in Oxapampa, as well as a site in Lima from which we also store and distribute our products.",
    /* Partes de «¿Quiénes somos?» con negritas: cada trozo se traduce por separado */
    "Somos MAFROX,":"We are MAFROX,",
    "una empresa dedicada al beneficio de ganado, al procesamiento de carne nacional y a la comercialización y distribución de productos cárnicos importados.":"a company dedicated to livestock slaughtering, the processing of Peruvian meat and the marketing and distribution of imported meat products.",
    "Contamos con un camal, centro de producción cárnica y frigorífico en Oxapampa, así como una sede en Lima desde donde también almacenamos y distribuimos nuestros productos.":"We run a slaughterhouse, meat production centre and cold-storage facility in Oxapampa, as well as a site in Lima from which we also store and distribute our products.",
    "Abastecemos a supermercados, concesionarios de alimentación, empresas mineras y restaurantes":"We supply supermarkets, food service concessionaires, mining companies and restaurants",
    ", con una visión responsable que comienza en el campo y se extiende hasta la mesa.":", with a responsible outlook that begins in the field and extends all the way to the table.",
    "A lo largo de nuestra trayectoria, hemos desarrollado la capacidad de atender distintos mercados,":"Over the course of our history we have built the capacity to serve different markets,",
    "adaptándonos a sus necesidades de cortes, presentaciones y volúmenes":"adapting to their needs in cuts, presentations and volumes",
    ", manteniendo nuestro compromiso con la calidad y la inocuidad en cada etapa de la operación.":", while maintaining our commitment to quality and food safety at every stage of the operation.",
    "Innovamos e":"We innovate and",
    "incorporamos tecnología":"adopt technology",
    "para responder a las nuevas exigencias del sector, conservando el vínculo que nos define:":"to meet the sector's new demands, preserving the bond that defines us:",
    "el trabajo de la mano con los ganaderos y las comunidades nativas de Oxapampa":"working hand in hand with the farmers and native communities of Oxapampa",
    "Abastecemos a supermercados, concesionarios de alimentación, empresas mineras y restaurantes, con una visión responsable que comienza en el campo y se extiende hasta la mesa.":"We supply supermarkets, food service concessionaires, mining companies and restaurants, with a responsible outlook that begins in the field and extends all the way to the table.",
    "A lo largo de nuestra trayectoria, hemos desarrollado la capacidad de atender distintos mercados, adaptándonos a sus necesidades de cortes, presentaciones y volúmenes, manteniendo nuestro compromiso con la calidad y la inocuidad en cada etapa de la operación.":"Over the course of our history we have built the capacity to serve different markets, adapting to their needs in cuts, presentations and volumes, while maintaining our commitment to quality and food safety at every stage of the operation.",
    "Innovamos e incorporamos tecnología para responder a las nuevas exigencias del sector, conservando el vínculo que nos define: el trabajo de la mano con los ganaderos y las comunidades nativas de Oxapampa.":"We innovate and adopt technology to meet the sector's new demands, preserving the bond that defines us: working hand in hand with the farmers and native communities of Oxapampa.",
    "Res, cerdo, aves y menudencias.":"Beef, pork, poultry and offal.",

    /* — H7 Vitrina — */
    "Productos importados":"Imported products",
    "Comercializamos pollo, gallina, cerdo, res y menudencias importadas, con distintas opciones para complementar el abastecimiento de tu negocio.":"We market imported chicken, hen, pork, beef and offal, with different options to complement your business's supply.",

    /* — H8 Canales · Retail — */
    "Calidad e innovación que conectan tu marca con el consumidor.":"Quality and innovation that connect your brand with the consumer.",
    "Trabajamos bajo altos estándares de calidad e inocuidad, desarrollando productos cárnicos que responden a las exigencias del canal retail.":"We work to high quality and food safety standards, developing meat products that meet the demands of the retail channel.",
    "Innovamos en cortes, porciones y empaques según las necesidades del consumidor final, brindando practicidad en cada compra y facilidad al conservar, preparar y disfrutar nuestros productos.":"We innovate in cuts, portions and packaging according to the end consumer's needs, bringing convenience to every purchase and making our products easy to store, prepare and enjoy.",
    "Desarrollamos productos para tu marca, con presentaciones adaptadas a tu público y a los requerimientos de tu negocio.":"We develop products for your brand, with presentations adapted to your audience and to your business's requirements.",
    "Desarrolla tu marca con nosotros.":"Build your brand with us.",

    /* — H8 Canales · Concesionarios — */
    "Llegamos a las cocinas de las grandes mineras del Perú.":"We reach the kitchens of Peru's largest mining operations.",
    "Abastecemos a concesionarios de alimentos que atienden campamentos mineros y comedores industriales, con productos cárnicos adaptados a los volúmenes, presentaciones y especificaciones de cada operación.":"We supply food service concessionaires serving mining camps and industrial canteens, with meat products adapted to the volumes, presentations and specifications of each operation.",
    "Realizamos entregas en centros de distribución y directamente en las unidades mineras a nivel nacional, coordinando los despachos según sus requerimientos y programación.":"We deliver to distribution centres and directly to mining sites nationwide, coordinating dispatches according to their requirements and schedule.",
    "Cuidamos la cadena de frío durante el almacenamiento y transporte para preservar la calidad e inocuidad de nuestros productos hasta su destino.":"We protect the cold chain during storage and transport to preserve the quality and safety of our products all the way to their destination.",
    "Tu aliado en el abastecimiento de cada operación.":"Your ally in supplying every operation.",

    /* — H8 Canales · Plantas industriales — */
    "Materia prima cárnica para la elaboración de alimentos de consumo masivo.":"Meat raw material for the production of mass-consumption food.",
    "Abastecemos a plantas industriales con productos cárnicos que se utilizan como materia prima en procesos de producción a gran escala.":"We supply industrial plants with meat products used as raw material in large-scale production processes.",
    "Atendemos los requerimientos de cada cliente, adaptándonos a las especificaciones, presentaciones y volúmenes que su operación necesita, con el compromiso de calidad e inocuidad que exige la industria alimentaria.":"We meet each client's requirements, adapting to the specifications, presentations and volumes their operation needs, with the commitment to quality and food safety the food industry demands.",
    "Somos parte de los alimentos que llegan a miles de hogares.":"We are part of the food that reaches thousands of homes.",

    /* — H8 Canales · Horeca — */
    "Cortes y presentaciones a medida para hoteles, restaurantes y servicios de catering.":"Custom cuts and presentations for hotels, restaurants and catering services.",
    "Producimos según las necesidades y especificaciones de cada cliente, adaptando cortes, gramajes y presentaciones a su propuesta gastronómica.":"We produce according to each client's needs and specifications, adapting cuts, weights and presentations to their culinary proposal.",
    "Acompañamos la innovación en cada receta con soluciones cárnicas que facilitan la preparación y contribuyen a mantener la calidad y uniformidad de cada plato.":"We support innovation in every recipe with meat solutions that simplify preparation and help keep every dish consistent in quality.",
    "Desde cortes enteros hasta porciones listas para cocinar, trabajamos contigo para que cada producto responda a lo que tu cocina necesita.":"From whole cuts to ready-to-cook portions, we work with you so that every product answers what your kitchen needs.",

    /* — H9 — */
    "Certificaciones y autorizaciones":"Certifications and authorisations",
    "Capacidad para acompañar el crecimiento de tu negocio":"Capacity to support your business growth",

    /* — H10 — */
    "Contamos con 1,000 toneladas de capacidad de producción, con":"We have 1,000 tonnes of production capacity, with",
    "áreas diferenciadas para productos refrigerados y congelados":"separate areas for chilled and frozen products",
    "que permiten conservar cada producto en las condiciones que requiere.":"that keep every product in the conditions it requires.",
    "Nuestra infraestructura en Oxapampa y Lima integra producción, almacenamiento y distribución para atender distintos volúmenes y responder a las necesidades de cada cliente.":"Our infrastructure in Oxapampa and Lima integrates production, storage and distribution to serve different volumes and respond to each client's needs.",
    "Nuestra red de abastecimiento reúne a 180 ganaderos homologados de Oxapampa y proveedores internacionales de Uruguay, Argentina, Brasil, Chile y Estados Unidos, complementando nuestra oferta de carne nacional con productos importados.":"Our supply network brings together 180 approved farmers from Oxapampa and international suppliers from Uruguay, Argentina, Brazil, Chile and the United States, complementing our Peruvian meat offer with imported products.",
    "Seguimos fortaleciendo nuestra infraestructura, procesos y tecnología para asumir nuevos desafíos y crecer junto a quienes confían en nosotros.":"We keep strengthening our infrastructure, processes and technology to take on new challenges and grow alongside those who trust us.",
    "Tu negocio crece. Nosotros crecemos contigo.":"Your business grows. We grow with you.",

    /* — H12 clientes nuevos — */
    "Cadena de hipermercados y supermercados del grupo Cencosud, con presencia en Lima y en las principales ciudades del país.":"Hypermarket and supermarket chain of the Cencosud group, present in Lima and in the country's main cities.",
    "Cadena limeña especializada en alimentación saludable y productos frescos de origen seleccionado.":"Lima-based chain specialising in healthy food and fresh products from selected origins.",
    "Cadena de supermercados del grupo SMU, con una red de tiendas en expansión dentro y fuera de Lima.":"Supermarket chain of the SMU group, with a growing store network in and beyond Lima.",
    "Plataforma de delivery presente en buena parte de América Latina, que conecta a miles de comercios con sus clientes.":"Delivery platform present across much of Latin America, connecting thousands of businesses with their customers.",
    "Concesionario de alimentos que atiende comedores de operaciones industriales y mineras en el país.":"Food service concessionaire serving canteens at industrial and mining operations across the country.",
    "Empresa de servicios de alimentación para campamentos y comedores de operaciones en provincia.":"Food service company for camps and canteens at operations outside Lima.",

    /* ══════ EDICIÓN DEL 4 DE NOVIEMBRE ══════ */
    /* — Cinta de texto al pie de la rueda de clientes — */
    "1000 toneladas de capacidad":"1,000 tonnes of capacity",
    "180 ganaderos homologados":"180 approved farmers",
    "Cadena de frío de punta a punta":"End-to-end cold chain",
    "Flota frigorífica propia":"Our own refrigerated fleet",
    "Proveedores de cinco países":"Suppliers from five countries",
    "Carne de pastura de Oxapampa":"Pasture-raised beef from Oxapampa",
    /* — Menú de las páginas de líneas — */
    "Nuestras líneas de productos":"Our product lines"
  };

  /* Títulos con salto de línea (<br>). Se mantienen aparte para no colisionar
     con las claves planas del DICT. Clave = texto con espacio en vez de <br>. */
  var DICT_BR = {
    // Etiquetas de las cifras (contadores)
    "Años de trayectoria en Oxapampa":"Years of history<br>in Oxapampa",
    "Metros de altitud donde nace nuestra carne":"Meters above sea level<br>where our beef begins",
    "Carne de pastura de Oxapampa":"Grass-fed beef<br>from Oxapampa",
    "Marcas líderes confían en nosotros":"Leading brands<br>trust us",
    "Toneladas semanales y más":"Tons per week<br>and more",
    "Áreas diferenciadas refrigerado y congelado":"Separate areas<br>chilled and frozen",
    "Certificaciones vigentes":"Current<br>certifications",
    "Tipos de empaque para cada cliente":"Packaging types<br>for every client",
    "Regiones conectadas Pasco y Lima":"Connected regions<br>Pasco and Lima",
    "Kilómetros de ruta en cadena de frío":"Kilometers of route<br>under cold chain",
    "Horas de Oxapampa a Lima en camión propio":"Hours from Oxapampa to Lima<br>in our own trucks",
    "Sectores que abastecemos retail, concesionarias y minería":"Sectors we supply<br>retail, food service and mining",
    "Lo que nos hace diferentes":"What makes<br>us different",
    "Empieza mucho antes":"It starts<br>long before",
    "Con respeto en cada etapa":"With respect<br>at every stage",
    "Quiénes somos":"Who<br>we are",
    "Tecnología al servicio de la calidad":"Technology at the service<br>of quality",
    "Donde crece nuestra cadena, crece nuestro impacto":"Where our chain grows,<br>our impact grows",
    "Crecer no significa solo llegar más lejos":"Growing isn't only<br>about reaching further",
    "Cómo actuamos":"How<br>we work",
    "Nuestras líneas de productos":"Our product<br>lines",
    "Tres líneas, un mismo estándar":"Three lines,<br>one standard",
    "Concesionarias de alimentos":"Food<br>service",
    "Plantas industriales":"Industrial<br>plants",
    "Un canal distinto para cada necesidad":"A different channel<br>for every need",
    "De la mano de los ganaderos":"Hand in hand<br>with the farmers",
    "Banco de alimentos":"Food<br>bank",
    "Líneas cárnicas importadas":"Imported<br>meat lines",
    "¿Quiénes somos?":"Who we are",
    "Conoce nuestra línea de productos Mafrox":"Discover the Mafrox<br>product line",
    "Una cadena se construye juntos":"A chain is<br>built together",
    "Estándares que se demuestran":"Standards that<br>are proven",
    "Producir mejor no depende de una sola etapa":"Producing better doesn't depend<br>on a single stage",
    "Tu producto. Tu formato. Tu necesidad.":"Your product. Your format.<br>Your need.",
    "De la mano del ganadero":"Hand in hand<br>with the farmer",
    "Congelamiento y capacidad":"Freezing<br>and capacity",
    "Presentaciones a medida":"Custom<br>presentations",
    "Tenemos espacio para grandes desafíos":"We have room<br>for big challenges",
    "Y queremos seguir creciendo junto a ustedes":"And we want to keep<br>growing together with you",
    "Nuestros partners":"Our<br>partners",
    "Le damos un hogar a tu marca":"We give your brand<br>a home",
    "Cada vez más cerca":"Closer<br>and closer",
    "Queremos construir relaciones que crezcan":"We want to build<br>relationships that grow",
    "Relaciones que crecen más allá de una entrega":"Relationships that grow<br>beyond a delivery",
    "De Oxapampa al Perú":"From Oxapampa<br>to Peru",
    "Expandirnos no es aparecer en más lugares":"Expanding isn't<br>showing up in more places",

    /* ══════ EDICIÓN DEL 28 DE OCTUBRE ══════ */
    "Productos cárnicos importados":"Imported<br>meat products",
    "Capacidad para acompañar el crecimiento de tu negocio":"Capacity to support<br>your business growth",
    "Concesionarios de alimentos":"Food service<br>concessionaires"
  };

  /* ----------------------------------------------------------------
     Motor de traducción por nodos de texto.
     Guarda el ES original en un mapa para poder volver.
     ---------------------------------------------------------------- */
  var LANG = 'es';
  var nodosGuardados = []; // {node, es}
  var elementosBr = [];    // {el, esHTML} para títulos con <br>

  // ¿El elemento contiene un <br> y por lo demás solo texto? (títulos partidos)
  function esElementoConBr(el){
    if(!el.querySelector || !el.querySelector('br')) return false;
    // que sus hijos sean solo texto y <br> (sin otros elementos como <span>)
    for(var i=0;i<el.childNodes.length;i++){
      var c=el.childNodes[i];
      if(c.nodeType===1 && c.nodeName.toLowerCase()!=='br') return false;
    }
    return true;
  }

  function recolectarNodos(){
    if(nodosGuardados.length || elementosBr.length) return;

    // 1) Elementos con <br> (títulos): se traducen como bloque completo
    var candidatos = document.querySelectorAll('h1,h2,h3,h4,b,.titulo,.px-txt b,.cifra span');
    candidatos.forEach(function(el){
      if(el.closest && el.closest('[data-no-i18n]')) return;
      if(esElementoConBr(el)){
        elementosBr.push({el:el, esHTML:el.innerHTML});
      }
    });

    // 2) Nodos de texto sueltos (todo lo demás)
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(n){
        if(!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if(!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName.toLowerCase();
        if(tag==='script'||tag==='style'||tag==='noscript') return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('[data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        // si el nodo pertenece a un elemento con <br> ya capturado, se omite aquí
        if(p.querySelector && p.querySelector('br') && esElementoConBr(p)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while((n=walker.nextNode())){
      nodosGuardados.push({node:n, es:n.nodeValue});
    }
  }

  function aplicarIdioma(lang){
    recolectarNodos();

    // Elementos con <br>: unir texto con espacio, buscar en DICT_BR, reconstruir
    elementosBr.forEach(function(item){
      if(lang==='en'){
        // "Quiénes<br>somos" -> clave "Quiénes somos"
        var plano = item.esHTML.replace(/<br\s*\/?>/gi,' ').replace(/\s+/g,' ').trim();
        if(DICT_BR[plano]){
          item.el.innerHTML = DICT_BR[plano];
        }
      }else{
        item.el.innerHTML = item.esHTML;
      }
    });

    // Nodos de texto sueltos
    nodosGuardados.forEach(function(item){
      var original = item.es;
      var clave = original.trim();
      if(lang==='en'){
        if(DICT[clave]){
          item.node.nodeValue = original.replace(clave, DICT[clave]);
        }
      }else{
        item.node.nodeValue = original;
      }
    });
    // Atributos placeholder (input/textarea) o texto (otros elementos)
    // marcados con data-en / data-es
    document.querySelectorAll('[data-es]').forEach(function(el){
      var en = el.getAttribute('data-en');
      var es = el.getAttribute('data-es');
      var txt = (lang==='en'? (en||es) : es);
      if(el.placeholder!==undefined){
        el.placeholder = txt;
      }else if(/<br\s*\/?>/i.test(txt)){
        el.innerHTML = txt;          // permite el salto de línea dentro del texto
      }else{
        el.textContent = txt;
      }
    });
    LANG = lang;
    document.documentElement.setAttribute('lang', lang);
    // Resaltar la letra del idioma activo (ES / EN)
    document.querySelectorAll('.lang-op').forEach(function(b){
      b.classList.toggle('activo', b.dataset.lang===lang);
      b.setAttribute('aria-pressed', b.dataset.lang===lang ? 'true' : 'false');
    });
  }

  function toggleIdioma(){ aplicarIdioma(LANG==='es'?'en':'es'); }
  window.mafroxToggleIdioma = toggleIdioma;
  window.mafroxT = function(clave){ return (LANG==='en' && DICT[clave]) ? DICT[clave] : clave; };

  /* ----------------------------------------------------------------
     Conectar el botón ES / EN del pie del menú.
     El markup original es: <span>ES / EN</span>  -> lo hacemos botón.
     ---------------------------------------------------------------- */
  function prepararPieMenu(){
    var pie = document.querySelector('.menu__pie');
    if(!pie) return;
    var spans = pie.querySelectorAll('span');
    spans.forEach(function(sp){
      var txt = sp.textContent.trim();
      if(txt==='ES / EN'){
        // Idioma como letras simples: "ES / EN" (la activa resaltada)
        sp.classList.add('lang-letras');
        sp.setAttribute('data-no-i18n','');
        // "Idioma" + bandera de España / EE. UU. delante de cada opción
        sp.innerHTML =
          '<span class="lang-titulo" data-es="Idioma" data-en="Language">Idioma</span>'+
          '<button type="button" class="lang-op activo" data-lang="es" aria-label="Español"><svg class="bandera" viewBox="0 0 15 10" aria-hidden="true"><rect width="15" height="10" fill="#AA151B"/><rect y="2.5" width="15" height="5" fill="#F1BF00"/></svg>ES</button>'+
          '<span class="lang-sep" aria-hidden="true">/</span>'+
          '<button type="button" class="lang-op" data-lang="en" aria-label="English"><svg class="bandera" viewBox="0 0 19 10" aria-hidden="true"><rect width="19" height="10" fill="#fff"/><rect y="0.000" width="19" height="0.769" fill="#B22234"/><rect y="1.538" width="19" height="0.769" fill="#B22234"/><rect y="3.077" width="19" height="0.769" fill="#B22234"/><rect y="4.615" width="19" height="0.769" fill="#B22234"/><rect y="6.154" width="19" height="0.769" fill="#B22234"/><rect y="7.692" width="19" height="0.769" fill="#B22234"/><rect y="9.231" width="19" height="0.769" fill="#B22234"/><rect width="7.6" height="5.385" fill="#3C3B6E"/></svg>EN</button>';
        sp.querySelectorAll('.lang-op').forEach(function(b){
          b.addEventListener('click', function(){ if(b.dataset.lang!==LANG) aplicarIdioma(b.dataset.lang); });
        });
      }
      if(txt==='Contacto'){
        sp.classList.add('abrir-contacto');
        sp.setAttribute('role','button');
        sp.setAttribute('tabindex','0');
        sp.style.cursor='pointer';
        sp.addEventListener('click', abrirContacto);
        sp.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();abrirContacto();} });
      }
    });
  }


  /* ================================================================
     CONTRASTE DEL MENÚ — el texto cambia de color según el video
     Mientras el menú está abierto, cada cuarto de segundo se toma
     una miniatura del video de fondo y se mide qué tan clara es la
     zona que hay DETRÁS de cada texto (opciones, "Cerrar", pie).
     Si es clara, ese texto pasa a verde oscuro; si es oscura, blanco.

     AJUSTES:
       UMBRAL_CLARO : 0 a 1. Bájalo si quieres que cambie a oscuro
                      antes (con zonas menos claras).
       VELO         : opacidad del velo verde del CSS (.video-velo),
                      para medir el color como realmente se ve.
     NOTA: no funciona abriendo el archivo con doble clic (file://)
     porque el navegador bloquea leer el video; en el servidor sí.
     ================================================================ */
  var UMBRAL_CLARO = 0.55;
  var VELO = 0.25;

  function iniciarContrasteMenu(){
    var menu = document.getElementById('menu');
    var video = document.getElementById('menuVideo');
    if(!menu || !video) return;
    var objetivos = menu.querySelectorAll('.menu__item, .menu__close, .menu__pie');
    var cw = 64, ch = 36;
    var lienzo = document.createElement('canvas'); lienzo.width = cw; lienzo.height = ch;
    var ctx = lienzo.getContext('2d', { willReadFrequently:true });
    var bloqueado = false;

    function medir(){
      if(bloqueado || !menu.classList.contains('is-open') || video.readyState < 2 || !video.videoWidth) return;
      var datos;
      try{
        ctx.drawImage(video, 0, 0, cw, ch);
        datos = ctx.getImageData(0, 0, cw, ch).data;
      }catch(e){ bloqueado = true; return; }   // file:// u otro origen: se queda en blanco
      var caja = menu.getBoundingClientRect();
      // El video usa object-fit:cover → calcular qué parte del video se ve
      var esc = Math.max(caja.width / video.videoWidth, caja.height / video.videoHeight);
      var ox = (caja.width - video.videoWidth * esc) / 2, oy = (caja.height - video.videoHeight * esc) / 2;
      var fx = cw / video.videoWidth, fy = ch / video.videoHeight;
      objetivos.forEach(function(el){
        var r = el.getBoundingClientRect();
        if(!r.width || !r.height) return;
        var x0 = Math.max(0, Math.floor(((r.left - caja.left - ox) / esc) * fx));
        var x1 = Math.min(cw - 1, Math.ceil(((r.right - caja.left - ox) / esc) * fx));
        var y0 = Math.max(0, Math.floor(((r.top - caja.top - oy) / esc) * fy));
        var y1 = Math.min(ch - 1, Math.ceil(((r.bottom - caja.top - oy) / esc) * fy));
        var suma = 0, n = 0;
        for(var y = y0; y <= y1; y++){
          for(var x = x0; x <= x1; x++){
            var i = (y * cw + x) * 4;
            suma += (0.2126 * datos[i] + 0.7152 * datos[i+1] + 0.0722 * datos[i+2]) / 255;
            n++;
          }
        }
        if(!n) return;
        var lum = (suma / n) * (1 - VELO) + 0.12 * VELO;   // incluye el velo verde oscuro
        var claro = el.classList.contains('sobre-claro');
        // Pequeña histéresis para que no parpadee en zonas intermedias
        if(!claro && lum > UMBRAL_CLARO + 0.04) el.classList.add('sobre-claro');
        else if(claro && lum < UMBRAL_CLARO - 0.04) el.classList.remove('sobre-claro');
      });
    }
    setInterval(medir, 250);
    video.addEventListener('playing', medir);
  }


  /* ================================================================
     MEDICIÓN · GOOGLE ADS (y Google Analytics, opcional)
     Mientras los campos estén vacíos ('') no se carga nada.
     CÓMO ACTIVARLO:
       1. En Google Ads › Objetivos › Conversiones, crea dos acciones de
          conversión de tipo «Sitio web»: «Formulario enviado» y
          «Clic en WhatsApp». Elige «Configurar la etiqueta tú mismo».
       2. Google te muestra un código con  send_to: 'AW-123456789/AbCdEf...'
            · lo que va ANTES de la barra  → GOOGLE_ADS_ID
            · lo que va DESPUÉS de la barra → la etiqueta de esa conversión
       3. Pega los valores abajo, entre las comillas, y sube este archivo.
     Qué se mide: cada formulario enviado con éxito y cada clic en una
     opción de WhatsApp. (GA4_ID es opcional: tu ID de Analytics, G-XXXX.)
     ================================================================ */
  var GOOGLE_ADS_ID          = '';   // ej. 'AW-123456789'
  var CONVERSION_FORMULARIO  = '';   // ej. 'AbCdEfGhIjKlMnOp' (etiqueta de «Formulario enviado»)
  var CONVERSION_WHATSAPP    = '';   // ej. 'QrStUvWxYz123456' (etiqueta de «Clic en WhatsApp»)
  var GA4_ID                 = '';   // opcional, ej. 'G-ABC123DEF4'

  (function iniciarMedicion(){
    var id = GOOGLE_ADS_ID || GA4_ID;
    if(!id) return;
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    if(GOOGLE_ADS_ID) gtag('config', GOOGLE_ADS_ID);
    if(GA4_ID) gtag('config', GA4_ID);
  })();
  /* Avisa a Google de una conversión: 'formulario' o 'whatsapp' */
  function marcarConversion(tipo){
    if(typeof window.gtag !== 'function') return;
    var etiqueta = tipo === 'formulario' ? CONVERSION_FORMULARIO : CONVERSION_WHATSAPP;
    if(GOOGLE_ADS_ID && etiqueta) gtag('event', 'conversion', { send_to: GOOGLE_ADS_ID + '/' + etiqueta });
    if(GA4_ID) gtag('event', tipo === 'formulario' ? 'generate_lead' : 'contacto_whatsapp');
  }

  /* ================================================================
     2) MODAL DE CONTACTO  ->  envía el mensaje por correo
     ================================================================ */
  /* CORREO QUE RECIBE LOS MENSAJES DEL FORMULARIO.
     Para cambiarlo, edita esta línea. Si quieres una copia a otra
     dirección, escríbela en DESTINO_CC; déjalo vacío ('') si no quieres copia. */
  var DESTINO = 'fserna@mafrox.com';
  var DESTINO_CC = 'erika.garayar@mafrox.com.pe';

  /* CLAVE DE WEB3FORMS — es la que hace que el correo llegue de verdad.
     Cómo obtenerla (2 minutos, gratis y sin límite de envíos):
       1. Entra a  https://web3forms.com
       2. Escribe el correo que debe recibir los mensajes (el de DESTINO)
       3. Te llega un correo con una "Access Key": cópiala y pégala abajo
     Mientras esté vacía, el formulario intenta enviar por FormSubmit y,
     si tampoco puede, abre el correo del visitante con el mensaje escrito.
     OJO: la clave queda amarrada al correo con que se creó. La anterior era
     de rsanze@gmail.com, por eso se dejó vacía: así el formulario envía por
     FormSubmit a DESTINO con copia a DESTINO_CC. (El plan gratis de
     Web3Forms no permite copia.)
     FormSubmit: el PRIMER mensaje que se envíe le llega a DESTINO como un
     correo de activación; hay que hacer clic en «Activate Form» una vez. */
  var CLAVE_WEB3FORMS = '';

  /* ================================================================
     GLOBO DEL PERÚ · ventana derecha de "Contáctanos"
     (reemplaza al video del toro; viene del efecto "Mapa de expansión")
     Se dibuja con código sobre un <canvas>: la tierra son miles de
     puntos de luz, encima va una malla triangular, el contorno del Perú
     y arcos de luz que salen de OXAPAMPA (el origen) hacia cada ciudad.
     Se mece muy lento. Solo trabaja mientras "Contáctanos" está abierto.
     Al pasar el cursor por un pin aparece el nombre de la ciudad.

     ═══ CIUDADES ═══ lista CIUDADES_GLOBO (debajo). Cada una:
         nombre, lon (longitud) y lat (latitud). Van de norte a sur.
         Para agregar una: copia una línea y cambia los tres datos.
     ═══ ORIGEN ═══ ORIGEN_GLOBO = Oxapampa (punto brillante que late).
     ═══ ENCUADRE ═══ CFG_GLOBO:
         radio    = tamaño del globo (veces el ALTO de la ventana)
         inclina  = grados que se mira "desde el sur" (deja ver el
                    borde curvo del planeta arriba). Más = Perú más chico
         peruY    = altura del centro del Perú en la ventana (0 arriba · 1 abajo)
         giro / segundos = cuánto se mece y cuánto tarda cada vaivén
     ================================================================ */
  /* ═══ QUÉ VA EN LA VENTANA DERECHA DE "CONTÁCTANOS" ═══
       'logo'  = el video del camión se mete en el logo de MAFROX y el logo
                 queda quieto (una vez por carga de página) · ver "LOGO CON VIDEO"
       'video' = video en bucle (VIDEO_CONTACTO, debajo)
       'globo' = globo del Perú con ciudades (todo lo que sigue)
     Para volver al globo, cambia 'video' por 'globo'. */
  var VENTANA_CONTACTO = 'video';
  var VIDEO_CONTACTO  = 'images/contacto-torito.mp4';           // torito en bucle (9 s, sin audio, vertical)
  var POSTER_CONTACTO = 'images/contacto-torito-poster.jpg';    // foto mientras carga
  /* Para volver al logo con el video del camión: VENTANA_CONTACTO = 'logo',
     VIDEO_CONTACTO = 'images/importados-intro.mp4' y
     POSTER_CONTACTO = 'images/importados-intro-poster.jpg'. */

  /* ================================================================
     LOGO CON VIDEO · ventana derecha de "Contáctanos" (modo 'logo')
     El mismo efecto de la intro del inicio: se ve el video del camión,
     el logo de MAFROX lo "recorta" (el video queda dentro de las letras),
     se funde a blanco y el logo queda QUIETO.
     Corre UNA sola vez por carga de página (la primera vez que se abre
     el formulario). Al recargar la página vuelve a correr.
     AJUSTES:
       L_VIDEO = ms que se ve el video completo antes de empezar
       L_ZOOM  = ms del zoom: de la letra gigante al logo completo
       L_BLANCO= ms en que el video dentro del logo se funde a blanco
       L_ANCHO = ancho del logo final (0.7 = 70% del ancho de la ventana)
     ================================================================ */
  var L_VIDEO = 1200, L_ZOOM = 1500, L_BLANCO = 700, L_ANCHO = 0.7;
  var logoContacto = null;   // se crea la primera vez que se abre el formulario
  function crearLogoContacto(panel){
    var lienzo = panel.querySelector('canvas'), video = panel.querySelector('video');
    var ctx = lienzo && lienzo.getContext ? lienzo.getContext('2d') : null;
    if(!ctx) return null;
    var logoImg = new Image(); logoImg.src = 'images/logo-blanco.png';
    var fotoImg = new Image(); if(video.poster) fotoImg.src = video.poster;
    var FOCO = { x: 0.158, y: 0.35 };   // punto del logo donde empieza el zoom (cuerpo del toro)
    var PROP = 1900/574, dpr = Math.min(2, window.devicePixelRatio || 1), W = 0, H = 0, hecho = false, corriendo = false;
    function listo(img){ return img.complete && img.naturalWidth > 0; }
    function medir(){
      var r = panel.getBoundingClientRect(); W = r.width; H = r.height;
      lienzo.width = Math.round(W * dpr); lienzo.height = Math.round(H * dpr);
    }
    function fuente(){
      if(video.readyState >= 2 && video.videoWidth) return { el: video, w: video.videoWidth, h: video.videoHeight };
      if(listo(fotoImg)) return { el: fotoImg, w: fotoImg.naturalWidth, h: fotoImg.naturalHeight };
      return null;
    }
    function suave(t){ return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }
    function lerp(a,b,t){ return a + (b-a)*t; }
    /* x, y, w en píxeles de la ventana · blanco = 0 (video) … 1 (logo blanco)
       sinMascara = true → solo el video a pantalla completa (primer segundo) */
    function dibujar(x, y, w, blanco, sinMascara){
      ctx.setTransform(1,0,0,1,0,0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      var f = fuente(), CW = lienzo.width, CH = lienzo.height;
      if(f && blanco < 1){
        var e = Math.max(CW / f.w, CH / f.h);
        try{ ctx.drawImage(f.el, (CW - f.w*e)/2, (CH - f.h*e)/2, f.w*e, f.h*e); }catch(err){}
        if(blanco > 0){ ctx.fillStyle = 'rgba(255,255,255,' + blanco + ')'; ctx.fillRect(0, 0, CW, CH); }
      } else { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, CW, CH); }
      if(sinMascara || !listo(logoImg)) return;
      ctx.globalCompositeOperation = 'destination-in';   // deja solo lo que cae dentro del logo
      ctx.drawImage(logoImg, x*dpr, y*dpr, w*dpr, (w/PROP)*dpr);
      ctx.globalCompositeOperation = 'source-over';
    }
    function finalQuieto(){
      medir(); var w1 = W * L_ANCHO;
      dibujar(W/2 - w1/2, H/2 - w1/PROP/2, w1, 1);
    }
    function correr(){
      corriendo = true; medir();
      if(logoImg.naturalWidth) PROP = logoImg.naturalWidth / logoImg.naturalHeight;
      try{ video.currentTime = 0; var pv = video.play(); if(pv && pv.catch) pv.catch(function(){}); }catch(e){}
      var inicio = performance.now();
      (function cuadro(ahora){
        var t = ahora - inicio, cx = W/2, cy = H/2, w1 = W * L_ANCHO, w0 = w1 * 34;
        if(t < L_VIDEO){
          dibujar(0, 0, 0, 0, true);
        } else if(t < L_VIDEO + L_ZOOM){
          var e = suave((t - L_VIDEO) / L_ZOOM), w = w0 * Math.pow(w1/w0, e);
          dibujar(cx - lerp(FOCO.x,.5,e)*w, cy - lerp(FOCO.y,.5,e)*(w/PROP), w, 0);
        } else if(t < L_VIDEO + L_ZOOM + L_BLANCO){
          dibujar(cx - w1/2, cy - w1/PROP/2, w1, (t - L_VIDEO - L_ZOOM) / L_BLANCO);
        } else {
          hecho = true; corriendo = false; finalQuieto();
          try{ video.pause(); }catch(e){}
          return;
        }
        requestAnimationFrame(cuadro);
      })(inicio);
    }
    addEventListener('resize', function(){ if(hecho) finalQuieto(); });
    return {
      mostrar: function(){
        if(hecho){ finalQuieto(); return; }   // ya corrió en esta carga de página
        if(corriendo) return;
        if(listo(logoImg)) correr(); else logoImg.onload = correr;
      }
    };
  }

  var CIUDADES_GLOBO = [
    { nombre:'Tumbes',    lon:-80.45, lat:-3.57  },
    { nombre:'Iquitos',   lon:-73.25, lat:-3.75  },
    { nombre:'Piura',     lon:-80.63, lat:-5.19  },
    { nombre:'Chiclayo',  lon:-79.84, lat:-6.77  },
    { nombre:'Cajamarca', lon:-78.51, lat:-7.16  },
    { nombre:'Trujillo',  lon:-79.03, lat:-8.11  },
    { nombre:'Lima',      lon:-77.03, lat:-12.05 },
    { nombre:'Huancayo',  lon:-75.21, lat:-12.07 },
    { nombre:'Cusco',     lon:-71.97, lat:-13.53 },
    { nombre:'Ica',       lon:-75.73, lat:-14.07 },
    { nombre:'Arequipa',  lon:-71.54, lat:-16.41 },
    { nombre:'Tacna',     lon:-70.25, lat:-18.01 }
  ];
  var ORIGEN_GLOBO = { nombre:'Oxapampa', lon:-75.40, lat:-10.58 };
  var CFG_GLOBO = { radio:2.25, inclina:50, peruY:0.6, giro:3, segundos:30,
                    lonPeru:-75.0, latPeru:-9.3 };   // centro del Perú (no tocar)

  /* Datos del mapa: puntos de la tierra, del Perú y su contorno
     (longitud latitud). Es solo información, no hace falta editarla. */
  var DATOS_GLOBO = {"tierra": "-68.3 -55.2,-68.3 -54.3,-71.3 -53.3,-68.2 -53.3,-72.7 -52.4,-71.2 -52.4,-69.6 -52.4,-72.5 -51.4,-71 -51.4,-69.5 -51.4,-58.8 -51.4,-75.3 -50.5,-73.8 -50.5,-72.3 -50.5,-70.8 -50.5,-69.3 -50.5,-73.5 -49.5,-72 -49.5,-70.6 -49.5,-69.1 -49.5,-74.7 -48.6,-73.2 -48.6,-71.8 -48.6,-70.4 -48.6,-68.9 -48.6,-67.5 -48.6,-74.4 -47.6,-73 -47.6,-71.5 -47.6,-70.1 -47.6,-68.7 -47.6,-67.3 -47.6,-65.9 -47.6,-74.1 -46.7,-72.7 -46.7,-71.3 -46.7,-69.9 -46.7,-68.5 -46.7,-72.4 -45.7,-71 -45.7,-69.7 -45.7,-68.3 -45.7,-72.1 -44.8,-70.7 -44.8,-69.4 -44.8,-68.1 -44.8,-66.7 -44.8,-71.8 -43.8,-70.5 -43.8,-69.1 -43.8,-67.8 -43.8,-66.5 -43.8,-74 -42.9,-72.8 -42.9,-71.5 -42.9,-70.2 -42.9,-68.9 -42.9,-67.6 -42.9,-66.3 -42.9,-65 -42.9,-73.7 -41.9,-72.4 -41.9,-71.1 -41.9,-69.9 -41.9,-68.6 -41.9,-67.3 -41.9,-66 -41.9,-73.3 -41,-72.1 -41,-70.8 -41,-69.5 -41,-68.3 -41,-67 -41,-65.8 -41,-63.3 -41,-72.9 -40,-71.7 -40,-70.5 -40,-69.2 -40,-68 -40,-66.7 -40,-65.5 -40,-64.3 -40,-63 -40,-72.6 -39.1,-71.3 -39.1,-70.1 -39.1,-68.9 -39.1,-67.7 -39.1,-66.4 -39.1,-65.2 -39.1,-64 -39.1,-62.8 -39.1,-73.4 -38.1,-72.2 -38.1,-71 -38.1,-69.8 -38.1,-68.6 -38.1,-67.3 -38.1,-66.1 -38.1,-64.9 -38.1,-63.7 -38.1,-62.5 -38.1,-61.3 -38.1,-60.1 -38.1,-58.9 -38.1,-57.7 -38.1,-73 -37.2,-71.8 -37.2,-70.6 -37.2,-69.4 -37.2,-68.2 -37.2,-67 -37.2,-65.8 -37.2,-64.6 -37.2,-63.4 -37.2,-62.2 -37.2,-61.1 -37.2,-59.9 -37.2,-58.7 -37.2,-57.5 -37.2,-72.6 -36.2,-71.4 -36.2,-70.2 -36.2,-69 -36.2,-67.9 -36.2,-66.7 -36.2,-65.5 -36.2,-64.3 -36.2,-63.1 -36.2,-62 -36.2,-60.8 -36.2,-59.6 -36.2,-58.4 -36.2,-57.3 -36.2,-72.1 -35.3,-71 -35.3,-69.8 -35.3,-68.7 -35.3,-67.5 -35.3,-66.3 -35.3,-65.2 -35.3,-64 -35.3,-62.8 -35.3,-61.7 -35.3,-60.5 -35.3,-59.3 -35.3,-58.2 -35.3,-71.7 -34.3,-70.6 -34.3,-69.4 -34.3,-68.3 -34.3,-67.1 -34.3,-66 -34.3,-64.8 -34.3,-63.7 -34.3,-62.5 -34.3,-61.4 -34.3,-60.2 -34.3,-59.1 -34.3,-57.9 -34.3,-56.8 -34.3,-55.6 -34.3,-54.5 -34.3,-71.3 -33.4,-70.1 -33.4,-69 -33.4,-67.9 -33.4,-66.7 -33.4,-65.6 -33.4,-64.4 -33.4,-63.3 -33.4,-62.2 -33.4,-61 -33.4,-59.9 -33.4,-58.8 -33.4,-57.6 -33.4,-56.5 -33.4,-55.3 -33.4,-54.2 -33.4,-53.1 -33.4,-70.8 -32.4,-69.7 -32.4,-68.6 -32.4,-67.5 -32.4,-66.3 -32.4,-65.2 -32.4,-64.1 -32.4,-63 -32.4,-61.8 -32.4,-60.7 -32.4,-59.6 -32.4,-58.4 -32.4,-57.3 -32.4,-56.2 -32.4,-55.1 -32.4,-53.9 -32.4,-52.8 -32.4,-71.5 -31.5,-70.4 -31.5,-69.3 -31.5,-68.1 -31.5,-67 -31.5,-65.9 -31.5,-64.8 -31.5,-63.7 -31.5,-62.6 -31.5,-61.5 -31.5,-60.3 -31.5,-59.2 -31.5,-58.1 -31.5,-57 -31.5,-55.9 -31.5,-54.8 -31.5,-53.7 -31.5,-52.6 -31.5,-71 -30.5,-69.9 -30.5,-68.8 -30.5,-67.7 -30.5,-66.6 -30.5,-65.5 -30.5,-64.4 -30.5,-63.3 -30.5,-62.2 -30.5,-61.1 -30.5,-60 -30.5,-58.9 -30.5,-57.8 -30.5,-56.7 -30.5,-55.6 -30.5,-54.5 -30.5,-53.4 -30.5,-52.3 -30.5,-70.5 -29.6,-69.4 -29.6,-68.4 -29.6,-67.3 -29.6,-66.2 -29.6,-65.1 -29.6,-64 -29.6,-62.9 -29.6,-61.8 -29.6,-60.7 -29.6,-59.6 -29.6,-58.5 -29.6,-57.4 -29.6,-56.3 -29.6,-55.2 -29.6,-54.1 -29.6,-53.1 -29.6,-52 -29.6,-50.9 -29.6,-71.1 -28.6,-70 -28.6,-69 -28.6,-67.9 -28.6,-66.8 -28.6,-65.7 -28.6,-64.6 -28.6,-63.6 -28.6,-62.5 -28.6,-61.4 -28.6,-60.3 -28.6,-59.2 -28.6,-58.1 -28.6,-57.1 -28.6,-56 -28.6,-54.9 -28.6,-53.8 -28.6,-52.7 -28.6,-51.6 -28.6,-50.6 -28.6,-49.5 -28.6,-70.6 -27.7,-69.5 -27.7,-68.5 -27.7,-67.4 -27.7,-66.3 -27.7,-65.3 -27.7,-64.2 -27.7,-63.1 -27.7,-62 -27.7,-61 -27.7,-59.9 -27.7,-58.8 -27.7,-57.7 -27.7,-56.7 -27.7,-55.6 -27.7,-54.5 -27.7,-53.5 -27.7,-52.4 -27.7,-51.3 -27.7,-50.2 -27.7,-49.2 -27.7,-70.1 -26.7,-69 -26.7,-68 -26.7,-66.9 -26.7,-65.8 -26.7,-64.8 -26.7,-63.7 -26.7,-62.7 -26.7,-61.6 -26.7,-60.5 -26.7,-59.5 -26.7,-58.4 -26.7,-57.3 -26.7,-56.3 -26.7,-55.2 -26.7,-54.1 -26.7,-53.1 -26.7,-52 -26.7,-51 -26.7,-49.9 -26.7,-48.8 -26.7,-70.6 -25.8,-69.6 -25.8,-68.5 -25.8,-67.5 -25.8,-66.4 -25.8,-65.4 -25.8,-64.3 -25.8,-63.2 -25.8,-62.2 -25.8,-61.1 -25.8,-60.1 -25.8,-59 -25.8,-58 -25.8,-56.9 -25.8,-55.9 -25.8,-54.8 -25.8,-53.8 -25.8,-52.7 -25.8,-51.6 -25.8,-50.6 -25.8,-49.5 -25.8,-70.1 -24.8,-69 -24.8,-68 -24.8,-66.9 -24.8,-65.9 -24.8,-64.9 -24.8,-63.8 -24.8,-62.8 -24.8,-61.7 -24.8,-60.7 -24.8,-59.6 -24.8,-58.6 -24.8,-57.5 -24.8,-56.5 -24.8,-55.4 -24.8,-54.4 -24.8,-53.3 -24.8,-52.3 -24.8,-51.2 -24.8,-50.2 -24.8,-49.2 -24.8,-48.1 -24.8,-69.5 -23.9,-68.5 -23.9,-67.5 -23.9,-66.4 -23.9,-65.4 -23.9,-64.3 -23.9,-63.3 -23.9,-62.3 -23.9,-61.2 -23.9,-60.2 -23.9,-59.1 -23.9,-58.1 -23.9,-57.1 -23.9,-56 -23.9,-55 -23.9,-54 -23.9,-52.9 -23.9,-51.9 -23.9,-50.8 -23.9,-49.8 -23.9,-48.8 -23.9,-47.7 -23.9,-46.7 -23.9,-70 -22.9,-69 -22.9,-67.9 -22.9,-66.9 -22.9,-65.9 -22.9,-64.8 -22.9,-63.8 -22.9,-62.8 -22.9,-61.8 -22.9,-60.7 -22.9,-59.7 -22.9,-58.7 -22.9,-57.6 -22.9,-56.6 -22.9,-55.6 -22.9,-54.5 -22.9,-53.5 -22.9,-52.5 -22.9,-51.4 -22.9,-50.4 -22.9,-49.4 -22.9,-48.3 -22.9,-47.3 -22.9,-46.3 -22.9,-45.2 -22.9,-44.2 -22.9,-69.4 -22,-68.4 -22,-67.4 -22,-66.4 -22,-65.3 -22,-64.3 -22,-63.3 -22,-62.3 -22,-61.2 -22,-60.2 -22,-59.2 -22,-58.2 -22,-57.1 -22,-56.1 -22,-55.1 -22,-54.1 -22,-53 -22,-52 -22,-51 -22,-50 -22,-48.9 -22,-47.9 -22,-46.9 -22,-45.9 -22,-44.8 -22,-43.8 -22,-42.8 -22,-41.8 -22,-69.9 -21,-68.8 -21,-67.8 -21,-66.8 -21,-65.8 -21,-64.8 -21,-63.7 -21,-62.7 -21,-61.7 -21,-60.7 -21,-59.7 -21,-58.7 -21,-57.6 -21,-56.6 -21,-55.6 -21,-54.6 -21,-53.6 -21,-52.5 -21,-51.5 -21,-50.5 -21,-49.5 -21,-48.5 -21,-47.5 -21,-46.4 -21,-45.4 -21,-44.4 -21,-43.4 -21,-42.4 -21,-41.4 -21,-69.2 -20.1,-68.2 -20.1,-67.2 -20.1,-66.2 -20.1,-65.2 -20.1,-64.2 -20.1,-63.2 -20.1,-62.2 -20.1,-61.2 -20.1,-60.1 -20.1,-59.1 -20.1,-58.1 -20.1,-57.1 -20.1,-56.1 -20.1,-55.1 -20.1,-54.1 -20.1,-53.1 -20.1,-52 -20.1,-51 -20.1,-50 -20.1,-49 -20.1,-48 -20.1,-47 -20.1,-46 -20.1,-45 -20.1,-44 -20.1,-42.9 -20.1,-41.9 -20.1,-40.9 -20.1,-69.6 -19.1,-68.6 -19.1,-67.6 -19.1,-66.6 -19.1,-65.6 -19.1,-64.6 -19.1,-63.6 -19.1,-62.6 -19.1,-61.6 -19.1,-60.6 -19.1,-59.6 -19.1,-58.6 -19.1,-57.6 -19.1,-56.6 -19.1,-55.6 -19.1,-54.5 -19.1,-53.5 -19.1,-52.5 -19.1,-51.5 -19.1,-50.5 -19.1,-49.5 -19.1,-48.5 -19.1,-47.5 -19.1,-46.5 -19.1,-45.5 -19.1,-44.5 -19.1,-43.5 -19.1,-42.5 -19.1,-41.5 -19.1,-40.5 -19.1,-69 -18.2,-68 -18.2,-67 -18.2,-66 -18.2,-65 -18.2,-64 -18.2,-63 -18.2,-62 -18.2,-61 -18.2,-60 -18.2,-59 -18.2,-58 -18.2,-57 -18.2,-56 -18.2,-55 -18.2,-54 -18.2,-53 -18.2,-52 -18.2,-51 -18.2,-50 -18.2,-49 -18.2,-48 -18.2,-47 -18.2,-46 -18.2,-45 -18.2,-44 -18.2,-43 -18.2,-42 -18.2,-41 -18.2,-40 -18.2,-69.3 -17.2,-68.4 -17.2,-67.4 -17.2,-66.4 -17.2,-65.4 -17.2,-64.4 -17.2,-63.4 -17.2,-62.4 -17.2,-61.4 -17.2,-60.4 -17.2,-59.4 -17.2,-58.4 -17.2,-57.4 -17.2,-56.4 -17.2,-55.4 -17.2,-54.4 -17.2,-53.4 -17.2,-52.4 -17.2,-51.4 -17.2,-50.4 -17.2,-49.5 -17.2,-48.5 -17.2,-47.5 -17.2,-46.5 -17.2,-45.5 -17.2,-44.5 -17.2,-43.5 -17.2,-42.5 -17.2,-41.5 -17.2,-40.5 -17.2,-39.5 -17.2,-68.7 -16.3,-67.7 -16.3,-66.7 -16.3,-65.7 -16.3,-64.7 -16.3,-63.7 -16.3,-62.7 -16.3,-61.8 -16.3,-60.8 -16.3,-59.8 -16.3,-58.8 -16.3,-57.8 -16.3,-56.8 -16.3,-55.8 -16.3,-54.8 -16.3,-53.8 -16.3,-52.8 -16.3,-51.9 -16.3,-50.9 -16.3,-49.9 -16.3,-48.9 -16.3,-47.9 -16.3,-46.9 -16.3,-45.9 -16.3,-44.9 -16.3,-43.9 -16.3,-43 -16.3,-42 -16.3,-41 -16.3,-40 -16.3,-69 -15.3,-68 -15.3,-67 -15.3,-66 -15.3,-65.1 -15.3,-64.1 -15.3,-63.1 -15.3,-62.1 -15.3,-61.1 -15.3,-60.1 -15.3,-59.1 -15.3,-58.2 -15.3,-57.2 -15.3,-56.2 -15.3,-55.2 -15.3,-54.2 -15.3,-53.2 -15.3,-52.2 -15.3,-51.3 -15.3,-50.3 -15.3,-49.3 -15.3,-48.3 -15.3,-47.3 -15.3,-46.3 -15.3,-45.4 -15.3,-44.4 -15.3,-43.4 -15.3,-42.4 -15.3,-41.4 -15.3,-40.4 -15.3,-39.4 -15.3,-68.3 -14.4,-67.3 -14.4,-66.3 -14.4,-65.4 -14.4,-64.4 -14.4,-63.4 -14.4,-62.4 -14.4,-61.4 -14.4,-60.5 -14.4,-59.5 -14.4,-58.5 -14.4,-57.5 -14.4,-56.5 -14.4,-55.6 -14.4,-54.6 -14.4,-53.6 -14.4,-52.6 -14.4,-51.6 -14.4,-50.6 -14.4,-49.7 -14.4,-48.7 -14.4,-47.7 -14.4,-46.7 -14.4,-45.7 -14.4,-44.8 -14.4,-43.8 -14.4,-42.8 -14.4,-41.8 -14.4,-40.8 -14.4,-39.9 -14.4,-68.6 -13.4,-67.6 -13.4,-66.6 -13.4,-65.6 -13.4,-64.7 -13.4,-63.7 -13.4,-62.7 -13.4,-61.7 -13.4,-60.8 -13.4,-59.8 -13.4,-58.8 -13.4,-57.8 -13.4,-56.9 -13.4,-55.9 -13.4,-54.9 -13.4,-53.9 -13.4,-52.9 -13.4,-52 -13.4,-51 -13.4,-50 -13.4,-49 -13.4,-48.1 -13.4,-47.1 -13.4,-46.1 -13.4,-45.1 -13.4,-44.2 -13.4,-43.2 -13.4,-42.2 -13.4,-41.2 -13.4,-40.3 -13.4,-39.3 -13.4,-67.9 -12.5,-66.9 -12.5,-65.9 -12.5,-64.9 -12.5,-64 -12.5,-63 -12.5,-62 -12.5,-61 -12.5,-60.1 -12.5,-59.1 -12.5,-58.1 -12.5,-57.2 -12.5,-56.2 -12.5,-55.2 -12.5,-54.2 -12.5,-53.3 -12.5,-52.3 -12.5,-51.3 -12.5,-50.3 -12.5,-49.4 -12.5,-48.4 -12.5,-47.4 -12.5,-46.5 -12.5,-45.5 -12.5,-44.5 -12.5,-43.5 -12.5,-42.6 -12.5,-41.6 -12.5,-40.6 -12.5,-39.6 -12.5,-38.7 -12.5,-69.1 -11.5,-68.1 -11.5,-67.1 -11.5,-66.2 -11.5,-65.2 -11.5,-64.2 -11.5,-63.2 -11.5,-62.3 -11.5,-61.3 -11.5,-60.3 -11.5,-59.4 -11.5,-58.4 -11.5,-57.4 -11.5,-56.5 -11.5,-55.5 -11.5,-54.5 -11.5,-53.6 -11.5,-52.6 -11.5,-51.6 -11.5,-50.6 -11.5,-49.7 -11.5,-48.7 -11.5,-47.7 -11.5,-46.8 -11.5,-45.8 -11.5,-44.8 -11.5,-43.9 -11.5,-42.9 -11.5,-41.9 -11.5,-40.9 -11.5,-40 -11.5,-39 -11.5,-38 -11.5,-70.2 -10.6,-69.3 -10.6,-68.3 -10.6,-67.3 -10.6,-66.4 -10.6,-65.4 -10.6,-64.4 -10.6,-63.5 -10.6,-62.5 -10.6,-61.5 -10.6,-60.6 -10.6,-59.6 -10.6,-58.6 -10.6,-57.7 -10.6,-56.7 -10.6,-55.7 -10.6,-54.8 -10.6,-53.8 -10.6,-52.8 -10.6,-51.9 -10.6,-50.9 -10.6,-49.9 -10.6,-49 -10.6,-48 -10.6,-47 -10.6,-46.1 -10.6,-45.1 -10.6,-44.1 -10.6,-43.2 -10.6,-42.2 -10.6,-41.3 -10.6,-40.3 -10.6,-39.3 -10.6,-38.4 -10.6,-37.4 -10.6,-71.4 -9.6,-70.4 -9.6,-69.5 -9.6,-68.5 -9.6,-67.5 -9.6,-66.6 -9.6,-65.6 -9.6,-64.7 -9.6,-63.7 -9.6,-62.7 -9.6,-61.8 -9.6,-60.8 -9.6,-59.8 -9.6,-58.9 -9.6,-57.9 -9.6,-56.9 -9.6,-56 -9.6,-55 -9.6,-54.1 -9.6,-53.1 -9.6,-52.1 -9.6,-51.2 -9.6,-50.2 -9.6,-49.2 -9.6,-48.3 -9.6,-47.3 -9.6,-46.3 -9.6,-45.4 -9.6,-44.4 -9.6,-43.5 -9.6,-42.5 -9.6,-41.5 -9.6,-40.6 -9.6,-39.6 -9.6,-38.6 -9.6,-37.7 -9.6,-36.7 -9.6,-35.7 -9.6,-72.5 -8.7,-71.6 -8.7,-70.6 -8.7,-69.6 -8.7,-68.7 -8.7,-67.7 -8.7,-66.8 -8.7,-65.8 -8.7,-64.8 -8.7,-63.9 -8.7,-62.9 -8.7,-62 -8.7,-61 -8.7,-60 -8.7,-59.1 -8.7,-58.1 -8.7,-57.2 -8.7,-56.2 -8.7,-55.2 -8.7,-54.3 -8.7,-53.3 -8.7,-52.3 -8.7,-51.4 -8.7,-50.4 -8.7,-49.5 -8.7,-48.5 -8.7,-47.5 -8.7,-46.6 -8.7,-45.6 -8.7,-44.7 -8.7,-43.7 -8.7,-42.7 -8.7,-41.8 -8.7,-40.8 -8.7,-39.9 -8.7,-38.9 -8.7,-37.9 -8.7,-37 -8.7,-36 -8.7,-73.6 -7.7,-72.7 -7.7,-71.7 -7.7,-70.8 -7.7,-69.8 -7.7,-68.8 -7.7,-67.9 -7.7,-66.9 -7.7,-66 -7.7,-65 -7.7,-64.1 -7.7,-63.1 -7.7,-62.1 -7.7,-61.2 -7.7,-60.2 -7.7,-59.3 -7.7,-58.3 -7.7,-57.3 -7.7,-56.4 -7.7,-55.4 -7.7,-54.5 -7.7,-53.5 -7.7,-52.5 -7.7,-51.6 -7.7,-50.6 -7.7,-49.7 -7.7,-48.7 -7.7,-47.8 -7.7,-46.8 -7.7,-45.8 -7.7,-44.9 -7.7,-43.9 -7.7,-43 -7.7,-42 -7.7,-41 -7.7,-40.1 -7.7,-39.1 -7.7,-38.2 -7.7,-37.2 -7.7,-36.2 -7.7,-35.3 -7.7,-72.8 -6.8,-71.9 -6.8,-70.9 -6.8,-69.9 -6.8,-69 -6.8,-68 -6.8,-67.1 -6.8,-66.1 -6.8,-65.2 -6.8,-64.2 -6.8,-63.2 -6.8,-62.3 -6.8,-61.3 -6.8,-60.4 -6.8,-59.4 -6.8,-58.5 -6.8,-57.5 -6.8,-56.5 -6.8,-55.6 -6.8,-54.6 -6.8,-53.7 -6.8,-52.7 -6.8,-51.8 -6.8,-50.8 -6.8,-49.9 -6.8,-48.9 -6.8,-47.9 -6.8,-47 -6.8,-46 -6.8,-45.1 -6.8,-44.1 -6.8,-43.2 -6.8,-42.2 -6.8,-41.2 -6.8,-40.3 -6.8,-39.3 -6.8,-38.4 -6.8,-37.4 -6.8,-36.5 -6.8,-35.5 -6.8,-72.9 -5.8,-72 -5.8,-71 -5.8,-70.1 -5.8,-69.1 -5.8,-68.2 -5.8,-67.2 -5.8,-66.2 -5.8,-65.3 -5.8,-64.3 -5.8,-63.4 -5.8,-62.4 -5.8,-61.5 -5.8,-60.5 -5.8,-59.6 -5.8,-58.6 -5.8,-57.6 -5.8,-56.7 -5.8,-55.7 -5.8,-54.8 -5.8,-53.8 -5.8,-52.9 -5.8,-51.9 -5.8,-51 -5.8,-50 -5.8,-49.1 -5.8,-48.1 -5.8,-47.1 -5.8,-46.2 -5.8,-45.2 -5.8,-44.3 -5.8,-43.3 -5.8,-42.4 -5.8,-41.4 -5.8,-40.5 -5.8,-39.5 -5.8,-38.5 -5.8,-37.6 -5.8,-36.6 -5.8,-35.7 -5.8,-72.1 -4.9,-71.1 -4.9,-70.2 -4.9,-69.2 -4.9,-68.3 -4.9,-67.3 -4.9,-66.3 -4.9,-65.4 -4.9,-64.4 -4.9,-63.5 -4.9,-62.5 -4.9,-61.6 -4.9,-60.6 -4.9,-59.7 -4.9,-58.7 -4.9,-57.8 -4.9,-56.8 -4.9,-55.9 -4.9,-54.9 -4.9,-54 -4.9,-53 -4.9,-52 -4.9,-51.1 -4.9,-50.1 -4.9,-49.2 -4.9,-48.2 -4.9,-47.3 -4.9,-46.3 -4.9,-45.4 -4.9,-44.4 -4.9,-43.5 -4.9,-42.5 -4.9,-41.6 -4.9,-40.6 -4.9,-39.7 -4.9,-38.7 -4.9,-37.7 -4.9,-79.8 -3.9,-78.8 -3.9,-69.3 -3.9,-68.3 -3.9,-67.4 -3.9,-66.4 -3.9,-65.5 -3.9,-64.5 -3.9,-63.6 -3.9,-62.6 -3.9,-61.7 -3.9,-60.7 -3.9,-59.8 -3.9,-58.8 -3.9,-57.9 -3.9,-56.9 -3.9,-56 -3.9,-55 -3.9,-54.1 -3.9,-53.1 -3.9,-52.2 -3.9,-51.2 -3.9,-50.2 -3.9,-49.3 -3.9,-48.3 -3.9,-47.4 -3.9,-46.4 -3.9,-45.5 -3.9,-44.5 -3.9,-43.6 -3.9,-42.6 -3.9,-41.7 -3.9,-40.7 -3.9,-39.8 -3.9,-38.8 -3.9,-79.8 -3,-78.9 -3,-77.9 -3,-69.4 -3,-68.4 -3,-67.5 -3,-66.5 -3,-65.6 -3,-64.6 -3,-63.7 -3,-62.7 -3,-61.7 -3,-60.8 -3,-59.8 -3,-58.9 -3,-57.9 -3,-57 -3,-56 -3,-55.1 -3,-54.1 -3,-53.2 -3,-52.2 -3,-51.3 -3,-50.3 -3,-49.4 -3,-48.4 -3,-47.5 -3,-46.5 -3,-45.6 -3,-43.7 -3,-42.7 -3,-41.8 -3,-40.8 -3,-39.9 -3,-79.9 -2,-78.9 -2,-78 -2,-77 -2,-76.1 -2,-72.3 -2,-71.3 -2,-70.4 -2,-69.4 -2,-68.5 -2,-67.5 -2,-66.6 -2,-65.6 -2,-64.7 -2,-63.7 -2,-62.8 -2,-61.8 -2,-60.9 -2,-59.9 -2,-59 -2,-58 -2,-57.1 -2,-56.1 -2,-55.1 -2,-54.2 -2,-53.2 -2,-52.3 -2,-51.3 -2,-50.4 -2,-49.4 -2,-48.5 -2,-47.5 -2,-46.6 -2,-45.6 -2,-44.7 -2,-80.8 -1.1,-79.9 -1.1,-78.9 -1.1,-78 -1.1,-77 -1.1,-76.1 -1.1,-73.2 -1.1,-72.3 -1.1,-71.3 -1.1,-70.4 -1.1,-69.4 -1.1,-68.5 -1.1,-67.5 -1.1,-66.6 -1.1,-65.6 -1.1,-64.7 -1.1,-63.7 -1.1,-62.8 -1.1,-61.8 -1.1,-60.9 -1.1,-59.9 -1.1,-59 -1.1,-58 -1.1,-57.1 -1.1,-56.1 -1.1,-55.2 -1.1,-54.2 -1.1,-53.3 -1.1,-52.3 -1.1,-51.4 -1.1,-50.4 -1.1,-49.5 -1.1,-47.6 -1.1,-46.6 -1.1,-91.3 -0.1,-79.9 -0.1,-78.9 -0.1,-78 -0.1,-77 -0.1,-76.1 -0.1,-74.2 -0.1,-73.2 -0.1,-72.3 -0.1,-71.3 -0.1,-70.4 -0.1,-69.4 -0.1,-68.5 -0.1,-67.5 -0.1,-66.6 -0.1,-65.6 -0.1,-64.7 -0.1,-63.7 -0.1,-62.8 -0.1,-61.8 -0.1,-60.9 -0.1,-59.9 -0.1,-59 -0.1,-58 -0.1,-57.1 -0.1,-56.1 -0.1,-55.2 -0.1,-54.2 -0.1,-53.3 -0.1,-52.3 -0.1,-51.4 -0.1,-79.9 0.8,-78.9 0.8,-78 0.8,-77 0.8,-76.1 0.8,-75.1 0.8,-74.2 0.8,-73.2 0.8,-72.3 0.8,-71.3 0.8,-70.4 0.8,-69.4 0.8,-68.5 0.8,-67.5 0.8,-66.6 0.8,-65.6 0.8,-64.7 0.8,-63.7 0.8,-62.8 0.8,-61.8 0.8,-60.9 0.8,-59.9 0.8,-59 0.8,-58 0.8,-57.1 0.8,-56.1 0.8,-55.2 0.8,-54.2 0.8,-53.3 0.8,-52.3 0.8,-51.4 0.8,-50.4 0.8,-78.9 1.8,-78 1.8,-77 1.8,-76.1 1.8,-75.1 1.8,-74.2 1.8,-73.2 1.8,-72.3 1.8,-71.3 1.8,-70.4 1.8,-69.4 1.8,-68.5 1.8,-67.5 1.8,-66.6 1.8,-65.6 1.8,-64.7 1.8,-63.7 1.8,-62.8 1.8,-61.8 1.8,-60.9 1.8,-59.9 1.8,-59 1.8,-58 1.8,-57.1 1.8,-56.1 1.8,-55.2 1.8,-54.2 1.8,-53.3 1.8,-52.3 1.8,-51.4 1.8,-50.4 1.8,-77 2.7,-76 2.7,-75.1 2.7,-74.1 2.7,-73.2 2.7,-72.2 2.7,-71.3 2.7,-70.3 2.7,-69.4 2.7,-68.4 2.7,-67.5 2.7,-66.5 2.7,-65.6 2.7,-64.6 2.7,-63.7 2.7,-62.7 2.7,-61.8 2.7,-60.8 2.7,-59.9 2.7,-58.9 2.7,-58 2.7,-57 2.7,-56.1 2.7,-55.1 2.7,-54.2 2.7,-53.2 2.7,-52.3 2.7,-51.3 2.7,-76.9 3.7,-76 3.7,-75 3.7,-74.1 3.7,-73.1 3.7,-72.2 3.7,-71.2 3.7,-70.3 3.7,-69.3 3.7,-68.4 3.7,-67.4 3.7,-66.5 3.7,-65.5 3.7,-64.6 3.7,-63.6 3.7,-62.7 3.7,-61.7 3.7,-60.7 3.7,-59.8 3.7,-58.8 3.7,-57.9 3.7,-56.9 3.7,-56 3.7,-55 3.7,-54.1 3.7,-53.1 3.7,-52.2 3.7,-51.2 3.7,-76.9 4.6,-75.9 4.6,-75 4.6,-74 4.6,-73.1 4.6,-72.1 4.6,-71.1 4.6,-70.2 4.6,-69.2 4.6,-68.3 4.6,-67.3 4.6,-66.4 4.6,-65.4 4.6,-64.5 4.6,-63.5 4.6,-62.6 4.6,-61.6 4.6,-60.7 4.6,-59.7 4.6,-58.8 4.6,-57.8 4.6,-56.8 4.6,-55.9 4.6,-54.9 4.6,-54 4.6,-53 4.6,-52.1 4.6,-76.8 5.6,-75.8 5.6,-74.9 5.6,-73.9 5.6,-73 5.6,-72 5.6,-71.1 5.6,-70.1 5.6,-69.1 5.6,-68.2 5.6,-67.2 5.6,-66.3 5.6,-65.3 5.6,-64.4 5.6,-63.4 5.6,-62.5 5.6,-61.5 5.6,-60.6 5.6,-59.6 5.6,-58.6 5.6,-57.7 5.6,-56.7 5.6,-55.8 5.6,-54.8 5.6,-53.9 5.6,-76.7 6.5,-75.7 6.5,-74.8 6.5,-73.8 6.5,-72.9 6.5,-71.9 6.5,-70.9 6.5,-70 6.5,-69 6.5,-68.1 6.5,-67.1 6.5,-66.2 6.5,-65.2 6.5,-64.2 6.5,-63.3 6.5,-62.3 6.5,-61.4 6.5,-60.4 6.5,-59.5 6.5,-58.5 6.5,-10.7 6.5,-80.4 7.5,-77.5 7.5,-76.6 7.5,-75.6 7.5,-74.6 7.5,-73.7 7.5,-72.7 7.5,-71.8 7.5,-70.8 7.5,-69.9 7.5,-68.9 7.5,-67.9 7.5,-67 7.5,-66 7.5,-65.1 7.5,-64.1 7.5,-63.1 7.5,-62.2 7.5,-61.2 7.5,-60.3 7.5,-59.3 7.5,-12.4 7.5,-11.4 7.5,-10.4 7.5,-82.2 8.4,-81.2 8.4,-80.3 8.4,-77.4 8.4,-76.4 8.4,-75.5 8.4,-74.5 8.4,-73.5 8.4,-72.6 8.4,-71.6 8.4,-70.7 8.4,-69.7 8.4,-68.7 8.4,-67.8 8.4,-66.8 8.4,-65.9 8.4,-64.9 8.4,-63.9 8.4,-63 8.4,-62 8.4,-61.1 8.4,-60.1 8.4,-13 8.4,-12.1 8.4,-11.1 8.4,-10.2 8.4,-84 9.4,-83 9.4,-79.2 9.4,-75.3 9.4,-74.3 9.4,-73.4 9.4,-72.4 9.4,-70.5 9.4,-69.5 9.4,-68.6 9.4,-67.6 9.4,-66.6 9.4,-65.7 9.4,-64.7 9.4,-63.8 9.4,-62.8 9.4,-61.8 9.4,-60.9 9.4,-12.7 9.4,-11.8 9.4,-10.8 9.4,-85.8 10.3,-84.8 10.3,-83.8 10.3,-75.1 10.3,-74.2 10.3,-73.2 10.3,-72.2 10.3,-71.3 10.3,-70.3 10.3,-69.3 10.3,-68.4 10.3,-67.4 10.3,-66.4 10.3,-63.5 10.3,-14.3 10.3,-13.3 10.3,-12.4 10.3,-11.4 10.3,-10.4 10.3,-85.6 11.3,-84.6 11.3,-74 11.3,-73 11.3,-72 11.3,-70.1 11.3,-69.1 11.3,-14.9 11.3,-13.9 11.3,-13 11.3,-12 11.3,-11 11.3,-10 11.3,-86.4 12.2,-85.4 12.2,-84.5 12.2,-71.8 12.2,-15.5 12.2,-14.5 12.2,-13.5 12.2,-12.5 12.2,-11.6 12.2,-10.6 12.2,-87.2 13.2,-86.2 13.2,-85.2 13.2,-84.3 13.2,-16 13.2,-15 13.2,-14 13.2,-13.1 13.2,-12.1 13.2,-11.1 13.2,-10.1 13.2,-90.9 14.1,-89.9 14.1,-89 14.1,-88 14.1,-87 14.1,-86 14.1,-85 14.1,-84.1 14.1,-16.5 14.1,-15.5 14.1,-14.5 14.1,-13.5 14.1,-12.6 14.1,-11.6 14.1,-10.6 14.1,-92.7 15.1,-91.7 15.1,-90.7 15.1,-89.7 15.1,-88.8 15.1,-87.8 15.1,-86.8 15.1,-85.8 15.1,-84.8 15.1,-83.8 15.1,-17 15.1,-16 15.1,-15 15.1,-14 15.1,-13 15.1,-12 15.1,-11 15.1,-10.1 15.1,-97.4 16,-96.5 16,-95.5 16,-93.5 16,-92.5 16,-91.5 16,-90.5 16,-89.5 16,-16.4 16,-15.4 16,-14.4 16,-13.4 16,-12.5 16,-11.5 16,-10.5 16,-99.2 17,-98.3 17,-97.3 17,-96.3 17,-95.3 17,-94.3 17,-93.3 17,-92.3 17,-91.3 17,-90.3 17,-89.3 17,-88.3 17,-15.8 17,-14.8 17,-13.8 17,-12.8 17,-11.9 17,-10.9 17,-101.1 17.9,-100.1 17.9,-99.1 17.9,-98.1 17.9,-97.1 17.9,-96.1 17.9,-95.1 17.9,-94.1 17.9,-93.1 17.9,-92.1 17.9,-91.1 17.9,-90.1 17.9,-89.1 17.9,-77.1 17.9,-15.2 17.9,-14.2 17.9,-13.2 17.9,-12.2 17.9,-11.2 17.9,-10.2 17.9,-103.9 18.9,-102.9 18.9,-101.9 18.9,-100.9 18.9,-99.9 18.9,-98.9 18.9,-97.9 18.9,-96.9 18.9,-95.9 18.9,-90.8 18.9,-89.8 18.9,-88.8 18.9,-87.8 18.9,-71.8 18.9,-70.8 18.9,-69.8 18.9,-68.7 18.9,-15.5 18.9,-14.5 18.9,-13.5 18.9,-12.5 18.9,-11.5 18.9,-10.5 18.9,-104.7 19.8,-103.7 19.8,-102.7 19.8,-101.7 19.8,-100.7 19.8,-99.7 19.8,-98.7 19.8,-97.6 19.8,-96.6 19.8,-90.6 19.8,-89.6 19.8,-88.6 19.8,-72.4 19.8,-71.4 19.8,-15.9 19.8,-14.8 19.8,-13.8 19.8,-12.8 19.8,-11.8 19.8,-10.8 19.8,-104.5 20.8,-103.5 20.8,-102.5 20.8,-101.5 20.8,-100.5 20.8,-99.4 20.8,-98.4 20.8,-97.4 20.8,-90.3 20.8,-89.3 20.8,-88.3 20.8,-87.3 20.8,-77.1 20.8,-76.1 20.8,-16.1 20.8,-15.1 20.8,-14.1 20.8,-13.1 20.8,-12.1 20.8,-11.1 20.8,-10 20.8,-105.3 21.7,-104.3 21.7,-103.3 21.7,-102.3 21.7,-101.3 21.7,-100.2 21.7,-99.2 21.7,-98.2 21.7,-82.9 21.7,-78.8 21.7,-77.7 21.7,-16.4 21.7,-15.4 21.7,-14.3 21.7,-13.3 21.7,-12.3 21.7,-11.3 21.7,-10.3 21.7,-105.1 22.7,-104.1 22.7,-103.1 22.7,-102.1 22.7,-101 22.7,-100 22.7,-99 22.7,-97.9 22.7,-83.5 22.7,-81.5 22.7,-80.4 22.7,-15.6 22.7,-14.6 22.7,-13.5 22.7,-12.5 22.7,-11.5 22.7,-10.4 22.7,-110.1 23.6,-106 23.6,-104.9 23.6,-103.9 23.6,-102.9 23.6,-101.8 23.6,-100.8 23.6,-99.8 23.6,-98.7 23.6,-75.9 23.6,-15.8 23.6,-14.7 23.6,-13.7 23.6,-12.7 23.6,-11.6 23.6,-10.6 23.6,-111 24.6,-106.8 24.6,-105.8 24.6,-104.7 24.6,-103.7 24.6,-102.6 24.6,-101.6 24.6,-100.5 24.6,-99.5 24.6,-98.4 24.6,-14.9 24.6,-13.8 24.6,-12.8 24.6,-11.8 24.6,-10.7 24.6,-111.8 25.5,-108.7 25.5,-107.6 25.5,-106.6 25.5,-105.5 25.5,-104.5 25.5,-103.4 25.5,-102.4 25.5,-101.3 25.5,-100.3 25.5,-99.2 25.5,-98.2 25.5,-14 25.5,-12.9 25.5,-11.9 25.5,-10.8 25.5,-112.7 26.5,-111.7 26.5,-108.5 26.5,-107.4 26.5,-106.4 26.5,-105.3 26.5,-104.2 26.5,-103.2 26.5,-102.1 26.5,-101 26.5,-100 26.5,-98.9 26.5,-97.9 26.5,-80.9 26.5,-14 26.5,-13 26.5,-11.9 26.5,-10.9 26.5,-113.6 27.4,-112.5 27.4,-110.4 27.4,-109.3 27.4,-108.2 27.4,-107.2 27.4,-106.1 27.4,-105 27.4,-104 27.4,-102.9 27.4,-101.8 27.4,-100.8 27.4,-99.7 27.4,-98.6 27.4,-97.5 27.4,-82.6 27.4,-81.5 27.4,-80.4 27.4,-13 27.4,-11.9 27.4,-10.9 27.4,-113.4 28.4,-111.3 28.4,-110.2 28.4,-109.1 28.4,-108 28.4,-106.9 28.4,-105.9 28.4,-104.8 28.4,-103.7 28.4,-102.6 28.4,-101.5 28.4,-100.5 28.4,-99.4 28.4,-98.3 28.4,-97.2 28.4,-82.1 28.4,-81 28.4,-14.1 28.4,-10.9 28.4,-114.3 29.3,-113.2 29.3,-112.1 29.3,-111 29.3,-109.9 29.3,-108.9 29.3,-107.8 29.3,-106.7 29.3,-105.6 29.3,-104.5 29.3,-103.4 29.3,-102.3 29.3,-101.2 29.3,-100.1 29.3,-99.1 29.3,-98 29.3,-96.9 29.3,-95.8 29.3,-90.3 29.3,-89.2 29.3,-82.7 29.3,-81.6 29.3,-115.2 30.3,-111.9 30.3,-110.8 30.3,-109.7 30.3,-108.6 30.3,-107.5 30.3,-106.4 30.3,-105.3 30.3,-104.2 30.3,-103.1 30.3,-102 30.3,-100.9 30.3,-99.8 30.3,-98.7 30.3,-97.6 30.3,-96.5 30.3,-95.4 30.3,-94.3 30.3,-93.2 30.3,-92.1 30.3,-91 30.3,-85.5 30.3,-84.4 30.3,-83.3 30.3,-82.2 30.3,-116.1 31.2,-115 31.2,-112.8 31.2,-111.7 31.2,-110.6 31.2,-109.5 31.2,-108.3 31.2,-107.2 31.2,-106.1 31.2,-105 31.2,-103.9 31.2,-102.8 31.2,-101.7 31.2,-100.6 31.2,-99.5 31.2,-98.3 31.2,-97.2 31.2,-96.1 31.2,-95 31.2,-93.9 31.2,-92.8 31.2,-91.7 31.2,-90.6 31.2,-89.5 31.2,-88.4 31.2,-87.2 31.2,-86.1 31.2,-85 31.2,-83.9 31.2,-82.8 31.2,-81.7 31.2,-115.9 32.2,-114.8 32.2,-113.7 32.2,-112.6 32.2,-111.4 32.2,-110.3 32.2,-109.2 32.2,-108.1 32.2,-106.9 32.2,-105.8 32.2,-104.7 32.2,-103.6 32.2,-102.5 32.2,-101.3 32.2,-100.2 32.2,-99.1 32.2,-98 32.2,-96.8 32.2,-95.7 32.2,-94.6 32.2,-93.5 32.2,-92.4 32.2,-91.2 32.2,-90.1 32.2,-89 32.2,-87.9 32.2,-86.8 32.2,-85.6 32.2,-84.5 32.2,-83.4 32.2,-82.3 32.2,-81.1 32.2,-116.9 33.1,-115.7 33.1,-114.6 33.1,-113.5 33.1,-112.3 33.1,-111.2 33.1,-110.1 33.1,-108.9 33.1,-107.8 33.1,-106.6 33.1,-105.5 33.1,-104.4 33.1,-103.2 33.1,-102.1 33.1,-101 33.1,-99.8 33.1,-98.7 33.1,-97.6 33.1,-96.4 33.1,-95.3 33.1,-94.2 33.1,-93 33.1,-91.9 33.1,-90.8 33.1,-89.6 33.1,-88.5 33.1,-87.4 33.1,-86.2 33.1,-85.1 33.1,-84 33.1,-82.8 33.1,-81.7 33.1,-80.6 33.1,-79.4 33.1,-117.8 34.1,-116.7 34.1,-115.5 34.1,-114.4 34.1,-113.2 34.1,-112.1 34.1,-110.9 34.1,-109.8 34.1,-108.6 34.1,-107.5 34.1,-106.3 34.1,-105.2 34.1,-104 34.1,-102.9 34.1,-101.7 34.1,-100.6 34.1,-99.5 34.1,-98.3 34.1,-97.2 34.1,-96 34.1,-94.9 34.1,-93.7 34.1,-92.6 34.1,-91.4 34.1,-90.3 34.1,-89.1 34.1,-88 34.1,-86.8 34.1,-85.7 34.1,-84.6 34.1,-83.4 34.1,-82.3 34.1,-81.1 34.1,-80 34.1,-78.8 34.1,-119.9 35,-118.8 35,-117.6 35,-116.4 35,-115.3 35,-114.1 35,-113 35,-111.8 35,-110.6 35,-109.5 35,-108.3 35,-107.2 35,-106 35,-104.8 35,-103.7 35,-102.5 35,-101.4 35,-100.2 35,-99 35,-97.9 35,-96.7 35,-95.6 35,-94.4 35,-93.2 35,-92.1 35,-90.9 35,-89.8 35,-88.6 35,-87.5 35,-86.3 35,-85.1 35,-84 35,-82.8 35,-81.7 35,-80.5 35,-79.3 35,-78.2 35,-77 35,-120.9 36,-119.7 36,-118.6 36,-117.4 36,-116.2 36,-115.1 36,-113.9 36,-112.7 36,-111.5 36,-110.4 36,-109.2 36,-108 36,-106.8 36,-105.7 36,-104.5 36,-103.3 36,-102.1 36,-101 36,-99.8 36,-98.6 36,-97.4 36,-96.3 36,-95.1 36,-93.9 36,-92.8 36,-91.6 36,-90.4 36,-89.2 36,-88.1 36,-86.9 36,-85.7 36,-84.5 36,-83.4 36,-82.2 36,-81 36,-79.8 36,-78.7 36,-77.5 36,-76.3 36,-120.7 36.9,-119.6 36.9,-118.4 36.9,-117.2 36.9,-116 36.9,-114.8 36.9,-113.6 36.9,-112.4 36.9,-111.2 36.9,-110.1 36.9,-108.9 36.9,-107.7 36.9,-106.5 36.9,-105.3 36.9,-104.1 36.9,-102.9 36.9,-101.7 36.9,-100.5 36.9,-99.4 36.9,-98.2 36.9,-97 36.9,-95.8 36.9,-94.6 36.9,-93.4 36.9,-92.2 36.9,-91 36.9,-89.9 36.9,-88.7 36.9,-87.5 36.9,-86.3 36.9,-85.1 36.9,-83.9 36.9,-82.7 36.9,-81.5 36.9,-80.4 36.9,-79.2 36.9,-78 36.9,-76.8 36.9,-121.8 37.9,-120.6 37.9,-119.4 37.9,-118.2 37.9,-117 37.9,-115.8 37.9,-114.5 37.9,-113.3 37.9,-112.1 37.9,-110.9 37.9,-109.7 37.9,-108.5 37.9,-107.3 37.9,-106.1 37.9,-104.9 37.9,-103.7 37.9,-102.5 37.9,-101.3 37.9,-100.1 37.9,-98.9 37.9,-97.7 37.9,-96.5 37.9,-95.3 37.9,-94.1 37.9,-92.9 37.9,-91.7 37.9,-90.5 37.9,-89.3 37.9,-88.1 37.9,-86.9 37.9,-85.7 37.9,-84.5 37.9,-83.3 37.9,-82.1 37.9,-80.9 37.9,-79.7 37.9,-78.5 37.9,-77.3 37.9,-122.8 38.8,-121.6 38.8,-120.4 38.8,-119.2 38.8,-117.9 38.8,-116.7 38.8,-115.5 38.8,-114.3 38.8,-113.1 38.8,-111.8 38.8,-110.6 38.8,-109.4 38.8,-108.2 38.8,-107 38.8,-105.7 38.8,-104.5 38.8,-103.3 38.8,-102.1 38.8,-100.9 38.8,-99.6 38.8,-98.4 38.8,-97.2 38.8,-96 38.8,-94.8 38.8,-93.6 38.8,-92.3 38.8,-91.1 38.8,-89.9 38.8,-88.7 38.8,-87.5 38.8,-86.2 38.8,-85 38.8,-83.8 38.8,-82.6 38.8,-81.4 38.8,-80.1 38.8,-78.9 38.8,-77.7 38.8,-75.3 38.8,-122.6 39.8,-121.4 39.8,-120.2 39.8,-118.9 39.8,-117.7 39.8,-116.5 39.8,-115.2 39.8,-114 39.8,-112.8 39.8,-111.5 39.8,-110.3 39.8,-109.1 39.8,-107.8 39.8,-106.6 39.8,-105.3 39.8,-104.1 39.8,-102.9 39.8,-101.6 39.8,-100.4 39.8,-99.2 39.8,-97.9 39.8,-96.7 39.8,-95.5 39.8,-94.2 39.8,-93 39.8,-91.8 39.8,-90.5 39.8,-89.3 39.8,-88 39.8,-86.8 39.8,-85.6 39.8,-84.3 39.8,-83.1 39.8,-81.9 39.8,-80.6 39.8,-79.4 39.8,-78.2 39.8,-76.9 39.8,-75.7 39.8,-74.5 39.8,-123.7 40.7,-122.5 40.7,-121.2 40.7,-120 40.7,-118.7 40.7,-117.5 40.7,-116.2 40.7,-115 40.7,-113.7 40.7,-112.4 40.7,-111.2 40.7,-109.9 40.7,-108.7 40.7,-107.4 40.7,-106.2 40.7,-104.9 40.7,-103.7 40.7,-102.4 40.7,-101.2 40.7,-99.9 40.7,-98.7 40.7,-97.4 40.7,-96.2 40.7,-94.9 40.7,-93.6 40.7,-92.4 40.7,-91.1 40.7,-89.9 40.7,-88.6 40.7,-87.4 40.7,-86.1 40.7,-84.9 40.7,-83.6 40.7,-82.4 40.7,-81.1 40.7,-79.9 40.7,-78.6 40.7,-77.4 40.7,-76.1 40.7,-74.9 40.7,-73.6 40.7,-123.6 41.7,-122.3 41.7,-121 41.7,-119.7 41.7,-118.5 41.7,-117.2 41.7,-115.9 41.7,-114.7 41.7,-113.4 41.7,-112.1 41.7,-110.8 41.7,-109.6 41.7,-108.3 41.7,-107 41.7,-105.8 41.7,-104.5 41.7,-103.2 41.7,-101.9 41.7,-100.7 41.7,-99.4 41.7,-98.1 41.7,-96.9 41.7,-95.6 41.7,-94.3 41.7,-93 41.7,-91.8 41.7,-90.5 41.7,-89.2 41.7,-88 41.7,-86.7 41.7,-85.4 41.7,-84.1 41.7,-82.9 41.7,-81.6 41.7,-80.3 41.7,-79.1 41.7,-77.8 41.7,-76.5 41.7,-75.2 41.7,-74 41.7,-72.7 41.7,-71.4 41.7,-123.4 42.6,-122.1 42.6,-120.8 42.6,-119.5 42.6,-118.2 42.6,-116.9 42.6,-115.6 42.6,-114.4 42.6,-113.1 42.6,-111.8 42.6,-110.5 42.6,-109.2 42.6,-107.9 42.6,-106.6 42.6,-105.3 42.6,-104 42.6,-102.7 42.6,-101.4 42.6,-100.2 42.6,-98.9 42.6,-97.6 42.6,-96.3 42.6,-95 42.6,-93.7 42.6,-92.4 42.6,-91.1 42.6,-89.8 42.6,-88.5 42.6,-87.2 42.6,-86 42.6,-84.7 42.6,-83.4 42.6,-82.1 42.6,-80.8 42.6,-79.5 42.6,-78.2 42.6,-76.9 42.6,-75.6 42.6,-74.3 42.6,-73.1 42.6,-71.8 42.6,-123.2 43.6,-121.9 43.6,-120.6 43.6,-119.3 43.6,-118 43.6,-116.6 43.6,-115.3 43.6,-114 43.6,-112.7 43.6,-111.4 43.6,-110.1 43.6,-108.8 43.6,-107.5 43.6,-106.2 43.6,-104.9 43.6,-103.5 43.6,-102.2 43.6,-100.9 43.6,-99.6 43.6,-98.3 43.6,-97 43.6,-95.7 43.6,-94.4 43.6,-93.1 43.6,-91.7 43.6,-90.4 43.6,-89.1 43.6,-87.8 43.6,-86.5 43.6,-85.2 43.6,-83.9 43.6,-82.6 43.6,-81.3 43.6,-79.9 43.6,-78.6 43.6,-77.3 43.6,-76 43.6,-74.7 43.6,-73.4 43.6,-72.1 43.6,-70.8 43.6,-65.5 43.6,-123 44.5,-121.7 44.5,-120.3 44.5,-119 44.5,-117.7 44.5,-116.4 44.5,-115 44.5,-113.7 44.5,-112.4 44.5,-111 44.5,-109.7 44.5,-108.4 44.5,-107 44.5,-105.7 44.5,-104.4 44.5,-103 44.5,-101.7 44.5,-100.4 44.5,-99 44.5,-97.7 44.5,-96.4 44.5,-95 44.5,-93.7 44.5,-92.4 44.5,-91 44.5,-89.7 44.5,-88.4 44.5,-87.1 44.5,-85.7 44.5,-84.4 44.5,-83.1 44.5,-81.7 44.5,-80.4 44.5,-79.1 44.5,-77.7 44.5,-76.4 44.5,-75.1 44.5,-73.7 44.5,-72.4 44.5,-71.1 44.5,-69.7 44.5,-68.4 44.5,-65.7 44.5,-64.4 44.5", "peru": "-70.3 -18.2,-71.1 -17.7,-70.5 -17.7,-69.9 -17.7,-71.9 -17.1,-71.3 -17.1,-70.7 -17.1,-70.1 -17.1,-69.5 -17.1,-72.7 -16.5,-72.1 -16.5,-71.5 -16.5,-70.9 -16.5,-70.3 -16.5,-69.7 -16.5,-69.1 -16.5,-74.1 -15.9,-73.5 -15.9,-72.9 -15.9,-72.3 -15.9,-71.7 -15.9,-71.1 -15.9,-70.5 -15.9,-69.9 -15.9,-74.9 -15.3,-74.3 -15.3,-73.7 -15.3,-73.1 -15.3,-72.5 -15.3,-71.9 -15.3,-71.2 -15.3,-70.6 -15.3,-70 -15.3,-69.4 -15.3,-75.6 -14.8,-75 -14.8,-74.4 -14.8,-73.8 -14.8,-73.2 -14.8,-72.6 -14.8,-72 -14.8,-71.4 -14.8,-70.8 -14.8,-70.2 -14.8,-69.6 -14.8,-75.8 -14.2,-75.2 -14.2,-74.6 -14.2,-74 -14.2,-73.4 -14.2,-72.8 -14.2,-72.2 -14.2,-71.6 -14.2,-71 -14.2,-70.4 -14.2,-69.8 -14.2,-69.2 -14.2,-75.9 -13.6,-75.3 -13.6,-74.7 -13.6,-74.1 -13.6,-73.5 -13.6,-72.9 -13.6,-72.3 -13.6,-71.7 -13.6,-71.1 -13.6,-70.6 -13.6,-70 -13.6,-69.4 -13.6,-76.1 -13,-75.5 -13,-74.9 -13,-74.3 -13,-73.7 -13,-73.1 -13,-72.5 -13,-71.9 -13,-71.3 -13,-70.7 -13,-70.1 -13,-69.5 -13,-76.8 -12.4,-76.2 -12.4,-75.6 -12.4,-75 -12.4,-74.4 -12.4,-73.8 -12.4,-73.2 -12.4,-72.6 -12.4,-72 -12.4,-71.4 -12.4,-70.9 -12.4,-70.3 -12.4,-69.7 -12.4,-69.1 -12.4,-76.9 -11.9,-76.3 -11.9,-75.7 -11.9,-75.1 -11.9,-74.5 -11.9,-74 -11.9,-73.4 -11.9,-72.8 -11.9,-72.2 -11.9,-71.6 -11.9,-71 -11.9,-70.4 -11.9,-69.8 -11.9,-69.2 -11.9,-77.6 -11.3,-77 -11.3,-76.4 -11.3,-75.9 -11.3,-75.3 -11.3,-74.7 -11.3,-74.1 -11.3,-73.5 -11.3,-72.9 -11.3,-72.3 -11.3,-71.7 -11.3,-71.1 -11.3,-70.5 -11.3,-69.9 -11.3,-77.7 -10.7,-77.2 -10.7,-76.6 -10.7,-76 -10.7,-75.4 -10.7,-74.8 -10.7,-74.2 -10.7,-73.6 -10.7,-73 -10.7,-72.4 -10.7,-71.8 -10.7,-71.3 -10.7,-70.7 -10.7,-77.9 -10.1,-77.3 -10.1,-76.7 -10.1,-76.1 -10.1,-75.5 -10.1,-74.9 -10.1,-74.3 -10.1,-73.7 -10.1,-73.1 -10.1,-72.5 -10.1,-72 -10.1,-71.4 -10.1,-70.8 -10.1,-78 -9.5,-77.4 -9.5,-76.8 -9.5,-76.2 -9.5,-75.6 -9.5,-75 -9.5,-74.4 -9.5,-73.8 -9.5,-73.2 -9.5,-72.7 -9.5,-78.6 -9,-78 -9,-77.5 -9,-76.9 -9,-76.3 -9,-75.7 -9,-75.1 -9,-74.5 -9,-73.9 -9,-73.3 -9,-78.7 -8.4,-78.1 -8.4,-77.5 -8.4,-77 -8.4,-76.4 -8.4,-75.8 -8.4,-75.2 -8.4,-74.6 -8.4,-74 -8.4,-79.4 -7.8,-78.8 -7.8,-78.2 -7.8,-77.6 -7.8,-77 -7.8,-76.5 -7.8,-75.9 -7.8,-75.3 -7.8,-74.7 -7.8,-74.1 -7.8,-79.5 -7.2,-78.9 -7.2,-78.3 -7.2,-77.7 -7.2,-77.1 -7.2,-76.5 -7.2,-76 -7.2,-75.4 -7.2,-74.8 -7.2,-74.2 -7.2,-80.1 -6.6,-79.5 -6.6,-78.9 -6.6,-78.4 -6.6,-77.8 -6.6,-77.2 -6.6,-76.6 -6.6,-76 -6.6,-75.4 -6.6,-74.9 -6.6,-74.3 -6.6,-73.7 -6.6,-80.8 -6.1,-80.2 -6.1,-79.6 -6.1,-79 -6.1,-78.4 -6.1,-77.8 -6.1,-77.3 -6.1,-76.7 -6.1,-76.1 -6.1,-75.5 -6.1,-74.9 -6.1,-74.3 -6.1,-73.8 -6.1,-80.8 -5.5,-80.2 -5.5,-79.6 -5.5,-79.1 -5.5,-78.5 -5.5,-77.9 -5.5,-77.3 -5.5,-76.7 -5.5,-76.2 -5.5,-75.6 -5.5,-75 -5.5,-74.4 -5.5,-73.8 -5.5,-73.2 -5.5,-80.9 -4.9,-80.3 -4.9,-79.7 -4.9,-78.5 -4.9,-78 -4.9,-77.4 -4.9,-76.8 -4.9,-76.2 -4.9,-75.6 -4.9,-75 -4.9,-74.5 -4.9,-73.9 -4.9,-73.3 -4.9,-72.7 -4.9,-80.9 -4.3,-78.6 -4.3,-78 -4.3,-77.4 -4.3,-76.8 -4.3,-76.3 -4.3,-75.7 -4.3,-75.1 -4.3,-74.5 -4.3,-73.9 -4.3,-73.3 -4.3,-72.8 -4.3,-72.2 -4.3,-71.6 -4.3,-71 -4.3,-80.4 -3.7,-78 -3.7,-77.5 -3.7,-76.9 -3.7,-76.3 -3.7,-75.7 -3.7,-75.1 -3.7,-74.6 -3.7,-74 -3.7,-73.4 -3.7,-72.8 -3.7,-72.2 -3.7,-71.6 -3.7,-71.1 -3.7,-77.5 -3.2,-76.9 -3.2,-76.3 -3.2,-75.7 -3.2,-75.2 -3.2,-74.6 -3.2,-74 -3.2,-73.4 -3.2,-72.8 -3.2,-72.3 -3.2,-71.7 -3.2,-71.1 -3.2,-70.5 -3.2,-76.4 -2.6,-75.8 -2.6,-75.2 -2.6,-74.6 -2.6,-74 -2.6,-73.5 -2.6,-72.9 -2.6,-72.3 -2.6,-71.7 -2.6,-71.1 -2.6,-70.6 -2.6,-75.8 -2,-75.2 -2,-74.6 -2,-74.1 -2,-73.5 -2,-75.2 -1.4,-74.7 -1.4,-74.1 -1.4,-75.3 -0.8,-74.7 -0.8,-75.3 -0.3", "contorno": "-69.9 -4.3,-70.8 -4.3,-70.9 -4.4,-71.7 -4.6,-72.9 -5.3,-73 -5.7,-73.2 -6.1,-73.1 -6.6,-73.7 -6.9,-73.7 -7.3,-74 -7.5,-73.6 -8.4,-73 -9,-73.2 -9.5,-72.6 -9.5,-72.2 -10.1,-71.3 -10.1,-70.5 -9.5,-70.5 -11,-70.1 -11.1,-69.5 -11,-68.7 -12.6,-68.9 -12.9,-68.9 -14.5,-69.3 -15,-69.2 -15.3,-69.4 -15.7,-69 -16.5,-69.9 -18.1,-70.4 -18.3,-71.4 -17.8,-71.5 -17.4,-73.4 -16.4,-75.2 -15.3,-76 -14.6,-76.4 -13.8,-76.3 -13.5,-77.1 -12.2,-78.1 -10.4,-79 -8.4,-79.4 -7.9,-79.8 -7.2,-80.5 -6.5,-81.3 -6.1,-80.9 -5.7,-81.4 -4.7,-81.1 -4,-80.3 -3.4,-80.2 -3.8,-80.5 -4.1,-80.4 -4.4,-80 -4.3,-79.6 -4.5,-79.2 -5,-78.6 -4.5,-78.5 -3.9,-77.8 -3,-76.6 -2.6,-75.5 -1.6,-75.2 -0.9,-75.4 -0.2,-75.1 -0.1,-74.4 -0.5,-74.1 -1,-73.7 -1.3,-73.1 -2.3,-72.3 -2.4,-71.8 -2.2,-71.4 -2.3,-70.8 -2.3,-70 -2.7,-70.7 -3.7,-70.4 -3.8,-69.9 -4.3"};

  function crearGlobo(cont){
    var cv = cont.querySelector('canvas');
    if(!cv || !cv.getContext) return null;
    var ctx = cv.getContext('2d'), RAD = Math.PI / 180, CFG = CFG_GLOBO;

    function uni(lo, la){ var cl = Math.cos(la * RAD); return [cl * Math.cos(lo * RAD), cl * Math.sin(lo * RAD), Math.sin(la * RAD)]; }
    // Pequeño desorden en los puntos para que no se note la cuadrícula
    function azar(i){ var x = Math.sin(i * 127.1 + i * i * 0.013) * 43758.5453; return x - Math.floor(x); }
    function leerNube(t, esc){
      if(!t) return [];
      return t.split(',').map(function(p, i){
        var a = p.split(' '), lo = +a[0] + (azar(i) - .5) * esc, la = +a[1] + (azar(i + 7777) - .5) * esc;
        var u = uni(lo, la); u.push(.45 + .55 * azar(i + 313)); u.push(.75 + .75 * azar(i + 991));   // brillo y tamaño
        return u;
      });
    }
    var tierra = leerNube(DATOS_GLOBO.tierra, .85), peruPts = leerNube(DATOS_GLOBO.peru, .30);
    var contorno = (DATOS_GLOBO.contorno || '').split('|').map(function(r){
      return r.split(',').map(function(p){ var a = p.split(' '); return uni(+a[0], +a[1]); }); });

    /* Malla triangular sobre la esfera (esfera geodésica) */
    var nodos, malla = (function(){
      var t = (1 + Math.sqrt(5)) / 2;
      var v = [[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]]
        .map(function(p){ var m = Math.hypot(p[0], p[1], p[2]); return [p[0]/m, p[1]/m, p[2]/m]; });
      var f = [[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],
               [3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];
      for(var it = 0; it < 4; it++){
        var nf = [], cache = {};
        var medio = function(a, b){
          var k = Math.min(a, b) + '_' + Math.max(a, b);
          if(cache[k] !== undefined) return cache[k];
          var p = [v[a][0] + v[b][0], v[a][1] + v[b][1], v[a][2] + v[b][2]], m = Math.hypot(p[0], p[1], p[2]);
          v.push([p[0]/m, p[1]/m, p[2]/m]); return (cache[k] = v.length - 1);
        };
        f.forEach(function(t3){ var a = medio(t3[0], t3[1]), b = medio(t3[1], t3[2]), c = medio(t3[2], t3[0]);
          nf.push([t3[0], a, c], [t3[1], b, a], [t3[2], c, b], [a, b, c]); });
        f = nf;
      }
      var set = {}, ar = [];
      f.forEach(function(t3){ [[t3[0], t3[1]], [t3[1], t3[2]], [t3[2], t3[0]]].forEach(function(e){
        var k = Math.min(e[0], e[1]) + '_' + Math.max(e[0], e[1]);
        if(!set[k]){ set[k] = 1; ar.push([v[e[0]], v[e[1]]]); } }); });
      nodos = v; return ar;
    })();

    /* Pines (ciudades + origen) y arcos que salen de Oxapampa */
    var pines = [].slice.call(cont.querySelectorAll('.g-pin')).map(function(el){
      return { el:el, u:uni(+el.dataset.lon, +el.dataset.lat) };
    });
    var origen = uni(ORIGEN_GLOBO.lon, ORIGEN_GLOBO.lat);
    var arcos = CIUDADES_GLOBO.map(function(c, k){
      var p = uni(c.lon, c.lat), pts = [], N = 36;
      for(var i = 0; i <= N; i++){
        var t = i / N, a = [origen[0] + (p[0] - origen[0]) * t, origen[1] + (p[1] - origen[1]) * t, origen[2] + (p[2] - origen[2]) * t];
        var m = Math.hypot(a[0], a[1], a[2]), alto = 1 + .03 * Math.sin(Math.PI * t);
        pts.push([a[0]/m * alto, a[1]/m * alto, a[2]/m * alto]);
      }
      return { pts:pts, fase:k / CIUDADES_GLOBO.length };
    });

    var W = 0, Hc = 0, R = 0, CX = 0, CY = 0, dpr = 1;
    function medir(){
      var caja = cont.getBoundingClientRect(); if(!caja.width) return false;
      dpr = Math.min(2, devicePixelRatio || 1);
      W = caja.width; Hc = caja.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(Hc * dpr);
      R = CFG.radio * Hc; CX = W / 2;
      CY = CFG.peruY * Hc + R * Math.sin(CFG.inclina * RAD);   // así el Perú queda a la altura "peruY"
      return true;
    }
    var cosL, sinL, cosP, sinP;
    function girar(u){
      var x = u[0] * cosL + u[1] * sinL, y = -u[0] * sinL + u[1] * cosL;
      return [y, u[2] * cosP - x * sinP, u[2] * sinP + x * cosP];   // [este, norte, hacia el espectador]
    }
    function px(p){ return CX + R * p[0]; } function py(p){ return CY - R * p[1]; }

    function dibujar(lon, lat, tiempo){
      if(!W) return;
      cosL = Math.cos(lon * RAD); sinL = Math.sin(lon * RAD); cosP = Math.cos(lat * RAD); sinP = Math.sin(lat * RAD);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, Hc);
      /* halo exterior (atmósfera sobre el borde del planeta) */
      var halo = ctx.createRadialGradient(CX, CY, R * .985, CX, CY, R * 1.06);
      halo.addColorStop(0, 'rgba(170,225,110,0.30)'); halo.addColorStop(1, 'rgba(141,198,63,0)');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(CX, CY, R * 1.06, 0, 6.2832); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, R, 0, 6.2832); ctx.clip();
      /* esfera */
      var bola = ctx.createRadialGradient(CX - R * .35, CY - R * .4, R * .05, CX, CY, R);
      bola.addColorStop(0, '#113221'); bola.addColorStop(.5, '#0a2014'); bola.addColorStop(1, '#04100a');
      ctx.fillStyle = bola; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
      /* malla */
      ctx.strokeStyle = 'rgba(141,198,63,0.10)'; ctx.lineWidth = .5; ctx.beginPath();
      for(var i = 0; i < malla.length; i++){
        var a = girar(malla[i][0]), b = girar(malla[i][1]);
        if(a[2] < .06 || b[2] < .06) continue;
        ctx.moveTo(px(a), py(a)); ctx.lineTo(px(b), py(b));
      }
      ctx.stroke();
      ctx.fillStyle = 'rgba(191,240,106,0.5)';
      for(var v2 = 0; v2 < nodos.length; v2++){
        var nv = girar(nodos[v2]); if(nv[2] < .12) continue;
        ctx.globalAlpha = .15 + .5 * nv[2]; ctx.fillRect(px(nv) - .9, py(nv) - .9, 1.8, 1.8);
      }
      ctx.globalAlpha = 1;
      /* puntos de luz de la tierra */
      var s = Math.max(1, R * .0026);
      ctx.fillStyle = 'rgba(168,219,160,0.9)';
      for(var j = 0; j < tierra.length; j++){
        var d0 = tierra[j], p = girar(d0); if(p[2] < .05) continue;
        var k = (p[2] - .05) / .95, t1 = s * d0[4];
        ctx.globalAlpha = (.08 + .52 * k * k) * d0[3]; ctx.fillRect(px(p) - t1/2, py(p) - t1/2, t1, t1);
      }
      /* Perú: resplandor suave y puntos más brillantes */
      var cPeru = girar(uni(CFG.lonPeru, CFG.latPeru));
      ctx.globalAlpha = 1;
      if(cPeru[2] > .05){
        var gl = ctx.createRadialGradient(px(cPeru), py(cPeru), 0, px(cPeru), py(cPeru), R * .17);
        gl.addColorStop(0, 'rgba(141,198,63,0.30)'); gl.addColorStop(1, 'rgba(141,198,63,0)');
        ctx.fillStyle = gl; ctx.beginPath(); ctx.arc(px(cPeru), py(cPeru), R * .17, 0, 6.2832); ctx.fill();
      }
      ctx.fillStyle = '#d6ff8a';
      var sp = Math.max(1.2, R * .003);
      for(var q = 0; q < peruPts.length; q++){
        var d1 = peruPts[q], pp = girar(d1); if(pp[2] < .05) continue;
        var t2 = sp * d1[4]; ctx.globalAlpha = (.30 + .55 * pp[2]) * d1[3] * d1[3];
        ctx.fillRect(px(pp) - t2/2, py(pp) - t2/2, t2, t2);
      }
      ctx.globalAlpha = 1;
      /* contorno del Perú */
      ctx.strokeStyle = 'rgba(191,240,106,0.85)'; ctx.lineWidth = 1.3; ctx.lineJoin = 'round'; ctx.beginPath();
      for(var r = 0; r < contorno.length; r++){
        var abierto = false;
        for(var t3 = 0; t3 < contorno[r].length; t3++){
          var c = girar(contorno[r][t3]);
          if(c[2] < .02){ abierto = false; continue; }
          if(abierto) ctx.lineTo(px(c), py(c)); else ctx.moveTo(px(c), py(c));
          abierto = true;
        }
      }
      ctx.stroke();
      /* arcos Oxapampa → ciudad, con un destello que viaja */
      for(var m = 0; m < arcos.length; m++){
        var A = arcos[m], pts = [];
        for(var n = 0; n < A.pts.length; n++) pts.push(girar(A.pts[n]));
        ctx.strokeStyle = 'rgba(214,255,138,0.38)'; ctx.lineWidth = 1; ctx.beginPath();
        ctx.moveTo(px(pts[0]), py(pts[0]));
        for(var n2 = 1; n2 < pts.length; n2++) ctx.lineTo(px(pts[n2]), py(pts[n2]));
        ctx.stroke();
        var u = ((tiempo / 3.5 + A.fase) % 1 + 1) % 1;
        var d = pts[Math.min(pts.length - 1, Math.floor(u * (pts.length - 1)))];
        var h2 = ctx.createRadialGradient(px(d), py(d), 0, px(d), py(d), R * .012);
        h2.addColorStop(0, 'rgba(220,255,160,0.95)'); h2.addColorStop(1, 'rgba(220,255,160,0)');
        ctx.fillStyle = h2; ctx.beginPath(); ctx.arc(px(d), py(d), R * .012, 0, 6.2832); ctx.fill();
      }
      /* luz en el borde del planeta */
      var rim = ctx.createRadialGradient(CX, CY, R * .86, CX, CY, R);
      rim.addColorStop(0, 'rgba(141,198,63,0)'); rim.addColorStop(1, 'rgba(197,247,120,0.22)');
      ctx.fillStyle = rim; ctx.fillRect(CX - R, CY - R, R * 2, R * 2);
      ctx.restore();
      ctx.strokeStyle = 'rgba(205,250,140,0.55)'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(CX, CY, R, 0, 6.2832); ctx.stroke();
      /* pines: se ubican encima del lienzo */
      for(var z = 0; z < pines.length; z++){
        var pu = girar(pines[z].u), el = pines[z].el;
        if(pu[2] < .06){ el.style.opacity = 0; continue; }
        el.style.opacity = 1; el.style.left = px(pu) + 'px'; el.style.top = py(pu) + 'px';
      }
    }

    var activo = false, quieto = matchMedia('(prefers-reduced-motion: reduce)').matches, t0 = null, idBucle = 0;
    function vista(seg){
      var f = seg / CFG.segundos * Math.PI * 2;
      dibujar(CFG.lonPeru + Math.sin(f) * CFG.giro, CFG.latPeru - CFG.inclina + Math.sin(f * .5) * 1.2, seg);
    }
    function bucle(ahora){
      if(!activo) return;
      if(t0 === null) t0 = ahora;
      vista(quieto ? 0 : (ahora - t0) / 1000);
      idBucle = requestAnimationFrame(bucle);
    }
    addEventListener('resize', function(){ if(activo && medir()) vista(0); });
    return {
      encender:function(){ if(activo || !medir()) return; activo = true; t0 = null; idBucle = requestAnimationFrame(bucle); },
      apagar:function(){ activo = false; cancelAnimationFrame(idBucle); }
    };
  }

  /* HTML de la ventana del globo (pines incluidos) */
  function htmlGlobo(){
    var gota = '<svg viewBox="0 0 24 32" aria-hidden="true"><path d="M12 31s10-11.2 10-19A10 10 0 0 0 2 12c0 7.8 10 19 10 19z"/><circle cx="12" cy="12" r="3.6"/></svg>';
    var h = '<div class="mfx-modal__foto mfx-globo" aria-hidden="true">' +
      '<canvas class="g-lienzo"></canvas>' +
      '<p class="mfx-globo__lema" data-es="De Oxapampa al Perú" data-en="From Oxapampa to all of Peru">De Oxapampa al Perú</p>';
    CIUDADES_GLOBO.forEach(function(c){
      h += '<span class="g-pin" data-lon="' + c.lon + '" data-lat="' + c.lat + '">' + gota + '<span class="g-nombre">' + c.nombre + '</span></span>';
    });
    h += '<span class="g-pin g-pin--origen" data-lon="' + ORIGEN_GLOBO.lon + '" data-lat="' + ORIGEN_GLOBO.lat + '"><i></i>' +
         '<span class="g-nombre"><span data-es="Oxapampa · nuestro origen" data-en="Oxapampa · our origin">Oxapampa · nuestro origen</span></span></span>';
    return h + '</div>';
  }

  var globo = null;   // se crea la primera vez que se abre Contáctanos

  function construirModal(){
    if(document.getElementById('modalContacto')) return;
    var wrap = document.createElement('div');
    wrap.id='modalContacto';
    wrap.className='mfx-modal';
    wrap.setAttribute('aria-hidden','true');
    wrap.innerHTML = ''+
    '<div class="mfx-modal__fondo" data-cerrar></div>'+
    // Dos ventanas: formulario (izquierda) + video del menú (derecha)
    '<div class="mfx-modal__ventanas">'+
    '<div class="mfx-modal__caja" role="dialog" aria-modal="true" aria-labelledby="mfxModalTitulo">'+
      '<button class="mfx-modal__x" type="button" aria-label="Cerrar" data-cerrar>&#10005;</button>'+
      '<div class="mfx-form">'+
        '<h3 id="mfxModalTitulo" class="mfx-modal__titulo">Contáctanos</h3>'+
        '<p class="mfx-modal__sub">Déjanos tus datos y te responderemos a la brevedad.</p>'+
        '<form id="mfxForm" novalidate>'+
          '<div class="grid">'+
            '<div class="mfx-campo"><label>Nombre</label>'+
              '<input type="text" name="nombre" required data-es="Nombre completo" data-en="Full name" placeholder="Nombre completo">'+
              '<small class="mfx-error"></small></div>'+
            '<div class="mfx-campo"><label>Cargo</label>'+
              '<input type="text" name="cargo" required data-es="Tu cargo" data-en="Your role" placeholder="Tu cargo">'+
              '<small class="mfx-error"></small></div>'+
            '<div class="mfx-campo"><label>Empresa</label>'+
              '<input type="text" name="empresa" required data-es="Nombre de la empresa" data-en="Company name" placeholder="Nombre de la empresa">'+
              '<small class="mfx-error"></small></div>'+
            '<div class="mfx-campo"><label>Teléfono</label>'+
              '<input type="tel" name="telefono" required inputmode="numeric" maxlength="15" placeholder="+51 999 999 999">'+
              '<small class="mfx-error"></small></div>'+
            '<div class="mfx-campo full"><label>Correo corporativo</label>'+
              '<input type="email" name="correo" required placeholder="ejemplo@empresa.com">'+
              '<small class="mfx-error"></small></div>'+
            '<div class="mfx-campo full"><label>Comentarios</label>'+
              '<textarea name="comentarios" rows="2" required data-es="Cuéntanos en qué podemos ayudarte" data-en="Tell us how we can help you" placeholder="Cuéntanos en qué podemos ayudarte"></textarea>'+
              '<small class="mfx-error"></small></div>'+
          '</div>'+
          '<button type="submit" class="mfx-enviar">Enviar</button>'+
        '</form>'+
      '</div>'+
      '<div class="mfx-success">'+
        '<div class="mfx-success__foto" style="background-image:url(images/hero-1.jpg)"></div>'+
        '<div class="mfx-success__logo"><img src="images/logo-negro.png" alt="MAFROX"></div>'+
        '<p class="mfx-success__titulo" data-es="En Mafrox queremos saber más de ti" data-en="At Mafrox we want to know more about you">En Mafrox queremos saber más de ti</p>'+
        '<p class="mfx-success__texto" data-es="Gracias por escribirnos. Hemos recibido tu mensaje y uno de nuestros especialistas se pondrá en contacto contigo muy pronto." data-en="Thank you for writing to us. We have received your message and one of our specialists will contact you very soon.">Gracias por escribirnos. Hemos recibido tu mensaje y uno de nuestros especialistas se pondrá en contacto contigo muy pronto.</p>'+
      '</div>'+
    '</div>'+
    // Ventana derecha: video en bucle o globo del Perú, según
    // VENTANA_CONTACTO (busca "QUÉ VA EN LA VENTANA DERECHA" más arriba).
    (VENTANA_CONTACTO === 'globo' ? htmlGlobo() :
     VENTANA_CONTACTO === 'logo' ?
      '<div class="mfx-modal__foto mfx-logo" aria-hidden="true">'+
        '<video id="mfxVideoLogo" muted playsinline preload="auto" poster="'+POSTER_CONTACTO+'" src="'+VIDEO_CONTACTO+'"></video>'+
        '<canvas></canvas>'+
      '</div>' :
      '<div class="mfx-modal__foto" aria-hidden="true">'+
        '<video id="mfxVideoContacto" muted loop playsinline preload="none" poster="'+POSTER_CONTACTO+'">'+
          '<source src="'+VIDEO_CONTACTO+'" type="video/mp4">'+
        '</video>'+
      '</div>')+
    '</div>';
    document.body.appendChild(wrap);

    wrap.querySelectorAll('[data-cerrar]').forEach(function(el){
      el.addEventListener('click', cerrarContacto);
    });
    document.addEventListener('keydown', function(e){
      if(e.key==='Escape' && wrap.classList.contains('abierto')) cerrarContacto();
    });

    var form = wrap.querySelector('#mfxForm');
    // Teléfono: solo dígitos, espacios, + , - , ( )
    var tel = form.querySelector('input[name="telefono"]');
    tel.addEventListener('input', function(){
      this.value = this.value.replace(/[^0-9+\-() ]/g,'');
    });
    form.addEventListener('submit', enviarContacto);
  }

  function textoError(clave){ return (LANG==='en' && DICT[clave])? DICT[clave] : clave; }

  function validar(form){
    var ok = true;
    function marcar(campo, mensaje){
      var cont = campo.closest('.mfx-campo');
      var err = cont.querySelector('.mfx-error');
      if(mensaje){ cont.classList.add('con-error'); err.textContent = mensaje; ok=false; }
      else { cont.classList.remove('con-error'); err.textContent=''; }
    }
    var reqMsg = textoError('Este campo es obligatorio');
    // Textos: obligatorios y con más de 3 caracteres
    ['nombre','cargo','empresa','comentarios'].forEach(function(n){
      var c = form.querySelector('[name="'+n+'"]'), v = c.value.trim();
      if(!v) marcar(c, reqMsg);
      else if(v.length <= 3) marcar(c, textoError('Escribe al menos 4 caracteres'));
      else marcar(c, '');
    });
    // Correo: formato @ dominio . tld
    var correo = form.querySelector('[name="correo"]');
    // Debe tener @, un dominio con punto y una terminación de 2 a 12 letras
    var reCorreo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,12}$/;
    var vc = correo.value.trim();
    if(!vc) marcar(correo, reqMsg);
    else if(!reCorreo.test(vc) || /\.\./.test(vc)) marcar(correo, textoError('Ingresa un correo válido (ejemplo@dominio.com)'));
    else marcar(correo,'');
    // Teléfono: entre 9 y 15 dígitos tras quitar símbolos
    var tel = form.querySelector('[name="telefono"]');
    var soloDigitos = tel.value.replace(/[^0-9]/g,'');
    if(!tel.value.trim()) marcar(tel, reqMsg);
    else if(soloDigitos.length<9 || soloDigitos.length>15) marcar(tel, textoError('Ingresa un teléfono válido (mínimo 9 dígitos)'));
    else marcar(tel,'');
    return ok;
  }

  function enviarContacto(e){
    e.preventDefault();
    var form = e.target;
    if(!validar(form)) return;
    var d = {
      nombre: form.nombre.value.trim(),
      cargo: form.cargo.value.trim(),
      empresa: form.empresa.value.trim(),
      telefono: form.telefono.value.trim(),
      correo: form.correo.value.trim(),
      comentarios: form.comentarios.value.trim()
    };
    var boton = form.querySelector('.mfx-enviar');
    var textoOriginal = boton.textContent;
    boton.disabled = true;
    boton.textContent = (LANG==='en') ? 'Sending…' : 'Enviando…';

    var asunto = 'Mensaje de la web de Mafrox, alguien quiere comunicarse contigo';
    var cuerpoTexto =
      'Nombre: '+d.nombre+'\n'+
      'Cargo: '+d.cargo+'\n'+
      'Empresa: '+d.empresa+'\n'+
      'Teléfono: '+d.telefono+'\n'+
      'Correo corporativo: '+d.correo+'\n\n'+
      'Comentarios:\n'+d.comentarios+'\n';

    function mostrarExito(){
      marcarConversion('formulario');   // Google Ads: formulario enviado
      var wrap = document.getElementById('modalContacto');
      wrap.classList.add('enviado');
      boton.disabled = false;
      boton.textContent = textoOriginal;
      form.reset();
    }
    function usarMailto(){
      // Respaldo si el envío directo falla (por ejemplo, sin conexión):
      // abre el correo del usuario con todo ya redactado, a ambos destinatarios.
      var url = 'mailto:'+DESTINO+(DESTINO_CC? ','+DESTINO_CC : '')+'?subject='+encodeURIComponent(asunto)+'&body='+encodeURIComponent(cuerpoTexto);
      window.location.href = url;
      mostrarExito();
    }

    /* ENVÍO DEL FORMULARIO
       1º Web3Forms (si hay CLAVE_WEB3FORMS): envía de verdad, sin límite.
       2º FormSubmit: respaldo mientras no haya clave.
       3º Si ninguno responde, se abre el correo del visitante ya redactado. */
    function porFormSubmit(){
      return fetch('https://formsubmit.co/ajax/'+DESTINO, {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          _subject: asunto,
          _cc: DESTINO_CC || undefined,
          Nombre:d.nombre, Cargo:d.cargo, Empresa:d.empresa,
          'Teléfono':d.telefono, 'Correo corporativo':d.correo, Comentarios:d.comentarios
        })
      }).then(function(r){ if(!r.ok) throw new Error('formsubmit'); return r.json(); });
    }
    function porWeb3Forms(){
      return fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
        body: JSON.stringify({
          access_key: CLAVE_WEB3FORMS,
          subject: asunto,
          from_name: 'Web de Mafrox',
          replyto: d.correo,
          ccemail: DESTINO_CC || undefined,
          Nombre:d.nombre, Cargo:d.cargo, Empresa:d.empresa,
          'Teléfono':d.telefono, 'Correo corporativo':d.correo, Comentarios:d.comentarios
        })
      }).then(function(r){ return r.json(); }).then(function(j){
        if(!j || j.success !== true) throw new Error('web3forms');
        return j;
      });
    }

    var envio = CLAVE_WEB3FORMS ? porWeb3Forms() : porFormSubmit();
    envio.then(mostrarExito).catch(function(){
      if(CLAVE_WEB3FORMS) return porFormSubmit().then(mostrarExito).catch(usarMailto);
      usarMailto();
    });
  }

  /* MENSAJE YA ESCRITO EN "COMENTARIOS"
     Al abrir el formulario se escribe solo un mensaje según dónde esté
     el visitante:
       · desde un botón "Cotiza" → el producto o corte de ese botón
       · desde cualquier otro botón → el producto de la página, que se
         define en la etiqueta <body data-cotiza="..." data-cotiza-en="...">
         (si la página no lo tiene, el campo queda vacío)
     Si el visitante ya escribió algo suyo, no se toca. */
  var mensajeAuto = '';
  function mensajeCotizar(producto){
    if(!producto) return '';
    return LANG === 'en' ? 'Hello Mafrox, I am interested in a quote for ' + producto + '.'
                         : 'Hola Mafrox, estoy interesado en cotizar ' + producto + '.';
  }
  function abrirContacto(producto){
    construirModal();
    var wrap = document.getElementById('modalContacto');
    wrap.classList.add('abierto');
    wrap.setAttribute('aria-hidden','false');
    var t = wrap.querySelector('textarea[name="comentarios"]');
    if(typeof producto !== 'string'){
      var b = document.body;
      producto = (LANG === 'en' ? (b.getAttribute('data-cotiza-en') || b.getAttribute('data-cotiza')) : b.getAttribute('data-cotiza')) || '';
    }
    if(t && (t.value === '' || t.value === mensajeAuto)){ mensajeAuto = mensajeCotizar(producto); t.value = mensajeAuto; }
    // Logo con video: corre la primera vez; después queda quieto
    var panelLogo = wrap.querySelector('.mfx-logo');
    if(panelLogo && getComputedStyle(panelLogo).display !== 'none'){
      if(!logoContacto) logoContacto = crearLogoContacto(panelLogo);
      if(logoContacto) logoContacto.mostrar();
    }
    // El video (o el globo) solo arranca si su ventana se ve (en celular está oculta)
    var vid = wrap.querySelector('#mfxVideoContacto');
    if(vid && getComputedStyle(vid.parentNode).display !== 'none'){ var pr = vid.play(); if(pr && pr.catch) pr.catch(function(){}); }
    var panelGlobo = wrap.querySelector('.mfx-globo');
    if(panelGlobo && getComputedStyle(panelGlobo).display !== 'none'){
      if(!globo) globo = crearGlobo(panelGlobo);
      if(globo) globo.encender();
    }
    // El modal tiene fondo oscuro y es un overlay fijo (no una sección de
    // scroll), así que el detector normal de fondo no lo ve. Forzamos aquí
    // el color de cursor claro para que siga siendo visible sobre el modal.
    document.body.classList.add('modal-contacto-abierto');
    // aplicar idioma actual a los placeholders del modal recién creado
    aplicarIdioma(LANG);
    if(typeof lenisCerrarMenuMafrox==='function') lenisCerrarMenuMafrox();
  }
  function cerrarContacto(){
    var wrap = document.getElementById('modalContacto');
    if(!wrap) return;
    wrap.classList.remove('abierto');
    wrap.classList.remove('enviado');
    var vid = wrap.querySelector('#mfxVideoContacto');
    if(vid) vid.pause();
    if(globo) globo.apagar();   // deja de dibujar: ahorra batería
    wrap.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-contacto-abierto');
  }
  window.mafroxAbrirContacto = abrirContacto;

  /* ================================================================
     3) BOTÓN FLOTANTE DE WHATSAPP  (ícono de Mafrox)
        Al hacer click, del botón nace un pequeño menú con dos
        opciones de contacto. Cada una abre WhatsApp con el mensaje
        ya escrito, listo para que el visitante agregue su nombre.
        El menú se repliega solo en cuanto el cursor sale de él.

        PARA CAMBIAR UN NÚMERO O UN CARGO: edita la lista de abajo.
          · cargo / cargoEn : texto en español / inglés
          · numero          : código de país (51) + celular, sin espacios
        El orden de la lista es el orden en que aparecen (de arriba abajo).
     ================================================================ */
  var AGENTES_WHATS = [
    /* Nombre que ve el visitante en cada opción (cargo = español, cargoEn = inglés).
       Provisional: "Asesor 1 / Asesor 2". Cuando se defina qué atiende cada uno,
       cambia solo el texto entre comillas (ej. 'Retail e industria'). */
    { cargo:'Asesor 1', cargoEn:'Advisor 1', numero:'51997467551' }, // Franks
    { cargo:'Asesor 2', cargoEn:'Advisor 2', numero:'51939807950' }  // Erika
  ];
  var MENSAJE_WHATS = 'Hola, vengo de la web de Mafrox, mi nombre es ';
  // Tiempo (en milisegundos) que espera el menú antes de replegarse al
  // quitar el cursor. Súbelo si se cierra demasiado rápido.
  var ESPERA_CIERRE = 220;

  function construirWhatsApp(){
    if(document.getElementById('mfxWhatsWrap')) return;
    var wrap = document.createElement('div');
    wrap.id = 'mfxWhatsWrap';
    wrap.className = 'mfx-whats-wrap';

    var flecha = '<svg class="mfx-whats-op__flecha" viewBox="0 0 16 16" fill="none" aria-hidden="true">'+
                   '<path d="M5 11L11 5M6 5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'+
                 '</svg>';

    var opcionesHtml = AGENTES_WHATS.map(function(ag){
      var url = 'https://wa.me/'+ag.numero+'?text='+encodeURIComponent(MENSAJE_WHATS);
      return '<a class="mfx-whats-op" role="menuitem" href="'+url+'" target="_blank" rel="noopener" tabindex="-1">'+
               '<span data-es="'+ag.cargo+'" data-en="'+ag.cargoEn+'">'+ag.cargo+'</span>'+flecha+
             '</a>';
    }).join('');

    wrap.innerHTML =
      '<div class="mfx-whats-menu" id="mfxWhatsMenu" role="menu" aria-label="WhatsApp">'+
        opcionesHtml+
      '</div>'+
      '<button type="button" class="mfx-whats" id="mfxWhats" aria-label="WhatsApp MAFROX" aria-expanded="false" aria-haspopup="menu" aria-controls="mfxWhatsMenu">'+
        '<img src="images/mafrox-isotipo-blanco.png" alt="WhatsApp MAFROX">'+
        '<span class="mfx-whats__tooltip" data-es="Chatea con Mafrox" data-en="Chat with Mafrox">Chatea con Mafrox</span>'+
      '</button>';
    document.body.appendChild(wrap);

    var btn = wrap.querySelector('#mfxWhats');
    var opciones = wrap.querySelectorAll('.mfx-whats-op');
    var temporizador = null;

    function abrir(){
      clearTimeout(temporizador);
      wrap.classList.add('abierto');
      btn.setAttribute('aria-expanded','true');
      opciones.forEach(function(o){ o.setAttribute('tabindex','0'); });
    }
    function cerrar(){
      clearTimeout(temporizador);
      wrap.classList.remove('abierto');
      btn.setAttribute('aria-expanded','false');
      opciones.forEach(function(o){ o.setAttribute('tabindex','-1'); });
    }

    btn.addEventListener('click', function(e){
      e.stopPropagation();
      if(wrap.classList.contains('abierto')) cerrar(); else abrir();
    });

    // Se repliega en cuanto el cursor sale del botón + menú (con una
    // pequeña espera para que no se cierre al pasar del botón al menú).
    // Solo aplica a mouse: en celulares se cierra tocando fuera.
    wrap.addEventListener('pointerleave', function(e){
      if(e.pointerType !== 'mouse' || !wrap.classList.contains('abierto')) return;
      temporizador = setTimeout(cerrar, ESPERA_CIERRE);
    });
    wrap.addEventListener('pointerenter', function(){ clearTimeout(temporizador); });

    // Al elegir una opción, el menú se cierra.
    opciones.forEach(function(o){ o.addEventListener('click', function(){ marcarConversion('whatsapp'); setTimeout(cerrar, 150); }); });   // Google Ads: clic en WhatsApp

    // Cerrar al tocar/hacer click en cualquier otro lugar de la página.
    document.addEventListener('click', function(e){
      if(wrap.classList.contains('abierto') && !wrap.contains(e.target)) cerrar();
    });
    // Cerrar si el foco del teclado sale del menú.
    wrap.addEventListener('focusout', function(e){
      if(e.relatedTarget && !wrap.contains(e.relatedTarget)) cerrar();
    });
    // Cerrar con Escape, igual que el modal de contacto.
    document.addEventListener('keydown', function(e){
      if(e.key==='Escape' && wrap.classList.contains('abierto')){ cerrar(); btn.focus(); }
    });
  }

  /* ----------------------------------------------------------------
     Conectar el botón "Conversemos" (magnético, id="mag") de la
     página nuestro-partner.html con el modal de contacto.
     Se hace aquí (script independiente de GSAP) para que funcione
     aunque la animación de imán no cargue.
     ---------------------------------------------------------------- */
  /* Botón "Contacto" de la barra superior (junto al de Menú) */
  /* El cursor de bola se desactiva sobre el asistente de voz (ElevenLabs):
     ahí dentro conviene el cursor normal del sistema y así no se siente lento. */
  function cursorFueraDeWidgets(){
    document.addEventListener('pointerover', function(e){
      var t = e.target;
      var dentro = t && t.closest && (t.closest('elevenlabs-convai') || t.closest('[class*="convai"]'));
      document.body.classList.toggle('sin-cursor-propio', !!dentro);
    }, {passive:true});
  }

  function prepararBotonContacto(){
    var btn = document.getElementById('contactoBtn');
    if(!btn) return;
    btn.addEventListener('click', function(e){ e.preventDefault(); abrirContacto(); });
  }

  function prepararBotonMagnet(){
    var btn = document.getElementById('mag');
    if(!btn) return;
    btn.addEventListener('click', function(e){
      e.preventDefault();
      abrirContacto();
    });
  }

  /* ================================================================
     ARRANQUE
     ================================================================ */
  function init(){
    prepararPieMenu();
    iniciarContrasteMenu();
    prepararBotonMagnet();
    prepararBotonContacto();
    cursorFueraDeWidgets();
    construirWhatsApp();
    aplicarIdioma('es');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();


/* ==================================================================
   4a) INTRO MAFROX   · video de Oxapampa dentro del logo (en lienzo/canvas)
   (4b, el video del toro del inicio, se quitó el 4 nov: ahora es foto fija)
   4c) RECORRIDO      · "Del campo a tu mesa", paradas al hacer scroll
   4d) PUENTE DEL TORO· el isotipo cruza y arrastra el panel verde
   4e) NUESTRA GENTE  · clic = foto en grande con nombre y cargo
   ================================================================== */
(function(){
  'use strict';

  /* El scroll suave (Lenis) se crea en index.html; aquí solo lo usamos */
  function scrollSuave(){ return (typeof lenis !== 'undefined' && lenis) ? lenis : null; }

  /* ----------------------------------------------------------------
     4a) INTRO MAFROX — se dibuja en un lienzo (canvas)
     El video (o, si el celular no deja reproducirlo, su foto fija) se
     pinta y luego se "recorta" con la forma del logo. Funciona igual en
     iPhone, Android y computadora.
     AJUSTES QUE PUEDES CAMBIAR:
       T_ZOOM   = ms que tarda en ir de la letra gigante al logo completo
       T_PAUSA  = ms que el logo queda quieto al centro (se funde a blanco)
       T_VUELO  = ms que tarda en volar al menú
       ESPERA   = ms máximos esperando el video; luego arranca con la foto fija
     ---------------------------------------------------------------- */
  function intro(){
    var html = document.documentElement;
    var cont = document.getElementById('intro');
    if(!cont || !html.classList.contains('intro-activa')) return;

    var T_ZOOM = 1500, T_PAUSA = 400, T_VUELO = 700, ESPERA = 1200;
    var FOCO = { x: 0.158, y: 0.35 };           // punto del logo donde empieza el zoom (cuerpo del toro)
    var video = document.getElementById('introVideo');
    var lienzo = document.getElementById('introLienzo');
    var tapa = cont.querySelector('.intro-tapa');
    var ctx = lienzo && lienzo.getContext ? lienzo.getContext('2d') : null;
    var logo = document.querySelector('.barra-sup .marca img.logo-oscuro') || document.querySelector('.barra-sup .marca img');
    if(!ctx){ fin(); return; }

    var logoImg = new Image(); logoImg.src = 'images/logo-blanco.png';
    var fotoImg = new Image(); if(video.poster) fotoImg.src = video.poster;
    var PROP = 1900/574, dpr = Math.min(2, window.devicePixelRatio || 1), terminado = false;

    var L = scrollSuave(); if(L && L.stop) L.stop();

    function ajustar(){ lienzo.width = Math.round(innerWidth * dpr); lienzo.height = Math.round(innerHeight * dpr); }
    ajustar(); window.addEventListener('resize', ajustar);

    function suave(t){ return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }
    function lerp(a,b,t){ return a + (b-a)*t; }
    function listo(img){ return img.complete && img.naturalWidth > 0; }
    function fuente(){
      if(video.readyState >= 2 && video.videoWidth) return { el: video, w: video.videoWidth, h: video.videoHeight };
      if(listo(fotoImg)) return { el: fotoImg, w: fotoImg.naturalWidth, h: fotoImg.naturalHeight };
      return null;
    }
    // x, y, w en píxeles de pantalla · blanco = 0 (video) … 1 (logo blanco)
    function dibujar(x, y, w, blanco){
      var W = lienzo.width, H = lienzo.height;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, W, H);
      if(!listo(logoImg)) return;
      var f = fuente();
      if(f && blanco < 1){
        var e = Math.max(W / f.w, H / f.h);
        try{ ctx.drawImage(f.el, (W - f.w*e)/2, (H - f.h*e)/2, f.w*e, f.h*e); }catch(err){}
        if(blanco > 0){ ctx.fillStyle = 'rgba(255,255,255,' + blanco + ')'; ctx.fillRect(0, 0, W, H); }
      } else {
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H);
      }
      ctx.globalCompositeOperation = 'destination-in';      // deja solo lo que cae dentro del logo
      ctx.drawImage(logoImg, x*dpr, y*dpr, w*dpr, (w/PROP)*dpr);
      ctx.globalCompositeOperation = 'source-over';
    }
    function fin(){
      if(terminado) return; terminado = true;
      cont.style.display = 'none';
      html.classList.remove('intro-activa');
      window.removeEventListener('resize', ajustar);
      try{ video.pause(); }catch(e){}
      try{ localStorage.setItem('mafrox_intro_vista', '1'); }catch(e){}
      var L = scrollSuave(); if(L && L.start) L.start();
      if(window.ScrollTrigger) ScrollTrigger.refresh();
    }
    function anchoCentro(){ return innerHeight > innerWidth ? innerWidth * 0.9 : Math.min(innerWidth * 0.72, 920); }

    function correr(){
      if(logoImg.naturalWidth) PROP = logoImg.naturalWidth / logoImg.naturalHeight;
      var inicio = performance.now();
      var p = video.play(); if(p && p.catch) p.catch(function(){});   // si no puede, se ve la foto fija
      function cuadro(ahora){
        if(terminado) return;
        var cx = innerWidth/2, cy = innerHeight/2, w1 = anchoCentro(), w0 = w1 * 34;
        var t = ahora - inicio;
        if(t < T_ZOOM){
          var e = suave(t / T_ZOOM), w = w0 * Math.pow(w1/w0, e);
          dibujar(cx - lerp(FOCO.x,.5,e)*w, cy - lerp(FOCO.y,.5,e)*(w/PROP), w, 0);
        } else if(t < T_ZOOM + T_PAUSA){
          dibujar(cx - w1/2, cy - w1/PROP/2, w1, Math.min(1, (t - T_ZOOM) / T_PAUSA));
        } else if(t < T_ZOOM + T_PAUSA + T_VUELO){
          var e2 = suave((t - T_ZOOM - T_PAUSA) / T_VUELO);
          var d = logo ? logo.getBoundingClientRect() : null;
          if(d && d.width > 0){
            dibujar(lerp(cx - w1/2, d.left, e2), lerp(cy - w1/PROP/2, d.top, e2), lerp(w1, d.width, e2), 1);
          } else {
            dibujar(cx - w1/2, cy - w1/PROP/2, w1, 1); lienzo.style.opacity = 1 - e2;
          }
          tapa.style.opacity = 1 - e2;
          cont.style.backgroundColor = 'rgba(11,15,12,' + (1 - e2) + ')';
          if(e2 > 0.05) video.style.visibility = 'hidden';
        } else { fin(); return; }
        requestAnimationFrame(cuadro);
      }
      requestAnimationFrame(cuadro);
    }

    cont.querySelector('.intro-saltar').addEventListener('click', fin);

    // Arranca cuando el video ya se mueve, o a más tardar en ESPERA ms (con la foto fija).
    var arrancado = false;
    function arrancar(){ if(arrancado || terminado) return; arrancado = true; correr(); }
    function cuandoLogo(fn){ if(listo(logoImg)) fn(); else { logoImg.onload = fn; logoImg.onerror = fin; } }
    cuandoLogo(function(){
      // primer cuadro inmediato: la letra gigante (con la foto fija si ya cargó)
      var w1 = anchoCentro(), w0 = w1 * 34;
      dibujar(innerWidth/2 - FOCO.x*w0, innerHeight/2 - FOCO.y*(w0/PROP), w0, 0);
      if(video.readyState >= 3 || !video.paused) arrancar();
      video.addEventListener('playing', arrancar, { once:true });
      video.addEventListener('canplay', arrancar, { once:true });
      setTimeout(arrancar, ESPERA);
    });
    setTimeout(function(){ if(!arrancado) fin(); }, 6000);   // seguro: nunca deja la página tapada
  }

  /* ----------------------------------------------------------------
     4c) RECORRIDO — del campo a tu mesa
     La sección mide 7 pantallas (CSS .recorrido{height:700vh}).
     Cada pantalla es una parada:
       parada 0 = vista general (texto de bienvenida)
       parada 1..6 = se reproduce recorrido-N.mp4 y aparece su texto
     Si el visitante sube, se muestra el cuadro final de la parada
     anterior (los videos no se reproducen al revés).
     ---------------------------------------------------------------- */
  function recorrido(){
    var sec = document.getElementById('recorrido');
    if(!sec) return;
    var vids   = [].slice.call(sec.querySelectorAll('.rc-video'));
    var datos  = [].slice.call(sec.querySelectorAll('.rc-datos li'));
    var puntos = [].slice.call(sec.querySelectorAll('.rc-puntos li'));
    var texto  = sec.querySelector('.rc-texto');
    var num = texto.querySelector('.rc-num'), tit = texto.querySelector('.rc-titulo'), fra = texto.querySelector('.rc-frase');
    var N = vids.length, actual = -1, cambioTexto = null;

    function idioma(){ return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es'; }
    function dos(n){ return (n < 10 ? '0' : '') + n; }
    function ponerTexto(i){
      var d = datos[i]; if(!d) return;
      var l = idioma();
      num.textContent = dos(i) + ' / ' + dos(N);
      tit.textContent = d.getAttribute('data-titulo-' + l);
      fra.textContent = d.getAttribute('data-frase-' + l);
    }
    function mostrar(v){ vids.forEach(function(x){ x.classList.toggle('visible', x === v); }); }
    function cargar(i){ var v = vids[i]; if(v && v.preload !== 'auto'){ v.preload = 'auto'; v.load(); } }
    function alFinal(v){
      function ir(){ try{ v.currentTime = Math.max(0, v.duration - 0.05); }catch(e){} }
      if(v.readyState >= 1) ir(); else v.addEventListener('loadedmetadata', ir, { once:true });
    }

    function irA(paso, adelante){
      if(paso === actual) return;
      vids.forEach(function(x){ x.pause(); });
      var v;
      if(paso === 0){
        v = vids[0]; try{ v.currentTime = 0; }catch(e){}
      } else {
        v = vids[paso-1];
        if(adelante && paso === actual + 1){
          try{ v.currentTime = 0; }catch(e){}
          var p = v.play(); if(p && p.catch) p.catch(function(){});
        } else {
          cargar(paso-1); alFinal(v);
        }
      }
      mostrar(v);
      cargar(paso); cargar(paso + 1);

      texto.classList.add('cambiando');
      clearTimeout(cambioTexto);
      cambioTexto = setTimeout(function(){ ponerTexto(paso); texto.classList.remove('cambiando'); }, 280);
      puntos.forEach(function(pt, k){ pt.classList.toggle('activo', k === paso); });
      sec.classList.toggle('avanzado', paso > 0);
      sec.classList.toggle('final', paso === N);      // entran los empaques Llanura
      actual = paso;
    }

    function pasoDesde(progreso){ return Math.max(0, Math.min(N, Math.floor(progreso * (N + 1)))); }

    if(window.ScrollTrigger){
      ScrollTrigger.create({
        trigger: sec, start: 'top top', end: 'bottom bottom',
        onUpdate: function(self){ irA(pasoDesde(self.progress), self.direction > 0); }
      });
    } else {
      var ultimo = 0;
      window.addEventListener('scroll', function(){
        var r = sec.getBoundingClientRect();
        var prog = Math.max(0, Math.min(1, -r.top / (r.height - innerHeight)));
        irA(pasoDesde(prog), scrollY > ultimo); ultimo = scrollY;
      }, { passive:true });
    }
    irA(0, true);

    // Cuando el visitante cambia ES / EN, el texto de la parada se actualiza
    new MutationObserver(function(){ if(actual >= 0) ponerTexto(actual); })
      .observe(document.documentElement, { attributes:true, attributeFilter:['lang'] });
  }

  /* ----------------------------------------------------------------
     4d) PUENTE DEL TORO
     El toro avanza con el scroll de izquierda a derecha y el panel
     verde se descubre justo detrás de él.
       INICIO / FIN = posición del toro (en % del ancho) al empezar y terminar
       GALOPE       = cuánto se inclina al "correr" (grados)
     ---------------------------------------------------------------- */
  function puenteToro(){
    var sec = document.querySelector('.puente-toro');
    if(!sec) return;
    var vista = sec.querySelector('.pt-vista');
    // CRUCE  = parte del scroll en que el toro cruza (0.55 = el primer 55 %)
    // SALIDA = desde qué punto el título se desvanece (0.82 = último 18 %)
    var INICIO = -12, FIN = 118, GALOPE = 6, CRUCE = 0.55, SALIDA = 0.82;
    function pintar(p){
      var c = Math.min(1, p / CRUCE);                       // avance del toro
      var x = INICIO + (FIN - INICIO) * c;
      vista.style.setProperty('--x', x + '%');
      vista.style.setProperty('--r', (Math.sin(c * Math.PI * 10) * GALOPE).toFixed(2) + 'deg');
      vista.style.setProperty('--o', (c > 0.02 && c < 0.98 ? 1 : 0));
      var t = p < SALIDA ? 1 : Math.max(0, 1 - (p - SALIDA) / (1 - SALIDA));   // título visible → se va
      vista.style.setProperty('--t', t.toFixed(3));
    }
    pintar(0);
    if(window.ScrollTrigger){
      ScrollTrigger.create({ trigger: sec, start: 'top top', end: 'bottom bottom',
        onUpdate: function(self){ pintar(self.progress); } });
    } else {
      window.addEventListener('scroll', function(){
        var r = sec.getBoundingClientRect();
        pintar(Math.max(0, Math.min(1, -r.top / (r.height - innerHeight))));
      }, { passive:true });
    }
  }

  /* ----------------------------------------------------------------
     4e) NUESTRA GENTE
     · Clic en una foto: se abre en grande con el nombre y el cargo.
       Flechas ‹ › (o teclas ← →) para pasar de persona; Esc, ✕ o clic
       afuera para cerrar.
     · En pantallas táctiles cada retrato toma color al aparecer.
     ---------------------------------------------------------------- */
  function gente(){
    var fotos = [].slice.call(document.querySelectorAll('.gente__foto'));
    var visor = document.getElementById('genteVisor');
    if(!fotos.length || !visor) return;
    var img = visor.querySelector('.gv-img'), nom = visor.querySelector('.gv-nombre'), car = visor.querySelector('.gv-cargo');
    var actual = 0, origen = null;

    function mostrar(i){
      actual = (i + fotos.length) % fotos.length;
      var f = fotos[actual], im = f.querySelector('img');
      img.src = im.currentSrc || im.src;
      img.alt = im.alt;
      nom.textContent = f.querySelector('.gente__dato b').textContent;
      car.textContent = f.querySelector('.gente__dato span').textContent;   // ya viene en el idioma activo
    }
    function abrir(i){
      origen = document.activeElement;
      mostrar(i);
      visor.hidden = false;
      requestAnimationFrame(function(){ visor.classList.add('abierto'); });
      var L = scrollSuave(); if(L && L.stop) L.stop();
      visor.querySelector('.gv-cerrar').focus();
    }
    function cerrar(){
      visor.classList.remove('abierto');
      setTimeout(function(){ visor.hidden = true; }, 350);
      var L = scrollSuave(); if(L && L.start) L.start();
      if(origen && origen.focus) origen.focus();
    }
    fotos.forEach(function(f, i){ f.addEventListener('click', function(){ abrir(i); }); });
    visor.querySelector('.gv-cerrar').addEventListener('click', cerrar);
    visor.querySelector('.gv-ant').addEventListener('click', function(e){ e.stopPropagation(); mostrar(actual - 1); });
    visor.querySelector('.gv-sig').addEventListener('click', function(e){ e.stopPropagation(); mostrar(actual + 1); });
    visor.addEventListener('click', function(e){ if(e.target === visor) cerrar(); });
    document.addEventListener('keydown', function(e){
      if(visor.hidden) return;
      if(e.key === 'Escape') cerrar();
      else if(e.key === 'ArrowLeft') mostrar(actual - 1);
      else if(e.key === 'ArrowRight') mostrar(actual + 1);
    });

    if(matchMedia('(hover: none)').matches && 'IntersectionObserver' in window){
      var io = new IntersectionObserver(function(ents){
        ents.forEach(function(e){ e.target.classList.toggle('visto', e.isIntersecting); });
      }, { threshold: 0.6 });
      fotos.forEach(function(f){ io.observe(f); });
    }
  }

  function arrancar(){ intro(); recorrido(); puenteToro(); gente(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar);
  else arrancar();
})();
