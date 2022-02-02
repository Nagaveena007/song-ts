import { FoodBook } from '../types/book'

interface SingleBookProps {
  book: FoodBook
}

const SingleBook = ({ book }: SingleBookProps) => <li>{book.title}</li>

export default SingleBook
