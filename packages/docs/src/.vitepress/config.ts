import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "L2 Chain Development",
    description: "Learning, Planning and Building an L2 with Polygon CDK",
    
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Learn', link: '/learn/' },
        { text: 'Plan', link: '/plan/' },
        { text: 'Build', link: '/build/' },
      ],
      
      sidebar: {
        '/learn/': [
          {
            text: 'Learning Journey',
            items: [
              { text: 'Concept Map', link: '/learn/' }
            ]
          }
        ],
        '/plan/': [
          {
            text: 'Implementation Plan',
            items: [
              { text: 'Overview', link: '/plan/' }
            ]
          }
        ],
        '/build/': [
          {
            text: 'Implementation',
            items: [
              { text: 'Progress', link: '/build/' }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/yourusername/polygon-graph-op-chain' }
      ]
    },

    // Mermaid configuration
    mermaid: {
      theme: 'default',
      darkMode: true
    }
  })
)