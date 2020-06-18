import React, { Component } from 'react'
import BTHeader from './BTHeader'
import SliderComponent from './SliderComponent'
import ProductListComponent from './ProductListComponent'

export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <SliderComponent />
                <ProductListComponent />
            </div>
        )
    }
}
