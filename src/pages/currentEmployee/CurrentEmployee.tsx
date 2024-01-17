import { useState } from "react";
import { data } from "../../data/data.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.css";

const CurrentEmployee = () => {
  // console.log(data);
  const [filter, setFilter] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="currentEmployee">
      <InputText
        onInput={(e) =>
          setFilter({
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
      />
      <DataTable
        value={data}
        sortMode="multiple"
        filters={filter}
        paginator
        rows={20}
      >
        <Column field="first_name" header="first_name" sortable />
        <Column field="last_name" header="last_name" sortable />
        <Column field="start_date" header="start_date" sortable />
        <Column field="Department" header="Department" sortable />
        <Column field="Day_of_birth" header="Day_of_birth" sortable />
        <Column field="Street" header="Street" sortable />
        <Column field="City" header="City" sortable />
        <Column field="State" header="State" sortable />
        <Column field="Zip_code" header="Zip_code" sortable />
      </DataTable>
    </div>
  );

  // return (
  //   <div className="currentEmployee">
  //     <div className="container">
  //       <h1 className="title">Current employees</h1>

  //       <form>
  //         <input
  //           onChange={(e) => setSearch(e.target.value)}
  //           type="text"
  //           placeholder="search for employee"
  //         />
  //       </form>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>First Name</th>
  //             <th>Last Name</th>
  //             <th>Start Date</th>
  //             <th>Department</th>
  //             <th>Date of Birth</th>
  //             <th>Street</th>
  //             <th>City</th>
  //             <th>State</th>
  //             <th>Zip Code</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data
  //             .filter((item) => {
  //               return search.toLowerCase() === ""
  //                 ? item
  //                 : item.first_name.toLowerCase().includes(search);
  //             })
  //             .map((item) => (
  //               <tr key={item.id}>
  //                 <td>{item.first_name}</td>
  //                 <td>{item.last_name}</td>
  //                 <td>{item.start_date}</td>
  //                 <td>{item.Department}</td>
  //                 <td>{item.Day_of_birth}</td>
  //                 <td>{item.Street}n</td>
  //                 <td>{item.City}</td>
  //                 <td>{item.State}</td>
  //                 <td>{item.Zip_code}0</td>
  //               </tr>
  //             ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );
};

export default CurrentEmployee;
