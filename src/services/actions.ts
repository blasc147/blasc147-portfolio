'use server'

export async function fetchCurrencies() {
  const response = await fetch('https://api.coincap.io/v2/assets')
  if (!response.ok) {
    throw new Error('Error getting currencies')
  }
  console.log(response.json())

  return response.json()
}
