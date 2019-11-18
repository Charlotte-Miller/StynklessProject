import React, { Component } from 'react'
import ProductCard from './ProductCard'
import products from './products';

export default class ProductsOnPage extends Component
{
    state = {
        currentPage: 1
    }

    render()
    {
        // let currentPage = this.props.match.params.current_page;
        // this.setState({ currentPage });

        const productPerPage = 6;
        const lastProductIndexToShow = this.state.currentPage * productPerPage;
        const productsOnCurrentPage = products.slice(lastProductIndexToShow - 6, lastProductIndexToShow);

        return (
            <React.Fragment>
                {productsOnCurrentPage.map(product => (

                    <ProductCard product={product} key={product.id} />

                ))}
            </React.Fragment>
        )
    }
}
