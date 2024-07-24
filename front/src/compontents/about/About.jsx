import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './about.scss'

function About(props) {
   
   const[active, setActive]=useState(false)
//    const handleClick = (e) => {
//         e.target.parentNode.classList.toggle("active")
        
//    }
    return (
            <div className={`about__body ${props.id % 2==0 ?"right":""}`}>
                <div className={`about__container ${active ?'active':''}`}>
                    <div className="about__myname" onClick={() => setActive(!active)} >
                         <span>{props.item}</span>
                          <FontAwesomeIcon className="about__icon" icon={faChevronCircleDown} />
                        <div className="about__infor">
                            <p>Thông tin chi tiết</p>
                        </div>
                    </div>
                    <div className={`about__content ${props.id % 2==0 ?"right":"left"}`}>
                        <p className="about__text">{props.content}</p>
                    </div>
                </div>
                <div className="about__img">
                    <img className="about__img_content" src={props.img} alt="" />
                </div>
            </div>
    )
}

export default About;