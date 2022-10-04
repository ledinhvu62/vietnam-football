import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import clubData from '../assets/fake-data/clubs'

const Home = () => {
    const clubs = clubData.getAllClubs()
    
    const [clubId, setClubId] = useState(clubs[0].id)
    const [activeSlide, setActiveSlide] = useState(false)
    
    const club = clubData.getClubById(clubId)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setActiveSlide(true)
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const chooseClub = (id) => {
        setActiveSlide(false)
        setTimeout(() => {
            setClubId(id)
            setActiveSlide(true)
        }, 1600)
    }

    return (
        <div className="home">
            <div className={`home__slide fullheight ${activeSlide ? 'active' : ''}`}>
                <div className="col-6 fullheight">
                    <div className="club__info">
                        <div className="club__info__item">
                            <span>{club.league}</span>
                        </div>
                        <div className="club__info__item">
                            <h2>{club.name}</h2>
                            <span>Football Club</span>
                        </div>
                        <div className="club__info__item">
                            <h3>Founded</h3>
                            <span className="club__info__item__text">
                                {club.founded}
                            </span>
                        </div>
                        <div className="club__info__item">
                            <h3>Location</h3>
                            <span className="club__info__item__text">
                                {club.location}
                            </span>
                        </div>
                        <div className="club__info__item">
                            <h3>Stadium</h3>
                            <span className="club__info__item__text">
                                {club.stadium}
                            </span>
                        </div>
                        <div className="club__info__item">
                            <Link to={`/club/${club.slug}`}>
                                <button className={`bg-${club.mainColor}`}>
                                    View details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`col-6 fullheight img-col bg-img-${club.mainColor}`}>
                    <div className="club__logo">
                        <img src={club.logo} alt="" />
                    </div>
                    <div className="club__logo-sponsor">
                        <div className="club__logo-sponsor__item">
                            <h4 className="club__logo-sponsor__item__title">Shirt Sponsor</h4>
                            <div className="club__logo-sponsor__item__img">
                                <img src={club.logoShirtSponsor} alt="" />
                            </div>
                        </div>
                        <div className="club__logo-sponsor__item">
                            <h4 className="club__logo-sponsor__item__title">Kit Manufacturer</h4>
                            <div className="club__logo-sponsor__item__img">
                                <img src={club.logoKitManufacturer} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__slide-control">
                {
                    clubs.map(item => (
                        <div
                            key={item.id}
                            className={`home__slide-control__item ${club.id === item.id ? 'active' : ''}`}
                            onClick={club.id === item.id ? null : () => chooseClub(item.id)}
                        >
                            <img src={item.logo} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home