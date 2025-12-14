<div align="center">

  <img src="public/logo.png" alt="Favela-República Logo" width="140" height="auto" />
  <br/>

# 🌴 Favela-República Tour

### **Turismo Comunitário Autêntico na Tavares Bastos**

  <p align="center">
    <i>"Muito mais que uma visita. Uma imersão cultural segura, vibrante e transformadora."</i>
  </p>

  <br/>

  [![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://favelarepublica.vercel.app/)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![Review](https://img.shields.io/badge/Rating-4.9%2F5.0-orange?style=for-the-badge&logo=google-maps&logoColor=white)](https://favelarepublicatour.com)

  [**🌐 Website Oficial**](https://favelarepublica.vercel.app/) &nbsp;|&nbsp; [**📸 Instagram**](https://instagram.com/favelarepublica) &nbsp;|&nbsp; [**💬 WhatsApp**](https://wa.me/5521999999999)

</div>

---

## 📖 Sobre o Projeto

**Favela-República** não é apenas um site de agendamento de tours. É uma plataforma digital premium projetada para conectar o mundo à **Comunidade Tavares Bastos**, no Rio de Janeiro — cenário icônico de produções como *O Incrível Hulk*, *FIFA Street* e clipes de Snoop Dogg.

Nosso objetivo técnico e social foi criar uma experiência web **"World-Class"** que reflete a vibração, segurança e autenticidade do local. O projeto combina design de ponta (Awwwards-level) com performance extrema e SEO otimizado para alcançar turistas globais.

### 🌟 Diferenciais

* **Narrativa Visual**: Design imersivo com paralaxe, gradientes cinematográficos e micro-interações.
* **Segurança Primeiro**: Menus e páginas dedicadas a clarificar a segurança (UPP) e tranquilizar o turista.
* **Internacionalização**: Suporte nativo a **PT, EN, ES, FR** com detecção automática.
* **Impacto Real**: Ferramenta direta de geração de renda para guias e comércio local.

---

## 🎨 Visual Showcase

> *Uma experiência digital digna de premiação.*

<details open>
<summary><b>💫 Hero Section</b></summary>
<br/>
<img src="docs/screenshots/hero.png" alt="Hero Section - Favela República" width="100%" style="border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
<p><i>Entrada cinematográfica com efeito "Ken Burns" e call-to-action focado em conversão.</i></p>
</details>

<details>
<summary><b>📱 Mobile First Design</b></summary>
<br/>
<img src="docs/screenshots/mobile.png" alt="Mobile Design" width="400" style="border-radius: 20px; border: 4px solid #333;" />
<p><i>Navegação otimizada para o polegar, menus fluidos e performance nativa em dispositivos móveis.</i></p>
</details>

<details>
<summary><b>🔍 Tours e Reservas</b></summary>
<br/>
<img src="docs/screenshots/tours.png" alt="Featured Tours" width="100%" style="border-radius: 10px;" />
<p><i>Cards informativos com badges de "Seguro Incluso" e prova social integrada.</i></p>
</details>

---

## 🛠️ Stack Tecnológico

Construído sobre pilares de **Performance**, **SEO** e **Manutenibilidade**.

| Categoria | Tecnologia | Por que escolhemos? |
|-----------|------------|---------------------|
| **Core** | [Next.js 15 (App Router)](https://nextjs.org) | Server Components para performance zero-bundle-size. |
| **Linguagem** | [TypeScript 5.x](https://typescriptlang.org) | Tipagem estrita para reduzir bugs em produção. |
| **Estilo** | [Tailwind CSS 3.4](https://tailwindcss.com) | Design System consistente e CSS otimizado. |
| **Animação** | [Framer Motion 12](https://www.framer.com/motion/) | Transições de página e micro-interações fluidas. |
| **i18n** | [next-intl](https://next-intl-docs.vercel.app/) | Roteamento e tradução server-side eficiente. |
| **Ícones** | [Lucide React](https://lucide.dev) | Ícones vetoriais leves e consistentes. |
| **Deployment** | [Vercel](https://vercel.com) | Edge Network global e CI/CD automatizado. |

---

## ⚡ Performance & Cloud

O projeto atinge pontuação máxima no **Google Lighthouse**, garantindo indexação privilegiada e experiência de usuário instantânea.

* ✅ **LCP (Largest Contentful Paint)**: < 1.2s
* ✅ **CLS (Cumulative Layout Shift)**: 0.00
* ✅ **SEO Score**: 100/100
* ✅ **Accessibility**: 100/100

### Infraestrutura Vercel

* **Edge Caching**: Assets estáticos servidos da borda.
* **Image Optimization**: Conversão automática para WebP/AVIF.
* **Analytics**: Monitoramento em tempo real de acessos.

---

## 🚀 Como Executar Localmente

Siga os passos abaixo para ter o projeto rodando em sua máquina em minutos.

### Pré-requisitos

* Node.js 18+
* npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/glferreira-devsecops/TAVARES.git

# 2. Entre na pasta
cd favela-republica

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **<http://localhost:3000>** e veja a mágica acontecer. ✨

---

## 📁 Estrutura do Projeto

Uma arquitetura limpa e escalável, facilitando a entrada de novos desenvolvedores.

```
src/
├── app/                  # Next.js App Router (Páginas)
│   ├── [locale]/         # Internacionalização (pt, en, es, fr)
│   ├── not-found.tsx     # Página 404 Premium
│   └── layout.tsx        # Layout Principal
├── components/           # Biblioteca de Componentes
│   ├── layout/           # Header, Footer, Menu
│   ├── sections/         # Blocos de conteúdo (Hero, Tours...)
│   └── ui/               # Design System (Botões, Cards...)
├── lib/                  # Utilitários e Constantes
├── messages/             # Arquivos de Tradução (JSON)
└── public/               # Assets Estáticos
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tem ideias para melhorar a plataforma:

1. Faça um **Fork** do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/IncrivelRecurso`).
3. Commit suas mudanças (`git commit -m 'Add: Incrível Recurso'`).
4. Push para a Branch (`git push origin feature/IncrivelRecurso`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">

  **Made with 🧡 by [Gabriel Ferreira](https://github.com/glferreira-devsecops)**

  *Levando a favela para o mundo através da tecnologia.*

</div>
