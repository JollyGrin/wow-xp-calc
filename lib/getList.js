import fetch from 'axios'

const getList = async () => {
  const apiURL = '/api/list'

  try {
    const result = await fetch(apiURL)
    return result
  } catch (err) {
    console.log(err)
  }
}

export { getList }
