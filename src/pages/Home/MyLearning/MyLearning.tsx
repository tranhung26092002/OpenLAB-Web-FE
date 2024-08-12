import React, { useState, useEffect, Fragment, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button, Pagination, AutoComplete } from 'antd';
import { debounce } from 'lodash';

import { DispatchType, RootState } from '../../../redux/configStore';
import { deleteCourse, fetchAllMyProduct, searchMyProduct } from '../../../redux/MyLearningReducer/MyLearningReducer';
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



    const handleDelete = (userId: number | null, courseId: number) => {
        const data = {
            courseId: courseId,
            userId: userId
        };

        dispatch(deleteCourse(data));
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
                        <div className={styles.search_container}>
                            <h4>Tìm kiếm</h4>
                            <div className={styles.search_bar}>
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
                        <div className={styles.item_grid}>
                            <Row gutter={[16, 16]}>
                                {Array.isArray(itemsToDisplay) && itemsToDisplay.map((item, index) => (
                                    <Col xs={24} sm={12} md={8} key={index}>
                                        <Card className={styles.card}>
                                            <div className={styles.image_container}>
                                                <img src={item.thumbnail} alt={item.title} className={styles.image} />
                                            </div>
                                            <div className={styles.description_item}>
                                                <h3 className={styles.text_item}>
                                                    {item.title}
                                                </h3>
                                                <div className={styles.price_item}>
                                                    <strong>
                                                        {item.originalPrice?.toLocaleString() || 'N/A'}
                                                        <span> VND</span>
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className={styles.button_container}>
                                                <Button onClick={() => handleDetail(item.id)}>
                                                    Chi Tiết
                                                </Button>
                                                <Button danger onClick={() => handleDelete(userId, item.id)}>
                                                    Xóa
                                                </Button>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
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
