import React, { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import appStyles from "../App.module.css";
import Categories from "../constants/Categories";

const CategoryFilter = ({ setFilter, mobile }) => {
    const currentUser = useCurrentUser();

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = useCallback((e) => {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        setFilter(`category=${selectedValue}`);

        if (!currentUser) return;
    }, [setFilter, currentUser]);

    return (
        <Container className={`${appStyles.Content} mb-2 ${mobile ? "d-lg-none text-center my-3" : ""}`}>
            <p className="h4">Filter feed</p>
            <Row>
                <Col>
                    <label htmlFor="categorySelect">Filter on Category: </label>
                    <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select a Category</option>
                        {Categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryFilter;