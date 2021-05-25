import Link from "next/link"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import styles from "../../styles/Feed.module.scss"

const Feed = ({ articles, pageNumber }) => {
  const router = useRouter()
  console.log(articles, pageNumber)

  return (
    <Layout>
      <div className={styles.main}>
        {articles.map((article, index) => (
          <Link href={article.url} key={index}>
            <a>
              <div className={styles.post}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} />}
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0))
            }
          }}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>
        <div>#{pageNumber}</div>

        <div
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0))
            }
          }}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next Page
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (pageContext) => {
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
    `https://newsapi.org/v2/top-headlines?country=tr&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  )

  const { articles } = await apiResponse.json()

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  }
}

export default Feed
