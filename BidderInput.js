import axios from "axios";
import { useState } from "react";

export default ()=>{
    var[bidderObject ,setBidderObject]=useState({
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

    });
    var onValueChangehandler=(event)=>{
        var{name,value}=event.target;
        setBidderObject({
            ...bidderObject,[name]:value,
        })

    }
    var onSubmitClickHandler=async(event)=>{
        event.preventDefault();
        console.log("bidderObject",bidderObject);
        try {
            const response = await axios.post("http://localhost:8085/bidder/add/", bidderObject);
            if (response.status === 200) {
                // return { success: true, data: response.data };
                setBidderObject({...response.data});
                setBidderObject({
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
                    })
            }
            // return { success: false, error: null };
            console.log("response",response);
        } catch (error) {
           console.log("error",error);
        }
       
    
       
    }
    return(
        <>
        <form onSubmit={onSubmitClickHandler} class="container ">
            <h1>Bidder Information</h1>
            <label>Name</label>
            <input name="b_name" value={bidderObject.b_name} onChange={onValueChangehandler}/><br/>
            <label>Email</label>
            <input name="b_email" value={bidderObject.b_email} onChange={onValueChangehandler}/><br/>
            <label>Contact-No</label>
            <input name="b_contact_no" value={bidderObject.b_contact_no} onChange={onValueChangehandler}/><br/>
            <label>Address</label>
            <input name="b_address" value={bidderObject.b_address} onChange={onValueChangehandler}/><br/>
            <label>b_trader_license</label>
            <input name="b_trader_license" value={bidderObject.b_trader_license} onChange={onValueChangehandler}/><br/>
            <label>Pincode</label>
            <input name="b_pincode" value={bidderObject.b_pincode} onChange={onValueChangehandler}/><br/>
            <label>City</label>
            <input name="b_city" value={bidderObject.b_city} onChange={onValueChangehandler}/><br/>
            <label>State</label>
            <input name="b_state" value={bidderObject.b_state} onChange={onValueChangehandler}/><br/>
            <label>Adharcard</label>
            <input name="b_adharcard" value={bidderObject.b_adharcard} onChange={onValueChangehandler}/><br/>
            <label>Account-No</label>
            <input name="b_account_number" value={bidderObject.b_account_number} onChange={onValueChangehandler}/><br/>
            <label>IFSC-Code</label>
            <input name="b_ifsc" value={bidderObject.b_ifsc} onChange={onValueChangehandler}/><br/>
            <label>Bank-Name</label>
            <input name="b_bank_name" value={bidderObject.b_bank_name} onChange={onValueChangehandler}/><br/>

            <button >Submit</button>

        </form>
        </>
    )
}