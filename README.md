# 🌐 Portfólio Glassmorphism - Vinícius Gabriel

Este projeto foi construído exatamente com base na estrutura da imagem de referência, utilizando **HTML5 Semântico**, **CSS3 Moderno (Glassmorphism & Flex/Grid)** e **JavaScript** puro (Vanilla JS), com visual translúcido, cantos arredondados, fontes modernas e suporte a dispositivos móveis.

---

## 📁 Estrutura de Arquivos

```text
meu site/
├── index.html       # Estrutura completa da página e conteúdos
├── style.css        # Estilos, efeito de vidro fosco (glassmorphism), cores e responsividade
├── script.js        # Interações (modal ao clicar nos projetos, menu mobile, etc.)
├── README.md        # Guia de personalização rápido
└── assets/
    └── images/      # Coloque suas fotos e imagens aqui
        ├── background.jpg   (opcional: seu papel de parede de fundo)
        ├── avatar.jpg       (opcional: sua foto de perfil)
        ├── thumb-code.jpg   (opcional: miniatura 1)
        ├── thumb-team.jpg   (opcional: miniatura 2)
        └── thumb-dashboard.jpg (opcional: miniatura 3)
```

---

## 🛠️ Como Personalizar

### 1. Como alterar a Imagem de Fundo (Céu / Fundo)
No topo do arquivo [`style.css`](style.css#L42):
```css
:root {
  /* Substitua pelo caminho da sua imagem ou por uma URL online */
  --bg-image: url('assets/images/background.jpg');
}
```
*Dica:* Se você não tiver uma imagem, o site já conta com um gradiente celeste suave e nuvens dinâmicas em CSS como fallback!

### 2. Como alterar a Foto de Perfil
No arquivo [`index.html`](index.html#L143-L151), localize a tag `<img>` dentro de `.avatar-ring`:
```html
<img 
  src="assets/images/avatar.jpg" 
  alt="Foto de perfil de Vinicius Gabriel" 
  class="avatar-img"
/>
```
Basta colocar o arquivo `avatar.jpg` dentro de `assets/images/` ou mudar o `src` para qualquer link de foto que você desejar.

### 3. Como alterar as Informações e Textos
Todos os textos estão identificados no [`index.html`](index.html):
- **Topo / Apresentação:** `<h1 class="hero-title">` e `<p class="hero-description">`
- **Habilidades & Tecnologias:** bloco `.skills-card` e as tags `.tech-pill`
- **Bio do Perfil:** bloco `.profile-bio`
- **Botões:** você pode colocar o link do seu GitHub em `href="..."` no botão "Ver meus projetos" e o link do seu currículo em "Baixar currículo".

### 4. Como alterar as Miniaturas dos Projetos
No arquivo [`index.html`](index.html#L162-L215), cada um dos 3 cartões está dentro de `.projects-gallery`. Você pode trocar as imagens e os títulos em `thumb-overlay` e no arquivo [`script.js`](script.js#L39-L60) para personalizar o que aparece ao clicar em cada um!

---

## 🚀 Como Visualizar
Basta dar um duplo clique no arquivo **`index.html`** para abrir diretamente no seu navegador (Google Chrome, Edge, Firefox, etc.).
