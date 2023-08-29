import Card from "./Card";

export default function Cards({characters}){
   return(
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, Image}) =>{
               return(
                  <Card
                  key={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  Image={Image}
                  onClose={() => window.alert(`Emulamos que se cierra la card`)}
                  />
               )
            })
         }
         </div>
   )
}
