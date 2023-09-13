import { SearchIcon } from '~/Asset';
import './Input.scss'
function InputSearch({ placeholder = 'Tìm kiếm trên Facebook', className, onKeyDown, onChange, value }) {
    return (
        <>
            <label className={`header-search ${className}`}>
                <span>
                    <SearchIcon />
                </span>
                <input placeholder={placeholder} onKeyDown={onKeyDown} onChange={onChange} value={value} />
            </label>
        </>
    );
}
export default InputSearch;
