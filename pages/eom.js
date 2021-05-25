import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/EOM.module.scss"

const eom = ({ employee }) => {
  console.log(employee)
  return (
    <Layout>
      <div className={styles["page-container"]}>
        <div className={styles.main}>
          <h1>Next Project</h1>
          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt={employee.description} />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </Layout>
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

export default eom
