import React from "react";
import { NavLink } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Card=(props)=> {
  return (
    <>
                  <div className="col-md-4 col-10 mx-auto">
                          <div className="card ">
                          <img className="card-img-top" src={props.imgsrc} alt="Card image"/>
                           <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text"> Mr .{props.fname}</p>
                            <p className="card-text">{props.rating} 
                                                     <StarIcon/>
                                                     <StarIcon/>
                                                     <StarIcon/>
                                                     <StarIcon/>
                                                     <StarHalfIcon/>
                                                    ({props.number})
                            </p>
                            <NavLink to="" className="btn btn-primary">Price : {props.price}</NavLink>
                           </div>
                          </div>
                  </div>

    </>
  );
};

export default Card;
