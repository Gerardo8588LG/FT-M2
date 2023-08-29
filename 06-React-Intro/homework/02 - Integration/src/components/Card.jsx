export default function Card({name, status, species, gender, origin, onClose}){
   return(
      <div>
         <button onClick={onClose}></button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src= {Image} alt=""/>
      </div>
   );
}