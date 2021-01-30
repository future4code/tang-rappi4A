export const goToLoginScreen = (history) => {
  history.push('/login')
}

export const goToHomeScreen = (history) => {
  history.push('/')
}

export const goToRestaurantScreen = (history, id) => {
  history.push(`/restaurantes/${id}`)
}
