import { useEffect, useState } from "react";
import dummydata from "./dummyData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./card";

function Map() {
  const [data, setData] = useState(dummydata);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((finalRes) => setData(finalRes));
  // }, []);

  // const data = [{ name: 'sooraj', age: 28 }, { name: 'jass' }, { name: 'kundan' }, { name: 'anant', age: 23 }, { name: 'mansi' }];

  return (
    <section>
      {data.map(function (param) {
        return (
          <div className="w-25">
           <Card data={param} setData={setData} resource={data}/>
          </div>
        );
      })}
    </section>
  );
}
export default Map;
