
 import '../Styles/whereJourney.css'

 export default function WhereJourney() {
   return (
     <section className="whereJourney">
       <div className="whereJourney__container">
         <h2 className="whereJourney__title">Your Journey</h2>
 
         <div className="whereJourney__steps">
           <div className="whereJourney__step">
             <h3 className="whereJourney__stepTitle">1. Choose Service</h3>
             <p className="whereJourney__stepBody">
               Browse specialties and pick what you need.
             </p>
           </div>
           <div className="whereJourney__step">
             <h3 className="whereJourney__stepTitle">2. Book Slot</h3>
             <p className="whereJourney__stepBody">
               Select a convenient date and time.
             </p>
           </div>
           <div className="whereJourney__step">
             <h3 className="whereJourney__stepTitle">3. Get Care</h3>
             <p className="whereJourney__stepBody">
               Visit the clinic or consult online.
             </p>
           </div>
         </div>
       </div>
     </section>
   )
 }

