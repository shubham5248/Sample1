import axios from "axios"
import { useEffect, useState } from "react"


const Bidder = () => {
    const [ bidderList, setBidderList ] = useState([{

        // b_account_number: 654254987,
        // b_address: "Pawna Nagar",
        // b_adharcard: 123432178945,
        // b_bank_name: "ICICI Bank",
        // b_bid: 1,
        // b_city: "Pune",
        // b_contact_no: 9888682987,
        // b_email: "shripad@gmail.com",
        // b_ifsc: "FISC132521",
        // b_name: "Shripad",
        // b_pincode: 411033,
        // b_state: "Maharashtra",
        // b_trader_license: "RUS12345",
        b_name:"",
        b_email:"",
        b_contact_no:"",
        b_address:"",
        b_trader_license:"",
        b_pincode:"",
        b_city:"",
        b_state:"",
        b_adharcard:"",
        b_account_number:"",
        b_ifsc:"",
        b_bank_name:"",
    }]);
    useEffect(async () => {
        fetchData();

    },[])

    const fetchData = async () => {
        const bidderData = await axios.get("http://localhost:8085/bidder/getAll");
        console.log(bidderData);
        if (bidderData.data) {
            let responseData = bidderData.data;
            setBidderList(responseData);
        }
        else {
            setBidderList([]);

        }
    }
    console.log(bidderList);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Trader License</th>
                        <th>Pincode</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Adharcard</th>
                        <th>Account No</th>
                        <th>IFSC</th>
                        <th>Bank Name</th>
                    </tr>
                </thead>
                {bidderList != null ?

                    <tbody>

                        {bidderList.map((bidder, id) => {
                            return (
                                <tr key={bidder.id}>
                                    <td>{bidder.b_name}</td>
                                    <td>{bidder.b_email}</td>
                                    <td>{bidder.b_contact_no}</td>
                                    <td>{bidder.b_address}</td>
                                    <td>{bidder.b_trader_license}</td>
                                    <td>{bidder.b_pincode}</td>
                                    <td>{bidder.b_city}</td>
                                    <td>{bidder.b_state}</td>
                                    <td>{bidder.b_adharcard}</td>
                                    <td>{bidder.b_account_number}</td>
                                    <td>{bidder.b_ifsc}</td>
                                    <td>{bidder.b_bank_name}</td>
                                </tr>
                            )
                        })};



                    </tbody> : <tbody></tbody>

                }





            </table>

        </>
    )


}
export default Bidder;
