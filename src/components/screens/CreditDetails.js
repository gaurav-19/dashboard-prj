import NetProfit from "../charts/NetProfit";
import NetRevenue from "../charts/NetRevenue";

const CreditDetails = () => {

    return(<div className="row align-items-center justify-content-center">
        <NetRevenue/>
        <NetProfit/>
    </div>)

}

export default CreditDetails;