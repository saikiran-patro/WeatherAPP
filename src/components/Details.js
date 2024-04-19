
const Details = ({date,minTemp,maxTemp,pressure,humidity})=>{

return(

    <div>
        <table className="outerTable">
            <tr>
              <td style={{backgroundColor:'#FF6600'}}>
             Date:{date}   
              </td>
            </tr>
            <tr>
            
                <td style={{backgroundColor:'#CCCCCC'}}>
                  Temperature
                </td>
            </tr>
            <tr>
                <td>
                    <table className="innerTable" style={{backgroundColor:'#CCCCCC',borderBottom:'none'}}>
                        <tr>
                            <td>
                              Min
                            </td>
                            <td>
                               Max
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table className="innerTable">
                        <tr>
                            <td>
                            {minTemp}
                            </td>
                            <td>
                            {maxTemp}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table className="innerTable">
                        <tr>
                            <td>
                              pressure
                            </td>
                            <td>
                                {pressure}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table className="innerTable">
                        <tr>
                            <td>
                                Humidity
                            </td>
                            <td>
                                {humidity}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>


)


}

export default Details;