const getData = async () => {
  try {
    const response = await fetch('https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b')
    let results = await response.json()

    return results

  } catch (error) {

    console.log(error, 'error');

  }
}

export default getData