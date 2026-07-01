import { Project, Service, Testimonial, Award, Experience } from './types';

export const DESIGNER_INFO = {
  name: "MAAZ",
  fullName: "Maaz Vance",
  title: "Creative Director & Principal Designer",
  bio: "Maaz is an award-winning creative director and visual designer specializing in luxury brand identities, high-fidelity UI/UX, and editorial layouts. For over half a decade, they have crafted digital experiences and physical artifacts that command attention, balance restraint with drama, and define the standard of elite design.",
  profileImage: "https://i.ibb.co/fVTXFf9g/a2dcffa1-a6fd-4991-9bdd-49e5bbe5e7be.jpg",
  email: "maaz40336@gmail.com",
  phone: "+92 310 4529576",
  location: "Karachi, Pakistan",
  availableForHire: true,
};

export const PROJECTS_DATA: Project[] = [
  {
    "id": "creative-design-portfolio",
    "title": "Avant-Garde Creative Portfolio Showcase",
    "category": "UI & UX Design",
    "year": "2026",
    "client": "Aurora & Avant Collective",
    "role": "Lead UI/UX Designer",
    "description": "A comprehensive creative portfolio showcasing versatile design expertise across branding identity, packaging design for Brew Bliss, sleek mobile UI/UX interfaces, and bold promotional graphics. The presentation highlights a refined aesthetic utilizing dark themes, elegant typography, and minimalist layouts to engage premium clients.",
    "challenge": "Presenting a diverse design skill set spanning multiple mediums—from physical packaging to mobile interfaces—within a cohesive, unified, and visually compelling single portfolio frame.",
    "solution": "Utilized a sophisticated dark-themed layout paired with vibrant yellow accents to structure different creative disciplines, ensuring each project segment remains distinct yet visually connected.",
    "creativeDirection": "Dark minimalist layout, vibrant gold accents, bold sans-serif headlines, elegant script typography, clean product mockups",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma"
    ],
    "tags": [
      "Visual Identity",
      "Brand Collateral",
      "UI & UX Design",
      "Packaging Design"
    ],
    "image": "https://i.ibb.co/3YPgwnsq/ae69f897-a0d6-4728-a980-f1abca0735b4.jpg",
    "gallery": [
      "https://i.ibb.co/3YPgwnsq/ae69f897-a0d6-4728-a980-f1abca0735b4.jpg"
    ],
    "featured": true
  },
  {
    "id": "youtube-growth-thumbnail",
    "title": "Creator Growth Strategy YouTube Thumbnail",
    "category": "Social Media",
    "year": "2026",
    "client": "VlogStream Media",
    "role": "Senior Social Media Designer",
    "description": "An eye-catching high-conversion YouTube thumbnail featuring bold yellow typography, a shocked portrait, and vibrant green growth graphs. Designed with high-contrast text layers and badge icons to maximize click-through rate and communicate clear, rapid channel development strategies.",
    "challenge": "How to design a highly engaging thumbnail that immediately communicates rapid channel growth while maintaining a clear visual hierarchy among dense textual elements like checklists and strategy badges.",
    "solution": "We utilized a vibrant complementary color palette of yellow, red, and green combined with dynamic diagonal alignments, expressive facial photography, and clean vector icons to structure complex value propositions into easily digestible visual hooks.",
    "creativeDirection": "High contrast, energetic yellow typography, expressive portrait photography, vibrant green accent charts, bold red brush effects, and clean, modern flat icons.",
    "tools": [
      "Adobe Photoshop",
      "Adobe Lightroom"
    ],
    "tags": [
      "Thumbnail Design",
      "YouTube Branding",
      "Click-Through Optimization",
      "Visual Hierarchy"
    ],
    "image": "https://i.ibb.co/nqrm5DhW/fd56b178-53c7-411e-8075-9eda94199d8a.jpg",
    "gallery": [
      "https://i.ibb.co/nqrm5DhW/fd56b178-53c7-411e-8075-9eda94199d8a.jpg"
    ],
    "featured": true
  },
  {
    "id": "viral-youtube-thumbnail-templates",
    "title": "High-Impact YouTube Thumbnail Suite",
    "category": "Social Media",
    "year": "2026",
    "client": "Apex Creator Studio",
    "role": "Lead Social Media Designer",
    "description": "High-converting YouTube thumbnail designs tailored for growth strategy and gaming niches. Utilizing high-impact typography, expressive character cutouts, vibrant color contrasts, and clear value-proposition checklists, these graphics are meticulously optimized to maximize click-through rates across digital video platforms.",
    "challenge": "The challenge was to design visually striking thumbnails that instantly capture attention in crowded feeds while maintaining legibility at small scale.",
    "solution": "We utilized bold, slanted sans-serif typography, vibrant green and red accents, and high-contrast background explosions to ensure immediate visual hierarchy and clarity.",
    "creativeDirection": "High-energy, high-contrast, bold yellow and red tones, expressive photography, energetic gaming aesthetics",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "tags": [
      "Thumbnail Design",
      "CTR Optimization",
      "Gaming Graphics"
    ],
    "image": "https://i.ibb.co/WvKttYW0/758ffbcb-38ab-4cd5-a979-a03038fc0c03.jpg",
    "gallery": [
      "https://i.ibb.co/WvKttYW0/758ffbcb-38ab-4cd5-a979-a03038fc0c03.jpg"
    ],
    "featured": true
  },
  {
    "id": "vibrant-youtube-thumbnail-service",
    "title": "High-CTR YouTube Thumbnail Service Banner",
    "category": "Social Media",
    "year": "2026",
    "client": "Fiverr Creator Services",
    "role": "Lead Social Media Designer",
    "description": "A high-conversion promotional banner designed to showcase professional YouTube thumbnail creation services. Featuring striking bold typography, vibrant teal and green gradients, dynamic stock imagery with an expressive model, and clear 'Order Now' call-to-action buttons to maximize click-through rates and user engagement.",
    "challenge": "Designing a highly engaging promotional banner that instantly conveys value, captures the viewer's attention in a crowded marketplace, and drives conversions for custom thumbnail creation services.",
    "solution": "Utilized a bold color palette of teal, green, and red contrast, paired with expressive human imagery and clean, modern typography to establish trust, generate excitement, and encourage immediate action.",
    "creativeDirection": "High-energy, vibrant teal gradients, expressive character photography, bold sans-serif typography, and conversion-focused callouts.",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ],
    "tags": [
      "Social Media Graphics",
      "Ad Design",
      "CTR Optimization"
    ],
    "image": "https://i.ibb.co/yF0CC8nL/38cf74c6-6787-45fb-8d4a-600601a9aa4a.jpg",
    "gallery": [
      "https://i.ibb.co/yF0CC8nL/38cf74c6-6787-45fb-8d4a-600601a9aa4a.jpg"
    ],
    "featured": false
  },
  {
    "id": "thumbnail-design-masterclass",
    "title": "Thumbnail Designing Masterclass",
    "category": "Social Media",
    "year": "2026",
    "client": "SkillShare Originals",
    "role": "Lead Visual Instructor",
    "description": "High-contrast dynamic educational thumbnail layout optimized for high click-through rates and clear value-proposition checklists. Meticulously styled with dual-tone bold layouts and focused key indicators.",
    "challenge": "Balancing informational clarity with high visual tension suitable for online learning feeds.",
    "solution": "Introduced vibrant teal backdrop gradients, bold offset display typography, and neat value-proposition list frameworks.",
    "creativeDirection": "Educational, structured, dual-tone teal gradients, high click-through structure",
    "tools": [
      "Adobe Photoshop",
      "Figma"
    ],
    "tags": [
      "Thumbnail Design",
      "CTR Optimization",
      "Educational Graphics"
    ],
    "image": "https://i.ibb.co/PzFhXT5r/d6c6d60e-9558-477c-b685-7aabdb5ebe78.jpg",
    "gallery": [
      "https://i.ibb.co/PzFhXT5r/d6c6d60e-9558-477c-b685-7aabdb5ebe78.jpg"
    ],
    "featured": false
  },
  {
    "id": "the-last-signal",
    "title": "The Last Signal Key Art",
    "category": "Editorial & Print",
    "year": "2026",
    "client": "Unknown Frequency Studios",
    "role": "Lead Key Art Designer",
    "description": "A cinematic movie poster for 'The Last Signal' featuring an astronaut in deep space holding a communication device. The dramatic layout pairs a detailed spacesuit with a glowing Earth, a glowing signal waveform, and bold, distressed typography to establish a tense, atmospheric sci-fi narrative.",
    "challenge": "To convey the isolation and emotional weight of an astronaut's final message to Earth within a single, high-stakes visual composition.",
    "solution": "We composed a dramatic portrait juxtaposing the vulnerable astronaut against the massive scale of Earth, integrated a glowing waveform graphic, and utilized distressed, high-contrast typography to emphasize the narrative tension.",
    "creativeDirection": "Cinematic, cosmic blue and warm orange tones, high contrast, distressed sans-serif typography, atmospheric sci-fi mood.",
    "tools": [
      "Adobe Photoshop",
      "Midjourney",
      "Adobe Lightroom"
    ],
    "tags": [
      "Key Art Design",
      "Movie Poster",
      "Sci-Fi Graphics",
      "Photo Manipulation"
    ],
    "image": "https://i.ibb.co/S4Nktc2X/75fda1d7-6882-422b-8701-268fa02f4080.jpg",
    "gallery": [
      "https://i.ibb.co/S4Nktc2X/75fda1d7-6882-422b-8701-268fa02f4080.jpg"
    ],
    "featured": false
  },
  {
    "id": "corporate-business-card",
    "title": "Sophisticated Professional Identity System",
    "category": "Brand & Identity",
    "year": "2026",
    "client": "Axiom Dynamics Inc.",
    "role": "Lead Brand Identity Designer",
    "description": "Designed a premium dual-sided business card for a professional modeling designer. Utilizing a sophisticated palette of deep navy blue and gold accents, it integrates contact details and a custom scannable QR code to ensure high-end networking and digital connectivity.",
    "challenge": "The challenge was to craft a sophisticated and memorable business card that effectively communicated professional identity and contact information while maintaining a luxurious aesthetic in a compact format.",
    "solution": "The solution involved a dual-sided design featuring a distinguished deep blue and gold palette, clear typographic hierarchy for company and personal details, and a scannable QR code to enhance digital interaction.",
    "creativeDirection": "Elegant, Minimalist, Gold accents, Deep blue, Sans-serif typography, Modern professional, Luxe finish",
    "tools": [
      "Adobe Illustrator",
      "Adobe InDesign"
    ],
    "tags": [
      "Business Card Design",
      "Visual Identity",
      "Corporate Branding",
      "Print Design"
    ],
    "image": "https://i.ibb.co/WpMcCrVZ/0635042c-aa1d-4123-be97-bce78af8799b.jpg",
    "gallery": [
      "https://i.ibb.co/WpMcCrVZ/0635042c-aa1d-4123-be97-bce78af8799b.jpg"
    ],
    "featured": false
  },
  {
    "id": "roast-brew-flyer",
    "title": "Roast & Brew Cafe Print Promotion",
    "category": "Editorial & Print",
    "year": "2026",
    "client": "Roast & Brew Co.",
    "role": "Lead Graphic Designer",
    "description": "A warm, inviting print flyer and menu designed to showcase gourmet coffee offerings. Featuring organic brown tones, stylized coffee bean graphics, and clear price mapping, the layout establishes an appetizing visual hierarchy ideal for local cafes and promotions.",
    "challenge": "Creating an engaging promotional flyer that seamlessly blends brand storytelling with a functional, easy-to-read menu layout within a single page.",
    "solution": "Utilized a rich, warm color palette reminiscent of roasted coffee beans, structured typography for readability, and strategic placement of realistic product renders alongside a clear pricing grid.",
    "creativeDirection": "Warm brown tones, organic wave separators, clean sans-serif and elegant script typography, realistic cup mockups.",
    "tools": [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "InDesign"
    ],
    "tags": [
      "Flyer Design",
      "Print Menu",
      "Visual Hierarchy",
      "Coffee Branding"
    ],
    "image": "https://i.ibb.co/wNGS3qqk/e137eab7-fe42-49d0-a672-7f8ae115111e.jpg",
    "gallery": [
      "https://i.ibb.co/wNGS3qqk/e137eab7-fe42-49d0-a672-7f8ae115111e.jpg"
    ],
    "featured": false
  },
  {
    "id": "special-coffee-poster",
    "title": "Special Coffee Promotional Poster",
    "category": "Editorial & Print",
    "year": "2026",
    "client": "Aroma Roast Café",
    "role": "Lead Graphic Designer",
    "description": "A dynamic promotional poster showcasing premium coffee. Features a high-speed splash effect, realistic floating coffee beans, and a striking typography lockup combining elegant script with bold stencil lettering against a rich, warm chocolate-brown backdrop.",
    "challenge": "Capturing the sensory warmth, rich aroma, and dynamic movement of freshly brewed coffee in a static print format.",
    "solution": "Utilized advanced photo manipulation for the liquid splash, realistic 3D depth layering for floating beans, and a high-contrast warm color palette paired with textured burlap elements.",
    "creativeDirection": "Rich warm browns, high-contrast white typography, dynamic splash composition, rustic textures",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Cinema 4D"
    ],
    "tags": [
      "Advertising Design",
      "Poster Layout",
      "Digital Composition",
      "Beverage Branding"
    ],
    "image": "https://i.ibb.co/wNPpQQsV/1b59282b-250b-453d-a545-d7f6eda91803.jpg",
    "gallery": [
      "https://i.ibb.co/wNPpQQsV/1b59282b-250b-453d-a545-d7f6eda91803.jpg"
    ],
    "featured": false
  },
  {
    "id": "academic-collaboration-posters",
    "title": "Academic Collaboration Poster Series",
    "category": "Editorial & Print",
    "year": "2026",
    "client": "Total Technologies",
    "role": "Lead Graphic Designer",
    "description": "A compelling poster design series developed for Total Technologies, promoting academic collaborations between Marathwada Mitra Mandal's College of Commerce and SPPU Research Park Foundation. The layouts utilize clear typographic hierarchies, official institution branding, and vibrant color gradients to maximize engagement.",
    "challenge": "Designing an informative poster that seamlessly integrates multiple institutional logos and dense academic credentials without cluttering the visual hierarchy.",
    "solution": "Leveraged a structured grid system and a clean white background paired with striking red and blue typography to establish a professional yet high-impact promotional piece.",
    "creativeDirection": "Vibrant gradients, structured grid layouts, clean typography, authoritative color palette",
    "tools": [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Photoshop"
    ],
    "tags": [
      "Poster Design",
      "Print Layout",
      "Event Promotion",
      "Academic Branding"
    ],
    "image": "https://i.ibb.co/9dHRKkn/4c5be8a7-4557-4c17-90f9-b1c48c260995.jpg",
    "gallery": [
      "https://i.ibb.co/9dHRKkn/4c5be8a7-4557-4c17-90f9-b1c48c260995.jpg"
    ],
    "featured": false
  },
  {
    "id": "minimalist-graphic-designer-badges",
    "title": "Creative Studio Identity Badges",
    "category": "Brand & Identity",
    "year": "2026",
    "client": "Monolith Creative Studio",
    "role": "Lead Brand Designer",
    "description": "A collection of monochrome, vector-based identity badges designed for a creative studio. Featuring clean geometry, classic pen tool and pencil symbolism, and bold typography, these marks establish a timeless professional presence across print and digital branding applications.",
    "challenge": "Creating a versatile visual identity system that represents craftsmanship and technical skill while maintaining legibility at micro scales.",
    "solution": "Utilized high-contrast black-and-white compositions, robust geometric frameworks, and iconic design metaphors like the pen nib and pencil to convey expertise clearly.",
    "creativeDirection": "Monochrome palette, minimalist geometry, vector line art, classic and modern typography mix.",
    "tools": [
      "Adobe Illustrator",
      "Figma"
    ],
    "tags": [
      "Visual Identity",
      "Logo Design",
      "Monochrome Branding"
    ],
    "image": "https://i.ibb.co/QvvMfz6J/3cf4ae8b-4932-4333-a20f-402e489ca685.jpg",
    "gallery": [
      "https://i.ibb.co/QvvMfz6J/3cf4ae8b-4932-4333-a20f-402e489ca685.jpg"
    ],
    "featured": false
  },
  {
    "id": "flyer-designing-system",
    "title": "Flyer Designing System",
    "category": "Editorial & Print",
    "year": "2026",
    "client": "Commercial Print Lab",
    "role": "Lead Layout Designer",
    "description": "A structured, geometric template designed for high-impact commercial promotion, print advertising, and layout systems. Features high-contrast dark tones and neat grids.",
    "challenge": "To build an editorial and print layout that balances dense promotional copy with elegant layout margins.",
    "solution": "Designed an asymmetric layout using high-contrast corporate typography and clear modular grid dividers.",
    "creativeDirection": "Corporate, high-contrast, structured grid layouts, elegant negative space",
    "tools": [
      "Adobe Illustrator",
      "Adobe InDesign"
    ],
    "tags": [
      "Flyer Design",
      "Print Layout",
      "Grid System"
    ],
    "image": "https://i.ibb.co/dJMNdPR4/83658567-99e4-4a69-94e7-0a476d624185.jpg",
    "gallery": [
      "https://i.ibb.co/dJMNdPR4/83658567-99e4-4a69-94e7-0a476d624185.jpg"
    ],
    "featured": false
  },
  {
    "id": "bespoke-geometric-logo",
    "title": "Bespoke Geometric Brand Mark",
    "category": "Brand & Identity",
    "year": "2026",
    "client": "Luxe & Lines Co.",
    "role": "Principal Brand Architect",
    "description": "A sophisticated brand mark designed using precise geometric curves, luxurious minimalist aesthetics, and custom corporate lettering. The vector mark translates abstract corporate vision into timeless symbolism.",
    "challenge": "Drafting an extremely simple brand mark that represents luxury, complexity, and purity without relying on dense illustrative graphics.",
    "solution": "We engineered an elegant monogram styled with precise golden ratio geometry and extreme typographic alignment guidelines.",
    "creativeDirection": "Luxurious, minimalist, geometric curves, monochrome golden accents",
    "tools": [
      "Adobe Illustrator",
      "Figma"
    ],
    "tags": [
      "Brand Identity",
      "Logo Design",
      "Minimalist Vector"
    ],
    "image": "https://i.ibb.co/MDPgnMHV/f125bf4b-262f-4f7a-92d7-4b3df0ea25c0.jpg",
    "gallery": [
      "https://i.ibb.co/MDPgnMHV/f125bf4b-262f-4f7a-92d7-4b3df0ea25c0.jpg"
    ],
    "featured": false
  },
  {
    "id": "brew-bliss-packaging",
    "title": "Brew Bliss Coffee Packaging Design",
    "category": "Packaging Design",
    "year": "2026",
    "client": "Brew Bliss Specialty Coffee",
    "role": "Lead Packaging Specialist",
    "description": "An elegant, bespoke structural packaging design for Brew Bliss. Features warm, organic, earthy coffee elements paired with premium geometric text containers, custom typography scales, and a tactile matte finish to define high-end shelf dominance.",
    "challenge": "Creating a coffee packaging layout that instantly evokes organic warmth while maintaining a clean, premium, and structured layout.",
    "solution": "Combined high-contrast white typographic branding blocks with textured organic coffee illustrations, resulting in a balanced visual tension on store shelves.",
    "creativeDirection": "Organic luxury, warm coffee colors, clean high-contrast text containers, structured typography",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Cinema 4D"
    ],
    "tags": [
      "Packaging Design",
      "Structural Box",
      "Coffee Branding"
    ],
    "image": "https://i.ibb.co/vxqXj4xs/b02a39bb-531f-49d0-b4c9-e3aeef457b7c.jpg",
    "gallery": [
      "https://i.ibb.co/vxqXj4xs/b02a39bb-531f-49d0-b4c9-e3aeef457b7c.jpg"
    ],
    "featured": false
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "BRAND STRATEGY & IDENTITY",
    description: "Defining authentic positioning, elite design standards, and adaptive logo systems for visionary businesses looking to establish luxury dominance.",
    details: [
      "Competitive Position Audits",
      "Adaptive Logos & Visual Marks",
      "Premium Brand Identity Books",
      "Typography & Color Standards",
      "Stationery & Corporate Artifacts"
    ]
  },
  {
    id: "uiux-design",
    number: "02",
    title: "HIGH-FIDELITY UI/UX DESIGN",
    description: "Designing bespoke interactive experiences across web, mobile, and wearable touchpoints, replacing cluttered trends with intuitive, elegant, and focused gestures.",
    details: [
      "Tactile iOS & Android Design",
      "High-Fidelity Interactive Prototypes",
      "Bespoke Gesture Design Systems",
      "UX Architecture & Spatial Layouts",
      "Interactive Interface Audit & Redesign"
    ]
  },
  {
    id: "editorial-web",
    number: "03",
    title: "EDITORIAL WEBSITE PRODUCTION",
    description: "Creating award-winning custom web environments with Swiss-modern typographic grids, fluid layouts, and smooth motion animations tailored to load instantly.",
    details: [
      "Awwwards-Grade Web Layouts",
      "Asymmetric Responsive Grid Systems",
      "Fluid Motion & Masking Animations",
      "Custom Typography Optimization",
      "Vite & React Fast-Loading Architectures"
    ]
  },
  {
    id: "print-packaging",
    number: "04",
    title: "PREMIUM PRINT & PACKAGING",
    description: "Designing tactile physical assets including luxury product bottles, heavy letterpress catalog books, and hot-foil stamped collector products that demand tactile exploration.",
    details: [
      "3D Custom Structural Packaging",
      "Letterpress & Foil Stamp Prep",
      "Organic Textured Material Sourcing",
      "Luxury Editorial Book Crafting",
      "Eco-Conscious Premium Box Solutions"
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "sarah-j",
    quote: "Maaz completely transformed our vision into an elite physical and digital reality. Their attention to negative space, typography kerning, and raw luxury materials created a brand experience that allowed us to pre-sell our entire batch within six hours. Unmatched artistry.",
    author: "Sarah Johnson",
    role: "Founder & Creative Director",
    company: "Aurelia Cosmetics",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "kenji-s",
    quote: "Working with Maaz is an exercise in restraint. They did not give us the loudest website—they gave us the most memorable. The Brutalistconcrete theme has become a core element of our agency's identity, earning us two international design awards in the process.",
    author: "Kenji Sato",
    role: "Managing Partner",
    company: "Monolith Partners Tokyo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "marcus-v",
    quote: "We brought Maaz in to elevate our audio streaming identity. The generative frequency logo system they built represents high-art. Our listeners, artists, and competitors instantly recognized the leap in premium branding. They are a design force.",
    author: "Marcus Vance",
    role: "Executive Producer",
    company: "Sonder Sounds",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "elena-r",
    quote: "Maaz operates at a level of dedication that is rare. The Vellum Press book bindings are museum-quality sculptures. They handled mechanical stamping pressure calculations, natural linen dye matching, and micro-kerning with perfection. We found our permanent design partner.",
    author: "Elena Rostova",
    role: "Editor-in-Chief",
    company: "Vellum Press Tokyo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    duration: "2024 — Present",
    role: "Principal & Creative Director",
    company: "Maaz Vance Studio",
    description: "Operating an independent design laboratory servicing high-end luxury, architecture, fashion, and technology brands worldwide. Directing complete creative lifecycles, manufacturing relations, and WebGL developers to deliver world-class brand ecosystems."
  },
  {
    id: "exp-2",
    duration: "2022 — 2024",
    role: "Senior Brand & UI/UX Designer",
    company: "Studio Noir New York",
    description: "Led high-end design sprints for top-tier fragrance, organic cosmetic, and editorial media houses. Created design systems, interactive prototypes, and led luxury print production guidelines that won Red Dot and Webby recognitions."
  },
  {
    id: "exp-3",
    duration: "2020 — 2022",
    role: "Graphic Designer & Typographer",
    company: "Elysian Agency Tokyo",
    description: "Crafted experimental posters, branding manuals, and responsive websites for high-end boutique hotels, gallery archives, and premium architectural clients. Implemented rigorous Swiss-grid designs and tactile packaging blueprints."
  }
];

export const AWARDS_DATA: Award[] = [
  {
    id: "aw-1",
    year: "2026",
    title: "Site of the Year",
    category: "Best Editorial Layout (Monolith)",
    organization: "Awwwards"
  },
  {
    id: "aw-2",
    year: "2025",
    title: "Red Dot Award",
    category: "Best Structural Packaging (Aurelia Fragrance)",
    organization: "Design Zentrum NRW"
  },
  {
    id: "aw-3",
    year: "2025",
    title: "Behance Best Portfolio",
    category: "Graphic Design & UI/UX Craftsmanship",
    organization: "Behance Curators"
  },
  {
    id: "aw-4",
    year: "2024",
    title: "Best of Show",
    category: "Experimental Typographic Poster Series",
    organization: "New York Type Directors Club"
  },
  {
    id: "aw-5",
    year: "2023",
    title: "Webby Award Winner",
    category: "Best Visual Design Aesthetic",
    organization: "IADAS"
  }
];
