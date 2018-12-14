import React from 'react';
import { DataGrid, GridColumn } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            conf: {
                options: {
                    columns: [
                        { field: 'company', title: 'Company Name' },
                        { field: 'contact', title: 'Contact Name' },
                        { field: 'country', title: 'Country' }
                    ],
                    data: [
                        { company: 'Speed Info', contact: 'Minna John', country: 'Sweden' }
                    ]
                },
                subgrid: {
                    options: {
                        columns: [
                            { field: 'orderdate', title: 'Order Date' },
                            { field: 'shippeddate', title: 'Shipped Date' },
                            { field: 'freight', title: 'Freight' }
                        ],
                        data: [
                            { orderdate: '08/23/2012', shippeddate: '12/25/2012', freight: 9734 }
                        ]
                    },
                    subgrid: {
                        options: {
                            columns: [
                                { field: 'price', title: 'Unit Price', align: 'right' },
                                { field: 'quantity', title: 'Quantity', align: 'right' },
                                {
                                    field: 'discount', title: 'Discount', align: 'right', formatter: function (value) {
                                        return value * 100 + '%'
                                    }
                                }
                            ],
                            data: [
                                { price: 923, quantity: 2312, discount: 0.2 }
                            ]
                        },
                        subgrid: {
                            options: {
                                columns: [
                                    { field: 'pnumber', title: 'Product Number' },
                                    { field: 'pname', title: 'Product Name' },
                                    { field: 'supplier', title: 'Supplier' }
                                ],
                                data: [
                                    { pnumber: '00100823', pname: 'Canon PowerShot A1300', supplier: 'Canon' },
                                    { pnumber: '12023423', pname: 'Cisco RV110W-A-NA-K9', supplier: 'Cisco' },
                                    { pnumber: '82312393', pname: 'Nikon COOLPIX L26 16.1 MP', supplier: 'Nikon' }
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
    renderGrid(conf) {
        let columns = conf.options.columns.map((col, index) => (
            <GridColumn key={index} {...col}></GridColumn>
        ));
        let props = Object.assign({}, conf.options);
        if (conf.subgrid) {
            props.renderDetail = () => {
                return (
                    <div style={{ marginLeft: 30 }}>
                        {this.renderGrid(conf.subgrid)}
                    </div>
                )
            }
            columns.unshift((
                <GridColumn key="e" field="e" expander width={30}></GridColumn>
            ))
        }
        return (
            <DataGrid {...props}>
                {
                    columns
                }
            </DataGrid>
        )
    }
    render() {
        return (
            <div>
                <h2>Nested SubGrid</h2>
                {
                    this.renderGrid(this.state.conf)
                }
            </div>
        );
    }
}

export default App;