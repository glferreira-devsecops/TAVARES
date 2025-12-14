```mermaid
C4Context
      title System Context Diagram for Favela-República Tour

      Person(user, "Global Tourist", "A traveler looking for authentic cultural experiences in Rio.")
      System(platform, "Favela-República Platform", "Next.js 15 Web App hosted on Vercel.")

      System_Ext(whatsapp, "WhatsApp API", "Direct communication channel.")
      System_Ext(maps, "Google Maps", "Location services.")
      System_Ext(social, "Social Media", "Instagram/Facebook integration.")

      Rel(user, platform, "Views tours, reads blog, books visits", "HTTPS")
      Rel(platform, whatsapp, "Redirects for booking", "Link")
      Rel(platform, maps, "Embeds maps", "Iframe")
```

```mermaid
graph TD
    subgraph "Edge Network (Vercel)"
        CDN[CDN Cache]
        Middleware[i18n Middleware]
    end

    subgraph "Server (Next.js)"
        SSG[Static Pages (Build Time)]
        ISR[Incremental Static Regeneration]
        API[API Routes]
    end

    subgraph "Data Layer"
        Dict[JSON Dictionaries]
        Content[Markdown Blog]
    end

    User --> CDN
    CDN --> Middleware
    Middleware --> SSG
    SSG --> Dict
    ISR --> Content
```
