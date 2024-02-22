import {DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  title: "Rusherhack Docs",
  base: "/documentation",
  description: "Indepth docs for rusherhacks plugins",
  themeConfig: {
    logo: 'assets/rusherhack-logo-head.png',
    search: {
      provider: 'local'
    },
    nav: [
        { text: 'Basics', link: '/basics/' },
        { text: 'Client', link: '/client/' },
        { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/': { base: '/', items: sidebarBase() },
      '/basics/': { base: '/basics/', items: sidebarBasics() },
      '/client/': { base: '/client/', items: sidebarClient() },
      '/api/': { base: '/api/', items: sidebarAPI() },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RusherDevelopment' }
    ],
    footer: {
      message: 'RusherHack and Rusher Development LLC are not affiliated with Mojang AB.',
      copyright: '© 2024 Rusher Development LLC - All Rights Reserved'
    }
  }
})

function sidebarBase(): DefaultTheme.SidebarItem[] {
  return [
    {
        text: 'Basics',
        link: 'basics'
    },
    {
        text: 'Client',
        link: 'client'
    },
    {
        text: 'API',
        link: 'api'
    }
  ]
}

function sidebarBasics(): DefaultTheme.SidebarItem[] {
    return [

    ]
}

function sidebarClient(): DefaultTheme.SidebarItem[] {
    return [

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
        { text: 'Globals', link: 'client/globals' }
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
