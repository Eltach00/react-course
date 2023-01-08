const BACKEND = 'http://faceprog.ru/reactcourseapi/products/'

export const all = async () => {
  const resp = await fetch(`${BACKEND}all.php`)
  return await resp.json()
}
