import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

// import { makeData } from "./Utils";
import * as actions from '../actions';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./index.css";


class GunSearchTable extends Component {

  render() {
    const { gList } = this.props;
    console.log("these props", this.props, gList)
    

    return (
      <div>
        <ReactTable
          data={gList.results}
          columns={[
            {
              Header: "Search List",
              columns: [
                {
                  Header: "Card Name",
                  accessor: "title"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                    Header: "Status",
                    Cell: (row) => {
                        console.log("huh", row.original.imageUrl)
                      return <div><img height={50} src={row.original.imageUrl}/></div>
                    },
                  id: "status"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "name",
              desc: false
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ searchReducer }) => {
    const { gList } = searchReducer
    return { gList }
  }

export default connect(mapStateToProps, actions)(GunSearchTable);