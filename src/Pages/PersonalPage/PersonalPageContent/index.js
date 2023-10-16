import { PersonalBanner } from './PersonalPageLayout/PersonalBanner/PersonalBanner';
import { PersonalInformation } from './PersonalPageLayout/PersonalInfomation/PersonalInformation';
import './PersonalContent.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { saveState } from '~/redux/reduxData/paths';

export const PersonalPageContent = () => {
    const items = useSelector((state) => {
        return state.paths;
    });
    const dispatch = useDispatch();

    const renderInfo = useMemo(() => {
        return (
            <>

            </>
        );
    }, []);

    return (
        <div className="flex column">
            <div className="personal-page-content-wrapper"></div>
        </div>
    );
};
