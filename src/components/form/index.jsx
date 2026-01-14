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
                if (f.type === "select") {
                    return <select
                        id={i}
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
                    >
                        <option value="" selected>{f.placeholder}</option>
                        {f.options.map((o) => {
                            return <option value={o}>{o}</option>
                        })}
                    </select>
                }
                return <input 
                    id={i}
                    type={f.type}
                    value={fieldArray[i].value}
                    placeholder={f.placeholder}
                    accept={f.accept}
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

                    await Promise.all(fieldArray.map((f) => {
                        if (f.type === "file") {
                            const file = document.getElementById(fieldArray.indexOf(f)).files[0];
                            return new Promise((resolve, reject) => {
                                const fr = new FileReader();
                
                                fr.onload = () => {
                                    const img64 = fr.result
                                    reqData[f.key] = img64;
                                    resolve();
                                };
                
                                fr.onerror = reject;
                
                                fr.readAsDataURL(file);
                            });
                        } else {
                            reqData[f.key] = f.value;
                            return Promise.resolve();
                        }
                    }));

                    const res = await requests[props.request](reqData, {"cookies": cookies,"setCookie": setCookie,"removeCookie": removeCookie}, (props.socket === undefined ? null : props.socket));
                    console.log(res);
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