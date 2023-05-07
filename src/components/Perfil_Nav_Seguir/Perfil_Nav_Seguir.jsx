import './Perfil_Nav_Seguir.css'
function Perfil_Nav_Seguir() {
    return (
        <>
            {/* usaers */}
            <div className="perfil-nav-user">
                <img src="https://pbs.twimg.com/profile_images/1554909814383419392/hfde-K-e_400x400.jpg" alt="users" />
                <div className="perfil-nav-user-info">
                    <b>Roma Octo</b>
                    <span>@marty</span>
                    <p>Publicación digital de noticias e información del mundo Pokémon.</p>
                </div>
                <button>Seguir</button>
            </div>
        </>
    );
}

export default Perfil_Nav_Seguir;