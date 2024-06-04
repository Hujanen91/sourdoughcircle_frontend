import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import appStyles from "../App.module.css";

const CategoryFilter = ({ setFilter, mobile }) => {
    const currentUser = useCurrentUser();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://sourdoughcircle-api-382dc0f20c45.herokuapp.com/category/');
                const data = await response.json();
                setCategories(data.results); // Access the nested results array
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = useCallback((e) => {
        const selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
        setFilter(`category=${selectedValue}`); // Update the filter string

            if (!currentUser) return;
        }, [setFilter, currentUser]);

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
                    >
                        <option value="">Select a Category</option>
                        {categories.map((category) => (
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