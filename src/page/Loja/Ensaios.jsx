import Card from "../../assets/components/cards";
import gestante from "../../assets/images/gestante.jpg";
import NEWBORN from "../../assets/images/newborn.webp";
import SMASH from "../../assets/images/smash.webp";
import ACOMPANHAMENTO from "../../assets/images/acompanhamento.jpg";
import FAMILIA from "../../assets/images/familia.webp";
import "../../assets/css/ensaios.css"

export default function Ensaios(){

    return (
        <>
            <section className="Ensaios" id="ensaios">
                <article className="info-ensaios">
                    <div className="titulo">

                        <h2>CADA FASE <br />É <span>ÚNICA.</span></h2>
                    </div>
                    <hr />
                    <p>Registros que celebram o agora, com toda <br />a beleza e a verdade de cada momento. <br /> Do newborn a familia, cada ensaio é feito <br /> com sensibilidade e propósito.</p>
                </article>

                <article className="cards-ensaio">
                    <Card descricao={"GESTANTE"} numero={"01"} imagem={gestante}  />
                    <Card descricao={"NEWBORN"} numero={"02"} imagem={NEWBORN}  />
                    <Card descricao={"SMASH"} numero={"03"} imagem={SMASH}  />
                    <Card descricao={"ACOMPANHAMENTO"} numero={"04"} imagem={ACOMPANHAMENTO}  />
                    <Card descricao={"FAMILIA"} numero={"05"} imagem={FAMILIA}  />
                </article>
            </section>
        
        </>
    )
}