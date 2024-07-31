import React, { useState, useEffect, Fragment, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button, List, Pagination, AutoComplete } from 'antd';
import { debounce } from 'lodash';

import { DispatchType, RootState } from '../../../redux/configStore';
import { fetchAllMyProduct, searchMyProduct } from '../../../redux/MyLearningReducer/MyLearningReducer';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './Mylearning.module.scss';

const MyLearning: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<DispatchType>();

    // State and Selectors
    const data = useSelector((state: RootState) => state.MyLearningReducer.items);
    const userId = useSelector((state: RootState) => state.UserReducer.userId);
    const searchResults = useSelector((state: RootState) => state.MyLearningReducer.searchResult) as any;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState('');

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const itemsToDisplay = useMemo(() => {
        return searchTerm ? (searchResults.data || []) : currentItems;
    }, [searchTerm, searchResults, currentItems]);

    const totalItemsToDisplay = searchTerm ? (searchResults.data ? searchResults.data.length : 0) : data.length;

    // Debounced search
    const debouncedSearch = debounce((term) => {
        if (term) {
            dispatch(searchMyProduct(term));
        }
    }, 500);

    // Handlers
    const handleSearch = (value: any) => {
        setSearchTerm(value);
        setCurrentPage(1);
        debouncedSearch(value);
    };

    const handleDetail = (ProductId: number) => {
        navigate(`/my-learning/detail?productId=${ProductId}`);
    };

    useEffect(() => {
        dispatch(fetchAllMyProduct(userId));
    }, [dispatch, userId]);

    return (
        <Fragment>
            <Header />
            <div className={styles.products_padding}>
                <section className={styles.container_course}>
                    <div className={styles.items}>
                        <Row gutter={16}>
                            <Col span={18}>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={Array.isArray(itemsToDisplay) ? itemsToDisplay : []}
                                    renderItem={item => (
                                        <Card style={{ width: '100%', marginTop: 16 }}>
                                            <Row align="middle" gutter={16}>
                                                <Col span={6}>
                                                    <img src={(item.thumbnail)} alt={(item.title)} style={{ width: '100%' }} />
                                                </Col>
                                                <Col span={18}>
                                                    <div className={styles.desciption_item}>
                                                        <h3 className={styles.text_item}>
                                                            {item.title}
                                                        </h3>
                                                        <div className={styles.price_item}>
                                                            <strong>
                                                                {item.originalPrice.toLocaleString()}
                                                                <span> VND</span>
                                                            </strong>
                                                        </div>
                                                    </div>
                                                    <Button onClick={() => handleDetail(item.id)}>
                                                        Chi Tiết
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )}
                                />
                            </Col>
                            <Col span={6}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4>Tìm kiếm</h4>
                                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                        <AutoComplete
                                            style={{ flex: 1 }}
                                            placeholder="Tìm kiếm bài IoT..."
                                            value={searchTerm}
                                            onChange={handleSearch}
                                        />
                                    </div>
                                    {searchTerm && searchResults.data && searchResults.data.length === 0 && (
                                        <div>Không tìm thấy kết quả cho "{searchTerm}".</div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={styles.paginationContainer}>
                        <Pagination
                            current={currentPage}
                            pageSize={itemsPerPage}
                            total={totalItemsToDisplay}
                            onChange={(page) => setCurrentPage(page)}
                        />
                    </div>

                </section>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MyLearning;
