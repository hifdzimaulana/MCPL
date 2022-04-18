import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Special(props) {
    return (
        <section className="container-fluid mt-5" >
            <div className="row text-center header-section">
                <div className="col">
                    <h4 className="title-section font-weight-normal">
                        Special for you
                    </h4>
                    <p className="font-weight-light text-section">
                        special choice especially for you
                    </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center my-2">
                {
                    props.data.map((item, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <Fade bottom delay={500 * index}>
                                    <div className="item-special">
                                        <div className="card"
                                            style={{ width: '100%', height: 180 }} >
                                        </div>
                                        <div className="img-special text-center">
                                         <img src={item.imageUrl} alt={item.name}
                                         style={{ width: 197, height: 276, zIndex: 2 }} />
                                        </div>
                                        <div className="desc-card my-3 px-3">
                                            <div className="name-star">
                                                <div className="name-product">
                                                    {item.name} <br />
                                              <button className="btn btn-sm btn-primary">
                                                   Add to chart</button>
                                                </div>
                                            </div>
                                            <div className="disc-price">
                                                <strike>
                                                  <span className="disc font-weight-lighter">
                                                        Rp.{item.disc}
                                                  </span>
                                                </strike>
                                                <br />
                                                <span className=" price font-weight-light">
                                                    Rp.{item.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}