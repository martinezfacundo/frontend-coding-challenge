import React from 'react'
import './RepoCard.css'

function RepoCard({repositoryData}) {
    return(
        <div className='card-container'>
            <div className='avatar-container'>
                <img className='avatar' src={repositoryData.owner.avatar_url} alt='avatar'/>
            </div>
            <div className='card-info-container'>
                <h1>{repositoryData.name}</h1>
                <h4>{repositoryData.description}</h4>
                <div className='box-container'>
                    <div className='stars-box'>
                        Stars: {repositoryData.stargazers_count}
                    </div>
                    <div className='issues-box'>
                        Issues: {repositoryData.open_issues_count}
                    </div>
                    <p>Submitted 30 days ago by {repositoryData.owner.login}</p>
                </div>
            </div>
        </div>
    )
}

export default RepoCard