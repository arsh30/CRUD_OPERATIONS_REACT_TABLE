import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

const Table = ({ rows, handleDeleteRow, editRow }) => {
  // HandleDeleteRow is a function
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
            <td>Home</td>
            <td>This is the main Page</td>
            <td>
              <span className="label label-live">Live</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" /> <BsFillPencilFill />
              </span>
            </td>
          </tr> */}

          {rows.map((elem, index) => {
            const statusText =
              elem.status.charAt(0).toUpperCase() + elem.status.slice(1);
            return (
              <tr key={index}>
                <td>{elem.page}</td>
                <td className="expand">{elem.description}</td>
                <td>
                  <span className={`label  label-${elem.status}`}>
                    {statusText}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      onClick={() => handleDeleteRow(index)}
                      className="delete-btn"
                    />{" "}
                    <BsFillPencilFill onClick={() => editRow(index)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
