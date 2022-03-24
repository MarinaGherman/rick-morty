import React from 'react';
import classNames from "classnames";
import { Row, Col, Image } from 'antd';
import s from './Hero.module.scss'


const Hero = ({name, status, origin, location, image}) => {

    const indicatorCssClasses = classNames(s.indicator, {
        [s.dead]: status === 'Dead',
        [s.unknown]: status === 'unknown',
        [s.alive]: status === 'Alive'
    });

    return (
        <div className={s.heroBlock}>
            <Row>
                <Col span={10} >
                    <div className={s.imageBlock} style={{backgroundImage: `url(${image})`}}/>
                </Col>
                <Col span={13} offset={1}>
                    <h1>{name}</h1>
                    <Row>
                        <Col span={1}>
                            {/*<div className={`${s.indicator} ${status === 'Dead' ? s.dead : s.alive } `}/>*/}
                            <div className={indicatorCssClasses} />
                        </Col>
                        <Col span={23}>
                            <p>{status}</p>
                        </Col>
                    </Row>
                    <h2>Last known location:</h2>
                    <p>{origin}</p>
                    <h2>First seen in:</h2>
                    <p>{location}</p>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;