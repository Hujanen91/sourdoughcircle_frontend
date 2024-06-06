import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import appStyles from "../App.module.css";
import Form from "react-bootstrap/Form";
import styles from "../App.module.css"

const CategoryFilter = ({ setFilter, mobile }) => {
    const [category, setCategories] = useState([]);

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

    

    return (
        <Container className={`${appStyles.Content} mb-3 ${mobile ? "p-3 text-center container" : ""}`}>
            <p className="h4">Filter feed</p>
            <Row className="row d-flex justify-content-center">
            <Form.Group controlId="categorySelect">
                <Form.Label>Filter by Category</Form.Label>
                <Form.Control
                    className={styles.Dropdown}
                    as="select"
                    onChange={(e) => setFilter(e.target.value)}
                    defaultValue=""
                >
                    <option value="">All Categories</option>
                    {category.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                    ))}
                </Form.Control>
                </Form.Group>
            </Row>
        </Container>
    );
};

export default CategoryFilter;