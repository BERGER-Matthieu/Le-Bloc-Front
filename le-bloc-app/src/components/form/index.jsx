import { useState } from "react";
import * as requests from "../../common/requests";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Form(props) {
    const [fieldArray, setFieldArray] = useState(props.fields);
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    return (
        <form>
            {props.fields.map((f, i) => {
                return <input 
                    id={i}
                    type={f.type}
                    value={fieldArray[i].value}
                    placeholder={f.placeholder}
                    onChange={
                        (e) => {
                            const newValue = e.target.value;
                            setFieldArray(prevFieldArray => {
                                const newFieldArray = [...prevFieldArray];
                                newFieldArray[i].value = newValue;
                                return newFieldArray;
                            })
                        }
                    }
                    />
                }
            )}
            <input
                type="button"
                value={props.button}
                onClick={async() => {
                    const reqData = {}
                    fieldArray.map((f) => {
                        reqData[f.key] = f.value;
                    }, {});

                    const res = await requests[props.request](reqData, {"cookies": cookies,"setCookie": setCookie,"removeCookie": removeCookie}, (props.socket === undefined ? null : props.socket));
                    
                    if (res.status === 200) {
                        navigate(props.redirect);
                    } else {
                        console.log(res);
                    }
                }}
            />
        </form>
    )
}