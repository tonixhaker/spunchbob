import React, {Component} from 'react';
import {Carousel} from 'antd';

class Testimonials extends Component {

    render() {
        const fake = [
            {
                name:'Илона',
                img:require('../../../img/pelmeni.jpg'),
                review:'Любила пиццу, теперь жру картофель аки маргариту'
            },
            {
                name:'Настя',
                img:require('../../../img/golybci.jpg'),
                review:'Ваще огонь, теперь самая красивая и здоровая'
            },
            {
                name:'Маргарита',
                img:require('../../../img/hitler.jpg'),
                review:'Курс бомба, я в восторге'
            },
            {
                name:'Настя',
                img:require('../../../img/golybci.jpg'),
                review:'Ваще огонь, теперь самая красивая и здоровая'
            },
            {
                name:'Маргарита',
                img:require('../../../img/hitler.jpg'),
                review:'Курс бомба, я в восторге'
            }
        ];
        return(
            <div className={'testimonials-block'}>
                <h2 className={'title'}> Отзывы </h2>
                <div className={'flex flex-center'}>
                    <div className={'testimonials-carousel'}>
                        <Carousel autoplay effect={'fade'} autoplaySpeed={5000}>                    {
                            fake.map((value,key)=>{
                                return(
                                    <div key={key} className={'testimonial'}>
                                        <div className={'avatar'}>
                                            <div style={{backgroundImage:'url('+value.img+')'}} className={'img'} />
                                            <p>{value.name}</p>
                                        </div>
                                        <p className={'review'}>{value.review}</p>
                                    </div>
                                );
                            })
                        }
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;
