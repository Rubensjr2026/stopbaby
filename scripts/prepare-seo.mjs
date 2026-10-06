import fs from 'node:fs';
import path from 'node:path';
const raw=process.argv[2]||process.env.SITE_URL;
const root=path.resolve(process.argv[3]||'dist');
if(!raw)throw new Error('Informe a URL final do site. Exemplo: node scripts/prepare-seo.mjs https://usuario.github.io/repositorio/ dist');
const parsed=new URL(raw);
if(!['http:','https:'].includes(parsed.protocol)||parsed.username||parsed.password||parsed.search||parsed.hash)throw new Error('Use uma URL pública http/https, sem senha, parâmetros ou fragmentos.');
const base=parsed.href.replace(/\/+$/,'')+'/';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const org={'@context':'https://schema.org','@type':'Organization',name:'Stop Baby — Uniformes e Confecções',url:base,logo:base+'assets/logo.jpg',telephone:'+55-47-98837-8931',description:'Polos, camisetas personalizadas, uniformes escolares e jalecos para equipes.'};
const seo=`<!-- SEO:START -->
<link rel="canonical" href="${escape(base)}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Stop Baby">
<meta property="og:title" content="Stop Baby — Uniformes profissionais para sua empresa">
<meta property="og:description" content="Polos, camisetas, jalecos e uniformes personalizados. Conheça as peças e solicite um orçamento pelo WhatsApp.">
<meta property="og:url" content="${escape(base)}">
<script type="application/ld+json">${JSON.stringify(org).replaceAll('<','\\u003c')}</script>
<!-- SEO:END -->`;
const file=path.join(root,'index.html');let html=fs.readFileSync(file,'utf8');
html=html.includes('<!-- SEO:START -->')?html.replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/,seo):html.replace('</head>',seo+'\n</head>');
fs.writeFileSync(file,html);
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${base}sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(base)}</loc><lastmod>2026-10-06</lastmod></url></urlset>\n`);
fs.writeFileSync(path.join(root,'.nojekyll'),'');
console.log('SEO preparado para '+base);
