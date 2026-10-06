# Stop Baby — site completo para GitHub Pages

Este pacote contém a página, estilos, JavaScript, logo, fotos, robots.txt, sitemap.xml, página 404 e publicação automática pelo GitHub Actions. WhatsApp: (47) 98837-8931.

## Publicar (forma recomendada)

1. Extraia o ZIP no computador. Envie o **conteúdo** da pasta extraída para a raiz do seu repositório GitHub, na branch `main`. O `index.html` deve aparecer logo na raiz, junto de `assets`, `styles.css` e `script.js`.
2. Inclua também a pasta `.github`, que contém `.github/workflows/pages.yml`, e a pasta `scripts`. Se o envio pelo navegador não mostrar `.github`, crie no GitHub um arquivo chamado `.github/workflows/pages.yml` e cole o conteúdo do arquivo de mesmo nome deste pacote.
3. No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
4. Abra a aba **Actions**, selecione **Publicar Stop Baby no GitHub Pages** e clique em **Run workflow** (ou faça um novo commit depois de ativar Pages).
5. Aguarde a conclusão. O endereço estará no resultado da publicação e em **Settings → Pages**.

O fluxo identifica a URL real do GitHub Pages e regenera `robots.txt`, `sitemap.xml`, canonical, `og:url` e a URL da organização. Funciona com endereço de projeto (`usuario.github.io/repositorio/`) e com domínio próprio configurado no Pages. Não precisa instalar programas no seu computador.

**A URL do repositório ainda não foi informada.** Os arquivos de SEO incluídos diretamente no ZIP usam `https://seu-usuario.github.io/seu-repositorio/` como marcador, e o fluxo acima substitui esse endereço automaticamente antes de publicar. Não publique estes marcadores diretamente pela opção “Deploy from a branch”.

## Se preferir publicar diretamente pela branch

Primeiro configure o endereço final com Node instalado:

```sh
node scripts/prepare-seo.mjs https://SEU-USUARIO.github.io/SEU-REPOSITORIO/ .
```

Depois envie os arquivos modificados e configure Pages como **Deploy from a branch → main → / (root)**. Você também pode substituir manualmente a URL de exemplo em `index.html`, `robots.txt` e `sitemap.xml`. Mantenha a barra final e use a URL do **site**, não a página do repositório no github.com.

## Sitemap e robots.txt

- A landing page é uma única página: o sitemap contém somente sua URL principal. As âncoras de galeria, modelos e dúvidas não são páginas separadas.
- Depois de publicar, envie a URL final de `sitemap.xml` ao Google Search Console.
- O `robots.txt` permite rastreamento e informa o sitemap. Ele só é interpretado na raiz do domínio. Se o site ficar em `usuario.github.io/repositorio/`, o arquivo `/repositorio/robots.txt` não controla o rastreamento: o endereço relevante é `usuario.github.io/robots.txt`. Nesse cenário, mantenha o sitemap no projeto e envie-o diretamente ao Search Console; se você controla o site raiz, pode adicionar lá a linha `Sitemap:` correspondente. Com domínio próprio na raiz, o arquivo deste pacote já fica no lugar correto.
- Sitemap e robots não garantem indexação. Acessibilidade pública e configuração do domínio também precisam estar corretas.

## O que foi incluído

- Todas as 17 fotos de peças fornecidas, preservadas sem alteração e com nomes legíveis.
- Galeria com filtros, navegação anterior/próxima, teclado e orçamento do modelo selecionado.
- Foto de destaque com pessoas geradas por IA usando referências das peças. É uma simulação ilustrativa; detalhes pequenos de bordados podem diferir. As fotos originais são a referência dos produtos.
- Três depoimentos fictícios, identificados como demonstração. Eles não são avaliações do Google nem depoimentos reais. Para substituir, edite a seção `id="avaliacoes"` no `index.html` com avaliações autênticas.
- Modelos/categorias ajustados às fotos, FAQ e botões com mensagem de origem do site.
- Nenhuma nota ou avaliação fictícia em dados estruturados.
- Não há Google Analytics, pixel Meta, formulário ou integração que envie dados. WhatsApp abre a conversa para o visitante enviar a mensagem.

## Alterar depois

- Textos e estrutura: `index.html`.
- Cores e visual: `styles.css`.
- WhatsApp e galeria: `script.js`. O número também aparece nos links HTML e na página 404.
- Imagens: `assets/`.
- Após trocar domínio/URL, rode novamente o fluxo de publicação para atualizar SEO.

## Fontes de configuração

- GitHub Pages e workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- URL base automática: https://github.com/actions/configure-pages
- Local correto de robots.txt: https://developers.google.com/crawling/docs/robots-txt/create-robots-txt
