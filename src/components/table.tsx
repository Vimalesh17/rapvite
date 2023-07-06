import  { useState } from "react";
import RapDataModel from "../assets/rap_data_model.json"
import  Axios  from "axios";

const TableData = () => {
  const data = RapDataModel;
  const [response,setResponse]=useState<any>()
  const getApi =async () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: 'MSFT',
        outputsize: 'compact',
        datatype: 'json'
      },
      headers: {
        'X-RapidAPI-Key': '3bda22587fmsh7b69f27a49a8fc0p13a180jsnd9db4978a6e8',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
   let  res = await Axios.request(options);
    setResponse(res)
    console.log(response);

    
  }
  getApi();
  return (
    <div>


      <table>
        <thead>
          <tr>
            <th>categoryId</th>
            <th>categoryName</th>
            <th>approved</th>
            <th>pending</th>
            <th>competitor1</th>
            <th>competitor2</th>
          </tr>
        </thead>
        <tbody> 
          {data.data.map(data=>{
            return(
              <tr key={data.categoryId}>
            <td>{data.categoryId}</td>
            <td>{data.categoryName}</td>
            <td>{data.apporved}</td>
            <td>{data.pending}</td>
            <td>{data.compettitor1}</td>
            <td>{data.compettitor2}</td>
        </tr>            
            )
          })
          }
               
        </tbody>
      </table>
    </div>
  );
};

export default TableData;