import { PersonalBanner } from "./PersonalPageLayout/PersonalBanner/PersonalBanner"
import { PersonalInformation } from "./PersonalPageLayout/PersonalInfomation/PersonalInformation"
import './PersonalContent.scss'

export const PersonalPageContent = () => {
    return (
        <div className="personal-page-content-wrapper">
            <PersonalBanner />
            <PersonalInformation/>
        </div>
    )
}