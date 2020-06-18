import React, { Component } from 'react'

export default class DataBinding extends Component {
    hocVien = {
        ma: 1,
        hoTen: 'nguyễn văn a',
        hinhAnh: 'https://picsum.photos/200/300'
    }
    renderImg() {
        return <img src="https://picsum.photos/200/300" />
    }
    renderImg1() {
        return <img src="https://picsum.photos/200/300" />
    }
    render() {
        let title = "hello fe 41";
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={this.hocVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.hocVien.hoTen}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>


        )
    }
}
// không thể trả về những thẻ đồng cấp phải có 1 thẻ div bao phủ 
