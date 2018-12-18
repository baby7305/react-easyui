import React from 'react';
import { TreeGrid, GridColumn, GridColumnGroup, GridHeaderRow } from 'rc-easyui';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.getData(),
            footerData: this.getFooterData()
        }
    }
    getData() {
        return [
            {
                id: 1,
                region: "Wyoming",
                children: [
                    {
                        id: 11,
                        region: "Albin",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    },
                    {
                        id: 12,
                        region: "Canon",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    },
                    {
                        id: 13,
                        region: "Egbert",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    }
                ]
            },
            {
                id: 2,
                region: "Washington",
                children: [
                    {
                        id: 21,
                        region: "Bellingham",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    },
                    {
                        id: 22,
                        region: "Chehalis",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    },
                    {
                        id: 23,
                        region: "Ellensburg",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    },
                    {
                        id: 24,
                        region: "Monroe",
                        f1: 2000,
                        f2: 1800,
                        f3: 1903,
                        f4: 2183,
                        f5: 2133,
                        f6: 1923,
                        f7: 2018,
                        f8: 1838
                    }
                ]
            }
        ];
    }
    getFooterData() {
        return [
            {
                region: "Total",
                f1: 14000,
                f2: 12600,
                f3: 13321,
                f4: 15281,
                f5: 14931,
                f6: 13461,
                f7: 14126,
                f8: 12866
            }
        ]
    }
    render() {
        return (
            <div>
                <h2>Frozen Column</h2>
                <TreeGrid
                    style={{ width: 600, height: 250 }}
                    {...this.state}
                    idField="id"
                    treeField="region"
                    showFooter
                >
                    <GridColumnGroup frozen>
                        <GridHeaderRow>
                            <GridColumn field="region" title="Region"></GridColumn>
                        </GridHeaderRow>
                    </GridColumnGroup>
                    <GridColumnGroup>
                        <GridHeaderRow>
                            <GridColumn title="2017" colspan={4}></GridColumn>
                            <GridColumn title="2018" colspan={4}></GridColumn>
                        </GridHeaderRow>
                        <GridHeaderRow>
                            <GridColumn field="f1" title="1st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f2" title="2st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f3" title="3st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f4" title="4st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f5" title="1st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f6" title="2st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f7" title="3st qrt." align="right" width="80px"></GridColumn>
                            <GridColumn field="f8" title="4st qrt." align="right" width="80px"></GridColumn>
                        </GridHeaderRow>
                    </GridColumnGroup>
                </TreeGrid>
            </div>
        );
    }
}

export default App;