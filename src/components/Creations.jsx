import React from 'react'

const Creations = () => {

    const creationsList = [
        {
            id: 1,
            title: "Deep Earth",
            imageUrl: "../src/assets/images/desktop/image-deep-earth.jpg"
        },
        {
            id: 2,
            title: "Night Arcade",
            imageUrl: "../src/assets/images/desktop/image-night-arcade.jpg"
        },
        {
            id: 3,
            title: "Soccer Team VR",
            imageUrl: "../src/assets/images/desktop/image-soccer-team.jpg"
        },
        {
            id: 4,
            title: "The Grid",
            imageUrl: "../src/assets/images/desktop/image-grid.jpg"
        },
        {
            id: 5,
            title: "From Up Above VR",
            imageUrl: "../src/assets/images/desktop/image-from-above.jpg"
        },
        {
            id: 6,
            title: "Pocket Borealis",
            imageUrl: "../src/assets/images/desktop/image-pocket-borealis.jpg"
        },
        {
            id: 7,
            title: "The Curiosity",
            imageUrl: "../src/assets/images/desktop/image-curiosity.jpg"
        },
        {
            id: 8,
            title: "make it fisheye",
            imageUrl: "../src/assets/images/desktop/image-fisheye.jpg"
        }
    ]


    return (
        <div className='container mt-5'>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="header2">OUR CREATIONS</h2>
                <a type='button' className='btn btn-outline-dark rounded-0'>See All</a>
            </div>
            <div className='row'>
                {creationsList.map((creationsList, index) => (
                    <div className='col-md-3 py-2' key={creationsList.id}>
                        <div className='card'>
                            <img src={creationsList.imageUrl} className='card-img rounded-0' alt="" />
                            <div className='card-img-overlay d-flex align-items-end '>
                                <h5 className="card-title creation-title">{creationsList.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Creations