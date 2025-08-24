import BookTable from "../components/book/book.table"
import CreateBookControl from "../components/book/create.book.control"

const BookPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <CreateBookControl />
            <BookTable />
        </div>
    )
}

export default BookPage