import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DataGridBasic from "./data-grid/Basic";
import DataGridCellEditing from "./data-grid/Cell Editing";
import DataGridCheckBoxSelection from './data-grid/CheckBox Selection';
import DataGridCoulunGroup from "./data-grid/Column Group";
import DataGridSelection from "./data-grid/DataGrid Selection";
import DataGridSorting from "./data-grid/DataGrid Sorting";
import DataGridStyling from "./data-grid/DataGrid Styling"
import DataGridDialogEditing from "./data-grid/Dialog Editing";
import DataGridFiltering from "./data-grid/Filtering";
import DataGridFooterRows from "./data-grid/Footer Rows";
import DataGridFormatCells from "./data-grid/Format Cells";
import DataGridFrozenColumnAdvanced from "./data-grid/Frozen Column - Advanced"
import DataGridFrozenColumn from "./data-grid/Frozen Column"
import DataGridMultipleSorting from "./data-grid/Multiple Sorting";
import DataGridNestedSubGrid from "./data-grid/Nested SubGrid";
import DataGridPaginationLazyLoad from "./data-grid/Pagination - Lazy Load";
import DataGridPagination from "./data-grid/Pagination";
import DataGridRowDetail from "./data-grid/Row Detail";
import DataGridRowEditing from "./data-grid/Row Editing";
import DataGridRowGroup from "./data-grid/Row Group";
import DataGridRowNumber from "./data-grid/Row Number";
import DataGridVirtualScrollLazyLoad from "./data-grid/Virtual Scroll - Lazy Load";
import DataGridVirtualScroll from "./data-grid/Virtual Scroll";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
          <h2>ComboTree content</h2>
          <ul>
            <li>
              <Link to="/data-grid/basic">basic</Link>
            </li>
            <li>
              <Link to="/data-grid/cell-editing">cell-editing</Link>
            </li>
            <li>
              <Link to="/data-grid/check-box-selection">check-box-selection</Link>
            </li>
            <li>
              <Link to="/data-grid/column-group">column-group</Link>
            </li>
            <li>
              <Link to="/data-grid/selection">selection</Link>
            </li>
            <li>
              <Link to="/data-grid/sorting">sorting</Link>
            </li>
            <li>
              <Link to="/data-grid/styling">styling</Link>
            </li>
            <li>
              <Link to="/data-grid/dialog-editing/">dialog-editing</Link>
            </li>
            <li>
              <Link to="/data-grid/filtering">filtering</Link>
            </li>
            <li>
              <Link to="/data-grid/footer-rows">footer-rows</Link>
            </li>
            <li>
              <Link to="/data-grid/format-cells">format-cells</Link>
            </li>
            <li>
              <Link to="/data-grid/frozen-column-advance">frozen-column-advance</Link>
            </li>
            <li>
              <Link to="/data-grid/frozen-column">frozen-column</Link>
            </li>
            <li>
              <Link to="/data-grid/multiple-sorting">multiple-sorting</Link>
            </li>
            <li>
              <Link to="/data-grid/nested-sub-grid">nested-sub-grid</Link>
            </li>
            <li>
              <Link to="/data-grid/pagination-lazy-load">pagination-lazy-load</Link>
            </li>
            <li>
              <Link to="/data-grid/pagination">pagination</Link>
            </li>
            <li>
              <Link to="/data-grid/row-detail">row-detail</Link>
            </li>
            <li>
              <Link to="/data-grid/row-editing">row-editing</Link>
            </li>
            <li>
              <Link to="/data-grid/row-group">row-group</Link>
            </li>
            <li>
              <Link to="/data-grid/row-number">row-number</Link>
            </li>
            <li>
              <Link to="/data-grid/virtual-scroll-lazy-load">virtual-scroll-lazy-load</Link>
            </li>
            <li>
              <Link to="/data-grid/virtual-scroll">virtual-scroll</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>ComboTree content</h2>
        <Route path="/data-grid/basic" component={DataGridBasic} />
        <Route path="/data-grid/cell-editing" component={DataGridCellEditing} />
        <Route path="/data-grid/check-box-selection" component={DataGridCheckBoxSelection} />
        <Route path="/data-grid/column-group" component={DataGridCoulunGroup} />
        <Route path="/data-grid/selection" component={DataGridSelection} />
        <Route path="/data-grid/sorting" component={DataGridSorting} />
        <Route path="/data-grid/styling" component={DataGridStyling} />
        <Route path="/data-grid/dialog-editing/" component={DataGridDialogEditing} />
        <Route path="/data-grid/filtering" component={DataGridFiltering} />
        <Route path="/data-grid/footer-rows" component={DataGridFooterRows} />
        <Route path="/data-grid/format-cells" component={DataGridFormatCells} />
        <Route path="/data-grid/frozen-column-advance" component={DataGridFrozenColumnAdvanced} />
        <Route path="/data-grid/frozen-column" component={DataGridFrozenColumn} />
        <Route path="/data-grid/multiple-sorting" component={DataGridMultipleSorting} />
        <Route path="/data-grid/nested-sub-grid" component={DataGridNestedSubGrid} />
        <Route path="/data-grid/pagination-lazy-load" component={DataGridPaginationLazyLoad} />
        <Route path="/data-grid/pagination" component={DataGridPagination} />
        <Route path="/data-grid/row-detail" component={DataGridRowDetail} />
        <Route path="/data-grid/row-editing" component={DataGridRowEditing} />
        <Route path="/data-grid/row-group" component={DataGridRowGroup} />
        <Route path="/data-grid/row-number" component={DataGridRowNumber} />
        <Route path="/data-grid/virtual-scroll-lazy-load" component={DataGridVirtualScrollLazyLoad} />
        <Route path="/data-grid/virtual-scroll" component={DataGridVirtualScroll} />
      </div>
    );
  }
}

export default App;
