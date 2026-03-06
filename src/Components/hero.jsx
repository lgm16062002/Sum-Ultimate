
 import '../Styles/hero.css'

 export default function Hero() {
   return (
     <section className="hero">
       <div className="hero__container">
         <div>
           <h1 className="hero__title">Care that feels personal.</h1>
           <p className="hero__subtitle">
             Book appointments, explore specialties, and connect with trusted
             clinicians.
           </p>
 
           <div className="hero__actions">
             <button className="hero__primaryBtn" type="button">
               Book Appointment
             </button>
             <button className="hero__secondaryBtn" type="button">
               Learn More
             </button>
           </div>
         </div>
 
         <div className="hero__media" />
       </div>
     </section>
   )
 }

