import React, { useEffect } from "react"
import { PersonalPageContent } from "./PersonalPageContent"
import './PersonalPage.scss'
import { PersonalBanner } from "./PersonalPageContent/PersonalPageLayout/PersonalBanner/PersonalBanner"
import { PersonalInformation } from "./PersonalPageContent/PersonalPageLayout/PersonalInfomation/PersonalInformation"
import { Outlet } from "react-router-dom"
import PersonalInforRouting from "./PersonalPageContent/PersonalPageLayout/PersonalInfomation/PersonalInforRouting"
export const PersonalPage = () => {
    useEffect( () => {
        return ()=>{
            console.log("month")
        }
    },[] )

    return (
        <div className="personal-page">
            <div className="personal-page_wrapper">
                <div className="flex column">
                    <div className="personal-page-content-wrapper">
                        <PersonalBanner />
                        <PersonalInformation />
                    </div>
                    <div className="outlet">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}