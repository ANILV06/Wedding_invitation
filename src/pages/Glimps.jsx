import '../index.css';
import './Glimps.css';

function Glimps(){
return(
        <div className="text-center ">
            <span className="section-label">A Glimpse of Us</span>
            <h2 className="section-heading">Our Beautiful <code><br /></code> Moments</h2>
            <div className="ornament mt-4">
                <div className="ornament-line rev"></div>
                <div className="ornament-line"></div>
            </div>
            <div class="memories-frame reveal reveal-delay-2 revealed">
            <div class="memories-inner">
                <video autoPlay loop muted playsInline> 
                    <source src="https://res.cloudinary.com/dwtzcpmzo/video/upload/v1775908019/Glimps_xaw4ix.mp4" type="video/mp4" />
                </video>
            </div>
           
        </div>
           <p className="element text-center reveal reveal-delay-3 mt-8 revealed">
            A moment captured in time, forever in our hearts
        </p>  
        </div>
        


)
}

export default Glimps;