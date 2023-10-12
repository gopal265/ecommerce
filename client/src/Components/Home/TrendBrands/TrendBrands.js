import React from 'react'

const TrendBrands = () => {
    const slide1 = [
        'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png'

    ]
    const slide2 = [
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png',
        'https://assets.myntassets.com/f_webp,w_116,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png'

    ]
    return (
        <div>
            <div id="brands" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#brands" data-slide-to="0" class="active"></li>
                    <li data-target="#brands" data-slide-to="1"></li>
              
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='container-fluid'>
                            <div className='row'>
                                {slide1.map(img => (
                                    <div className='col gift'>
                                        <img src={img} className='d-block w-100' alt='..' />
                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                    <div class="carousel-item">
                        <div className='container-fluid'>
                            <div className='row'>
                                {slide2.map(img => (
                                    <div className='col gift'>
                                        <img src={img} className='d-block w-100' alt='..' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-target="#brands" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#brands" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}

export default TrendBrands
