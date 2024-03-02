import {DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  title: "RusherHack Documentation",
  base: "/documentation",
  head: [
    ['link', { rel: 'icon', href: './assets/rh-head_256x256.png' }]
  ],
  description: "Documentation for all things related to RusherHack.",
  themeConfig: {
    logo: 'assets/rh-head_256x256.png',
    search: {
      provider: 'local'
    },
    nav: [
        { text: 'Guide', link: '/guide/' },
        { text: 'Features', link: '/features/' },
        { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/': { base: '/', items: sidebarBase() },
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/features/': { base: '/features/', items: sidebarFeatures() },
      '/api/': { base: '/api/', items: sidebarAPI() },
    },
    socialLinks: [
      { icon: {
        svg: "Site" //replace with an icon
        }, link: 'https://rusherhack.org/'
      },
      { icon: 'github', link: 'https://github.com/RusherDevelopment' },
      { icon: 'youtube', link: 'https://www.youtube.com/@RusherDevelopment' }
    ],
    footer: {
      copyright: '© 2024 Rusher Development LLC - All Rights Reserved',
      message: 'RusherHack and Rusher Development LLC are not affiliated with Mojang AB.'
    }
  }
})

function sidebarBase(): DefaultTheme.SidebarItem[] {
  return [
    {
        text: 'Guide',
        link: 'guide'
    },
    {
        text: 'Features',
        link: 'features'
    },
    {
        text: 'API',
        link: 'api'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Account', link: 'introduction/account' },
          { text: 'Installation', link: 'introduction/installation' }
        ]
      },
      {
        text: 'Getting Help', link: 'help/', //will have info about help related things; opening help ticket, emailing, etc
        collapsed: false,
        items: [
          { text: 'HWID', link: 'help/hwid' }
        ]
      }
    ]
}

function sidebarFeatures(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Modules', link: 'modules/',
        collapsed: false,
        items: [
          {
            text: 'Client',
            collapsed: false,
            items: [
              { text: 'ClickGUI', link: 'modules/client/clickgui' } //just an example, in future this should be automatically generated
            ]
          },
          {
            text: 'Movement',
            collapsed: true,
            items: [
              { text: 'Velocity', link: 'modules/movement/velocity' } //just an example, in future this should be automatically generated
            ]
          }
        ]
      },
      {
        text: 'HUD Elements', link: 'hud/',
        collapsed: true,
        items: [
        ]
      },
      {
        text: 'Commands', link: 'commands/',
        collapsed: true,
        items: [
        ]
      },
      {
        text: 'Windows', link: 'windows/',
        collapsed: true,
        items: [
        ]
      }
    ]
}

function sidebarAPI(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Information',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'guide/getting-started' }
      ]
    },
    {
      text: 'Client',
      collapsed: true,
      items: [
        { text: 'Globals', link: 'features/globals' }
      ]
    },
    {
      text: 'Core',
      collapsed: true,
      items: [

      ]
    }
  ]
}
