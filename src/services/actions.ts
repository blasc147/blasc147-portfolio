'use server'
//todas las funciones que se exportan desde este archivo solo se ejecutan en el servidor

export async function fetchCurrencies() {
  const response = await fetch('https://api.coincap.io/v2/assets')
  if (!response.ok) {
    throw new Error('Error getting currencies')
  }
  console.log(response.json())

  return response.json()
}
