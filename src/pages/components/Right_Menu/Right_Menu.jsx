import './Right_Menu.css'

function Right_Menu() {
    return (
        <section className="right-menu">
            <form action="#" method="post">
                <input
                    type="search"
                    name="search"
                    className="search-field"
                    placeholder="Buscar en twitter"
                />
            </form>
            {/* card 1 */}
            <div className="trends-menu">
                <div className="header">
                    Qué está pasando
                </div>
                <div>
                    {/* item-card */}
                    <div className="item">
                        <div className="item-info">
                            <small className="trend-topic">COVID-19· EN DIRECTO</small>
                            <b> Lo último de la COVID-19 en Argentina</b>
                        </div>
                        <img className="trend-img" src="https://pbs.twimg.com/semantic_core_img/1255578711069298688/Ow56oVOR?format=jpg&name=240x240" alt="covid" />
                    </div>
                    {/* item-card */}
                    <div className="item">
                        <div className="item-info">
                            <b>#RecetasAtma</b>
                            <small className="trend-tweets">Twitter es servicio y por eso les dejamos este hilo con recetas Atma.</small>
                            <small className="trend-tweets">&#8599; Promocionado por ATMA</small>
                        </div>
                    </div>
                    {/* item-card */}
                    <div className="item">
                        <div className="item-info">
                            <small className="trend-topic">Música · Tendencia</small>
                            Madonna
                            <small className="trend-tweets">395K tweets</small>
                        </div>
                    </div>
                    {/* item-card */}
                    <div className="item">
                        <div className="item-info">
                            <small className="trend-topic">Guerra en Ucrania · EN DIRECTO</small>
                            <b> Putin ordena movilización parcial mientras Rusia avanza</b>
                        </div>
                        <img className="trend-img" src="https://pbs.twimg.com/semantic_core_img/1566860317681864704/LwYcYhJi?format=jpg&name=120x120" alt="covid" />
                    </div>

                </div>
                <div className="footer">Mostrar más</div>
            </div>
            {/* card 2 */}
            <div className="trends-menu">
                <div className="header">A quién seguir</div>
                <div>
                    {/* user 1 */}
                    <div className="item">
                        <div className="item-card-user">
                            <img className='item-img-user' src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img_user" />
                            <div className="item-info-user">
                                <b>Marcos</b>
                                <small className="trend-topic">Trending in Rwanda</small>
                            </div>
                            <button className="item-btn-user">Seguir</button>
                        </div>
                    </div>
                   {/* user 2 */}
                   <div className="item">
                        <div className="item-card-user">
                            <img className='item-img-user' src="https://images.pexels.com/photos/1545980/pexels-photo-1545980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img_user" />
                            <div className="item-info-user">
                                <b>Lucia</b>
                                <small className="trend-topic">Trending in Rwanda</small>
                            </div>
                            <button className="item-btn-user">Seguir</button>
                        </div>
                    </div>
                    {/* user 3 */}
                    <div className="item">
                        <div className="item-card-user">
                            <img className='item-img-user' src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" alt="img_user" />
                            <div className="item-info-user">
                                <b>Nasa</b>
                                <small className="trend-topic">Trending in Rwanda</small>
                            </div>
                            <button className="item-btn-user">Seguir</button>
                        </div>
                    </div>
                </div>
                <div className="footer">Mostrar más</div>
            </div>

        </section>
    );
}

export default Right_Menu;