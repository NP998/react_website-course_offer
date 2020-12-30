import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const  Service=()=> {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5 ">
        <div className="row">
          <div className=" col-10 mx-auto">
              <div className="row gy-4">
                  {
                      //java script part so uuse inside curly braces
                      Sdata.map((value,index)=>{
                          return <Card key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            price={value.price}
                            fname={value.fname}
                            rating={value.rating}
                            number={value.number}
                          />
                      })
                  }
              </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Service;
