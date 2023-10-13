import React from "react"
import { PersonalPageContent } from "./PersonalPageContent/PersonalPageContent"
import './PersonalPage.scss'
export const PersonalPage = () => {
    return (
        <div className="personal-page">
            <div className="personal-page_wrapper">
                <PersonalPageContent />
            </div>
        </div>
    )
}