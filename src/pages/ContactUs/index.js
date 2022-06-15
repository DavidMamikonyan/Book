import React from "react";
import styles from './contactUs.module.css';
import PageTitle from './../../components/Common/PageTitle';
import Input from "../../components/Common/UI/Input";
import Button from "../../components/Common/UI/Button";
import DropDown from "../../components/Common/DropDown";
import {prodStatus} from "../../components/DummyData";
import {useTranslation} from "react-i18next";

export default () => {

    const {t, i18n} = useTranslation();



    return (
        <div className={styles['main-container']} dir={i18n.dir()}>
            <div className={styles['container']}>
                <PageTitle text={t('contactUs.title')}/>
                <form className={styles['from']}>
                    <Input
                        label={t('common.name')}
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'name',
                            type: 'text',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}/>
                    <Input
                        label={t('common.email')}
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'email',
                            type: 'email',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}/>
                    <DropDown
                        title={t('contactUs.inquiry')}
                        type='sample-one'
                        data={{
                        dropMenuItems: prodStatus,

                    }}/>
                    <Input
                        label={t('contactUs.message')}
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
                            <Button type='primary'>{t('contactUs.submit')}</Button>
                        </div>
                </form>
            </div>
        </div>
    )
}