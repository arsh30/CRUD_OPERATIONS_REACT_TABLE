import { useState } from "react";
import "./App.css";
import Model from "./components/Model";
import Table from "./components/Table";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rows, setRows] = useState([
    { page: "Page 1", description: "This is first page", status: "live" },
    { page: "Page 2", description: "This is second page", status: "draft" },
    { page: "Page 3", description: "This is third page", status: "error" },
  ]);

  const handleDeleteRow = (targetIndex) => {
    console.log({ targetIndex });
    // 1. parameter accept krega, jo target index recieve krega jisko delete krna h
    const updatedDeletedResult = rows.filter((elem, index) => {
      return index !== targetIndex;
    });

    setRows(updatedDeletedResult);
  };

  const handleSubmitNewRow = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  const handleEditRow = (index) => {
    // Ye function udr hi bnaegege jidr hmara data padha hai
    setRowToEdit(index);

    setshowModal(true);
  };
  console.log(rowToEdit);
  return (
    <div className="App">
      <Table
        rows={rows}
        handleDeleteRow={handleDeleteRow}
        newRow={handleSubmitNewRow}
        editRow={handleEditRow}
      />
      <button className="btn" onClick={() => setshowModal(true)}>
        Add
      </button>
      {showModal && (
        <Model
          onsubmit={handleSubmitNewRow}
          closeModal={() => {
            setshowModal(false);
            setRowToEdit(null);
          }}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
