/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
/**
 * Exported function to Typescript that returns a uuid
 *
 * The function has an optional parameter of type string.
 * If called without a parameter, it returns a random uuid.
 * If called with a string type parameter, it returns a uuid based on a Sha256 hashed input.
 *
 * # Panics
 *
 * The function works without parameter and with a string type parameter.
 * The function will panic if is called from Typescript with a non-string type parameter.
 *
 * # Examples (Typescript code)
 *
 * ```typescript
 * import { uuid } from './index'
 *
 * // Generate a uuid from a string input
 * const id = uuid("1cbf5655eeb58bf905f4b1958ad0b71a2855")
 * console.log(id)
 *
 * // Generate a random uuid
 * const id = uuid()
 * console.log(id)
 * ```
 */
export function uuid(s?: string | undefined | null): string
