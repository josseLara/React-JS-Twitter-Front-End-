import { useContext } from 'react';
import './Tweet.css'

import { ReactComponent as Svg_Mensaje } from '../../../img/svg_mensaje.svg';
import { ReactComponent as Svg_Retwettear } from '../../../img/svg_retwettear.svg';
import { ReactComponent as Svg_Like } from '../../../img/svg_like.svg';
import { ReactComponent as Svg_Compartir } from '../../../img/svg_compartir.svg';


function Tweet( props ) {
    return (
        <div className="tweet">

            <div className="tweet-usuario">
                <img
                    src={props.img_perfil}
                    alt="profile picture"
                    className="avatar"
                />
                <div className="tweet-message">
                    <div className="content-info-tweet">
                        <div className="tweet-info-user">
                            <b>{props.nombre} </b>
                            <span className="muted" style={{ marginLeft: 5, marginRight: 1 }} >@Art</span>
                            <span className="muted"> - Hace {props.hora}</span>
                        </div>
                        <p>{props.texto}</p>
                    </div>

                    <img
                        src={props.img}
                        className="tweet-image"
                        alt="furniture"
                    />
                </div>
            </div>

            <div className="tweet-icons">
                <div className="tweet-icon icon_1">
                    <Svg_Mensaje width={18.75} height={18.75} />
                    <p className='tweet_num'>12</p>
                </div>
                <div className="tweet-icon icon_2">
                    <Svg_Retwettear width={18.75} height={18.75} />
                    <p className='tweet_num'>8</p>
                </div>
                <div className="tweet-icon icon_3">
                    <Svg_Like width={18.75} height={18.75} onClick={event_Icons} />
                    <p className='tweet_num'>12</p>
                </div>
                <div className="tweet-icon icon_4">
                    <Svg_Compartir width={18.75} height={18.75} />
                </div>
            </div>
        </div>
    );
}

function eventHeart() {
    let bx_heart = document.querySelector( '.heart' );
    if ( bx_heart.classList.contains( 'bx-heart' ) ) {
        bx_heart.classList.replace( 'bx-heart', 'bxs-heart' );
        bx_heart.style.color = "red";
    } else {
        bx_heart.classList.replace( 'bxs-heart', 'bx-heart' );
        bx_heart.style.color = "gray";
    }
}

function event_Icons() {
    
}

export default Tweet;