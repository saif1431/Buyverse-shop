"use client"

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'


function ProductImage({ images }: { images: string[] }) {
      const [current, setCurrent] = useState(0)
      return (
            <div className='space-y-4'>
                  <Image
                        src={images[current]}
                        alt={images[current]}
                        width={1000}
                        height={1000}
                        className='min-h-[300px] object-cover object-center'
                  />
                  <div className='flex'>
                        {images.map((image, index) => {
                              return (
                                    <div key={index} className='' onClick={() => setCurrent(index)}>
                                          <Image
                                                src={image}
                                                alt={image}
                                                width={1000}
                                                height={1000}
                                                className={cn(
                                                      'h-[100px] w-[100px] object-cover object-center',
                                                      index === current && 'border-2 border-primary'
                                                )}
                                          />
                                    </div>
                              )
                        })}

                  </div>
            </div>
      )
}

export default ProductImage