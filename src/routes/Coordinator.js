export const goToLoginScreen = (history) => {
  history.push('/login')
}

export const goToHomeScreen = (history) => {
  history.push('/')
}

export const goToRestaurantScreen = (history, id) => {
  history.push(`/restaurantes/${id}`)
}

export const goToSignUpScreen = (history) => {
  history.push('/cadastro')
}

export const goToCart = (history) => {
  history.push('/cart')
}

export const goToBoxAmount = (history) => {
  history.push('/restaurantes/${id}')
}
