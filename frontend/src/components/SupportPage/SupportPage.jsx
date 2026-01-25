import SuppportPageHero from "./SupportPageHero.jsx";
import SupportPageTop from "./SupportPageTop";

function SupportPage() {
    return ( 
        <>
            <SupportPageTop></SupportPageTop>
            <SuppportPageHero
                question="Account Opening"
                answer={["Resident Indivisual","Minor","Non Resident Indian(NRI)","Glossary"]}
                rank = "1"
            ></SuppportPageHero>
        </>
     );
}

export default SupportPage;