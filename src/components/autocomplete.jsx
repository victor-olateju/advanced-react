import { useEffect, useReducer, useState } from "react"


const books =  [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            yearPublished: 1960,
            read: true,
            likes: 1500
        },
        {
            title: "1984",
            author: "George Orwell",
            yearPublished: 1949,
            read: false,
            likes: 2000
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            yearPublished: 1925,
            read: true,
            likes: 1800
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            yearPublished: 1851,
            read: false,
            likes: 1200
        }
    ]


export const AutoComplete = () => {

    const [data, setData] = useState([])

    useEffect(()=> {
        setData(books)
    }, [])

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = books.filter((book) => 
            Object.values(book).some(val => val.toString().toLowerCase().includes(value))
        );
        setData(filtered);
    };

    return <div>
        <input onChange={handleInputChange} />
        {data?.map((book)=> {
            return <div className="" key={book.title}>
                {book.title}
                {book.author}
                {book.yearPublished}
                {book.read}
            </div>
        })}
        <br />
    </div>
}