import React from 'react';
import SuForm from '../comps/Forms';

export default {
    title: "Sign Up Form",
    component: SuForm,
};

export const HehSuForm = () => <div>

<SuForm
text={"First Name"}
formHeight={"30px"}
formWidth={"350px"}
top={""}
left={""} />

<SuForm
text={"Last Name"}
formHeight={"30px"}
formWidth={"350px"}
top={"10px"}
left={""} />


{/* Email */}

<SuForm
text={"someone@example.com"}
formHeight={"30px"}
formWidth={"350px"}
top={"20px"}
left={""} />

{/* Birthday */}

<SuForm
text={"Day"}
formHeight={"30px"}
formWidth={"65px"}
top={"30px"}
left={"145px"} />

<SuForm
text={"Month"}
formHeight={"30px"}
formWidth={"65px"}
top={"40px"}
left={"145px"} />

<SuForm
text={"Year"}
formHeight={"30px"}
formWidth={"65px"}
top={"50px"}
left={"145px"} />

{/* Password */}

<SuForm
text={"Set a password"}
formHeight={"30px"}
formWidth={"350px"}
top={"80px"}
left={""} />
</div>