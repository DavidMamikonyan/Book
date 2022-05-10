import React from "react";
import styles from './contactUs.module.css';
import PageTitle from './../../components/Common/PageTitle';
import Input from "../../components/Common/UI/Input";
import Button from "../../components/Common/UI/Button";
import DropDown from "../../components/Common/DropDown";
import {prodStatus} from "../../components/DummyData";

export default () => {



    return (
        <div className={styles['main-container']}>
            <div className={styles['container']}>
                <PageTitle text='Contact us'/>
                <form className={styles['from']}>
                    <Input
                        label='Name'
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'name',
                            type: 'text',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}/>
                    <Input
                        label='Email'
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'email',
                            type: 'email',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}/>
                    <DropDown
                        title='Inquiry'
                        type='sample-one'
                        data={{
                        dropMenuItems: prodStatus,
                    }}/>
                    <Input
                        label='Message'
                        type='textarea'
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'Message',
                            type: 'text',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}/>
                        <div className={styles['btn-container']}>
                            <Button type='primary'>Submit</Button>
                        </div>
                </form>
            </div>
        </div>
    )
}