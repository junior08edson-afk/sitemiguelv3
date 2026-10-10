# Miguel Netto — versão responsiva

Landing page estática em português. No celular, preserva a versão mobile aprovada. A partir de 768 px utiliza mais largura; a partir de 960 px tem composição desktop de até 1280 px, fotos ao lado dos textos, serviços em duas colunas e carrossel com três fotos visíveis. Fundo preto, acentos roxos, tipografia forte e fotos originais preservadas em molduras quadradas.

## Estrutura

Referência de organização: https://ciceroelitonpersonal.vercel.app/ — atalhos iniciais, cartão do treinador, serviços em cartões e método em acordeão. A adaptação preserva a identidade e o conteúdo de Miguel. Não importa preços, planos, promessas, formulário ou imagens da referência.

Seções: abertura, trajetória, consultoria online, treino presencial, carrossel de alunos, depoimento, método, dúvidas e contato. Sete CTAs Fale Comigo usam exatamente o link de WhatsApp fornecido, número 5514997424321. Não há formulário ou captação de dados pelo site.

## Interações e acessibilidade

Acabamento roxo neon em títulos destacados, botões, faixas e detalhes: gradientes, bordas luminosas e halos estáticos. Sem piscadas ou pulsação contínua; fotos e textos de leitura preservados.

A abertura integra a foto original de Miguel ao fundo com enquadramento responsivo, degradês pretos e luz roxa por CSS. A seção final usa uma textura fotográfica discreta de treino. Os arquivos originais permanecem intactos, sem geração de imagem ou alteração de identidade. As demais fotos continuam nas molduras quadradas.

Carrossel com toque, setas e teclado; fotos e depoimento ampliáveis em diálogos; acordeões nativos; animações de entrada; barra de progresso e CTA fixo durante a leitura. Animações respeitam prefers-reduced-motion. Os diálogos restauram o foco ao fechar. Textos principais de 16 px e títulos grandes.

O print do depoimento permanece ao lado da legenda, inclusive no celular. O relato de 8 kg é individual, não uma promessa. A história de ex-atleta e perda de 54 kg foi fornecida pelo cliente. Todas as fotografias exibidas são originais; não há retrato gerado ou antes/depois inventado.

## Arquivos ativos

- dist/index.html — conteúdo.
- dist/mobile.css — layout responsivo (celular e desktop) e animações.
- dist/mobile.js — interações.
- dist/images/ — fotografias.
- archive-desktop/ — cópia da versão anterior, preservada.
- .openai/hosting.json — configuração Sites; desnecessária no GitHub Pages.

intensity.css e interactions.js em dist são arquivos legados, não carregados pela página atual. Fontes Barlow Condensed e Manrope via Google Fonts, com fallback local.

## Publicar no GitHub Pages

Envie index.html, mobile.css, mobile.js, .nojekyll e a pasta images para a raiz do repositório. Em Settings → Pages, selecione Deploy from a branch, main, / (root) e Save. O pacote miguel-netto-responsivo-github-pages.zip contém essa estrutura pronta. Mantenha os nomes e a pasta images intactos.

Para editar depois, altere os arquivos e faça um novo commit no mesmo repositório. O domínio configurado continua o mesmo.
