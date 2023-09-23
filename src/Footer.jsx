import React from 'react'

function Footer() {
  return (
    <>
   <footer className='text-light border-top pt-5' style={{background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(15px)"}}>
  <div className="container">
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-md-4 p-3 ">
        <div className="logo rounded   w-100" >
        <div className='p-2 d-flex justify-content-center align-items-center'>
          <p className='m-0'>
        &copy; 2023 <b>Iloilo Coffee House</b>
        </p>
        </div>
        </div>
      </div>
      <div className="col-md-4 p-3 ">
        <div className="logo rounded   w-100" >
        <div className='d-flex  justify-content-center align-items-center'>
            <h1 className='logo p-1 m-0 text-light' style={{  fontWeight: '900'}}>ICH</h1>
        </div>
        </div>
      </div>

      <div className="col-md-4 p-3 ">
        <div className="logo rounded   w-100" >
        <div className='p-2 d-flex gap-5 justify-content-center align-items-center'>
          <a href='https://www.facebook.com/iloilocoffeehouse' target='_blank' className='text-light m-0 text-decoration-none bi-facebook'> </a>
          <a href='https://www.instagram.com/p/CvG2FKcPjlo/?igshid=MzRlODBiNWFlZA==' target='_blank'  className='text-light m-0 text-decoration-none bi-instagram'> </a>
          <a href='#' className='m-0 text-decoration-none bi-twitter text-light'> </a>

        </div>
        </div>
      </div>


    </div>
  </div>
  <div className="text-center py-3">
  </div>
</footer>
    </>
  )
}

export default Footer;