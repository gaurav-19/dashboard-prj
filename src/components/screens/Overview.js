import CreditScore from "../charts/CreditScore";
import NetProfit from "../charts/NetProfit";
import CurrentLoans from "../charts/CurrentLoans";
import FundDetails from "../charts/FundDetails";
import NetRevenue from "../charts/NetRevenue";
import InterestCoverage from "../charts/InterestCoverage";
import EmployeeCount from "../charts/EmployeeCount";

const Overview = () => {

    return(<>
        <div className="row align-items-center justify-content-center">
        <EmployeeCount/>
        <InterestCoverage/>
        <CreditScore/>
        <CurrentLoans/>
        <FundDetails/>
        </div>
    </>)

}

export default Overview;