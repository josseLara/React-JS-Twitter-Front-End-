import Tweet from "../components/Tweet/Tweet";
import "./css/Home.css"

import { ReactComponent as Svg_Destacado } from '../img/svg_destacado.svg';
import { ReactComponent as Svg_Image } from '../img/svg_image.svg';
import { ReactComponent as Svg_Gif } from '../img/svg_gif.svg';
import { ReactComponent as Svg_Encuesta } from '../img/svg_encuesta.svg';
import { ReactComponent as Svg_Emoji } from '../img/svg_emoji.svg';
import { ReactComponent as Svg_Program } from '../img/svg_program.svg';
import { ReactComponent as Svg_Ubicacion } from '../img/svg_ubicacion.svg';

import Right_Menu from "../components/Right_Menu/Right_Menu";
import Left_Menu from "../components/Left_Menu/Left_Menu";

// informacion que va contener el Tweet
const usuario_tweets = [{
    img_perfil: 'https://images.pexels.com/photos/1342650/pexels-photo-1342650.jpeg?auto=compress&cs=tinysrgb&w=600',
    tweet_message: {
        nombre: 'Juan Lope',
        hora: '2h',
        texto: 'Esta es una foto sacada de Internet',
        img: 'https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
}, {
    img_perfil: 'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tweet_message: {
        nombre: 'Juan Lope',
        hora: '2h',
        texto: 'Esta es una foto sacada de Internet',
        img: 'https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
}]

function Home() {
    return (
        <>
            <Left_Menu></Left_Menu>
            <section className="timeline">
                <div className="header">
                    <h3>Inicio</h3>
                    <Svg_Destacado className="float-right" style={{ width: 20, fill: 'lightgray' }}></Svg_Destacado>
                </div>
                <div className="tweet-box">
                    <div className="tweet-message">
                        <img
                            src="https://images.pexels.com/photos/3778199/pexels-photo-3778199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="profile picture"
                            className="avatar"
                        />
                        <textarea
                            className="tweet-textarea"
                            rows="4"
                            placeholder="Que estas Pensando?"
                            autoFocus
                        ></textarea>
                    </div>
                    <div className="tweet-message">
                        <img
                            src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="profile picture"
                            className="img_prev"
                        />
                    </div>
                    <div className="tweet-message tweet-icons-firsh" style={{ position: 'relative' }}>
                        <div className="tweet-icons__group">
                            <input type="file" name="img_user" id="img_user" onChange={changeImg_prev} />
                            <label htmlFor="img_user"><Svg_Image fill='#31a4f1' width={20} height={20} /></label>
                            <Svg_Gif fill='#31a4f1' width={20} height={20} />
                            <Svg_Encuesta fill='#31a4f1' width={20} height={20} />
                            <Svg_Emoji fill='#31a4f1' width={20} height={20} />
                            <Svg_Program fill='#31a4f1' width={20} height={20} />
                            <Svg_Ubicacion fill='#31a4f1' width={20} height={20} />
                        </div>

                        <button className="btn_message">Twittear</button>
                    </div>
                </div>
                <div className="tweets">
                    {usuario_tweets.map( ( props ) => {
                        return ( <Tweet key={Math.random()}
                            img_perfil={props.img_perfil} nombre={props.tweet_message.nombre}
                            hora={props.tweet_message.hora} texto={props.tweet_message.texto}
                            img={props.tweet_message.img} /> )
                    } )}
                </div>
            </section>
            <Right_Menu />

        </>
    )
}

// event
function changeImg_prev() {

    const seleccionArchivos1 = document.querySelector( "#img_user" )
    const imagenPrevisualizacion1 = document.querySelector( ".img_prev" );

    // Escuchar cuando cambie


    imagenPrevisualizacion1.style.display = "block";
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos1 = seleccionArchivos1.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if ( !archivos1 || !archivos1.length ) {
        imagenPrevisualizacion1.src = "";
        imagenPrevisualizacion1.style.display = "none";
        return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo1 = archivos1[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL1 = URL.createObjectURL( primerArchivo1 );
    // Y a la fuente de la imagen le ponemos el objectURL
    imagenPrevisualizacion1.src = objectURL1;
}



export default Home;