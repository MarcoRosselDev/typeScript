const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string
  image: string
  info: string
  name:string
  price: string
}

/* async function getData(url:string):Promise<Tour[]> {
  return []
} */

async function getData(url:string): Promise<Tour[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data:Tour[] = await response.json()
    return data
  } catch (error) {
    const errorMst = error instanceof Error? error.message: 'generic msg error...'
    console.log(errorMst);
    return []
  }
}

const test:Tour[] = await getData(url)

test.map(item => console.log(item.name))// ahora vsc suguiere la lista de clave valor automaticamente, gracias a type Tour