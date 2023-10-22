import React, { useEffect } from "react"
import './PersonalPage.scss'
import { PersonalBanner } from "./PersonalPageContent/PersonalPageLayout/PersonalBanner/PersonalBanner"
import { PersonalInformation } from "./PersonalPageContent/PersonalPageLayout/PersonalInfomation/PersonalInformation"
import { Outlet } from "react-router-dom"
export const PersonalPage = () => {
    useEffect(() => {
        return () => {
            console.log("month")
        }
    }, [])

    return (
        <div className="personal-page">
            <div className="personal-page_wrapper">
                <div className="flex column">
                    <div className="personal-page-content-wrapper">
                        <PersonalBanner />
                        <PersonalInformation />
                    </div>
                </div>
            </div>
            <div className="personal-outlet flex align-content-lg-start">
                <div className="personal-outlet-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}