import axios from "axios";
import { useState } from "react";

export default () => {
    var [farmerObject, setfarmerObject] = useState({
    
        farmerName,
        farmerEmail,
        farmerContact,
        farmerHomeAddress,
        farmerPinCode,
        farmerCity,
        farmerState,
        farmerAadharCard,
        farmerArea,
        farmerLandAddress,
        farmerLandPinCode,
        farmerLandCity,
        farmerLandState,
        farmerAccountNumber,
        farmerBanfIFSCcode,
        farmerBank,

    });
    var onValueChangehandler = (event) => {
        var { name, value } = event.target;
        setfarmerObject({
            ...farmerObject, [name]: value,
        })

    }
    var onSubmitClickHandler = async (event) => {
        event.preventDefault();
        console.log("farmerObject", farmerObject);
        try {
            const response = await axios.post("http://localhost:8085/farmer/add/", farmerObject);
            if (response.status === 200) {
                // return { success: true, data: response.data };
                setfarmerObject({ ...response.data });
                setfarmerObject({
                 
                    farmerName="",
                    farmerEmail="",
                    farmerContact="",
                    farmerHomeAddress="",
                    farmerPinCode="",
                    farmerCity="",
                    farmerState="",
                    farmerAadharCard="",
                    farmerArea="",
                    farmerLandAddress="",
                    farmerLandPinCode="",
                    farmerLandCity="",
                    farmerLandState="",
                    farmerAccountNumber="",
                    farmerBanfIFSCcode="",
                    farmerBank="",
                })
            }
            // return { success: false, error: null };
            console.log("response", response);
        } catch (error) {
            console.log("error", error);
        }



    }
    return (
        <>
           <h1>Farmer Information</h1>
            <form onSubmit={onSubmitClickHandler} class="container ">
             
                <label>Name</label>
                <input name="farmerName" value={farmerObject.farmerName} onChange={onValueChangehandler} /><br />

                <label>Email</label>
                <input name="farmerEmail" value={farmerObject.farmerEmail} onChange={onValueChangehandler} /><br />

                <label>Contact-No</label>
                <input name="farmerContact" value={farmerObject.farmerContact} onChange={onValueChangehandler} /><br />
                
                <label>Address</label>
                <input name="farmerHomeAddress" value={farmerObject.farmerHomeAddress} onChange={onValueChangehandler} /><br />
               
             
                <label>Pincode</label>
                <input name="farmerPinCode" value={farmerObject.farmerPinCode} onChange={onValueChangehandler} /><br />
               
                <label>City</label>
                <input name="farmerCity" value={farmerObject.farmerCity} onChange={onValueChangehandler} /><br />
               
                <label>State</label>
                <input name="farmerState" value={farmerObject.farmerState} onChange={onValueChangehandler} /><br />
               
                <label>Adharcard</label>
                <input name="farmerAadharCard" value={farmerObject.farmerAadharCard} onChange={onValueChangehandler} /><br />
               
                <label>Area</label>
                <input name="farmerArea" value={farmerObject.farmerArea} onChange={onValueChangehandler} /><br />
               
                <label>Land Address</label>
                <input name="farmerLandAddress" value={farmerObject.farmerLandAddress} onChange={onValueChangehandler} /><br />
               
                <label>Land Land Pincode</label>
                <input name="farmerLandPinCode" value={farmerObject.farmerLandPinCode} onChange={onValueChangehandler} /><br />
               
                <label>Land City</label>
                <input name="farmerLandCity" value={farmerObject.farmerLandCity} onChange={onValueChangehandler} /><br />
               
                <label>Land State</label>
                <input name="farmerLandState" value={farmerObject.farmerLandState} onChange={onValueChangehandler} /><br />
               
                <label>Account-No</label>
                <input name="farmerAccountNumber" value={farmerObject.farmerAccountNumber} onChange={onValueChangehandler} /><br />
               
                <label>IFSC-Code</label>
                <input name="farmerBanfIFSCcode" value={farmerObject.farmerBanfIFSCcode} onChange={onValueChangehandler} /><br />
               
                <label>Bank-Name</label>
                <input name="farmerBank" value={farmerObject.farmerBank} onChange={onValueChangehandler} /><br />

                <button >Submit</button>

            </form>
        </>
    )
}