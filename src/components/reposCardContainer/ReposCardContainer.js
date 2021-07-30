import React, { useEffect, useState } from 'react'
import RepoCard from '../repoCard/RepoCard'
import './ReposCardContainer.css'

function ReposCardContainer() {

    const [page, setPage] = useState(1)
    const [repos, setRepos] = useState([])

    const getRepos = async () => {
        const response = await fetch(`https://api.github.com/search/repositories?q=created:2017-10-22..2017-11-22&sort=stars&order=desc&page=${page}`);
        const data = await response.json()
        setRepos(data.items)
    }

    useEffect(() => {
        getRepos()
    }, [page])

    console.log(repos)
    repos.map(elem => console.log(elem.name))

    return (
        <div className='container'>
            {repos.map(elem => <RepoCard repositoryData={elem}/>)}
        </div>
    )
}

export default ReposCardContainer