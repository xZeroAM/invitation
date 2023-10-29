import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import confetti from "canvas-confetti"
import CountdownTimer from './CountdownTimer'
import { useEffect } from 'react'

export const Card = () => {

    const conffeti = () => {
        confetti()
        confetti()
    }

    useEffect(()=>{
        confetti();
    },[]);

    return (
        <section className='bi-container'>
            <div className='bi-card'>
                <div className='bi-parteSuperior'>
                    <p className='bi-edad' onClick={conffeti}>21</p>
                    <p className='bi-teInvito'>¡TE INVITO A MI CUMPLEAÑOS!</p>

                </div>

                <div className="bi-parteMedio">
                    <div className='bi-nombre'>
                        <h1 className='bi-nombreText'>Angelina Luca</h1>
                    </div>

                    <div className='bi-dayHour'>
                        <p className='bi-dayHourText'>SÁBADO</p>
                        <span className='bi-dayHourNumber'>04</span>
                        <p className='bi-dayHourText'>NOVIEMBRE</p>
                    </div>
                </div>
                <div className="bi-parteAbajo">
                    <div className='bi-ubicacion'>
                        <a href="https://www.google.com/maps/dir//-12.0241561,-76.953078/@-12.0242432,-76.9530599,19.25z/data=!4m2!4m1!3e3?hl=es&entry=ttu" target='_blanck'>
                            <p><FontAwesomeIcon icon={faLocationDot} size='sm' style={{ color: "ff0000" }} /> <span>ASOC. LA RIVERA MZ. D2 LOTE 12 - CALLE LAS BEGONIAS - EL AGUSTINO</span></p>
                        </a>
                    </div>
                </div>
                <div>
                    <CountdownTimer></CountdownTimer>
                </div>
            </div>
        </section>
    )
}