import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'

const LandingPage = { template: '<div>Landing</div>' }
const IngridientsPage = { template: '<div>Ingridients</div>' }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/ingridients', name: 'IngridientsPage', component: IngridientsPage }
  ]
})

describe('Header.vue', () => {
  it('sets the color "primary" on LandingPage-button, if route LandingPage is active', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })

    const buttons = wrapper.findAllComponents({ name: 'NavigationButton' })
    expect(buttons[0].props('color')).toBe('primary') // "Search Page"
    expect(buttons[1].props('color')).toBe('secondary') // "Ingredient List"
  })

  it('sets the color "primary" on Ingredient-Button, if route IngridientsPage is active', async () => {
    router.push('/ingridients')
    await router.isReady()

    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })

    const buttons = wrapper.findAllComponents({ name: 'NavigationButton' })
    expect(buttons[0].props('color')).toBe('secondary') // "Search Page"
    expect(buttons[1].props('color')).toBe('primary')   // "Ingredient List"
  })
})