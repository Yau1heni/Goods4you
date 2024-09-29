import {ChangeEvent, FormEvent, useState} from 'react';
import {localStorageService, useLoginMutation} from "@/services";
import {LOCAL_STORAGE_KEYS} from "@/constants";
import {Navigate} from "react-router-dom";
import {Paths} from "@/pages";
import styles from './login-body.module.css'
import {Button, InputText, Loader} from "@/components";

export const LoginBody = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const accessToken = localStorageService.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)

    const [login, {isLoading}] = useLoginMutation()

    const changeUsernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        await login({username, password})
            .unwrap()
            .then(({accessToken}) => {
                localStorageService.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, accessToken)
            })
    };

    if (accessToken) {
        return <Navigate to={Paths.CATALOG}/>;
    }

    return (
        <div className={styles.loginBody}>
            <form onSubmit={submitHandler} className={styles.form}>
                <InputText placeholder={'Login'} value={username} onChange={changeUsernameHandler}/>
                <InputText placeholder={'Password'} value={password} onChange={changePasswordHandler}/>
                <Button type="submit">Sign In</Button>
            </form>
            {isLoading && <Loader/>}
        </div>
    );
};
