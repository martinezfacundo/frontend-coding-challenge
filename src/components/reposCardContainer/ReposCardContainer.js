import React, { useEffect, useState } from 'react'

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

    return (
        <></>
    )
}

export default ReposCardContainer