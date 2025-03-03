import React from 'react'
import AddOnButton from '../button/AddOnButton'
import Image from 'next/image'

const DoubleProductCard = ({product, catTwo, catOne}) => {
  return (
    <div
                                  className="flex justify-between items-stretch gap-6 mobile:gap-3 mb-12 mt-5 mobile:flex-col mobile:mb-6"
                                  
                                >
                                  <div className="max-w-1/2 w-full p-aspect">
                                    <Image
                                      src={product?.product_images?.[0]?.src}
                                      alt={product.prod_name}
                                      height={1024}
                                      width={1024}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="w-full min-h-full max-w-1/2 flex flex-col justify-between items-start">
                                    <div className=" w-full">
                                      <h3 className="h4 mb-3 text-accent">
                                        {product.prod_name}
                                      </h3>
                                      <p className="font-ropa text-base text-white/50  leading-5">
                                        {product?.prod_desc}
                                      </p>
                                      <div className="flex justify-between items-start gap-5 my-5 mobile:mb-3">
                                        <div>
                                          <h2 className="h4 text-accent">
                                            {catOne}
                                          </h2>
                                          <p className='my-1 text-white/70 font-ropa text-sm'>
                                            {product.prod_descDoubleMain}
                                          </p>
                                          <p className="font-Raleway text-lg font-bold">
                                            Rs. {product.prod_price}
                                          </p>
                                          <div className="flex gap-2  items-center justify-start mobile:gap-2 mt-1">
                                            <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                                              Servings:
                                            </h3>
                                            <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">

                                              <p className="text-[14px] text-accent font-bold font-ropa">
                                              {product?.prod_serving}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <h2 className="h4 text-accent">
                                            {catTwo}
                                          </h2>
                                          <p className='my-1 text-white/70 font-ropa text-sm'>
                                            {product.prod_descDoubleMain}
                                          </p>
                                          <p className="font-Raleway text-lg font-bold">
                                            Rs. {product.prod_doublePrice}
                                          </p>
                                          <div className="flex gap-2  items-center justify-start mobile:gap-2 mt-1">
                                            <h3 className="text-white/50 text-md mobile:text-base font-ropa">
                                              Servings:
                                            </h3>
                                            <div className="flex gap-2 bg-mahroon rounded-3xl px-2 py-1 mobile:p-1">
                                          
                                              <p className="text-[14px] text-accent font-bold font-ropa">
                                              {product?.prod_servingDouble}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        
                                      </div>
                                    </div>
                                    <div className="">
                                      <AddOnButton />
                                    </div>
                                  </div>
                                </div>
  )
}

export default DoubleProductCard