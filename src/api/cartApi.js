const BACKEND = 'http://faceprog.ru/reactcourseapi/cart/'

export const load = async (currentToken) => {
  const response = await fetch(BACKEND + 'load.php?token=' + currentToken)
  return await response.json()
}

export const add = async (id, token) => {
  const response = await fetch(`${BACKEND}add.php?token=${token}&id=${id}`)
  return await response.json()
}

export const remove = async (id, token) => {
  const response = await fetch(`${BACKEND}remove.php?token=${token}&id=${id}`)
  return await response.json()
}

export const change = async (id, newCnt, token) => {
  const response = await fetch(
    `${BACKEND}change.php?token=${token}&id=${id}&cnt=${newCnt}`
  )
  return await response.json()
}

export const cleanCart = async (token) => {
  const response = await fetch(`${BACKEND}clean.php?token=${token}`)
  return await response.json()
}
