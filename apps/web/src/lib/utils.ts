import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/** Formata centavos (inteiro) como BRL. Dinheiro sempre em centavos no core. */
export function brl(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  })
}
