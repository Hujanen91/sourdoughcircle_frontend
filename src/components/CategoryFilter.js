import React, { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import appStyles from "../App.module.css";
import Categories from "../constants/Categories";

const CategoryFilter = ({ onCategoryChange, mobile }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = useCallback((e) => {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        onCategoryChange(selectedValue); // Call the prop function with the selected category
  }, [onCategoryChange]);

    return (
        <Container className={`${appStyles.Content} mb-3 ${mobile ? "p-3 text-center container" : ""}`}>
            <p className="h4">Filter feed</p>
            <Row>
                <Col>
                    <label htmlFor="categorySelect">Filter on Category: </label>
                    <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        setFilter={handleCategoryChange}
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