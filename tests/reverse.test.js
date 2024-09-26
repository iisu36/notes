import { test, describe } from 'node:test'
import { strictEqual } from 'node:assert'

import forTesting from '../utils/for_testing.js'

test('reverse of a', () => {
  const result = forTesting.reverse('a')

  strictEqual(result, 'a')
})

test('reverse of react', () => {
  const result = forTesting.reverse('react')

  strictEqual(result, 'tcaer')
})

test('reverse of saippuakauppias', () => {
  const result = forTesting.reverse('saippuakauppias')

  strictEqual(result, 'saippuakauppias')
})

describe('average', () => {
  test('of one value is the value itself', () => {
    strictEqual(forTesting.average([1]), 1)
  })

  test('of many is calculated right', () => {
    strictEqual(forTesting.average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('of empty array is zero', () => {
    strictEqual(forTesting.average([]), 0)
  })
})
