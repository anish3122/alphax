import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function dashboard(){
    return (
        <div>
    {/* <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-primary navbar-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img width="40px"
                        src="https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg"
                    ></img>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">ContactUs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> */}
    <div className="container mt-3">
    <div id="carouselExampleIndicators" className= "carousel slide" data-ride="carousel">
  <ol className= "carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className= "active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className= "carousel-inner">
  <div className= "carousel-item">
      <img className= "d-block w-100" src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg" alt="First slide"/>
    </div>
    <div className= "carousel-item active">
      <img className= "d-block w-100" src="https://m.media-amazon.com/images/I/711h78XOvJL._SX3000_.jpg" alt="Second slide"/>
    </div>
    <div className= "carousel-item">
      <img className= "d-block w-100" src="https://m.media-amazon.com/images/I/61A9JzA1lwL._SX3000_.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className= "carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className= "carousel-control-prev-icon" aria-hidden="true"></span>
    <span className= "sr-only">Previous</span>
  </a>
  <a className= "carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className= "carousel-control-next-icon" aria-hidden="true"></span>
    <span className= "sr-only">Next</span>
  </a>
</div>
    <div className="container mt-5">
        <div className="row mb-4">
            <div className="col-md-4">
                <div className="card border mt-5">
                    <div className="card-body">
                        <div className="card border border-dark">
                        <img className="w-50 d-block mx-auto rounded" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-silver?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1579299535944"></img>
                        </div>
                        <div className="card-title display-6 text-center mt-4">
                            iphone-XS
                        </div>
                        <input className="btn btn-success float-end" type="button" data-bs-toggle="modal" data-bs-target="#md1" data-bs-html="true" title="buynow" value="Specifications"/>
                        <div className="modal" id="md1" tabIndex="-1" aria-labelledby="ex1" area-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ex1">
                                            iphone-XS
                                        </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                      <img width="100%" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-silver?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1579299535944"></img>
                                      </div>
                                      <div className="col-lg-6"><br></br>
                                        <h3>Key Features</h3>
                                        <ul>
                                            <li>Series:iphone</li>
                                            <li>Brand:Apple</li>
                                            <li>Screen Size:6.5</li>
                                            <li>OS: IOS 12.0</li>
                                        </ul>
                                        <h4><b>Price: 49,999.</b></h4>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-info form-control">Buy Now</button><br></br><br></br>
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      
                                </div>
                            </div>
                            </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card border mt-5">
                    <div className="card-body">
                        <img className="w-100 h-50 d-block mx-auto border border-dark rounded" src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"></img>
                        <div className="card-title display-6 text-center mt-2">
                            Macbook-pro
                        </div>
                        <input className="btn btn-success float-end" type="button" data-bs-toggle="modal" data-bs-target="#md2" data-bs-html="true" title="buynow" value="Specifications"/>
                        <div className="modal" id="md2" tabIndex="-1" aria-labelledby="ex2" area-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ex2">
                                            Macbook-pro
                                        </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                      <img width="120%" height="100%" src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"></img>
                                      </div>
                                      <div className="col-lg-6"><br></br>
                                        <h3>Key Features</h3>
                                        <ul>
                                            <li>Series:Macbook</li>
                                            <li>Brand:Apple</li>
                                            <li>Screen Size:13.30</li>
                                            <li>OS: mac OS X Lion</li>
                                        </ul>
                                        <h4><b>Price: 149,999.</b></h4>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-info form-control">Buy Now</button>
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      
                                </div>
                            </div>
                            </div>
                            </div>   
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card border mt-5">
                    <div className="card-body">
                        <div className="card border border-dark">
                        <img className="w-50 d-block mx-auto" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000"></img>
                        </div>
                        <div className="card-title display-6 text-center mt-2">
                            ipad-pro
                        </div>
                        <input className="btn btn-success float-end mb-3" type="button" data-bs-toggle="modal" data-bs-target="#md3" data-bs-html="true" title="buynow" value="Specifications"/>
                        <div className="modal" id="md3" tabIndex="-1" aria-labelledby="ex3" area-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ex3">
                                            ipad-pro
                                        </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                      <img width="100%" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1617067383000"></img>
                                      </div>
                                      <div className="col-lg-6">
                                        <br></br>
                                        <h3>Key Features</h3>
                                        <ul>
                                            <li>Series:ipad</li>
                                            <li>Brand:Apple</li>
                                            <li>Screen Size:10.3</li>
                                            <li>OS: ipadOS</li>
                                        </ul>
                                        <h4><b>Price: 39,999.</b></h4>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-info form-control">Buy Now</button><br></br><br></br>
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                            </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
    
            <div className="card ">
                <div className="row">
                    <div className="col-sm-5">
                        <img src="https://images.moneycontrol.com/static-mcnews/2021/01/lenovo-laptop-ideapad-5g.jpg"className="w-100"></img>
                    </div>
                    <div className="col-sm-7">
                        <h2>Lenovo </h2>
                        <h6>Lenovo ThinkBook 15 Intel 11th Gen Core i5 15.6" (39.62 cm) FHD IPS 300 nits Antiglare 100% sRGB Thin and Light Laptop (8GB/1TB HDD+128GB SSD/Windows 10/MS Office/Mineral Grey/1.7 Kg), 20VEA0HCIH</h6>
                        <img width="20%" src="https://th.bing.com/th/id/R.09ac6114d74112a1915e46c8ddf08ec9?rik=TxKzbZ08qo%2f3lw&riu=http%3a%2f%2fyamisorceress.com%2fwp-content%2fuploads%2f2015%2f08%2f4.5_StarRating.png&ehk=I0LCKspZZHVGFsYFNPewhcKF2uSUhMp0c5x%2bMION1fU%3d&risl=&pid=ImgRaw&r=0" className="d-block"></img>
                        <h6>  4.5</h6>
                        <p>(55 ratings and 12 reviews)</p>
                        <p>
                            M.R.P.:	₹1,14,300.00
                        </p>
                        <p>
                            Price:	₹68,990.00
                        </p>
                        <p>
                            You Save:	₹45,310.00 (40%)
                            Inclusive of all taxes
                        </p>
                        <p>
                            EMI starts at ₹3,248. No Cost EMI available 
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="d-flex row justify-content-between">
                <div className="m-4 card p-3 col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '80%' src="https://5.imimg.com/data5/GLADMIN/Default/2021/5/AB/ZA/BQ/35336981/titan-men-s-watches-500x500.jpg"></img>
                    <h6 className="pt-4 mt-5"> Titan</h6>
                    <p>Analog OffWhite Dial Men's Watch NM1712YM02 / NL1712YM02</p>
                    <button className="btn btn-success p-1" data-bs-toggle="modal" data-bs-target="#specification4">Specification</button>
                    <div className="modal" id="specification4">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    Model no : 1
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body row">
                                    <div className="col-sm-4">
                                        <img width="170px" src="https://m.media-amazon.com/images/I/71KxuRv3-fL._AC_UL320_.jpg"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className='p-3'>Price : ₹1,995</p>   
                                        <p className='p-3'>Warrenty : 1 year</p>   
                                        <p className='p-3'>Ratings : 4.7</p>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="m-4 card p-3 col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '80%' src="https://5.imimg.com/data5/ML/TL/MY-4390697/timex-fashion-analog-multi-color-dial-men-27s-watch-500x500.jpg"></img>
                    <h6 className="pt-5 mt-4"> Timex</h6>
                    <p>classNameics Analog Silver Dial Men's Watch-TI000R41400</p>
                    <button className="btn btn-success p-1 mt-2" data-bs-toggle="modal" data-bs-target="#specification5">Specification</button>
                    <div className="modal" id="specification5">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    Model no : 2
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body row">
                                    <div className="col-sm-4">
                                        <img width="170px" src="https://m.media-amazon.com/images/I/712cznV0B7L._AC_UL320_.jpg"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className='p-3'>Price : ₹1,349</p>   
                                        <p className='p-3'>Warrenty : 1 year</p>   
                                        <p className='p-3'>Ratings : 3.7</p>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-4 card p-3 col-xs-1 col-sm-2 col-md-3 border border-4">
                    <img className = 'mx-auto pt-4' width = '80%' src="https://m.media-amazon.com/images/I/61IlwQIwyxL._AC_UL320_.jpg"></img>
                    <h6 className="pt-5 mt-4"> Casio</h6>
                    <p>Casio Analog Black Dial Men's Watch-MTP-1374HD-2AVIF (A1646)</p>
                    <button className="btn btn-success p-1 mt-2" data-bs-toggle="modal" data-bs-target="#specification6">Specification</button>
                    <div className="modal" id="specification6">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    Model no : 3
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body row">
                                    <div className="col-sm-4">
                                        <img width="170px" src="https://m.media-amazon.com/images/I/61IlwQIwyxL._AC_UL320_.jpg"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className='p-3'>Price : ₹4,945</p>   
                                        <p className='p-3'>Warrenty : 1 year</p>   
                                        <p className='p-3'>Ratings : 4.0</p>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 mb-2" >
                <div className="card">
                    <h1>
                        THANK YOU
                    </h1>
                    <h2>
                        VISIT AGAIN
                    </h2>
                </div> 
            </div>
    </div>
    </div>
    </div>
    )
}

export default dashboard;