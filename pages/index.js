import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Link from "next/link";

const Index = () => {
    const cleanData = [];
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')
    const [loading,setLoading] = useState(false)
    const [error , setError] = useState(null)
    const searchInputRef = useRef()

    useEffect(()=> {
            getResults();
    },[])

    const getResults = async () => {
        setLoading(true)
        try {

        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
            .then(response => {
                response.data.hits.map(hit => {
                    if (hit.url != null) {
                        cleanData.push(hit);
                    }
                })
                setResults(cleanData);
            })} catch (err) {
                setError(err)
            }
                setLoading(false)

    }

    const handleSearch = event => {
        event.preventDefault()
        getResults();
    }

    const handleClearSearch = ()=> {
        setQuery("");
        searchInputRef.current.focus();
    }

    return (
       <>
           <h1>search</h1>
           <form onSubmit={handleSearch}>
               <input type="text"
                      onChange={event => setQuery(event.target.value)}
                      value={query}
                      placeholder="enter search term"
                      ref={searchInputRef}
               />
               <button
                   type="submit"
                   >Search
               </button>
               <button type="button"
                        onClick={handleClearSearch}>clear</button>
           </form>
           {loading ? (
               <div>Loading</div>
               ) :(
               <ul>
               {results.map(result => (
                   <li key={result.objectID}>
                       <Link href={result.url} prefetch={false} >
                           <a>{result.title}</a>
                       </Link>
                   </li>
               ))}

           </ul>)}
           {error && <div>{error.message}</div>}
       </>
    )
}

export default Index