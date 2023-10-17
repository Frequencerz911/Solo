import qlimaxImg from "../../assets/Qlimax.jpg";

import "./Card.scss";


const Card = () => {
return (
    <section className="CardQlimax">
        <h1>Qlimax</h1>

        <img src={qlimaxImg} alt="picture" />

        <p>Qlimax est un événement annuel organisé en novembre par la société néerlandaise Q-dance dans le GelreDome, à Arnhem (Pays-Bas). Un autre Qlimax moins important était également parfois organisé en Belgique. La scène du festival est occupée par des DJ de renommée internationale mixant du hardstyle et du hardcore. Qlimax est connu parmi les adeptes du genre pour ses nombreux effets de sons et lumières.</p>
    </section>
    );
};

export default Card;