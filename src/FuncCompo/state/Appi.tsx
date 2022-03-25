import React, {useState, useEffect} from "react";

const Appi = () => {
  const [data, setData] = useState<any>([])
  const [fetchdata,setFetchdata] = useState<any>([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    });
  },[])


  const fetchdataById = (id:any) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setFetchdata(json)
      });
  };

    return (
      <div>
        <div className="Todos row g-3">
          <table className="table col-auto">
            <thead>
              <tr>
                <th scope="col">Todo</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data:any, index:any) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.title}</td>
                  <td>{data.completed}</td>
                  <td>
                    <button onClick={() => fetchdataById(data.id)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
        <div className="show-data col-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Todo_Id</th>
                <th scope="col">Todo_title</th>
                <th scope="col">User_id</th>
              </tr>
            </thead>
            <tbody>
              {fetchdata && (
                <tr>
                  <th scope="row">{fetchdata.id}</th>
                  <td>{fetchdata.name}</td>
                  <td>{fetchdata.email}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


export default Appi;