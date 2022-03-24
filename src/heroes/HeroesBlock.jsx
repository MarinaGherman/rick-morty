import React,{useEffect,useState} from 'react';
import Hero from "./Hero";
import axios from 'axios';
import { Row, Col, Pagination } from 'antd';
import s from './HeroesBlock.module.scss'


const HeroesBlock = () => {
    const [caracters, setCaracters] = useState([])
    const [pagination, setPagination] = useState({
        page: 1, total: 0
    })

    useEffect(() => {
        getAllCaracters(pagination.page)
    },[pagination.page])

    const getAllCaracters = (page = 1) => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {
                setPagination({
                    page,
                    total: res.data.info.count
                })
                setCaracters(res.data.results)
            })
            .catch(error => console.error(error) )
    }

    const handleChangePages = (currentPage) => {
        setPagination({
            ...pagination,
            page: currentPage
        })
    }

    return (
        <div className={s.heroesBlock}>
                <Row>
                    {
                        caracters.map((caracter,i) => {
                            return (
                               <Col span={12}>
                                   <Hero  name={caracter.name} status={caracter.status} location={caracter.location.name} origin={caracter.origin.name} image={caracter.image} />
                               </Col>
                            )
                        })
                    }
                </Row>


            <Row justify="center">
                <Col>
                    <Pagination
                        style={{marginTop: "80px"}}
                        defaultCurrent={1}
                        total={pagination.total}
                        pageSize={20}
                        onChange={handleChangePages}
                    />
                </Col>
            </Row>

        </div>
    );
};

export default HeroesBlock;