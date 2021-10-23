import React from 'react';
//are we not meant to put the data here as well?


const List = ({people}) => {
  

  
  
  return (

    <>
    {people.map((person) =>{
      const{id, name, age, image, message}= person;

     const sendMessage=(data)=>{
   
     window.open(data);
     

    
  }


       
      return(
        <article key={id} className='person'>
          <img src ={image} alt={name}/>
          <div>
          <h4>{name}</h4>
          <p style={{ marginBottom:'5px'}}>{age}years</p>
          
          <button style={{width:'50%',padding:'2px', fontSize:'12px',marginTop:'-2px', marginBottom:'3px', marginLeft:'-5px'}} 
          onClick = {() =>sendMessage(message)}>message</button>
          </div>
          
        </article>
       
      );
      
    })}
       
    </>
  );
};

export default List;