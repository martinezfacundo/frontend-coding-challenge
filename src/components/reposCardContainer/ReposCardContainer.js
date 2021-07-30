import React, { useEffect, useState } from 'react'
import RepoCard from '../repoCard/RepoCard'
import './ReposCardContainer.css'

function ReposCardContainer() {

    const [page, setPage] = useState(34)
    const [repos, setRepos] = useState([])

    // Async function to get the info of repositorys created between 2017-10-22 and 2017-11-22, using the state "page" to change the page
    const getRepos = async () => {
        const response = await fetch(`https://api.github.com/search/repositories?q=created:2017-10-22..2017-11-22&sort=stars&order=desc&page=${page}`);
        const data = await response.json()
        setRepos(data.items)
    }

    const nextPage = () => {
        if(repos){
            setPage(page + 1)
        }
    }

    const prevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        getRepos()
    }, [page])

    return (
            <div className='cards-container'>
                <div className='page-functions-container'>
                    <div className='page-count'>Page: {page}</div>
                    <button onClick={prevPage} className='page-button'>Prev</button>
                    <button onClick={nextPage} className='page-button'>Next</button>
                </div>
                {/* If repositories info does not exist, an announcement is shown*/}
                {repos? repos.map(elem => <RepoCard repositoryData={elem}/>) : <h1 className='no-results'>apparently there are no more results :(</h1>}
                <div className='page-functions-container'>
                    <div className='page-count'>Page: {page}</div>
                    <button className='page-button'>Prev</button>
                    <button className='page-button'>Next</button>
                </div>
            </div>
    )
}

export default ReposCardContainer