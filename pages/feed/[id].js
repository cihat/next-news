const Feed = () => {
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  )
}

export const getSErverSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    }
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLİC_NEWS_KEY}`
      }
    }
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/cihat/next-news/employeeOfTheMonth"
  )

  const employee = await apiResponse.json()

  return {
    props: {
      employee,
    },
  }
}

export default Feed
