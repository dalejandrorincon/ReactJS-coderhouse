import React from "react";
export default function PageLoading(){
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  },[])
  return(
    <div>{isLoading ? (
      <h3>Cargando...</h3>
    ) : (
      <h3>Pagina cargada</h3>
    )}</div>
  )
}