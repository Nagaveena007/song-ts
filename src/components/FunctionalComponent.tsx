import { useEffect, useState } from 'react'
import { FoodBook } from '../types/book'
import SingleBook from './SingleBook'

// let's do a fetch from https://striveschool-api.herokuapp.com/food-books

// fetching process in a react application:
// 1) make room for your data -> create a state variable
// 2) fetch the data with the fetch() method
// 3) parse the body of your response with the .json() method
// 4) setting that state variable with the resulting resources

// what changes in TS?
// the problem comes setting an initial value of a state variable with []
// because that's perfect as an initial value for an array of anything,
// but that's also TERRIBLE for TS to try to understand what the content of the
// array will be! :( it will set it as an array of type NEVER
// to fix this, just provide the shape of one of the elements to TS,
// and assign the type of your array using the type argument syntax <>

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

// const FunctionalComponent = (props: FunctionalComponentProps) => {
//   return <h1>{props.title}</h1>
// }

// ({ title })

interface Student {
  name: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [counter, setCounter] = useState(0)
  // typescript inferes from the initial value the type of the state variable!
  const [student, setStudent] = useState<null | Student>(null)
  // the type argument overrides what TS inferes out of your initial value
  // to give a type so student; without it, it will only understand that
  // student can ONLY be null, because that's the initial value you gave it

  const [foodBooks, setFoodBooks] = useState<FoodBook[]>([])

  useEffect(() => {
    setStudent({ name: 'Stefano' })
    fetchFoodBooks()
  }, [])

  const fetchFoodBooks = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
      if (response.ok) {
        let books = await response.json()
        setFoodBooks(books)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {counter}
      <h1 onClick={() => setCounter(counter + 1)}>{title}</h1>
      <h3>{subTitle?.toUpperCase()}</h3>
      <ul>
        {foodBooks.map((book) => (
          <SingleBook book={book} key={book.id} />
        ))}
      </ul>
    </>
  )
}

export default FunctionalComponent
