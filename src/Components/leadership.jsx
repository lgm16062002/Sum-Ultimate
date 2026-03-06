
 import '../Styles/leadership.css'

 export default function Leadership() {
   return (
     <section className="leadership" id="leadership">
       <div className="leadership__container">
         <h2 className="leadership__title">Leadership</h2>
 
         <div className="leadership__grid">
           <div className="leadership__person">
             <div className="leadership__name">Dr. A. Sharma</div>
             <p className="leadership__role">Medical Director</p>
           </div>
           <div className="leadership__person">
             <div className="leadership__name">Dr. R. Kumar</div>
             <p className="leadership__role">Chief Surgeon</p>
           </div>
           <div className="leadership__person">
             <div className="leadership__name">Dr. S. Das</div>
             <p className="leadership__role">Head of Nursing</p>
           </div>
           <div className="leadership__person">
             <div className="leadership__name">Ms. P. Mishra</div>
             <p className="leadership__role">Operations Lead</p>
           </div>
         </div>
       </div>
     </section>
   )
 }

