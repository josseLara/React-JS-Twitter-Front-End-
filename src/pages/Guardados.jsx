import Left_Menu from "./components/Left_Menu/Left_Menu";
import Right_Menu from "./components/Right_Menu/Right_Menu";
import Tweet from "../pages/components/Tweet/Tweet";
import "../pages/css/Guardados.css";

import { ReactComponent as Svg_Conf } from '../img/svg_conf.svg';
import { useState } from "react";

const usuario_tweets = [{
    img_perfil: 'https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&w=600',
    tweet_message: {
        nombre: 'Juan Lope',
        hora: '2h',
        texto: 'Esta es una foto sacada de Internet',
        img: 'https://images.pexels.com/photos/2433985/pexels-photo-2433985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
}, {
    img_perfil: 'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tweet_message: {
        nombre: 'Juan Lope',
        hora: '2h',
        texto: 'Esta es una foto sacada de Internet',
        img: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
}]

function Guardados() {
    return (
        <>
            <Left_Menu></Left_Menu>
            <section className="guardados">
                <div className="header">
                    <h3>Guardados</h3>
                    <Svg_Conf fill="#fff" width={20} height={20} onClick={( e ) => console.log( e )} />
                </div>
                <div className="tweets">
                    {
                        usuario_tweets.map( ( props, i ) => {
                            return (
                                <>
                                    <Tweet
                                        key={Math.random()}
                                        img_perfil={props.img_perfil}
                                        nombre={props.tweet_message.nombre}
                                        hora={props.tweet_message.hora}
                                        texto={props.tweet_message.texto}
                                        img={props.tweet_message.img}
                                    />
                                </>
                            );
                        } )
                    }
                </div>
            </section>
            <Right_Menu></Right_Menu>
        </>
    );
}


export default Guardados;