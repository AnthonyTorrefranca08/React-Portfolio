import React from 'react'
import './FolderDescription.css'

const FolderDescription = ({title, description, }) => {
return (
    <section className="folderDescription">
        <h1 className='folderDescTitle'>{title}</h1>
        <p>{description}</p>
    </section>
)
}

export default FolderDescription
