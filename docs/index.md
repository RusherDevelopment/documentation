---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Rusherhack Docs"
  tagline: Indepth docs for rusherhacks plugins
  image:
    src: assets/rusherhack-logo-head.png
    alt: logo
  actions:
    - theme: brand
      text: Purchase Rusherhack
      link: https://rusherhack.org/
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/John200410.png',
    name: 'John200410',
    title: 'Creator & Owner',
    links: [
      { icon: 'github', link: 'https://github.com/John200410' }
    ]
  },
{
    avatar: 'https://www.github.com/thnkscj.png',
    name: 'Thnks_CJ',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/thnkscj' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Contributors
    </template>
    <template #lead>
      These docs are brought to you by the following list of amazing contributors.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
