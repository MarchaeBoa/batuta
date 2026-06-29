/**
 * @batuta/db — acesso a dados e tipos de persistência.
 */

export const BATUTA_DB_VERSION = '0.1.0'

export interface Connection {
  id: string
  platform: string
  createdAt: string
}
