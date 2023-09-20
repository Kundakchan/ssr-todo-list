import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CardKt from './CardKt.vue'

describe('CardKt', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(CardKt)
    expect(wrapper.vm).toBeTruthy()
  })
})